import * as ko from "knockout";
import { directRegisterComponent } from "../../../../sal/infrastructure/index.js";
import { m_fnRejectResponseDoc } from "../../../../pages/ia_db/ia_db.js";
import { confirmRejectResponseDocFormTemplate } from "./ConfirmRejectResponseDocFormTemplate.js";

const componentName = "confirm-reject-response-doc";

export class ConfirmRejectResponseDocForm {
  constructor(responseDocs, onSubmit) {
    this.responseDocs(responseDocs);
    this.onSubmit = onSubmit;
  }

  rejectReason = ko.observable();
  responseDocs = ko.observableArray();
  saving = ko.observable(false);

  async clickSubmit() {
    this.saving(true);
    await this.submit();
    this.saving(false);
  }

  async submit() {
    await this.onSubmit(this.rejectReason());
    this.onComplete(true);
  }

  componentName = componentName;
  params = this;
}

directRegisterComponent(componentName, {
  template: confirmRejectResponseDocFormTemplate,
});
// registerComponent({
//   name: componentName,
//   folder: "forms/response_doc/confirm_reject",
//   template: "ConfirmRejectResponseDocFormTemplate",
// });
