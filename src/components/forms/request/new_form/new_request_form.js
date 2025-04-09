import * as ko from "knockout";
import {
  AUDITREQUESTSTATES,
  AuditRequest,
  getRequestDefaultReminders,
} from "../../../../entities/index.js";

import {
  addNewRequest,
  calculateNewReqNum,
} from "../../../../services/index.js";

import {
  auditOrganizationStore,
  configurationsStore,
} from "../../../../infrastructure/store.js";
import { BaseForm } from "../../../../sal/components/forms/index.js";
import { directRegisterComponent } from "../../../../sal/infrastructure/index.js";
import newRequestFormTemplate from "./NewRequestFormTemplate.html";
import { CONFIGKEY } from "../../../../env.js";

export const newRequestFormComponentName = "newRequestForm";

export class NewRequestFormComponent {
  constructor(params) {
    this.onComplete = params?.onComplete;
  }

  onComplete;

  newRequest = ko.observable(new AuditRequest());

  params = ko.pureComputed(() => {
    return {
      newRequest: this.newRequest,
      reset: this.reset,
      onComplete: this.onComplete,
    };
  });

  componentName = newRequestFormComponentName;
}

export default class NewRequestFormModule extends BaseForm {
  constructor({ newRequest, onComplete }) {
    super({ entity: newRequest, view: AuditRequest.Views.New });

    this.onComplete = onComplete;
    this.prepopulateRequestFields();
  }

  computedReqNum = ko.pureComputed(() => {
    const request = ko.unwrap(this.entity);
    return calculateNewReqNum(request?.ReqNum.Value());
    // if (!request?.ReqNum.Value()) return null;
    // const prefix = configurationsStore[CONFIGKEY.REQNUMPREFIX];
    // const suffix = configurationsStore[CONFIGKEY.REQNUMSUFFIX];
    // let reqNum = prefix || "";
    // reqNum += request.ReqNum.Value();
    // reqNum += suffix || "";
    // return reqNum;
  });

  saving = ko.observable(false);

  prepopulateRequestFields() {
    const request = ko.unwrap(this.entity);

    if (!request) return;

    const fy = configurationsStore[CONFIGKEY.CURRENTFY];
    request.FiscalYear.Value(fy);

    const reqType = configurationsStore[CONFIGKEY.DEFAULTREQTYPE];
    request.ReqType.Value(reqType);

    const defaultReminders = getRequestDefaultReminders();
    request.Reminders.Value(defaultReminders);

    request.ReqStatus.Value(AUDITREQUESTSTATES.OPEN);

    const defaultROTitle = configurationsStore[CONFIGKEY.DEFAULTRO];
    if (defaultROTitle) {
      const defaultRO = auditOrganizationStore().find(
        (org) => org.Title === defaultROTitle
      );
      request.RequestingOffice.Value(defaultRO);
    }

    request.ReqDueDate.Value(new Date());
    request.InternalDueDate.Value(new Date());
    request.ReceiptDate.Value(new Date());
  }

  async clickSubmit() {
    this.saving(true);
    await this.submit();
    this.saving(false);
  }

  async submit() {
    const errors = this.validate();
    if (errors.length) return;

    const request = this.entity();

    try {
      await addNewRequest(request);
      this.onComplete(true);
    } catch (e) {
      alert(e);
    }
  }

  clearForm() {
    this.entity(new AuditRequest());
    this.prepopulateRequestFields();
  }
}

directRegisterComponent(newRequestFormComponentName, {
  template: newRequestFormTemplate,
  viewModel: NewRequestFormModule,
});
