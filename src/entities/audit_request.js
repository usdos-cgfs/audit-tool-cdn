import { AuditOrganization, ORGTYPES } from "./audit_organization.js";
import {
  LookupField,
  PeopleField,
  TextField,
  TextAreaField,
  DateField,
  dateFieldTypes,
  SelectField,
  CheckboxField,
} from "../sal/fields/index.js";
import { ConstrainedEntity } from "../sal/primitives/index.js";

import { ValidationError } from "../sal/primitives/validation_error.js";
import {
  allActionOfficesFilter,
  allRequestingOfficesFilter,
  auditOrganizationStore,
  configurationsStore,
} from "../infrastructure/store.js";
import { appContext } from "../infrastructure/application_db_context.js";

export const AUDITREQUESTSTATES = {
  OPEN: "Open",
  CANCELLED: "Canceled",
  CLOSED: "Closed",
  REOPENED: "ReOpened",
};

export const AUDITREQUESTTYPES = {
  TASKER: "Tasker",
  REQUEST: "Request",
};

// export const requestDefaultReminders = [
//   "3 Days Before Due",
//   "1 Day Before Due",
//   "1 Day Past Due",
//   "3 Days Past Due",
//   "7 Days Past Due",
//   "7 Days Recurring",
// ];

export const getRequestDefaultReminders = () => {
  let reminders = [
    "3 Days Before Due",
    "1 Day Before Due",
    "1 Day Past Due",
    "3 Days Past Due",
    "7 Days Past Due",
    "7 Days Recurring",
  ];
  const remindersText = configurationsStore["default-reminders"];
  if (remindersText) {
    try {
      reminders = JSON.parse(remindersText);
    } catch (e) {
      console.warn("Error parsing reminders default", remindersText);
    }
  }
  return reminders;
};

export class AuditRequest extends ConstrainedEntity {
  constructor(params) {
    super(params);

    this.InternalDueDate.addFieldRequirement({
      requirement: ko.pureComputed(() => {
        return this.InternalDueDate.Value() > this.ReqDueDate.Value();
      }),
      error: new ValidationError(
        "text-field",
        "required-field",
        "The Internal Due Date must be before the Request Due Date!"
      ),
    });
  }

  ReqType = new SelectField({
    displayName: "Request Type",
    options: Object.values(AUDITREQUESTTYPES),
    isRequired: true,
    instructions: ko.pureComputed(() => {
      switch (this.ReqType.Value()) {
        case AUDITREQUESTTYPES.TASKER:
          return "A request that doesn't require QA Approval.";
        case AUDITREQUESTTYPES.REQUEST:
          return "A request requiring QA Approval";
        case AUDITREQUESTTYPES.NOTIFICATION:
          return "A request that is closed after the email is sent";
        default:
      }
    }),
  });

  isTasker = ko.pureComputed(() => {
    return this.ReqType.Value() == AUDITREQUESTTYPES.TASKER;
  });

  isRequest = ko.pureComputed(() => {
    return this.ReqType.Value() == AUDITREQUESTTYPES.REQUEST;
  });

  ReqNum = new TextField({
    displayName: "Request Number",
    systemName: "Title",
    isRequired: true,
  });

  ReqSubject = new TextField({
    displayName: "Request Subject",
    isRequired: true,
  });

  RequestingOffice = new LookupField({
    displayName: "Requesting Office",
    type: AuditOrganization,
    options: auditOrganizationStore,
    optionsFilter: allRequestingOfficesFilter,
    lookupCol: "Title",
    entitySet: appContext.AuditOrganizations,
    isRequired: true,
  });

  FiscalYear = new TextField({
    displayName: "Fiscal Year",
    isRequired: true,
  });

  InternalDueDate = new DateField({
    displayName: "Internal Due Date",
    type: dateFieldTypes.date,
    isRequired: true,
  });

  ReqDueDate = new DateField({
    displayName: "Request Due Date",
    type: dateFieldTypes.date,
    isRequired: true,
  });

  ReqStatus = new SelectField({
    displayName: "Request Status",
    options: Object.values(AUDITREQUESTSTATES),
    isRequired: true,
  });

  IsSample = new CheckboxField({
    displayName: "Is Sample?",
  });

  ReceiptDate = new DateField({
    displayName: "Receipt Date",
    type: dateFieldTypes.date,
    isRequired: false,
  });

  RelatedAudit = new TextField({
    displayName: "Related Audit",
    isRequired: false,
    instructions:
      "The Audit Request number of the similar audit performed in the previous FY",
  });

  ActionItems = new TextAreaField({
    displayName: "Action Items",
    instructions: "Items that have been requested by the Auditor",
    isRichText: true,
    isMinimalEditor: true,
    classList: ["min-w-full"],
  });

  Comments = new TextAreaField({
    displayName: "Comments",
    isRichText: true,
    isMinimalEditor: true,
    classList: ["min-w-full"],
  });

  Reminders = new SelectField({
    displayName: "Reminders",
    options: [
      "3 Days Before Due",
      "1 Day Before Due",
      "1 Day Past Due",
      "3 Days Past Due",
      "7 Days Past Due",
      "7 Days Recurring",
    ],
    multiple: true,
  });

  EmailSent = new CheckboxField({
    displayName: "Email has been sent",
  });

  Sensitivity = new SelectField({
    displayName: "Sensitivity",
    options: ["None", "Official", "SBU", "PII_SBU"],
  });

  ActionOffice = new LookupField({
    displayName: "Action Offices",
    type: AuditOrganization,
    options: auditOrganizationStore,
    optionsFilter: allActionOfficesFilter,
    lookupCol: "Title",
    multiple: true,
    entitySet: appContext.AuditOrganizations,
  });

  EmailActionOffice = new LookupField({
    displayName: "Email Action Offices",
    type: AuditOrganization,
    options: auditOrganizationStore,
    optionsFilter: allActionOfficesFilter,
    lookupCol: "Title",
    multiple: true,
    entitySet: appContext.AuditOrganizations,
  });

  ClosedDate = new DateField({
    displayName: "Closed Date",
    isRequired: false,
  });

  ClosedBy = new PeopleField({
    displayName: "Closed By",
    isRequired: false,
  });

  static Views = {
    All: [
      "ID",
      "Title",
      "ReqType",
      "ReqSubject",
      "FiscalYear",
      "InternalDueDate",
      "ReqDueDate",
      "ReqStatus",
      "IsSample",
      "ReceiptDate",
      "RelatedAudit",
      "ActionItems",
      "Comments",
      "Reminders",
      "EmailSent",
      "Sensitivity",
      "ActionOffice",
      "EmailActionOffice",
      "RequestingOffice",
      "ClosedDate",
      "ClosedBy",
    ],
    New: [
      "Title",
      "ReqType",
      "ReqSubject",
      "RequestingOffice",
      "FiscalYear",
      "InternalDueDate",
      "ReqDueDate",
      "ReqStatus",
      "IsSample",
      "ReceiptDate",
      "RelatedAudit",
      "ActionItems",
      "Comments",
      "Reminders",
      "Sensitivity",
      "ActionOffice",
    ],
    IACanUpdate: [
      "ReqType",
      "ReqSubject",
      "FiscalYear",
      "RequestingOffice",
      "InternalDueDate",
      "ReqDueDate",
      "ReqStatus",
      "IsSample",
      "ReceiptDate",
      "RelatedAudit",
      "ActionItems",
      "Comments",
      "Reminders",
      "Sensitivity",
      "ActionOffice",
      "EmailActionOffice",
      "ClosedBy",
      "ClosedDate",
    ],
  };

  static ListDef = {
    name: "AuditRequests",
    title: "AuditRequests",
  };
}
