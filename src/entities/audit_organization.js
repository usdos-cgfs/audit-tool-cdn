import { ConstrainedEntity } from "../sal/primitives/constrained_entity.js";

export const ORGTYPES = {
  BUREAU: "Bureau",
  EXTERNAL: "External",
  INTERNAL: "Internal",
  POST: "Post",
};

export const ORGROLES = {
  INTERNALAUDITOR: "Internal Auditor",
  ACTIONOFFICE: "Action Office",
  REQUESTINGOFFICE: "Requesting Office",
  QUALITYASSURANCE: "Quality Assurance",
  SPECIALPERMISSIONS: "Special Permissions",
  RESTRICTEDREADERS: "Restricted Readers",
};

export class AuditOrganization extends ConstrainedEntity {
  constructor(params) {
    super(params);
  }

  static Views = {
    All: [
      "ID",
      "Title",
      "Country",
      "Description",
      "EmailGroup",
      "OrgType",
      "PostCode",
      "UserGroup",
      "Role",
    ],
  };

  static ListDef = {
    name: "AuditOrganizations",
    title: "AuditOrganizations",
  };
}
