import { appContext } from "../infrastructure/application_db_context.js";
import { roleNames } from "./permission_manager.js";
import { getQAGroup, getSiteGroups } from "./people_manager.js";
import { ItemPermissions } from "../sal/infrastructure/index.js";
import { AuditROEmailLog } from "../entities/audit_ro_email_log.js";
import { AuditEmail } from "../entities/audit_email.js";
import { getOrgByRole } from "../infrastructure/store.js";
import { ORGROLES } from "../entities/audit_organization.js";

export async function ensureROEmailFolder() {
  const folderResults = await appContext.AuditEmails.FindByColumnValue(
    [{ column: "Title", value: "RONotifications" }],
    {},
    { count: 1, includeFolders: true },
    ["ID", "Title"]
  );

  const folder = folderResults.results[0] ?? null;

  if (folder) return;

  const newFolderId = await appContext.AuditEmails.UpsertFolderPath(
    "RONotifications"
  );

  const { owners, members, visitors } = getSiteGroups();
  let qaGroup = await getQAGroup();

  const newPermissions = new ItemPermissions({
    hasUniqueRoleAssignments: true,
    roles: [],
  });

  newPermissions.addPrincipalRole(owners, roleNames.FullControl);
  newPermissions.addPrincipalRole(members, roleNames.Contribute);
  newPermissions.addPrincipalRole(visitors, roleNames.RestrictedRead);
  newPermissions.addPrincipalRole(qaGroup, roleNames.RestrictedContribute);

  await appContext.AuditEmails.SetItemPermissions(
    { ID: newFolderId },
    newPermissions,
    true
  );
}

export async function ensureRequestROEmailLogItem(requestingOffice) {
  if (!requestingOffice?.ID) return;
  // const roGroupName = requestingOffice?.UserGroup?.Title;
  // if (!roGroupName) return;

  const logItemTitle = new Date().format("MM/dd/yyyy");

  const emailLogResult = await appContext.AuditROEmailsLog.FindByColumnValue(
    [
      { column: "Title", value: logItemTitle },
      { column: "RequestingOfficeId", value: requestingOffice.ID },
    ],
    {},
    { count: 1, includeFolders: true }
  );

  const auditRoEmailLogItem = emailLogResult?.results[0] ?? null;
  if (auditRoEmailLogItem) return auditRoEmailLogItem;

  const newLogItem = new AuditROEmailLog();

  newLogItem.Title = logItemTitle;
  newLogItem.RequestingOffice = requestingOffice;

  await appContext.AuditROEmailsLog.AddEntity(newLogItem);

  return newLogItem;
}

export async function notifyQAApprovalPending(request, responseDocs) {
  const reqNum = request.ReqNum.Value();
  const emailSubject =
    "Your Approval Has Been Requested for Request Number: " + reqNum;

  var emailText =
    "<div>Audit Request Reference: <b>" +
    reqNum +
    "</b></div>" +
    "<div>Audit Request Subject: <b>" +
    request.ReqSubject.toString() +
    "</b></div>" +
    "<div>Audit Request Due Date: <b>" +
    request.InternalDueDate.toString() +
    "</b></div><br/>" +
    "<div>Response(s): <ul>";

  const distinctResponses = [
    ...new Set(responseDocs.map((d) => d.ResID.Value().Title.toString())),
  ];

  emailText += distinctResponses
    .map((responseTitle) => {
      const responseApprovedResponseDocs = responseDocs.filter(
        (responseDoc) =>
          responseDoc.ResID.Value().Title.toString() == responseTitle
      );

      // Only proceed if this response has approved response docs
      if (!responseApprovedResponseDocs.length) {
        return;
      }

      return `<li><b>${responseTitle}:</b> ${responseApprovedResponseDocs.length} document(s)</li>`;
    })
    .join("");

  emailText += "</ul></div><br/>";

  const to = Audit.Common.Utilities.GetGroupNameQA();

  const notification = new AuditEmail();

  notification.Title = emailSubject;
  notification.Body = emailText;
  notification.To = to;
  notification.NotificationType = "QA Notification";
  notification.ReqNum = reqNum;

  await appContext.AuditEmails.AddEntity(notification, reqNum);
}

export async function notifyIAResponsesClosed(request, responses) {
  const reqNum = request.ReqNum.Value();
  const emailSubject =
    "An Audit Response has been Closed by the Quality Assurance Team: " +
    reqNum;

  let emailText = `
      <div>Audit Request Reference: <b>${reqNum}</b></div>
      <div>Audit Request Subject: <b>${request.ReqSubject.toString()}</b></div>
      <div>Audit Request Due Date: <b>${request.InternalDueDate.toString()}</b></div><br/>
      <div>Below is the Response that was updated: </div>
      <ul>${responses
        .map((response) => `<li><b>${response.Title.toString()}</b></li>`)
        .join("")}</ul>
  `;

  const to = getOrgByRole(ORGROLES.INTERNALAUDITOR).Title;
  const notification = new AuditEmail();

  notification.Title = emailSubject;
  notification.Body = emailText;
  notification.To = to;
  notification.NotificationType = "IA Notification";
  notification.ReqNum = reqNum;

  await appContext.AuditEmails.AddEntity(notification, reqNum);
}

export async function notifyIAResponsesReturned(request, responses) {
  const reqNum = request.ReqNum.Value();
  const emailSubject =
    "An Audit Response has been Returned by the Quality Assurance Team: " +
    reqNum;

  let emailText = `
      <div>Audit Request Reference: <b>${reqNum}</b></div>
      <div>Audit Request Subject: <b>${request.ReqSubject.toString()}</b></div>
      <div>Audit Request Due Date: <b>${request.InternalDueDate.toString()}</b></div><br/>
      <div>Below is the Response that was updated: </div>
      <ul>${responses
        .map((response) => `<li><b>${response.Title.toString()}</b></li>`)
        .join("")}</ul>
  `;

  const to = getOrgByRole(ORGROLES.INTERNALAUDITOR).Title;
  const notification = new AuditEmail();

  notification.Title = emailSubject;
  notification.Body = emailText;
  notification.To = to;
  notification.NotificationType = "IA Notification";
  notification.ReqNum = reqNum;

  await appContext.AuditEmails.AddEntity(notification, reqNum);
}
