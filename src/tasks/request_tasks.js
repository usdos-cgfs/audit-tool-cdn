import { TaskDef } from "../services/index.js";

export const updateRequestSensitivityTaskDef = (reqNum) =>
  new TaskDef("Updating Request Sensitivity: " + reqNum, true);

export const updateRequestPermissionsTaskDef = (request) =>
  new TaskDef(
    "Updating Request Permissions: " + request.ReqNum?.toString(),
    true
  );

export const closeOrFinalizeResponsesTaskDef = () =>
  new TaskDef("Looking for responses to close", true);
