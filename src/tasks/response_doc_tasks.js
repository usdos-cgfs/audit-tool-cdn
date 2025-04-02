import { TaskDef } from "../services/index.js";

export const deleteResponseDocTaskDef = (docName) =>
  new TaskDef("Deleting Response Doc: " + docName, true);

export const sendResponseDocToQATaskDef = (docName) =>
  new TaskDef("Sending Response Doc to QA: " + docName, true);

export const sendResponseDocToROTaskDef = (docName) =>
  new TaskDef("Sending Response Doc to Requesting Office: " + docName, true);

export const sendResponseDocToIATaskDef = (docName) =>
  new TaskDef("Sending Response Doc to Internal Auditor: " + docName, true);

export const archivingResponseDocTaskDef = (docName) =>
  new TaskDef("Archiving Response Doc: " + docName, true);
