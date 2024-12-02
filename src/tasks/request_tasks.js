import { TaskDef } from "../services/index.js";

export const updateRequestSensitivityTaskDef = (reqNum) =>
  new TaskDef("Updating Request Sensitivity: " + reqNum, true);
