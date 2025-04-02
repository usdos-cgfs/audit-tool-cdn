import { TaskDef } from "../services/index.js";

export const sendResponseToQATaskDef = (resNum) =>
  new TaskDef("Sending Response to QA: " + resNum, true);

export const sendResponseToIATaskDef = (resNum) =>
  new TaskDef("Sending Response to Internal Auditors: " + resNum, true);
