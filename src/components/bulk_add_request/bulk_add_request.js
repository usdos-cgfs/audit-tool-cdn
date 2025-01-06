import * as ko from "knockout";
import { appContext } from "../../infrastructure/application_db_context.js";
import { onAddNewRequest, addNewRequest } from "../../services/index.js";
import { toggle } from "../../sal/components/modal/modalDialog.js";

import { directRegisterComponent } from "../../sal/infrastructure/index.js";
import bulkAddRequestTemplate from "./BulkAddRequestTemplate.html";
import { getRequestDefaultReminders } from "../../entities/index.js";

const componentName = "bulk-add-request-form";
export class BulkAddRequestForm {
  constructor() {}

  showBulkAddItems = ko.observable(true);
  bulkItems = ko.observableArray();
  working = ko.observable(false);
  hasRun = ko.observable(false);

  enableCreate = ko.pureComputed(() => {
    const items = ko.unwrap(this.bulkItems);
    const len = items.length;

    if (!len) return false;

    // If not all items have been successfully inserted;
    if (items.filter((item) => item.status() == "succeeded").length == len)
      return false;

    return true;
  });

  showFinish = ko.pureComputed(() => {
    return this.hasRun();
  });

  async Init() {
    this.fetchBulkRequests();
  }

  async clickReviewNewItems() {
    this.fetchBulkRequests();
    this.showBulkAddItems(false);
  }

  async clickUploadResponses() {
    this.showBulkAddItems(true);
  }

  async fetchBulkRequests() {
    console.log("Request added callback");
    const bulkRequests = await appContext.AuditBulkRequests.ToList(true);

    // Decorate our bulk requests with an object to keep track of view specific stuff
    this.bulkItems(
      bulkRequests.map((bulkRequest) => {
        return {
          bulkRequest,
          status: ko.observable(""),
          message: ko.observable(""),
        };
      })
    );
  }

  async clickSubmitRequests() {
    this.working(true);
    // 1. Query all AuditBulkRequests
    const bulkRequestItems = this.bulkItems();

    const failedInserts = [];

    // 2. Create new AuditRequests
    const insertPromises = bulkRequestItems.map(async (bulkRequestItem) => {
      bulkRequestItem.status("pending");
      // Map the bulk request to a an AuditRequest
      const bulkRequest = bulkRequestItem.bulkRequest;

      const newRequest = bulkRequest.toNewRequest();

      // a. Insert new Request
      try {
        await addNewRequest(newRequest);
        await onAddNewRequest(newRequest);
      } catch (e) {
        failedInserts.push([e, bulkRequest]);
        bulkRequestItem.status("failed");
        bulkRequestItem.message(e.message);
        return;
      }
      //  a. Update bulkRequests view
      bulkRequestItem.status("succeeded");

      //  b. Delete successfully created AuditBulkRequests
      await appContext.AuditBulkRequests.RemoveEntity(bulkRequest);
    });
    // Reload Page
    const insertResults = await Promise.all(insertPromises);
    // If any failed, need to alert user!
    this.hasRun(true);
    this.working(false);
  }

  clickFinish() {
    this.onComplete(true);
  }

  componentName = componentName;
  params = this;
}

directRegisterComponent(componentName, {
  template: bulkAddRequestTemplate,
});
