import { TaskDef } from "../services/index.js";

export const loadingRemainder = new TaskDef("Loading Remainder Data", true);

export const loadInfo = new TaskDef("Loading Initial Data");

export const loadData = new TaskDef("Building Dashboard");

// AO_DB

export const submitPackageTaskDef = new TaskDef(
  "Submitting Response Package",
  true
);
