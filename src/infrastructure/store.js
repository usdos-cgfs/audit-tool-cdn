import { ORGROLES, ORGTYPES } from "../entities/index.js";
import * as ko from "knockout";

export const configurationsStore = {};

export const auditOrganizationStore = ko.observableArray();

export const allActionOfficesFilter = (org) =>
  ORGROLES.ACTIONOFFICE == org.Role;

export const allRequestingOfficesFilter = (org) =>
  ORGROLES.REQUESTINGOFFICE == org.Role;
