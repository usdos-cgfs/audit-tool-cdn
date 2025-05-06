import { ORGROLES, ORGTYPES } from "../entities/index.js";
import * as ko from "knockout";

export const configurationsStore = {};

export const auditOrganizationStore = ko.observableArray();

export const allActionOfficesFilter = (org) =>
  ORGROLES.ACTIONOFFICE == org.Role;

export const allRequestingOfficesFilter = (org) =>
  ORGROLES.REQUESTINGOFFICE == org.Role;

export const getOrgByRole = (role) => {
  return auditOrganizationStore().find((org) => org.Role == role);
};

export const m_bigMap = {};
export function m_getArrRequests() {
  return Object.entries(m_bigMap)
    .filter(([key, value]) => {
      return key.startsWith("request-");
    })
    .map(([key, value]) => value);
}
