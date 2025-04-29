import {
  AuditResponseDocStates,
  AuditResponseStates,
} from "../../entities/index.js";
import { appContext } from "../../infrastructure/application_db_context.js";
import { BaseForm } from "../../sal/components/forms/index.js";
import { directRegisterComponent } from "../../sal/infrastructure/index.js";
import responseDocsReturnedToday from "./ResponseDocsReturnedTodayTemplate.html";
import * as ko from "knockout";

const componentName = "response-docs-returned-today";

export class ResponseDocsReturnedToday {
  constructor() {
    this.init();
  }

  responseDocs = ko.observableArray();

  async init() {
    // Get all responses returned today
    const responses = await appContext.AuditResponses.FindByColumnValue(
      [{ column: "ResStatus", value: AuditResponseStates.ReturnedToGFS }],
      {},
      {},
      ["ID", "Title", "ReqNum"]
    );

    const responseTitles = responses.results.map((res) => res.Title.toString());

    // Get response docs that are rejected
    const responseDocs = await appContext.AuditResponseDocs.FindByColumnValue(
      [{ column: "DocumentStatus", value: AuditResponseDocStates.Rejected }],
      {},
      {}
    );

    // Filter by response docs returned today
    const validDocs = responseDocs.results.filter((doc) =>
      responseTitles.includes(doc.ResID.Value()?.Title.toString())
    );
    this.responseDocs(validDocs);
  }

  goToResponseLink(doc) {
    const reqNum = doc.ReqNum.Value().ReqNum.toString();
    const resId = doc.ResID.Value().Title.toString();

    // TODO: These shouldn't be hardcoded
    const loc =
      window.location.pathname +
      `?ReqNum=${reqNum}&ResID=${resId}` +
      "&Tab=request-detail&request-detail-tab=responses&request-detail-tab=response-docs";

    return loc;
  }

  params = this;
  componentName = componentName;
}

directRegisterComponent(componentName, {
  template: responseDocsReturnedToday,
});
