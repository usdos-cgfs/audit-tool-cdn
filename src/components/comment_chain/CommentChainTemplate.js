import { html } from "../../sal/infrastructure/index.js";

export const commentChainTemplate = html`
  <div>
    <!-- ko if: showHistoryBool -->
    <!-- ko foreach: comments -->
    <div class="comment">
      <div data-bind="text: text.Value"></div>
      <div>
        <span
          data-bind="text: author.Value() + ' @ ' + timestamp.Value()"
        ></span
        ><span class="remove" data-bind="click: $parent.onRemove">x</span>
      </div>
    </div>
    <!-- /ko -->
    <!-- /ko -->
    <!-- ko ifnot: showHistoryBool -->
    <div class="comment" data-bind="with: comments()[comments().length - 1]">
      <div data-bind="text: text.Value"></div>
      <div>
        <span
          data-bind="text: author.Value() + ' @ ' + timestamp.Value()"
        ></span
        ><span class="remove" data-bind="click: $parent.onRemove">x</span>
      </div>
    </div>
    <!-- /ko -->
    <a
      title="Show hidden comments"
      href="javascript:void(0)"
      data-bind="click: toggleShowHistory"
    >
      <span class="ui-icon ui-icon-comment"></span>
      Toggle Comment History (<span data-bind="text: comments().length"></span>
      Total)
    </a>
    <div class="newComment">
      <textarea cols="50" data-bind="value: newCommentText"></textarea>
      <button type="button" data-bind="click: onSubmit">Submit</button>
    </div>
  </div>
`;
