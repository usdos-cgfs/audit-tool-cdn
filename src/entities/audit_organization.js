import { ConstrainedEntity } from "../sal/primitives/constrained_entity.js";

export const ORGTYPES = {
  BUREAU: "Bureau",
  EXTERNAL: "External",
  INTERNAL: "Internal",
  POST: "Post",
};

export const ORGROLES = {
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
      "Organization_x0020_Description",
      "EmailGroup",
      "Org_Type",
      "Post_x0020_Code",
      "UserGroup",
      "Role",
    ],
  };

  static ListDef = {
    name: "AuditOrganizations",
    title: "AuditOrganizations",
  };
}
