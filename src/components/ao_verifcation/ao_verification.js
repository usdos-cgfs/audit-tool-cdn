import * as ko from "knockout";
import { directRegisterComponent } from "../../sal/infrastructure";
import aoVerificationTemplate from "./ao_verification.html";

const componentName = "ao-verification";
export class AoVerification {
  constructor(params) {
    this.aos = params.aos;
  }

  message = ko.observable("");

  clickSubmit() {
    this.onComplete(ko.unwrap(this.message));
  }

  params = this;
  componentName = componentName;
}

directRegisterComponent(componentName, {
  template: aoVerificationTemplate,
});
