import * as ko from "knockout";
import { directRegisterComponent } from "../../../../sal/infrastructure/index.js";
import { confirmApproveResponseDocFormTemplate } from "./ConfirmApproveResponseDocFormTemplate.js";

const componentName = "confirm-approve-response-doc";

export class ConfirmApproveResponseDocForm {
  constructor(sendToText, responseDocs, onApprove) {
    this.onApprove = onApprove;
    this.responseDocs(responseDocs);

    this.sendToText = "Send to " + sendToText;
  }

  sendToText;

  responseDocs = ko.observableArray();
  saving = ko.observable(false);

  async clickSubmit() {
    this.saving(true);
    await this.submit();
    this.saving(false);
  }

  async submit() {
    const responseDocIds = this.responseDocs().map((doc) => doc.ID);
    let result = await this.onApprove();

    if (result) {
      this.onComplete(true);
    }
  }

  componentName = componentName;
  params = this;
}

directRegisterComponent(componentName, {
  template: confirmApproveResponseDocFormTemplate,
});
