import { html } from "../../../../sal/infrastructure/index.js";

export const editResponseDocFormTemplate = html`
  <div class="audit-form bg-dark">
    <!-- ko foreach: StatusErrors -->
    <div class="alert alert-warning" data-bind="text: $data"></div>
    <!-- /ko -->
    <div class="form-fields" data-bind="foreach: FormFields">
      <!-- ko if: $parent.fieldIsEditable($data) -->
      <div
        class="form-field-component"
        data-bind="component: {
                name: components.edit, params: $data}, 
                class: width"
      ></div>
      <!-- /ko -->
      <!-- ko ifnot: $parent.fieldIsEditable($data) -->
      <div
        class="form-field-component"
        data-bind="component: {
                  name: components.view, params: $data}, 
                  class: width"
      ></div>
      <!-- /ko -->
    </div>
    <div class="form-actions">
      <button
        type="button"
        class="btn btn-success"
        data-bind="click: clickSubmit, disable: StatusErrors().length"
      >
        Submit
      </button>
    </div>
  </div>
`;
