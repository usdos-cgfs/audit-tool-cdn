import { updateResponse, currentUser } from "../../../../services/index.js";
import {
  AuditResponse,
  AuditResponseStates,
} from "../../../../entities/index.js";

import { BaseForm } from "../../../../sal/components/forms/index.js";
import { directRegisterComponent } from "../../../../sal/infrastructure/index.js";
import { editResponseFormTemplate } from "./EditResponseFormTemplate.js";

const componentName = "custome-edit-response-form";

export class EditResponseForm extends BaseForm {
  constructor({ entity }) {
    super({ entity, view: AuditResponse.Views.EditForm });
    this.currentResponseStatus = entity.ResStatus.Value();
    entity.ResStatus.Value.subscribe(this.onStatusChangedHandler, this);
  }

  onStatusChangedHandler = async (newValue) => {
    if (
      newValue != this.currentResponseStatus &&
      newValue == AuditResponseStates.Closed
    ) {
      const response = ko.unwrap(this.entity);
      const curUser = await currentUser();
      response.ClosedBy.Value(curUser);
      response.ClosedDate.Value(new Date());
    }
  };

  async clickSubmit() {
    this.saving(true);
    await this.submit();
    this.saving(false);
  }

  async submit() {
    const errors = this.validate();
    if (errors.length) return;

    const response = ko.unwrap(this.entity);

    try {
      await updateResponse(response.ReqNum.Value(), response);
      this.onComplete(SP.UI.DialogResult.OK);
    } catch (e) {
      alert(e);
    }
  }

  fieldIsEditable(field) {
    const entity = ko.unwrap(this.entity);

    const nonEditableFields = [
      entity.ReqNum,
      entity.Title,
      entity.SampleNumber,
    ];

    return !nonEditableFields.includes(field);
  }

  componentName = componentName;
}

directRegisterComponent(componentName, {
  template: editResponseFormTemplate,
});
