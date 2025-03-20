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
} from "./index.js";

import {
  AuditResponseDoc,
  AuditResponseStates,
  AuditResponseDocStates,
  AuditResponseDocRO,
  AuditResponse,
} from "../entities/index.js";

import { appContext } from "../infrastructure/application_db_context.js";

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
      // TODO: this should just be an ensure on our AppDbContext
      const response = allRequestResponses.find(
        (response) => response.ID == responseDoc.ResID.Value().ID
      );

      if (
        responseDoc.DocumentStatus.Value() != AuditResponseDocStates.Submitted
      ) {
        console.error("Document status is not valid for approval");
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
    })
  );

  // Now see if we can approve any responses for QA
  const responsesToSubmitToQA = updatedResponses.filter((response) => {
    return response.ResStatus.Value() == AuditResponseStates.Submitted;
  });

  if (responsesToSubmitToQA.length) {
    await Promise.all(
      responsesToSubmitToQA.map(async (response) => {
        response.ResStatus.Value(AuditResponseStates.ApprovedForQA);
        await appContext.AuditResponses.UpdateEntity(response, ["ResStatus"]);
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

  const roResponseDocROFolderPath =
    await ensureRequestAuditResponseDocsROFolder(
      request.Title,
      requestingOffice.ID
    );

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

      // 1. Check that the status isn't already approved
      if (responseDoc.DocumentStatus.Value() == AuditResponseDocStates.Approved)
        return;

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

      if (!newRoFile) return;

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
    })
  );

  // await returnResponseToIA(request, updatedResponses);

  return true;
}
