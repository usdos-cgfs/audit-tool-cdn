import {
  breakRequestPermissions,
  getRequestById,
  getRequestResponseDocs,
  getRequestResponses,
  breakRequestCoversheetPerms,
  getNewResponseDocTitle,
  ensureRequestAuditResponseDocsROFolder,
  ensureRequestROEmailLogItem,
  notifyQAApprovalPending,
  closeResponse,
  returnResponseToIA,
  addTask,
  finishTask,
} from "./index.js";

import {
  AuditResponseDoc,
  AuditResponseStates,
  AuditResponseDocStates,
  AuditResponseDocRO,
  AuditResponse,
} from "../entities/index.js";

import { appContext } from "../infrastructure/application_db_context.js";
import {
  sendResponseDocToIATaskDef,
  sendResponseDocToQATaskDef,
  sendResponseDocToROTaskDef,
} from "../tasks/response_doc_tasks.js";
import { sendResponseToQATaskDef } from "../tasks/response_tasks.js";

export async function approveResponseDocsForQA(
  requestId,
  responseDocsToApproveIds
) {
  const request = await getRequestById(requestId);

  const allRequestResponseDocs = await getRequestResponseDocs(request);

  const allRequestResponses = await getRequestResponses(request);

  const updatedResponses = allRequestResponseDocs
    .filter((responseDoc) => responseDocsToApproveIds.includes(responseDoc.ID))
    .map((responseDoc) => responseDoc.ResID.Value())
    .reduce((accumulator, responseDocResponse) => {
      if (
        !accumulator.find((response) => response?.ID == responseDocResponse.ID)
      )
        accumulator.push(responseDocResponse);
      return accumulator;
    }, []);

  const responseDocsToApprove = responseDocsToApproveIds.map((responseDocId) =>
    allRequestResponseDocs.find(
      (responseDoc) => responseDoc.ID == responseDocId
    )
  );

  await Promise.all(
    responseDocsToApprove.map(async (responseDoc) => {
      const task = addTask(sendResponseDocToQATaskDef(responseDoc.FileName));
      // TODO: this should just be an ensure on our AppDbContext
      const response = allRequestResponses.find(
        (response) => response.ID == responseDoc.ResID.Value().ID
      );

      if (
        responseDoc.DocumentStatus.Value() != AuditResponseDocStates.Submitted
      ) {
        console.error("Document status is not valid for approval");
        finishTask(task);
        return;
      }

      responseDoc.DocumentStatus.Value(AuditResponseDocStates.SentToQA);

      // TODO: Fix naming conflicting with drag and drop upload

      const newReponseDocName = getNewResponseDocTitle(
        request,
        response,
        responseDoc
      );

      responseDoc.FileName.Value(newReponseDocName);

      await appContext.AuditResponseDocs.UpdateEntity(
        responseDoc,
        AuditResponseDoc.Views.UpdateDocStatus
      );
      finishTask(task);
    })
  );

  // Now see if we can approve any responses for QA
  const responsesToSubmitToQA = updatedResponses.filter((response) => {
    return response.ResStatus.Value() == AuditResponseStates.Submitted;
  });

  if (responsesToSubmitToQA.length) {
    await Promise.all(
      responsesToSubmitToQA.map(async (response) => {
        const rTask = addTask(sendResponseToQATaskDef(response.Title));
        response.ResStatus.Value(AuditResponseStates.ApprovedForQA);
        await appContext.AuditResponses.UpdateEntity(response, ["ResStatus"]);
        finishTask(rTask);
      })
    );

    // Break the request permissions
    await breakRequestPermissions(request, AuditResponseStates.ApprovedForQA);
    await breakRequestCoversheetPerms(request, true);
  }

  await notifyQAApprovalPending(request, responseDocsToApprove);
  return true;
}

export async function approveResponseDocsForRO(
  requestId,
  responseDocsToApproveIds
) {
  const request = await getRequestById(requestId);

  const requestingOffice = request.RequestingOffice.Value();

  if (!requestingOffice) return;

  const allRequestResponseDocs = await getRequestResponseDocs(request);

  const allRequestResponses = await getRequestResponses(request);

  const updatedResponses = allRequestResponseDocs
    .filter((responseDoc) => responseDocsToApproveIds.includes(responseDoc.ID))
    .map((responseDoc) => responseDoc.ResID.Value())
    .reduce((accumulator, responseDocResponse) => {
      if (
        !accumulator.find((response) => response?.ID == responseDocResponse.ID)
      )
        accumulator.push(responseDocResponse);
      return accumulator;
    }, []);

  if (!updatedResponses.length) return;

  const roResponseDocROFolder = await ensureRequestAuditResponseDocsROFolder(
    request.Title,
    requestingOffice.ID
  );
  await appContext.AuditResponseDocsRO.TouchEntity(roResponseDocROFolder);
  const roResponseDocROFolderPath = roResponseDocROFolder.FileRef;

  const roEmailLogItem = await ensureRequestROEmailLogItem(requestingOffice);

  let cntApprovedResponseDocs = parseInt(roEmailLogItem.ResponseCount);
  if (!cntApprovedResponseDocs) cntApprovedResponseDocs = 0;
  let responseLogBody = "";

  // For each response doc to approve
  await Promise.all(
    responseDocsToApproveIds.map(async (responseDocId) => {
      const responseDoc = allRequestResponseDocs.find(
        (responseDoc) => responseDoc.ID == responseDocId
      );
      const task = addTask(sendResponseDocToROTaskDef(responseDoc.FileName));

      // 1. Check that the status isn't already approved
      if (
        responseDoc.DocumentStatus.Value() == AuditResponseDocStates.Approved
      ) {
        finishTask(task);
        return;
      }

      cntApprovedResponseDocs++;

      const response = allRequestResponses.find(
        (response) => response.ID == responseDoc.ResID.Value().ID
      );

      // 2. Get New ResponseDoc title
      const newResponseDocFileName = getNewResponseDocTitle(
        request,
        response,
        responseDoc
      );

      // 3. Copy File to RO
      const source = responseDoc.FileRef.Value();
      const dest = roResponseDocROFolderPath + "/" + newResponseDocFileName;

      await appContext.utilities.copyFileAsync(source, dest);

      const newRoFileResults =
        await appContext.AuditResponseDocsRO.FindByColumnValue(
          [{ column: "FileRef", value: dest }],
          {},
          { count: 1 }
        );
      const newRoFile = newRoFileResults.results[0] ?? null;

      if (!newRoFile) {
        finishTask(task);
        return;
      }

      // 4. Update ResponseDocRo
      newRoFile.markApprovedForRO(request, response);
      await appContext.AuditResponseDocsRO.UpdateEntity(
        newRoFile,
        AuditResponseDocRO.Views.ApprovedForROUpdate
      );

      // 4. Update ResponseDoc Status
      responseDoc.markApprovedForRO(newResponseDocFileName);
      await appContext.AuditResponseDocs.UpdateEntity(responseDoc, [
        "DocumentStatus",
        "RejectReason",
        "FileLeafRef",
      ]);

      responseLogBody += `<li><a href="${
        window.location.origin + newRoFile.FileRef
      }" target="_blank">${newResponseDocFileName}</a></li>`;

      finishTask(task);
    })
  );

  roEmailLogItem.ResponseCount = cntApprovedResponseDocs;
  roEmailLogItem.Responses += responseLogBody;

  await appContext.AuditROEmailsLog.UpdateEntity(roEmailLogItem, [
    "Responses",
    "ResponseCount",
  ]);

  return true;
}

export async function returnResponseDocsToIA(
  requestId,
  responseDocsToReturnIds,
  rejectReason
) {
  const request = await getRequestById(requestId);

  const allRequestResponseDocs = await getRequestResponseDocs(request);

  const allRequestResponses = await getRequestResponses(request);

  const updatedResponses = allRequestResponseDocs
    .filter((responseDoc) => responseDocsToReturnIds.includes(responseDoc.ID))
    .map((responseDoc) => responseDoc.ResID.Value())
    .reduce((accumulator, responseDocResponse) => {
      if (
        !accumulator.find((response) => response?.ID == responseDocResponse.ID)
      )
        accumulator.push(responseDocResponse);
      return accumulator;
    }, []);

  if (!updatedResponses.length) return;

  await Promise.all(
    responseDocsToReturnIds.map(async (responseDocId) => {
      const responseDoc = allRequestResponseDocs.find(
        (responseDoc) => responseDoc.ID == responseDocId
      );

      const task = addTask(sendResponseDocToIATaskDef(responseDoc.FileName));

      // 1. Check that the status isn't already rejected
      if (responseDoc.DocumentStatus.Value() == AuditResponseDocStates.Rejected)
        return;

      const response = allRequestResponses.find(
        (response) => response.ID == responseDoc.ResID.Value().ID
      );

      // 2. Update ResponseDoc Status
      responseDoc.markReturnedToIA(rejectReason);
      await appContext.AuditResponseDocs.UpdateEntity(responseDoc, [
        "DocumentStatus",
        "RejectReason",
        "FileLeafRef",
      ]);
      finishTask(task);
    })
  );

  // await returnResponseToIA(request, updatedResponses);

  return true;
}
