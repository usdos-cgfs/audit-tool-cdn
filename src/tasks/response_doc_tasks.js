import { TaskDef } from "../services/index.js";

export const deleteResponseDocTaskDef = (docName) =>
  new TaskDef("Deleting Response Doc: " + docName, true);

export const sendResponseDocToQATaskDef = (docName) =>
  new TaskDef("Sending Response Doc to QA: " + docName, true);
