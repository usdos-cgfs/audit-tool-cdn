import {
  AuditResponse,
  AuditResponseStates,
  AuditResponseDoc,
  AuditResponseDocStates,
} from "../entities/index.js";

import { appContext } from "../infrastructure/application_db_context.js";
import { showModal } from "../sal/components/modal/index.js";
import { ItemPermissions } from "../sal/infrastructure/sal.js";
import { Result } from "../sal/shared/index.js";
import {
  notifyIAResponsesClosed,
  notifyIAResponsesReturned,
} from "./audit_email_service.js";

import {
  getRequestById,
  getRequestResponseDocs,
  getRequestResponses,
  getResponseResponseDocs,
} from "./audit_request_service.js";
import { getSiteGroups } from "./people_manager.js";
import { roleNames } from "./permission_manager.js";
import { addTask, finishTask, taskDefs } from "./tasks.js";

export async function showBulkAddResponseModal(request) {
  const options = {
    title: "Bulk Add Responses (" + request.ReqNum.Value() + ")",
    height: 800,
    url:
      Audit.Common.Utilities.GetSiteUrl() +
      "/SitePages/AuditBulkAddResponse.aspx?ReqNum=" +
      request.ReqNum.Value(),
  };

  await showModal(options);
}

export async function addResponse(request, response) {
  const responseTitle = getResponseTitle(request, response);
  const newResponseTask = addTask(taskDefs.newResponse(responseTitle));
  // Update title

  response.ReqNum.Value(request);

  response.Title.Value(responseTitle);

  response.ResStatus.Value(AuditResponseStates.Open);

  try {
    // Validate title is unique
    const responseResult = await appContext.AuditResponses.FindByColumnValue(
      [
        {
          column: "Title",
          value: responseTitle,
        },
      ],
      {},
      { count: 1 }
    );

    if (responseResult.results.length) {
      throw new Error(`Response with title ${responseTitle} already exists!`);
    }

    await appContext.AuditResponses.AddEntity(response);
    await onAddNewResponse(request, response);
  } catch (e) {
    console.error("Error adding Response: ", e);

    finishTask(newResponseTask);
    return Result.Failure(e);
  }

  finishTask(newResponseTask);
  return Result.Success();
}

export async function onAddNewResponse(request, response) {
  if (!request) {
    request = response.ReqNum.Value();
    await appContext.AuditRequests.LoadEntity(request);
  }

  const folderResult = await ensureResponseDocFolder(response);
  if (folderResult.isFailure) {
    return folderResult;
  }

  const permissionsResult = await ensureResponseDocFolderPermissions(
    request,
    response,
    folderResult.value
  );
}

export async function ensureResponseDocFolder(response) {
  const folderName = response.Title.toString();
  const task = addTask(taskDefs.ensureResponseDocFolder(folderName));

  const results = await appContext.AuditResponseDocs.FindByColumnValue(
    [
      { column: "Title", value: folderName },
      { column: "ContentType", value: "Folder" },
    ],
    {},
    { count: 1, includePermissions: true, includeFolders: true },
    ["ID", "Title", "ContentType"]
  );

  if (results.results.length) {
    finishTask(task);
    return Result.Success(results.results[0]);
  }

  // Else, we need to insert it
  const newFolderId = await appContext.AuditResponseDocs.UpsertFolderPath(
    folderName
  );

  const newFolder = await appContext.AuditResponseDocs.FindById(newFolderId);

  finishTask(task);
  if (newFolder) {
    return Result.Success(newFolder);
  }

  return Result.Failure(`Folder not found and couldn't be created`);
}

export async function ensureResponseDocFolderPermissions(
  request,
  response,
  folder
) {
  const task = addTask(
    taskDefs.permissionsResponseFolder(response.Title.Value())
  );
  const newItemPermissions = new ItemPermissions({
    hasUniqueRoleAssignments: true,
    roles: [],
  });

  const { owners, members, visitors } = await getSiteGroups();

  newItemPermissions.addPrincipalRole(owners, roleNames.FullControl);
  newItemPermissions.addPrincipalRole(members, roleNames.RestrictedContribute);
  newItemPermissions.addPrincipalRole(visitors, roleNames.RestrictedRead);

  // TODO: Need to ensure response should be shared with QA
  // if (request.isRequest()) {
  //   const qaGroup = await getQAGroup();
  //   newItemPermissions.addPrincipalRole(
  //     qaGroup,
  //     roleNames.RestrictedContribute
  //   );
  // }

  // TODO: Also Need to Ensure Special Perms based off status
  // if (await requestHasSpecialPerms(request)) {
  //   const { specialPermGroup1, specialPermGroup2 } =
  //     await getSpecialPermGroups();

  //   newItemPermissions.addPrincipalRole(
  //     specialPermGroup1,
  //     roleNames.RestrictedRead
  //   );
  //   newItemPermissions.addPrincipalRole(
  //     specialPermGroup2,
  //     roleNames.RestrictedRead
  //   );
  // }

  const actionOffice = response.ActionOffice.Value();

  newItemPermissions.addPrincipalRole(
    actionOffice.UserGroup,
    roleNames.RestrictedContribute
  );

  const result = await appContext.AuditResponseDocs.SetItemPermissions(
    { ID: folder.ID },
    newItemPermissions,
    true
  );

  finishTask(task);
  return result;
}

export async function updateResponse(request, response) {
  const updateResponseTask = addTask(
    taskDefs.updateResponse(response.Title.Value())
  );

  try {
    // FPRA Check
    const actionOfficeTitle =
      response.ActionOffice.Value()?.Title?.toLowerCase();
    if (!actionOfficeTitle.includes("fpra")) {
      if (response.POC.toString() || response.POCCC.toString()) {
        throw new Error(
          "Only FPRA Responses can have designated POC and POC CC fields."
        );
      }
    }

    // Sensitivity Check
    const currentResponseSensitivity = request.Sensitivity.Value();
    const selectedResponseStatus = response.ResStatus.Value();

    if (
      selectedResponseStatus == AuditResponseStates.ApprovedForQA &&
      currentResponseSensitivity == "None"
    ) {
      throw new Error("Request Sensitivity not set; cannot submit to QA.");
    }

    const responseTitle = getResponseTitle(request, response);

    if (response.Title.Value() != responseTitle)
      response.Title.Value(responseTitle);

    await appContext.AuditResponses.UpdateEntity(
      response,
      AuditResponse.Views.IACanUpdate
    );
  } catch (e) {
    console.error("Error Updating Response: ", e);
    alert(e.message);
  } finally {
    finishTask(updateResponseTask);
  }
}

export async function deleteResponseAndFolder(response) {
  // Find the Response Folder
  const responseTitle = response.Title.Value();

  const deleteFolderTask = addTask(
    taskDefs.deleteResponseDocFolder(responseTitle)
  );
  await appContext.AuditResponseDocs.RemoveFolderByPath(responseTitle);
  finishTask(deleteFolderTask);

  const deleteItemTask = addTask(taskDefs.deleteResponse(responseTitle));
  await appContext.AuditResponses.RemoveEntityById(response.ID);
  finishTask(deleteItemTask);
  return;
}

export async function updateResponseDoc(request, response, responseDoc) {
  const updateResponseDocTask = addTask(
    taskDefs.updateResponseDoc(responseDoc.Title.Value())
  );

  await appContext.AuditResponseDocs.UpdateEntity(
    responseDoc,
    AuditResponseDoc.Views.AOCanUpdate
  );

  finishTask(updateResponseDocTask);
}

export async function getResponsesReadyToClose(requestId) {
  const allRequestResponseDocs = await getRequestResponseDocs(request);

  const allRequestResponses = await getRequestResponses(request);

  return allRequestResponses.filter((response) =>
    isResponseReadyToClose(response, allRequestResponseDocs)
  );
}

async function isResponseReadyToClose(response, responseDocs) {
  const openResponseDocs = responseDocs.filter(
    (responseDoc) =>
      responseDoc.ResID.ID == response.ID &&
      [AuditResponseDocStates.Open, AuditResponseDocStates.Submitted].includes(
        responseDoc.DocumentStatus.Value()
      )
  );

  return openResponseDocs.length;
}

export async function closeResponseById(responseId) {
  const response = await appContext.AuditResponses.FindById(responseId);
  const request = await appContext.AuditRequests.FindById(
    response.ReqNum.Value().ID
  );
  // TODO: Use Result
  if (!response) return;
  return closeResponse(request, response);
}

export async function closeResponse(request, response, notifyIA = true) {
  const closeResponseTask = addTask(
    taskDefs.closeResponse(response.Title.Value())
  );

  response.markClosed();
  await appContext.AuditResponses.UpdateEntity(
    response,
    AuditResponse.Views.IAUpdateClosed
  );

  // Archive all response docs that haven't been approved
  const responseDocs = await getResponseResponseDocs(response);
  for (const responseDoc of responseDocs) {
    if (responseDoc.DocumentStatus.Value() != AuditResponseDocStates.Approved) {
      responseDoc.DocumentStatus.Value(AuditResponseDocStates.Archived);
      await appContext.AuditResponseDocs.UpdateEntity(responseDoc, [
        "DocumentStatus",
      ]);
    }
  }

  if (notifyIA) {
    await notifyIAResponsesClosed(request, [response]);
  }

  finishTask(closeResponseTask);
}

export async function returnResponseToIAById(responseId) {
  const response = await appContext.AuditResponses.FindById(responseId);
  const request = await appContext.AuditRequests.FindById(
    response.ReqNum.Value().ID
  );
  // TODO: Use Result
  if (!response) return;
  return returnResponseToIA(request, response);
}

export async function returnResponseToIA(request, response, notifyIA = true) {
  response.ResStatus.Value(AuditResponseStates.ReturnedToGFS);
  await appContext.AuditResponses.UpdateEntity(response, ["ResStatus"]);

  if (notifyIA) await notifyIAResponsesReturned(request, [response]);
}

export async function closeOrReturnFinalizedResponsesQA(requestId) {
  // For each Response in the Request, if all response docs are Approved, then close the response
  // If all docs are processed and any response doc is rejected, then return the the response to IA
  const request = await getRequestById(requestId);

  const requestingOffice = request.RequestingOffice.Value();

  if (!requestingOffice) return;

  const allRequestResponseDocs = await getRequestResponseDocs(request);

  const allRequestResponses = await getRequestResponses(request);

  const closedResponses = [];
  const returnedResponses = [];

  for (const response of allRequestResponses) {
    if (response.ResStatus.Value() != AuditResponseStates.ApprovedForQA) {
      continue;
    }

    const responseDocs = allRequestResponseDocs.filter(
      (responseDoc) => responseDoc.ResID.Value().ID == response.ID
    );

    const allResponseDocsApproved = responseDocs.every(
      (responseDoc) =>
        responseDoc.DocumentStatus.Value() == AuditResponseDocStates.Approved
    );

    const anyResponseDocsRejected = responseDocs.some(
      (responseDoc) =>
        responseDoc.DocumentStatus.Value() == AuditResponseDocStates.Rejected
    );

    const anyResponseDocsPending = responseDocs.some(
      (responseDoc) =>
        responseDoc.DocumentStatus.Value() == AuditResponseDocStates.SentToQA
    );

    if (allResponseDocsApproved) {
      closedResponses.push(response);
      await closeResponse(request, response);
    } else if (anyResponseDocsRejected && !anyResponseDocsPending) {
      // If all response docs have been processed and any are rejected, return the response to IA
      returnedResponses.push(response);
      await returnResponseToIA(request, response);
    }
  }
}

export async function uploadResponseDocFile(response, file) {
  const uploadResponseDocTask = addTask(taskDefs.uploadResponseDoc(file.name));
  const fileMetadata = {
    Title: file.name,
    ReqNumId: response.ReqNum.Value().ID,
    ResIDId: response.ID,
    DocumentStatus: AuditResponseDocStates.Open,
  };

  await appContext.AuditResponseDocs.UploadFileToFolderAndUpdateMetadata(
    file,
    file.name,
    response.Title.Value(),
    fileMetadata,
    ({ currentBlock, totalBlocks }) =>
      uploadResponseDocTask.updateProgress({
        percentDone: currentBlock / totalBlocks,
      })
  );
  finishTask(uploadResponseDocTask);
}

function getResponseTitle(request, response) {
  return `${request.ReqNum.Value()}-${
    response.ActionOffice.Value()?.Title
  }-${response.SampleNumber.Value()}`;
}

/* Begin Unreferenced Service Rewrites */

export function getNewResponseDocTitle(request, response, responseDoc) {
  const oldResponseDocTitle = responseDoc.FileName.Value();

  const createdDate = responseDoc.Created.Value().format("yyyyMMddTHHmmss");
  const responseName = response.Title.Value();
  const sensitivity = request.Sensitivity.Value();

  let newResponseDocTitle =
    responseName + "_" + createdDate + "_" + Math.ceil(Math.random() * 10000);

  if (sensitivity && sensitivity != "None")
    newResponseDocTitle += "_" + sensitivity;

  var docName = oldResponseDocTitle.substring(
    0,
    oldResponseDocTitle.lastIndexOf(".")
  );
  var docExt = oldResponseDocTitle.replace(docName, "");
  newResponseDocTitle += docExt;

  // Only use the new filename if it's not already encoded
  if (
    !oldResponseDocTitle.includes(responseName) ||
    !oldResponseDocTitle.includes(createdDate) ||
    (sensitivity && !oldResponseDocTitle.includes(sensitivity))
  )
    return newResponseDocTitle;

  return oldResponseDocTitle;
}
