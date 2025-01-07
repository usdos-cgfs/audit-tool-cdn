(function (factory) {
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
})((function () { 'use strict';

  var qaDbTemplate = "<iframe id=\"CsvExpFrame\" style=\"display: none\"></iframe>\r\n\r\n<div id=\"divCounter\" style=\"display: none\" title=\"used to auto refresh the page\">\r\n  1200\r\n</div>\r\n\r\n<div class=\"audit\">\r\n  <div id=\"divLoading\" style=\"color: green; padding-bottom: 10px\">\r\n    Please Wait... Loading\r\n    <span data-bind=\"visible: arrResponses().length > 0 && debugMode, text: arrResponses().length\"></span>\r\n  </div>\r\n\r\n  <div class=\"audit-body\">\r\n    <div class=\"reports-container\">\r\n      <div id=\"divRefresh\" style=\"display: none\">\r\n        <div>\r\n          <a title=\"Refresh this page\" href=\"javascript:void(0)\" onclick=\"Audit.Common.Utilities.Refresh()\"><span class=\"ui-icon ui-icon-refresh\"></span>Refresh</a>\r\n        </div>\r\n        <div style=\"padding-bottom: 10px\">\r\n          <a title=\"View User Manual\" href=\"javascript:void(0)\" onclick=\"Audit.Common.Utilities.ViewUserManuals('QA User Manual')\"><span class=\"ui-icon ui-icon-help\"></span>User Manual</a>\r\n        </div>\r\n      </div>\r\n\r\n      <div>\r\n        <!-- ko using: tabs -->\r\n        <ul class=\"ui-tabs-nav\" data-bind=\"foreach: tabOpts\">\r\n          <li data-bind=\"text: linkText, \r\n        click: $parent.clickTabLink, \r\n        css: {active: $parent.isSelected($data)}\"></li>\r\n        </ul>\r\n        <!-- ko foreach: tabOpts -->\r\n        <div data-bind=\"template: {\r\n              name: template.id,\r\n              data: template.data\r\n            },\r\n            visible: $parent.isSelected($data)\"></div>\r\n        <!-- /ko -->\r\n        <!-- /ko -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<script id=\"responseStatusReportTemplate\" type=\"text/html\">\r\n  <div id=\"tabs-0\">\r\n    <div\r\n      id=\"lblStatusReportResponsesMsg\"\r\n      style=\"padding-top: 5px; color: green\"\r\n    >\r\n      <span\r\n        data-bind=\"css: (cntPendingReview() > 0 ? 'ui-icon ui-icon-alert' : 'ui-icon ui-icon-circle-check')\"\r\n      ></span\r\n      >There are <span data-bind=\"text: cntPendingReview\"></span> Responses\r\n      pending your review\r\n    </div>\r\n    <div\r\n      id=\"divButtons\"\r\n      style=\"padding-top: 3px\"\r\n      data-bind=\"visible: arrResponses().length > 0\"\r\n    >\r\n      <a\r\n        id=\"btnPrint1\"\r\n        title=\"Click here to Print\"\r\n        href=\"javascript:void(0)\"\r\n        class=\"hideOnPrint\"\r\n        ><span class=\"ui-icon ui-icon-print\">Print</span></a\r\n      >\r\n      <a class=\"export1 hideOnPrint\" title=\"Export to CSV\" href=\"#\"\r\n        ><span class=\"ui-icon ui-icon-disk\">Export to CSV</span></a\r\n      >\r\n      <a\r\n        id=\"btnViewAll\"\r\n        title=\"View All\"\r\n        href=\"javascript:void(0)\"\r\n        data-bind=\"visible: arrFilteredResponsesCount() < arrResponses().length && doSort, click: ClearFiltersResponseTab\"\r\n        ><span class=\"ui-icon ui-icon-circle-zoomout\"></span>View All\r\n        Responses</a\r\n      >\r\n    </div>\r\n    <div id=\"divStatusReportRespones\">\r\n      <table\r\n        id=\"tblStatusReportResponses\"\r\n        class=\"tablesorter report\"\r\n        data-bind=\"visible: arrResponses().length > 0\"\r\n      >\r\n        <thead>\r\n          <tr\r\n            valign=\"top\"\r\n            class=\"rowFilters\"\r\n            data-bind=\"visible: arrResponses().length > 0\"\r\n          >\r\n            <th class=\"sorter-false\" nowrap=\"nowrap\">\r\n              <select\r\n                id=\"ddlResponseRequestID\"\r\n                data-bind=\"options: $root.ddOptionsResponseTabRequestID, value: filterResponseTabRequestID, optionsCaption: '-Select-'\"\r\n              ></select>\r\n            </th>\r\n            <th class=\"sorter-false\" nowrap=\"nowrap\"></th>\r\n            <th class=\"sorter-false\" nowrap=\"nowrap\">\r\n              <select\r\n                id=\"ddlResponseRequestStatus\"\r\n                data-bind=\"options: $root.ddOptionsResponseTabRequestStatus, value: filterResponseTabRequestStatus, optionsCaption: '-Select-'\"\r\n              ></select>\r\n            </th>\r\n            <th class=\"sorter-false\" nowrap=\"nowrap\">\r\n              <select\r\n                id=\"ddlResponseRequestInternalDueDate\"\r\n                data-bind=\"options: $root.ddOptionsResponseTabRequestInternalDueDate, value: filterResponseTabRequestIntDueDate, optionsCaption: '-Select-'\"\r\n              ></select>\r\n            </th>\r\n            <th class=\"sorter-false\" nowrap=\"nowrap\">\r\n              <select\r\n                id=\"ddlResponseSampleNum\"\r\n                data-bind=\"options: $root.ddOptionsResponseTabRequestSample, value: filterResponseTabSampleNum, optionsCaption: '-Select-'\"\r\n              ></select>\r\n            </th>\r\n            <th class=\"sorter-false\" nowrap=\"nowrap\">\r\n              <select\r\n                id=\"ddlResponseName\"\r\n                data-bind=\"options: $root.ddOptionsResponseTabResponseTitle, value: filterResponseTabResponseName, optionsCaption: '-Select-'\"\r\n              ></select>\r\n            </th>\r\n            <th class=\"sorter-false\" nowrap=\"nowrap\">\r\n              <select\r\n                id=\"ddlResponseStatus\"\r\n                data-bind=\"options: $root.ddOptionsResponseTabResponseStatus, value: filterResponseTabResponseStatus, optionsCaption: '-Select-'\"\r\n              ></select>\r\n            </th>\r\n            <th class=\"sorter-false\" nowrap=\"nowrap\"></th>\r\n            <th class=\"sorter-false\" nowrap=\"nowrap\"></th>\r\n          </tr>\r\n          <tr valign=\"top\">\r\n            <th class=\"sorter-true\" nowrap=\"nowrap\">Request #</th>\r\n            <th class=\"sorter-false\" nowrap=\"nowrap\">Subject</th>\r\n            <th class=\"sorter-true\" nowrap=\"nowrap\">Request Status</th>\r\n            <th class=\"sorter-true\" nowrap=\"nowrap\">Due Date</th>\r\n            <th class=\"sorter-true\" nowrap=\"nowrap\">Sample #</th>\r\n            <th class=\"sorter-true\" nowrap=\"nowrap\">Response Name</th>\r\n            <th class=\"sorter-true\" nowrap=\"nowrap\">Status</th>\r\n            <th class=\"sorter-true\" nowrap=\"nowrap\"># of Documents</th>\r\n            <th class=\"sorter-true\" nowrap=\"nowrap\">Modified</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody id=\"fbody\">\r\n          <!-- ko foreach: arrResponses -->\r\n          <tr\r\n            class=\"sr-response-item\"\r\n            data-bind=\"css: { 'highlighted': highlight},\r\n            visible: $root.filteredResponses().includes($data)\"\r\n          >\r\n            <td class=\"sr-response-requestNum\" data-bind=\"text: reqNumber\"></td>\r\n            <td\r\n              class=\"sr-response-requestSubject\"\r\n              data-bind=\"text: requestSubject\"\r\n            ></td>\r\n            <td\r\n              class=\"sr-response-requestStatus\"\r\n              data-bind=\"text: requestStatus \"\r\n            ></td>\r\n            <td\r\n              class=\"sr-response-internalDueDate\"\r\n              data-bind=\"text: internalDueDate\"\r\n            ></td>\r\n            <td class=\"sr-response-sample\" data-bind=\"text: sample\"></td>\r\n            <td class=\"sr-response-title\">\r\n              <a\r\n                href=\"javascript:void(0);\"\r\n                title=\"Go to Response Details\"\r\n                data-bind=\"text: title,\r\n                click: () => Audit.QAReport.Report.GoToResponse($data.title)\"\r\n              ></a>\r\n            </td>\r\n            <td class=\"sr-response-status\" data-bind=\"text: status\"></td>\r\n            <td class=\"sr-response-docCount\" data-bind=\"text: docCount\"></td>\r\n            <td class=\"sr-response-modified\" data-bind=\"text: modified\"></td>\r\n          </tr>\r\n          <!-- /ko -->\r\n        </tbody>\r\n        <tfoot class=\"footer\">\r\n          <tr>\r\n            <th colspan=\"9\">\r\n              Displaying\r\n              <span\r\n                id=\"spanResponsesDisplayedTotal\"\r\n                style=\"color: green\"\r\n                data-bind=\"text: arrFilteredResponsesCount()\"\r\n                >0</span\r\n              >\r\n              out of\r\n              <span\r\n                id=\"spanResponsesTotal\"\r\n                style=\"color: green\"\r\n                data-bind=\"text: arrResponses().length\"\r\n                >0</span\r\n              >\r\n              Responses\r\n            </th>\r\n          </tr>\r\n        </tfoot>\r\n      </table>\r\n    </div>\r\n  </div>\r\n</script>\r\n\r\n<script id=\"responseDetailTemplate\" type=\"text/html\">\r\n  <div id=\"tabs-1\">\r\n    <div style=\"padding-bottom: 15px\">\r\n      <table>\r\n        <tr>\r\n          <td><span>Responses Pending Action:</span></td>\r\n          <td>\r\n            <select\r\n              id=\"ddlResponsesOpen\"\r\n              data-bind=\"options: $root.ddOptionsResponseInfoTabResponseNameOpen2, value: filterResponseInfoTabResponseNameOpen2, optionsCaption: '-Select-'\"\r\n            ></select>\r\n          </td>\r\n        </tr>\r\n        <tr>\r\n          <td><span>Other Responses:</span></td>\r\n          <td>\r\n            <select\r\n              id=\"ddlResponsesProcessed\"\r\n              data-bind=\"options: $root.ddOptionsResponseInfoTabResponseNameProcessed2, value: filterResponseInfoTabResponseNameProcessed2, optionsCaption: '-Select-'\"\r\n            ></select>\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n    <div class=\"response-detail-view\">\r\n      <div\r\n        id=\"divResponseInfo\"\r\n        class=\"audit-form response-info-form\"\r\n        data-bind=\"with: currentResponse\"\r\n      >\r\n        <div class=\"form-header\">\r\n          <h3 class=\"uppercase form-title\">\r\n            AUDIT RESPONSE DETAILS\r\n            <div class=\"fw-semibold\" data-bind=\"text: title\"></div>\r\n          </h3>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <dl>\r\n            <dt>Request #</dt>\r\n            <dd>\r\n              <span id=\"requestInfoNum\" data-bind=\"text: number\"></span>\r\n            </dd>\r\n            <dt>Request Status</dt>\r\n            <dd>\r\n              <span\r\n                id=\"requestInfoStatus\"\r\n                data-bind=\"text: request.status, style: { color:   request.status == 'Closed' ? 'red' : 'green' }\"\r\n              ></span>\r\n              <span\r\n                data-bind=\"visible: request.status == 'Closed', style: { color: 'red'}\"\r\n                >on\r\n                <span\r\n                  data-bind=\"text: closedDate, style: { color: 'red'}\"\r\n                ></span>\r\n              </span>\r\n            </dd>\r\n            <dt>Subject</dt>\r\n            <dd>\r\n              <span\r\n                id=\"requestInfoSub\"\r\n                data-bind=\"text: request.subject\"\r\n              ></span>\r\n            </dd>\r\n            <dt>Due Date</dt>\r\n            <dd>\r\n              <span\r\n                id=\"requestInfoInternalDueDate\"\r\n                data-bind=\"text: request.internalDueDate\"\r\n              ></span>\r\n            </dd>\r\n            <dt>Sample?</dt>\r\n            <dd>\r\n              <span\r\n                id=\"requestInfoSample\"\r\n                data-bind=\"text: request.sample, css: request.sample == true ? 'ui-icon ui-icon-check' : 'ui-icon ui-icon-close'\"\r\n              ></span>\r\n            </dd>\r\n            <dt>Response</dt>\r\n            <dd>\r\n              <span id=\"responseInfoName\" data-bind=\"text: title\"></span>\r\n            </dd>\r\n          </dl>\r\n          <dl>\r\n            <dt>Response Status</dt>\r\n            <dd>\r\n              <span\r\n                id=\"responseInfoStatus\"\r\n                data-bind=\"style: { color:  resStatus == '7-Closed' ? 'red' : 'green' }\"\r\n              >\r\n                <span data-bind=\"text: resStatus\"></span\r\n                ><span data-bind=\"visible: resStatus == '7-Closed'\">\r\n                  on <span data-bind=\"text: closedDate \"></span> by\r\n                  <span data-bind=\"text: closedBy\"></span>\r\n                </span>\r\n              </span>\r\n            </dd>\r\n\r\n            <dt>Sample #</dt>\r\n            <dd>\r\n              <span id=\"responseInfoSampleNum\" data-bind=\"text: sample\"></span>\r\n            </dd>\r\n\r\n            <dt>Action Office</dt>\r\n            <dd>\r\n              <span id=\"responseInfoAO\" data-bind=\"text: actionOffice\"></span>\r\n            </dd>\r\n\r\n            <dt>Related Audit</dt>\r\n            <dd>\r\n              <span\r\n                id=\"requestInfoRelatedAudit\"\r\n                data-bind=\"text: request.relatedAudit\"\r\n              ></span>\r\n            </dd>\r\n          </dl>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <dl>\r\n            <dt>Action Items</dt>\r\n            <dd>\r\n              <span\r\n                id=\"requestInfoActionItems\"\r\n                data-bind=\"html: request.actionItems\"\r\n              ></span>\r\n            </dd>\r\n            <dt>Comments</dt>\r\n            <dd>\r\n              <span id=\"responseInfoComments\" data-bind=\"html: comments\"></span>\r\n            </dd>\r\n          </dl>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"emphasized-section\">\r\n            <div class=\"fw-semibold\">Internal Status Comments</div>\r\n            <!-- ko if: typeof(request.internalStatus) != 'undefined' -->\r\n            <div class=\"commentChain\" data-bind=\"with: request.internalStatus\">\r\n              <!-- ko if: showHistoryBool -->\r\n              <!-- ko foreach: comments -->\r\n              <div class=\"comment\">\r\n                <div class=\"text\" data-bind=\"text: text\"></div>\r\n                <span\r\n                  data-bind=\"text: author + ' @ ' + timestamp.toLocaleString()\"\r\n                ></span>\r\n              </div>\r\n              <!-- /ko -->\r\n              <!-- /ko -->\r\n              <!-- ko ifnot: showHistoryBool -->\r\n              <div\r\n                class=\"comment\"\r\n                data-bind=\"with: comments()[comments().length - 1]\"\r\n              >\r\n                <div class=\"text\" data-bind=\"text: text\"></div>\r\n                <span\r\n                  data-bind=\"text: author + ' @ ' + timestamp.toLocaleString()\"\r\n                ></span>\r\n              </div>\r\n              <!-- /ko -->\r\n              <a\r\n                title=\"Show hidden comments\"\r\n                href=\"javascript:void(0)\"\r\n                data-bind=\"click: toggleShowHistory\"\r\n              >\r\n                <span class=\"ui-icon ui-icon-comment\"></span>\r\n                Toggle Comment History (<span\r\n                  data-bind=\"text: comments().length\"\r\n                ></span>\r\n                Total)\r\n              </a>\r\n            </div>\r\n            <!-- /ko -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div>\r\n        <div id=\"divCoverSheets\" data-bind=\"visible: currentResponse\">\r\n          <fieldset>\r\n            <legend>Cover Sheets/Supplemental Documents</legend>\r\n\r\n            <div\r\n              id=\"divEmptyCoversheetsMsg\"\r\n              style=\"border: 0px !important; font-style: italic\"\r\n              data-bind=\"visible: arrCoverSheets().length <= 0\"\r\n            >\r\n              There are 0 cover sheets or supplemental documents\r\n            </div>\r\n            <table\r\n              id=\"tblCoverSheets\"\r\n              class=\"tablesorter report\"\r\n              data-bind=\"visible: arrCoverSheets().length > 0\"\r\n            >\r\n              <thead>\r\n                <tr valign=\"top\">\r\n                  <th class=\"sorter-false\" nowrap=\"nowrap\">Name</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody data-bind=\"foreach: arrCoverSheets\">\r\n                <tr class=\"coversheet-item\">\r\n                  <td class=\"coversheet-title\" title=\"Click to Download\">\r\n                    <a\r\n                      data-bind=\"downloadLink: '../_layouts/download.aspx?SourceUrl=:folder/:fileName'\"\r\n                      ><span data-bind=\"text: fileName\"></span\r\n                    ></a>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n              <tfoot>\r\n                <tr valign=\"top\">\r\n                  <th nowrap=\"nowrap\">\r\n                    Total:\r\n                    <span\r\n                      id=\"tblCoverSheetsTotal\"\r\n                      data-bind=\"text: arrCoverSheets().length\"\r\n                      >0</span\r\n                    >\r\n                  </th>\r\n                </tr>\r\n              </tfoot>\r\n            </table>\r\n          </fieldset>\r\n        </div>\r\n\r\n        <div>\r\n          <fieldset\r\n            class=\"divCloseResponse\"\r\n            style=\"border-color: GreenYellow\"\r\n            data-bind=\"visible: currentResponse && showCloseResponse\"\r\n          >\r\n            <legend style=\"font-weight: bold; font-size: 10pt\">Action</legend>\r\n            <a\r\n              class=\"btnCloseResponse\"\r\n              href=\"javascript:void(0)\"\r\n              title=\"Click to Close Response\"\r\n              style=\"font-size: 11pt\"\r\n              data-bind=\"click: ClickCloseResponse\"\r\n              ><span class=\"ui-icon ui-icon-gear\"></span>Close Response</a\r\n            >\r\n          </fieldset>\r\n          <fieldset\r\n            class=\"divReturnToCGFS\"\r\n            style=\"border-color: GreenYellow\"\r\n            data-bind=\"visible: currentResponse && showReturnToCGFS\"\r\n          >\r\n            <legend style=\"font-weight: bold; font-size: 10pt\">Action</legend>\r\n            <a\r\n              class=\"btnReturnToCGFS\"\r\n              href=\"javascript:void(0)\"\r\n              title=\"Click to Return to CGFS\"\r\n              data-bind=\"click: ClickReturnToCGFS\"\r\n              ><span class=\"ui-icon ui-icon-gear\"></span>Return to CGFS</a\r\n            >\r\n          </fieldset>\r\n          <fieldset\r\n            class=\"divBulkApprove\"\r\n            data-bind=\"visible: currentResponse && showBulkApprove\"\r\n          >\r\n            <legend>Action</legend>\r\n            <a\r\n              class=\"btnApproveAll\"\r\n              href=\"javascript:void(0)\"\r\n              title=\"Click to Approve Remaining Documents\"\r\n              data-bind=\"click: ClickBulkApprove\"\r\n              ><span class=\"ui-icon ui-icon-circle-check\"></span>Approve All\r\n              Documents</a\r\n            >\r\n          </fieldset>\r\n        </div>\r\n\r\n        <div id=\"divResponseDocs\" data-bind=\"visible: currentResponse\">\r\n          <fieldset>\r\n            <legend>Response Documents</legend>\r\n            <div\r\n              id=\"divEmptyResponseDocsMsg\"\r\n              style=\"border: 0px !important; font-style: italic\"\r\n              data-bind=\"visible: cntResponseDocs() == 0\"\r\n            >\r\n              There are 0 response documents\r\n            </div>\r\n            <table\r\n              id=\"tblResponseDocs\"\r\n              class=\"tablesorter report\"\r\n              data-bind=\"visible: cntResponseDocs() > 0\"\r\n            >\r\n              <thead>\r\n                <tr valign=\"top\">\r\n                  <th class=\"sorter-false\" nowrap=\"nowrap\">Type</th>\r\n                  <th class=\"sorter-false\" nowrap=\"nowrap\">Name</th>\r\n                  <th class=\"sorter-false\" nowrap=\"nowrap\">Receipt Date</th>\r\n                  <th class=\"sorter-false\" nowrap=\"nowrap\">File Size</th>\r\n                  <th class=\"sorter-false\" nowrap=\"nowrap\">\r\n                    Status\r\n                    <span\r\n                      ><a\r\n                        title=\"View Help\"\r\n                        href=\"javascript:void(0)\"\r\n                        style=\"color: #0072bc\"\r\n                        data-bind=\"click: ClickHelpResponseDocs\"\r\n                        ><span class=\"ui-icon ui-icon-help\"></span></a\r\n                    ></span>\r\n                  </th>\r\n                  <th class=\"sorter-false\" nowrap=\"nowrap\">Reason</th>\r\n                  <th class=\"sorter-false\" nowrap=\"nowrap\">\r\n                    Action\r\n                    <span\r\n                      ><a\r\n                        title=\"View Help\"\r\n                        href=\"javascript:void(0)\"\r\n                        style=\"color: #0072bc\"\r\n                        data-bind=\"click: ClickHelpResponseDocs\"\r\n                        ><span class=\"ui-icon ui-icon-help\"></span></a\r\n                    ></span>\r\n                  </th>\r\n                  <th class=\"sorter-false\" nowrap=\"nowrap\">Modified</th>\r\n                  <th class=\"sorter-false\" nowrap=\"nowrap\">Modified By</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody data-bind=\"with: arrResponseDocs\">\r\n                <tr class=\"requestInfo-response-doc\">\r\n                  <td colspan=\"10\">\r\n                    <img\r\n                      style=\"background-color: transparent\"\r\n                      src=\"/_layouts/images/minus.gif\"\r\n                      title=\"Expand/Collapse\"\r\n                      data-bind=\"toggleClick: $data, toggleClass: 'collapsed', containerType: 'doc', classContainer: '.requestInfo-response-doc'\"\r\n                    /><span data-bind=\"text: responseTitle\"></span>\r\n                  </td>\r\n                </tr>\r\n\r\n                <!-- ko foreach: responseDocs-->\r\n\r\n                <tr\r\n                  class=\"requestInfo-response-doc-item\"\r\n                  data-bind=\"style: styleTag\"\r\n                >\r\n                  <td>\r\n                    <img\r\n                      data-bind=\"attr:{ src: $parent.siteUrl + '/_layouts/images/' + docIcon}\"\r\n                    />\r\n                  </td>\r\n                  <td\r\n                    class=\"requestInfo-response-doc-title\"\r\n                    title=\"Click to Download\"\r\n                  >\r\n                    <a\r\n                      data-bind=\"downloadLink: '../_layouts/download.aspx?SourceUrl=:folder/:fileName'\"\r\n                      ><span data-bind=\"text: fileName\"></span\r\n                    ></a>\r\n                  </td>\r\n                  <td nowrap data-bind=\"text: receiptDate\"></td>\r\n                  <td nowrap data-bind=\"text: fileSize\"></td>\r\n                  <td nowrap data-bind=\"text: documentStatus\"></td>\r\n                  <td data-bind=\"html: rejectReason\"></td>\r\n                  <td nowrap>\r\n                    <span\r\n                      data-bind=\"visible: ($parent.responseStatus == '4-Approved for QA' || $parent.responseStatus == '6-Reposted After Rejection') && documentStatus == 'Sent to QA'\"\r\n                    >\r\n                      <a\r\n                        title=\"Approve this Document\"\r\n                        href=\"javascript:void(0)\"\r\n                        data-bind=\"click: $root.ClickApproveResponseDoc\"\r\n                        ><span class=\"ui-icon ui-icon-circle-check\"\r\n                          >Approve Response Doc</span\r\n                        ></a\r\n                      >\r\n                      <a\r\n                        title=\"Reject this Document\"\r\n                        href=\"javascript:void(0)\"\r\n                        data-bind=\"click: $root.ClickRejectResponseDoc\"\r\n                        ><span class=\"ui-icon ui-icon-circle-close\"\r\n                          >Reject Response Doc</span\r\n                        ></a\r\n                      >\r\n                    </span>\r\n                  </td>\r\n                  <td\r\n                    class=\"requestInfo-response-doc-modified\"\r\n                    data-bind=\"text: modifiedDate\"\r\n                  ></td>\r\n                  <td\r\n                    class=\"requestInfo-response-doc-modifiedBy\"\r\n                    data-bind=\"text: modifiedBy\"\r\n                  ></td>\r\n                </tr>\r\n\r\n                <!-- /ko -->\r\n              </tbody>\r\n              <tfoot>\r\n                <tr valign=\"top\">\r\n                  <th colspan=\"9\" nowrap=\"nowrap\">\r\n                    Total:\r\n                    <span\r\n                      id=\"tblResponseDocsTotal\"\r\n                      data-bind=\"text: cntResponseDocs\"\r\n                      >0</span\r\n                    >\r\n                  </th>\r\n                </tr>\r\n              </tfoot>\r\n            </table>\r\n          </fieldset>\r\n        </div>\r\n\r\n        <div\r\n          class=\"divReturnToCGFS\"\r\n          data-bind=\"visible: currentResponse && showReturnToCGFS\"\r\n        >\r\n          <fieldset style=\"border-color: GreenYellow\">\r\n            <legend style=\"font-weight: bold; font-size: 10pt\">Action</legend>\r\n            <span class=\"ui-icon ui-icon-gear\"></span\r\n            ><a\r\n              class=\"btnReturnToCGFS\"\r\n              href=\"javascript:void(0)\"\r\n              title=\"Click to Return to CGFS\"\r\n              data-bind=\"click: ClickReturnToCGFS\"\r\n              >Return to CGFS</a\r\n            >\r\n          </fieldset>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</script>\r\n\r\n<div id=\"divTest\"></div>\r\n";

  const state = {};

  window.history.replaceState({}, "", document.location.href);
  function setUrlParam(param, newVal) {
    // No need to reset the param if it hasn't changed
    if (getUrlParam(param) == newVal) return;

    const search = window.location.search;
    //var urlParams = new URLSearchParams(queryString);

    const regex = new RegExp("([?;&])" + param + "[^&;]*[;&]?");
    const query = search.replace(regex, "$1").replace(/&$/, "");

    const urlParams =
      (query.length > 2 ? query + "&" : "?") +
      (newVal ? param + "=" + newVal : "");

    state[param] = newVal;
    window.history.pushState(state, "", urlParams.toString());
  }

  function getUrlParam(param) {
    const results = new RegExp("[?&]" + param + "=([^&#]*)").exec(
      window.location.href
    );
    if (results == null) {
      return null;
    } else {
      return decodeURI(results[1]) || 0;
    }
  }

  var knockoutLatest = {exports: {}};

  /*!
   * Knockout JavaScript library v3.5.1
   * (c) The Knockout.js team - http://knockoutjs.com/
   * License: MIT (http://www.opensource.org/licenses/mit-license.php)
   */

  var hasRequiredKnockoutLatest;

  function requireKnockoutLatest () {
  	if (hasRequiredKnockoutLatest) return knockoutLatest.exports;
  	hasRequiredKnockoutLatest = 1;
  	(function (module, exports) {
  		(function() {(function(n){var A=this||(0, eval)("this"),w=A.document,R=A.navigator,v=A.jQuery,H=A.JSON;v||"undefined"===typeof jQuery||(v=jQuery);(function(n){n(module.exports||exports);})(function(S,T){function K(a,c){return null===a||typeof a in W?a===c:!1}function X(b,c){var d;return function(){d||(d=a.a.setTimeout(function(){d=n;b();},c));}}function Y(b,c){var d;return function(){clearTimeout(d);
  		d=a.a.setTimeout(b,c);}}function Z(a,c){c&&"change"!==c?"beforeChange"===c?this.pc(a):this.gb(a,c):this.qc(a);}function aa(a,c){null!==c&&c.s&&c.s();}function ba(a,c){var d=this.qd,e=d[r];e.ra||(this.Qb&&this.mb[c]?(d.uc(c,a,this.mb[c]),this.mb[c]=null,--this.Qb):e.I[c]||d.uc(c,a,e.J?{da:a}:d.$c(a)),a.Ja&&a.gd());}var a="undefined"!==typeof S?S:{};a.b=function(b,c){for(var d=b.split("."),e=a,f=0;f<d.length-1;f++)e=e[d[f]];e[d[d.length-1]]=c;};a.L=function(a,c,d){a[c]=d;};a.version="3.5.1";a.b("version",
  		a.version);a.options={deferUpdates:!1,useOnlyNativeEvents:!1,foreachHidesDestroyed:!1};a.a=function(){function b(a,b){for(var c in a)f.call(a,c)&&b(c,a[c]);}function c(a,b){if(b)for(var c in b)f.call(b,c)&&(a[c]=b[c]);return a}function d(a,b){a.__proto__=b;return a}function e(b,c,d,e){var l=b[c].match(q)||[];a.a.D(d.match(q),function(b){a.a.Na(l,b,e);});b[c]=l.join(" ");}var f=Object.prototype.hasOwnProperty,g={__proto__:[]}instanceof Array,h="function"===typeof Symbol,m={},k={};m[R&&/Firefox\/2/i.test(R.userAgent)?
  		"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];m.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");b(m,function(a,b){if(b.length)for(var c=0,d=b.length;c<d;c++)k[b[c]]=a;});var l={propertychange:!0},p=w&&function(){for(var a=3,b=w.createElement("div"),c=b.getElementsByTagName("i");b.innerHTML="\x3c!--[if gt IE "+ ++a+"]><i></i><![endif]--\x3e",c[0];);return 4<a?a:n}(),q=/\S+/g,t;return {Jc:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],
  		D:function(a,b,c){for(var d=0,e=a.length;d<e;d++)b.call(c,a[d],d,a);},A:"function"==typeof Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b)}:function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return -1},Lb:function(a,b,c){for(var d=0,e=a.length;d<e;d++)if(b.call(c,a[d],d,a))return a[d];return n},Pa:function(b,c){var d=a.a.A(b,c);0<d?b.splice(d,1):0===d&&b.shift();},wc:function(b){var c=[];b&&a.a.D(b,function(b){0>a.a.A(c,b)&&c.push(b);});return c},Mb:function(a,
  		b,c){var d=[];if(a)for(var e=0,l=a.length;e<l;e++)d.push(b.call(c,a[e],e));return d},jb:function(a,b,c){var d=[];if(a)for(var e=0,l=a.length;e<l;e++)b.call(c,a[e],e)&&d.push(a[e]);return d},Nb:function(a,b){if(b instanceof Array)a.push.apply(a,b);else for(var c=0,d=b.length;c<d;c++)a.push(b[c]);return a},Na:function(b,c,d){var e=a.a.A(a.a.bc(b),c);0>e?d&&b.push(c):d||b.splice(e,1);},Ba:g,extend:c,setPrototypeOf:d,Ab:g?d:c,P:b,Ga:function(a,b,c){if(!a)return a;var d={},e;for(e in a)f.call(a,e)&&(d[e]=
  		b.call(c,a[e],e,a));return d},Tb:function(b){for(;b.firstChild;)a.removeNode(b.firstChild);},Yb:function(b){b=a.a.la(b);for(var c=(b[0]&&b[0].ownerDocument||w).createElement("div"),d=0,e=b.length;d<e;d++)c.appendChild(a.oa(b[d]));return c},Ca:function(b,c){for(var d=0,e=b.length,l=[];d<e;d++){var k=b[d].cloneNode(!0);l.push(c?a.oa(k):k);}return l},va:function(b,c){a.a.Tb(b);if(c)for(var d=0,e=c.length;d<e;d++)b.appendChild(c[d]);},Xc:function(b,c){var d=b.nodeType?[b]:b;if(0<d.length){for(var e=d[0],
  		l=e.parentNode,k=0,f=c.length;k<f;k++)l.insertBefore(c[k],e);k=0;for(f=d.length;k<f;k++)a.removeNode(d[k]);}},Ua:function(a,b){if(a.length){for(b=8===b.nodeType&&b.parentNode||b;a.length&&a[0].parentNode!==b;)a.splice(0,1);for(;1<a.length&&a[a.length-1].parentNode!==b;)a.length--;if(1<a.length){var c=a[0],d=a[a.length-1];for(a.length=0;c!==d;)a.push(c),c=c.nextSibling;a.push(d);}}return a},Zc:function(a,b){7>p?a.setAttribute("selected",b):a.selected=b;},Db:function(a){return null===a||a===n?"":a.trim?
  		a.trim():a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Ud:function(a,b){a=a||"";return b.length>a.length?!1:a.substring(0,b.length)===b},vd:function(a,b){if(a===b)return !0;if(11===a.nodeType)return !1;if(b.contains)return b.contains(1!==a.nodeType?a.parentNode:a);if(b.compareDocumentPosition)return 16==(b.compareDocumentPosition(a)&16);for(;a&&a!=b;)a=a.parentNode;return !!a},Sb:function(b){return a.a.vd(b,b.ownerDocument.documentElement)},kd:function(b){return !!a.a.Lb(b,a.a.Sb)},R:function(a){return a&&
  		a.tagName&&a.tagName.toLowerCase()},Ac:function(b){return a.onError?function(){try{return b.apply(this,arguments)}catch(c){throw a.onError&&a.onError(c),c;}}:b},setTimeout:function(b,c){return setTimeout(a.a.Ac(b),c)},Gc:function(b){setTimeout(function(){a.onError&&a.onError(b);throw b;},0);},B:function(b,c,d){var e=a.a.Ac(d);d=l[c];if(a.options.useOnlyNativeEvents||d||!v)if(d||"function"!=typeof b.addEventListener)if("undefined"!=typeof b.attachEvent){var k=function(a){e.call(b,a);},f="on"+c;b.attachEvent(f,
  		k);a.a.K.za(b,function(){b.detachEvent(f,k);});}else throw Error("Browser doesn't support addEventListener or attachEvent");else b.addEventListener(c,e,!1);else t||(t="function"==typeof v(b).on?"on":"bind"),v(b)[t](c,e);},Fb:function(b,c){if(!b||!b.nodeType)throw Error("element must be a DOM node when calling triggerEvent");var d;"input"===a.a.R(b)&&b.type&&"click"==c.toLowerCase()?(d=b.type,d="checkbox"==d||"radio"==d):d=!1;if(a.options.useOnlyNativeEvents||!v||d)if("function"==typeof w.createEvent)if("function"==
  		typeof b.dispatchEvent)d=w.createEvent(k[c]||"HTMLEvents"),d.initEvent(c,!0,!0,A,0,0,0,0,0,!1,!1,!1,!1,0,b),b.dispatchEvent(d);else throw Error("The supplied element doesn't support dispatchEvent");else if(d&&b.click)b.click();else if("undefined"!=typeof b.fireEvent)b.fireEvent("on"+c);else throw Error("Browser doesn't support triggering events");else v(b).trigger(c);},f:function(b){return a.O(b)?b():b},bc:function(b){return a.O(b)?b.v():b},Eb:function(b,c,d){var l;c&&("object"===typeof b.classList?
  		(l=b.classList[d?"add":"remove"],a.a.D(c.match(q),function(a){l.call(b.classList,a);})):"string"===typeof b.className.baseVal?e(b.className,"baseVal",c,d):e(b,"className",c,d));},Bb:function(b,c){var d=a.a.f(c);if(null===d||d===n)d="";var e=a.h.firstChild(b);!e||3!=e.nodeType||a.h.nextSibling(e)?a.h.va(b,[b.ownerDocument.createTextNode(d)]):e.data=d;a.a.Ad(b);},Yc:function(a,b){a.name=b;if(7>=p)try{var c=a.name.replace(/[&<>'"]/g,function(a){return "&#"+a.charCodeAt(0)+";"});a.mergeAttributes(w.createElement("<input name='"+
  		c+"'/>"),!1);}catch(d){}},Ad:function(a){9<=p&&(a=1==a.nodeType?a:a.parentNode,a.style&&(a.style.zoom=a.style.zoom));},wd:function(a){if(p){var b=a.style.width;a.style.width=0;a.style.width=b;}},Pd:function(b,c){b=a.a.f(b);c=a.a.f(c);for(var d=[],e=b;e<=c;e++)d.push(e);return d},la:function(a){for(var b=[],c=0,d=a.length;c<d;c++)b.push(a[c]);return b},Da:function(a){return h?Symbol(a):a},Zd:6===p,$d:7===p,W:p,Lc:function(b,c){for(var d=a.a.la(b.getElementsByTagName("input")).concat(a.a.la(b.getElementsByTagName("textarea"))),
  		e="string"==typeof c?function(a){return a.name===c}:function(a){return c.test(a.name)},l=[],k=d.length-1;0<=k;k--)e(d[k])&&l.push(d[k]);return l},Nd:function(b){return "string"==typeof b&&(b=a.a.Db(b))?H&&H.parse?H.parse(b):(new Function("return "+b))():null},hc:function(b,c,d){if(!H||!H.stringify)throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
  		return H.stringify(a.a.f(b),c,d)},Od:function(c,d,e){e=e||{};var l=e.params||{},k=e.includeFields||this.Jc,f=c;if("object"==typeof c&&"form"===a.a.R(c))for(var f=c.action,h=k.length-1;0<=h;h--)for(var g=a.a.Lc(c,k[h]),m=g.length-1;0<=m;m--)l[g[m].name]=g[m].value;d=a.a.f(d);var p=w.createElement("form");p.style.display="none";p.action=f;p.method="post";for(var q in d)c=w.createElement("input"),c.type="hidden",c.name=q,c.value=a.a.hc(a.a.f(d[q])),p.appendChild(c);b(l,function(a,b){var c=w.createElement("input");
  		c.type="hidden";c.name=a;c.value=b;p.appendChild(c);});w.body.appendChild(p);e.submitter?e.submitter(p):p.submit();setTimeout(function(){p.parentNode.removeChild(p);},0);}}}();a.b("utils",a.a);a.b("utils.arrayForEach",a.a.D);a.b("utils.arrayFirst",a.a.Lb);a.b("utils.arrayFilter",a.a.jb);a.b("utils.arrayGetDistinctValues",a.a.wc);a.b("utils.arrayIndexOf",a.a.A);a.b("utils.arrayMap",a.a.Mb);a.b("utils.arrayPushAll",a.a.Nb);a.b("utils.arrayRemoveItem",a.a.Pa);a.b("utils.cloneNodes",a.a.Ca);a.b("utils.createSymbolOrString",
  		a.a.Da);a.b("utils.extend",a.a.extend);a.b("utils.fieldsIncludedWithJsonPost",a.a.Jc);a.b("utils.getFormFields",a.a.Lc);a.b("utils.objectMap",a.a.Ga);a.b("utils.peekObservable",a.a.bc);a.b("utils.postJson",a.a.Od);a.b("utils.parseJson",a.a.Nd);a.b("utils.registerEventHandler",a.a.B);a.b("utils.stringifyJson",a.a.hc);a.b("utils.range",a.a.Pd);a.b("utils.toggleDomNodeCssClass",a.a.Eb);a.b("utils.triggerEvent",a.a.Fb);a.b("utils.unwrapObservable",a.a.f);a.b("utils.objectForEach",a.a.P);a.b("utils.addOrRemoveItem",
  		a.a.Na);a.b("utils.setTextContent",a.a.Bb);a.b("unwrap",a.a.f);Function.prototype.bind||(Function.prototype.bind=function(a){var c=this;if(1===arguments.length)return function(){return c.apply(a,arguments)};var d=Array.prototype.slice.call(arguments,1);return function(){var e=d.slice(0);e.push.apply(e,arguments);return c.apply(a,e)}});a.a.g=new function(){var b=0,c="__ko__"+(new Date).getTime(),d={},e,f;a.a.W?(e=function(a,e){var f=a[c];if(!f||"null"===f||!d[f]){if(!e)return n;f=a[c]="ko"+b++;d[f]=
  		{};}return d[f]},f=function(a){var b=a[c];return b?(delete d[b],a[c]=null,!0):!1}):(e=function(a,b){var d=a[c];!d&&b&&(d=a[c]={});return d},f=function(a){return a[c]?(delete a[c],!0):!1});return {get:function(a,b){var c=e(a,!1);return c&&c[b]},set:function(a,b,c){(a=e(a,c!==n))&&(a[b]=c);},Ub:function(a,b,c){a=e(a,!0);return a[b]||(a[b]=c)},clear:f,Z:function(){return b++ +c}}};a.b("utils.domData",a.a.g);a.b("utils.domData.clear",a.a.g.clear);a.a.K=new function(){function b(b,c){var d=a.a.g.get(b,e);
  		d===n&&c&&(d=[],a.a.g.set(b,e,d));return d}function c(c){var e=b(c,!1);if(e)for(var e=e.slice(0),k=0;k<e.length;k++)e[k](c);a.a.g.clear(c);a.a.K.cleanExternalData(c);g[c.nodeType]&&d(c.childNodes,!0);}function d(b,d){for(var e=[],l,f=0;f<b.length;f++)if(!d||8===b[f].nodeType)if(c(e[e.length]=l=b[f]),b[f]!==l)for(;f--&&-1==a.a.A(e,b[f]););}var e=a.a.g.Z(),f={1:!0,8:!0,9:!0},g={1:!0,9:!0};return {za:function(a,c){if("function"!=typeof c)throw Error("Callback must be a function");b(a,!0).push(c);},yb:function(c,
  		d){var f=b(c,!1);f&&(a.a.Pa(f,d),0==f.length&&a.a.g.set(c,e,n));},oa:function(b){a.u.G(function(){f[b.nodeType]&&(c(b),g[b.nodeType]&&d(b.getElementsByTagName("*")));});return b},removeNode:function(b){a.oa(b);b.parentNode&&b.parentNode.removeChild(b);},cleanExternalData:function(a){v&&"function"==typeof v.cleanData&&v.cleanData([a]);}}};a.oa=a.a.K.oa;a.removeNode=a.a.K.removeNode;a.b("cleanNode",a.oa);a.b("removeNode",a.removeNode);a.b("utils.domNodeDisposal",a.a.K);a.b("utils.domNodeDisposal.addDisposeCallback",
  		a.a.K.za);a.b("utils.domNodeDisposal.removeDisposeCallback",a.a.K.yb);(function(){var b=[0,"",""],c=[1,"<table>","</table>"],d=[3,"<table><tbody><tr>","</tr></tbody></table>"],e=[1,"<select multiple='multiple'>","</select>"],f={thead:c,tbody:c,tfoot:c,tr:[2,"<table><tbody>","</tbody></table>"],td:d,th:d,option:e,optgroup:e},g=8>=a.a.W;a.a.ua=function(c,d){var e;if(v)if(v.parseHTML)e=v.parseHTML(c,d)||[];else {if((e=v.clean([c],d))&&e[0]){for(var l=e[0];l.parentNode&&11!==l.parentNode.nodeType;)l=l.parentNode;
  		l.parentNode&&l.parentNode.removeChild(l);}}else {(e=d)||(e=w);var l=e.parentWindow||e.defaultView||A,p=a.a.Db(c).toLowerCase(),q=e.createElement("div"),t;t=(p=p.match(/^(?:\x3c!--.*?--\x3e\s*?)*?<([a-z]+)[\s>]/))&&f[p[1]]||b;p=t[0];t="ignored<div>"+t[1]+c+t[2]+"</div>";"function"==typeof l.innerShiv?q.appendChild(l.innerShiv(t)):(g&&e.body.appendChild(q),q.innerHTML=t,g&&q.parentNode.removeChild(q));for(;p--;)q=q.lastChild;e=a.a.la(q.lastChild.childNodes);}return e};a.a.Md=function(b,c){var d=a.a.ua(b,
  		c);return d.length&&d[0].parentElement||a.a.Yb(d)};a.a.fc=function(b,c){a.a.Tb(b);c=a.a.f(c);if(null!==c&&c!==n)if("string"!=typeof c&&(c=c.toString()),v)v(b).html(c);else for(var d=a.a.ua(c,b.ownerDocument),e=0;e<d.length;e++)b.appendChild(d[e]);};})();a.b("utils.parseHtmlFragment",a.a.ua);a.b("utils.setHtml",a.a.fc);a.aa=function(){function b(c,e){if(c)if(8==c.nodeType){var f=a.aa.Uc(c.nodeValue);null!=f&&e.push({ud:c,Kd:f});}else if(1==c.nodeType)for(var f=0,g=c.childNodes,h=g.length;f<h;f++)b(g[f],
  		e);}var c={};return {Xb:function(a){if("function"!=typeof a)throw Error("You can only pass a function to ko.memoization.memoize()");var b=(4294967296*(1+Math.random())|0).toString(16).substring(1)+(4294967296*(1+Math.random())|0).toString(16).substring(1);c[b]=a;return "\x3c!--[ko_memo:"+b+"]--\x3e"},bd:function(a,b){var f=c[a];if(f===n)throw Error("Couldn't find any memo with ID "+a+". Perhaps it's already been unmemoized.");try{return f.apply(null,b||[]),!0}finally{delete c[a];}},cd:function(c,e){var f=
  		[];b(c,f);for(var g=0,h=f.length;g<h;g++){var m=f[g].ud,k=[m];e&&a.a.Nb(k,e);a.aa.bd(f[g].Kd,k);m.nodeValue="";m.parentNode&&m.parentNode.removeChild(m);}},Uc:function(a){return (a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:null}}}();a.b("memoization",a.aa);a.b("memoization.memoize",a.aa.Xb);a.b("memoization.unmemoize",a.aa.bd);a.b("memoization.parseMemoText",a.aa.Uc);a.b("memoization.unmemoizeDomNodeAndDescendants",a.aa.cd);a.na=function(){function b(){if(f)for(var b=f,c=0,d;h<f;)if(d=e[h++]){if(h>b){if(5E3<=
  		++c){h=f;a.a.Gc(Error("'Too much recursion' after processing "+c+" task groups."));break}b=f;}try{d();}catch(p){a.a.Gc(p);}}}function c(){b();h=f=e.length=0;}var d,e=[],f=0,g=1,h=0;A.MutationObserver?d=function(a){var b=w.createElement("div");(new MutationObserver(a)).observe(b,{attributes:!0});return function(){b.classList.toggle("foo");}}(c):d=w&&"onreadystatechange"in w.createElement("script")?function(a){var b=w.createElement("script");b.onreadystatechange=function(){b.onreadystatechange=null;w.documentElement.removeChild(b);
  		b=null;a();};w.documentElement.appendChild(b);}:function(a){setTimeout(a,0);};return {scheduler:d,zb:function(b){f||a.na.scheduler(c);e[f++]=b;return g++},cancel:function(a){a=a-(g-f);a>=h&&a<f&&(e[a]=null);},resetForTesting:function(){var a=f-h;h=f=e.length=0;return a},Sd:b}}();a.b("tasks",a.na);a.b("tasks.schedule",a.na.zb);a.b("tasks.runEarly",a.na.Sd);a.Ta={throttle:function(b,c){b.throttleEvaluation=c;var d=null;return a.$({read:b,write:function(e){clearTimeout(d);d=a.a.setTimeout(function(){b(e);},
  		c);}})},rateLimit:function(a,c){var d,e,f;"number"==typeof c?d=c:(d=c.timeout,e=c.method);a.Hb=!1;f="function"==typeof e?e:"notifyWhenChangesStop"==e?Y:X;a.ub(function(a){return f(a,d,c)});},deferred:function(b,c){if(!0!==c)throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");b.Hb||(b.Hb=!0,b.ub(function(c){var e,f=!1;return function(){if(!f){a.na.cancel(e);e=a.na.zb(c);try{f=!0,b.notifySubscribers(n,"dirty");}finally{f=
  		!1;}}}}));},notify:function(a,c){a.equalityComparer="always"==c?null:K;}};var W={undefined:1,"boolean":1,number:1,string:1};a.b("extenders",a.Ta);a.ic=function(b,c,d){this.da=b;this.lc=c;this.mc=d;this.Ib=!1;this.fb=this.Jb=null;a.L(this,"dispose",this.s);a.L(this,"disposeWhenNodeIsRemoved",this.l);};a.ic.prototype.s=function(){this.Ib||(this.fb&&a.a.K.yb(this.Jb,this.fb),this.Ib=!0,this.mc(),this.da=this.lc=this.mc=this.Jb=this.fb=null);};a.ic.prototype.l=function(b){this.Jb=b;a.a.K.za(b,this.fb=this.s.bind(this));};
  		a.T=function(){a.a.Ab(this,D);D.qb(this);};var D={qb:function(a){a.U={change:[]};a.sc=1;},subscribe:function(b,c,d){var e=this;d=d||"change";var f=new a.ic(e,c?b.bind(c):b,function(){a.a.Pa(e.U[d],f);e.hb&&e.hb(d);});e.Qa&&e.Qa(d);e.U[d]||(e.U[d]=[]);e.U[d].push(f);return f},notifySubscribers:function(b,c){c=c||"change";"change"===c&&this.Gb();if(this.Wa(c)){var d="change"===c&&this.ed||this.U[c].slice(0);try{a.u.xc();for(var e=0,f;f=d[e];++e)f.Ib||f.lc(b);}finally{a.u.end();}}},ob:function(){return this.sc},
  		Dd:function(a){return this.ob()!==a},Gb:function(){++this.sc;},ub:function(b){var c=this,d=a.O(c),e,f,g,h,m;c.gb||(c.gb=c.notifySubscribers,c.notifySubscribers=Z);var k=b(function(){c.Ja=!1;d&&h===c&&(h=c.nc?c.nc():c());var a=f||m&&c.sb(g,h);m=f=e=!1;a&&c.gb(g=h);});c.qc=function(a,b){b&&c.Ja||(m=!b);c.ed=c.U.change.slice(0);c.Ja=e=!0;h=a;k();};c.pc=function(a){e||(g=a,c.gb(a,"beforeChange"));};c.rc=function(){m=!0;};c.gd=function(){c.sb(g,c.v(!0))&&(f=!0);};},Wa:function(a){return this.U[a]&&this.U[a].length},
  		Bd:function(b){if(b)return this.U[b]&&this.U[b].length||0;var c=0;a.a.P(this.U,function(a,b){"dirty"!==a&&(c+=b.length);});return c},sb:function(a,c){return !this.equalityComparer||!this.equalityComparer(a,c)},toString:function(){return "[object Object]"},extend:function(b){var c=this;b&&a.a.P(b,function(b,e){var f=a.Ta[b];"function"==typeof f&&(c=f(c,e)||c);});return c}};a.L(D,"init",D.qb);a.L(D,"subscribe",D.subscribe);a.L(D,"extend",D.extend);a.L(D,"getSubscriptionsCount",D.Bd);a.a.Ba&&a.a.setPrototypeOf(D,
  		Function.prototype);a.T.fn=D;a.Qc=function(a){return null!=a&&"function"==typeof a.subscribe&&"function"==typeof a.notifySubscribers};a.b("subscribable",a.T);a.b("isSubscribable",a.Qc);a.S=a.u=function(){function b(a){d.push(e);e=a;}function c(){e=d.pop();}var d=[],e,f=0;return {xc:b,end:c,cc:function(b){if(e){if(!a.Qc(b))throw Error("Only subscribable things can act as dependencies");e.od.call(e.pd,b,b.fd||(b.fd=++f));}},G:function(a,d,e){try{return b(),a.apply(d,e||[])}finally{c();}},qa:function(){if(e)return e.o.qa()},
  		Va:function(){if(e)return e.o.Va()},Ya:function(){if(e)return e.Ya},o:function(){if(e)return e.o}}}();a.b("computedContext",a.S);a.b("computedContext.getDependenciesCount",a.S.qa);a.b("computedContext.getDependencies",a.S.Va);a.b("computedContext.isInitial",a.S.Ya);a.b("computedContext.registerDependency",a.S.cc);a.b("ignoreDependencies",a.Yd=a.u.G);var I=a.a.Da("_latestValue");a.ta=function(b){function c(){if(0<arguments.length)return c.sb(c[I],arguments[0])&&(c.ya(),c[I]=arguments[0],c.xa()),this;
  		a.u.cc(c);return c[I]}c[I]=b;a.a.Ba||a.a.extend(c,a.T.fn);a.T.fn.qb(c);a.a.Ab(c,F);a.options.deferUpdates&&a.Ta.deferred(c,!0);return c};var F={equalityComparer:K,v:function(){return this[I]},xa:function(){this.notifySubscribers(this[I],"spectate");this.notifySubscribers(this[I]);},ya:function(){this.notifySubscribers(this[I],"beforeChange");}};a.a.Ba&&a.a.setPrototypeOf(F,a.T.fn);var G=a.ta.Ma="__ko_proto__";F[G]=a.ta;a.O=function(b){if((b="function"==typeof b&&b[G])&&b!==F[G]&&b!==a.o.fn[G])throw Error("Invalid object that looks like an observable; possibly from another Knockout instance");
  		return !!b};a.Za=function(b){return "function"==typeof b&&(b[G]===F[G]||b[G]===a.o.fn[G]&&b.Nc)};a.b("observable",a.ta);a.b("isObservable",a.O);a.b("isWriteableObservable",a.Za);a.b("isWritableObservable",a.Za);a.b("observable.fn",F);a.L(F,"peek",F.v);a.L(F,"valueHasMutated",F.xa);a.L(F,"valueWillMutate",F.ya);a.Ha=function(b){b=b||[];if("object"!=typeof b||!("length"in b))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");b=a.ta(b);a.a.Ab(b,
  		a.Ha.fn);return b.extend({trackArrayChanges:!0})};a.Ha.fn={remove:function(b){for(var c=this.v(),d=[],e="function"!=typeof b||a.O(b)?function(a){return a===b}:b,f=0;f<c.length;f++){var g=c[f];if(e(g)){0===d.length&&this.ya();if(c[f]!==g)throw Error("Array modified during remove; cannot remove item");d.push(g);c.splice(f,1);f--;}}d.length&&this.xa();return d},removeAll:function(b){if(b===n){var c=this.v(),d=c.slice(0);this.ya();c.splice(0,c.length);this.xa();return d}return b?this.remove(function(c){return 0<=
  		a.a.A(b,c)}):[]},destroy:function(b){var c=this.v(),d="function"!=typeof b||a.O(b)?function(a){return a===b}:b;this.ya();for(var e=c.length-1;0<=e;e--){var f=c[e];d(f)&&(f._destroy=!0);}this.xa();},destroyAll:function(b){return b===n?this.destroy(function(){return !0}):b?this.destroy(function(c){return 0<=a.a.A(b,c)}):[]},indexOf:function(b){var c=this();return a.a.A(c,b)},replace:function(a,c){var d=this.indexOf(a);0<=d&&(this.ya(),this.v()[d]=c,this.xa());},sorted:function(a){var c=this().slice(0);
  		return a?c.sort(a):c.sort()},reversed:function(){return this().slice(0).reverse()}};a.a.Ba&&a.a.setPrototypeOf(a.Ha.fn,a.ta.fn);a.a.D("pop push reverse shift sort splice unshift".split(" "),function(b){a.Ha.fn[b]=function(){var a=this.v();this.ya();this.zc(a,b,arguments);var d=a[b].apply(a,arguments);this.xa();return d===a?this:d};});a.a.D(["slice"],function(b){a.Ha.fn[b]=function(){var a=this();return a[b].apply(a,arguments)};});a.Pc=function(b){return a.O(b)&&"function"==typeof b.remove&&"function"==
  		typeof b.push};a.b("observableArray",a.Ha);a.b("isObservableArray",a.Pc);a.Ta.trackArrayChanges=function(b,c){function d(){function c(){if(m){var d=[].concat(b.v()||[]),e;if(b.Wa("arrayChange")){if(!f||1<m)f=a.a.Pb(k,d,b.Ob);e=f;}k=d;f=null;m=0;e&&e.length&&b.notifySubscribers(e,"arrayChange");}}e?c():(e=!0,h=b.subscribe(function(){++m;},null,"spectate"),k=[].concat(b.v()||[]),f=null,g=b.subscribe(c));}b.Ob={};c&&"object"==typeof c&&a.a.extend(b.Ob,c);b.Ob.sparse=!0;if(!b.zc){var e=!1,f=null,g,h,m=0,
  		k,l=b.Qa,p=b.hb;b.Qa=function(a){l&&l.call(b,a);"arrayChange"===a&&d();};b.hb=function(a){p&&p.call(b,a);"arrayChange"!==a||b.Wa("arrayChange")||(g&&g.s(),h&&h.s(),h=g=null,e=!1,k=n);};b.zc=function(b,c,d){function l(a,b,c){return k[k.length]={status:a,value:b,index:c}}if(e&&!m){var k=[],p=b.length,g=d.length,h=0;switch(c){case "push":h=p;case "unshift":for(c=0;c<g;c++)l("added",d[c],h+c);break;case "pop":h=p-1;case "shift":p&&l("deleted",b[h],h);break;case "splice":c=Math.min(Math.max(0,0>d[0]?p+d[0]:
  		d[0]),p);for(var p=1===g?p:Math.min(c+(d[1]||0),p),g=c+g-2,h=Math.max(p,g),U=[],L=[],n=2;c<h;++c,++n)c<p&&L.push(l("deleted",b[c],c)),c<g&&U.push(l("added",d[n],c));a.a.Kc(L,U);break;default:return}f=k;}};}};var r=a.a.Da("_state");a.o=a.$=function(b,c,d){function e(){if(0<arguments.length){if("function"===typeof f)f.apply(g.nb,arguments);else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");return this}g.ra||
  		a.u.cc(e);(g.ka||g.J&&e.Xa())&&e.ha();return g.X}"object"===typeof b?d=b:(d=d||{},b&&(d.read=b));if("function"!=typeof d.read)throw Error("Pass a function that returns the value of the ko.computed");var f=d.write,g={X:n,sa:!0,ka:!0,rb:!1,jc:!1,ra:!1,wb:!1,J:!1,Wc:d.read,nb:c||d.owner,l:d.disposeWhenNodeIsRemoved||d.l||null,Sa:d.disposeWhen||d.Sa,Rb:null,I:{},V:0,Ic:null};e[r]=g;e.Nc="function"===typeof f;a.a.Ba||a.a.extend(e,a.T.fn);a.T.fn.qb(e);a.a.Ab(e,C);d.pure?(g.wb=!0,g.J=!0,a.a.extend(e,da)):
  		d.deferEvaluation&&a.a.extend(e,ea);a.options.deferUpdates&&a.Ta.deferred(e,!0);g.l&&(g.jc=!0,g.l.nodeType||(g.l=null));g.J||d.deferEvaluation||e.ha();g.l&&e.ja()&&a.a.K.za(g.l,g.Rb=function(){e.s();});return e};var C={equalityComparer:K,qa:function(){return this[r].V},Va:function(){var b=[];a.a.P(this[r].I,function(a,d){b[d.Ka]=d.da;});return b},Vb:function(b){if(!this[r].V)return !1;var c=this.Va();return -1!==a.a.A(c,b)?!0:!!a.a.Lb(c,function(a){return a.Vb&&a.Vb(b)})},uc:function(a,c,d){if(this[r].wb&&
  		c===this)throw Error("A 'pure' computed must not be called recursively");this[r].I[a]=d;d.Ka=this[r].V++;d.La=c.ob();},Xa:function(){var a,c,d=this[r].I;for(a in d)if(Object.prototype.hasOwnProperty.call(d,a)&&(c=d[a],this.Ia&&c.da.Ja||c.da.Dd(c.La)))return !0},Jd:function(){this.Ia&&!this[r].rb&&this.Ia(!1);},ja:function(){var a=this[r];return a.ka||0<a.V},Rd:function(){this.Ja?this[r].ka&&(this[r].sa=!0):this.Hc();},$c:function(a){if(a.Hb){var c=a.subscribe(this.Jd,this,"dirty"),d=a.subscribe(this.Rd,
  		this);return {da:a,s:function(){c.s();d.s();}}}return a.subscribe(this.Hc,this)},Hc:function(){var b=this,c=b.throttleEvaluation;c&&0<=c?(clearTimeout(this[r].Ic),this[r].Ic=a.a.setTimeout(function(){b.ha(!0);},c)):b.Ia?b.Ia(!0):b.ha(!0);},ha:function(b){var c=this[r],d=c.Sa,e=!1;if(!c.rb&&!c.ra){if(c.l&&!a.a.Sb(c.l)||d&&d()){if(!c.jc){this.s();return}}else c.jc=!1;c.rb=!0;try{e=this.zd(b);}finally{c.rb=!1;}return e}},zd:function(b){var c=this[r],d=!1,e=c.wb?n:!c.V,d={qd:this,mb:c.I,Qb:c.V};a.u.xc({pd:d,
  		od:ba,o:this,Ya:e});c.I={};c.V=0;var f=this.yd(c,d);c.V?d=this.sb(c.X,f):(this.s(),d=!0);d&&(c.J?this.Gb():this.notifySubscribers(c.X,"beforeChange"),c.X=f,this.notifySubscribers(c.X,"spectate"),!c.J&&b&&this.notifySubscribers(c.X),this.rc&&this.rc());e&&this.notifySubscribers(c.X,"awake");return d},yd:function(b,c){try{var d=b.Wc;return b.nb?d.call(b.nb):d()}finally{a.u.end(),c.Qb&&!b.J&&a.a.P(c.mb,aa),b.sa=b.ka=!1;}},v:function(a){var c=this[r];(c.ka&&(a||!c.V)||c.J&&this.Xa())&&this.ha();return c.X},
  		ub:function(b){a.T.fn.ub.call(this,b);this.nc=function(){this[r].J||(this[r].sa?this.ha():this[r].ka=!1);return this[r].X};this.Ia=function(a){this.pc(this[r].X);this[r].ka=!0;a&&(this[r].sa=!0);this.qc(this,!a);};},s:function(){var b=this[r];!b.J&&b.I&&a.a.P(b.I,function(a,b){b.s&&b.s();});b.l&&b.Rb&&a.a.K.yb(b.l,b.Rb);b.I=n;b.V=0;b.ra=!0;b.sa=!1;b.ka=!1;b.J=!1;b.l=n;b.Sa=n;b.Wc=n;this.Nc||(b.nb=n);}},da={Qa:function(b){var c=this,d=c[r];if(!d.ra&&d.J&&"change"==b){d.J=!1;if(d.sa||c.Xa())d.I=null,d.V=
  		0,c.ha()&&c.Gb();else {var e=[];a.a.P(d.I,function(a,b){e[b.Ka]=a;});a.a.D(e,function(a,b){var e=d.I[a],m=c.$c(e.da);m.Ka=b;m.La=e.La;d.I[a]=m;});c.Xa()&&c.ha()&&c.Gb();}d.ra||c.notifySubscribers(d.X,"awake");}},hb:function(b){var c=this[r];c.ra||"change"!=b||this.Wa("change")||(a.a.P(c.I,function(a,b){b.s&&(c.I[a]={da:b.da,Ka:b.Ka,La:b.La},b.s());}),c.J=!0,this.notifySubscribers(n,"asleep"));},ob:function(){var b=this[r];b.J&&(b.sa||this.Xa())&&this.ha();return a.T.fn.ob.call(this)}},ea={Qa:function(a){"change"!=
  		a&&"beforeChange"!=a||this.v();}};a.a.Ba&&a.a.setPrototypeOf(C,a.T.fn);var N=a.ta.Ma;C[N]=a.o;a.Oc=function(a){return "function"==typeof a&&a[N]===C[N]};a.Fd=function(b){return a.Oc(b)&&b[r]&&b[r].wb};a.b("computed",a.o);a.b("dependentObservable",a.o);a.b("isComputed",a.Oc);a.b("isPureComputed",a.Fd);a.b("computed.fn",C);a.L(C,"peek",C.v);a.L(C,"dispose",C.s);a.L(C,"isActive",C.ja);a.L(C,"getDependenciesCount",C.qa);a.L(C,"getDependencies",C.Va);a.xb=function(b,c){if("function"===typeof b)return a.o(b,
  		c,{pure:!0});b=a.a.extend({},b);b.pure=!0;return a.o(b,c)};a.b("pureComputed",a.xb);(function(){function b(a,f,g){g=g||new d;a=f(a);if("object"!=typeof a||null===a||a===n||a instanceof RegExp||a instanceof Date||a instanceof String||a instanceof Number||a instanceof Boolean)return a;var h=a instanceof Array?[]:{};g.save(a,h);c(a,function(c){var d=f(a[c]);switch(typeof d){case "boolean":case "number":case "string":case "function":h[c]=d;break;case "object":case "undefined":var l=g.get(d);h[c]=l!==
  		n?l:b(d,f,g);}});return h}function c(a,b){if(a instanceof Array){for(var c=0;c<a.length;c++)b(c);"function"==typeof a.toJSON&&b("toJSON");}else for(c in a)b(c);}function d(){this.keys=[];this.values=[];}a.ad=function(c){if(0==arguments.length)throw Error("When calling ko.toJS, pass the object you want to convert.");return b(c,function(b){for(var c=0;a.O(b)&&10>c;c++)b=b();return b})};a.toJSON=function(b,c,d){b=a.ad(b);return a.a.hc(b,c,d)};d.prototype={constructor:d,save:function(b,c){var d=a.a.A(this.keys,
  		b);0<=d?this.values[d]=c:(this.keys.push(b),this.values.push(c));},get:function(b){b=a.a.A(this.keys,b);return 0<=b?this.values[b]:n}};})();a.b("toJS",a.ad);a.b("toJSON",a.toJSON);a.Wd=function(b,c,d){function e(c){var e=a.xb(b,d).extend({ma:"always"}),h=e.subscribe(function(a){a&&(h.s(),c(a));});e.notifySubscribers(e.v());return h}return "function"!==typeof Promise||c?e(c.bind(d)):new Promise(e)};a.b("when",a.Wd);(function(){a.w={M:function(b){switch(a.a.R(b)){case "option":return !0===b.__ko__hasDomDataOptionValue__?
  		a.a.g.get(b,a.c.options.$b):7>=a.a.W?b.getAttributeNode("value")&&b.getAttributeNode("value").specified?b.value:b.text:b.value;case "select":return 0<=b.selectedIndex?a.w.M(b.options[b.selectedIndex]):n;default:return b.value}},cb:function(b,c,d){switch(a.a.R(b)){case "option":"string"===typeof c?(a.a.g.set(b,a.c.options.$b,n),"__ko__hasDomDataOptionValue__"in b&&delete b.__ko__hasDomDataOptionValue__,b.value=c):(a.a.g.set(b,a.c.options.$b,c),b.__ko__hasDomDataOptionValue__=!0,b.value="number"===
  		typeof c?c:"");break;case "select":if(""===c||null===c)c=n;for(var e=-1,f=0,g=b.options.length,h;f<g;++f)if(h=a.w.M(b.options[f]),h==c||""===h&&c===n){e=f;break}if(d||0<=e||c===n&&1<b.size)b.selectedIndex=e,6===a.a.W&&a.a.setTimeout(function(){b.selectedIndex=e;},0);break;default:if(null===c||c===n)c="";b.value=c;}}};})();a.b("selectExtensions",a.w);a.b("selectExtensions.readValue",a.w.M);a.b("selectExtensions.writeValue",a.w.cb);a.m=function(){function b(b){b=a.a.Db(b);123===b.charCodeAt(0)&&(b=b.slice(1,
  		-1));b+="\n,";var c=[],d=b.match(e),p,q=[],h=0;if(1<d.length){for(var x=0,B;B=d[x];++x){var u=B.charCodeAt(0);if(44===u){if(0>=h){c.push(p&&q.length?{key:p,value:q.join("")}:{unknown:p||q.join("")});p=h=0;q=[];continue}}else if(58===u){if(!h&&!p&&1===q.length){p=q.pop();continue}}else if(47===u&&1<B.length&&(47===B.charCodeAt(1)||42===B.charCodeAt(1)))continue;else 47===u&&x&&1<B.length?(u=d[x-1].match(f))&&!g[u[0]]&&(b=b.substr(b.indexOf(B)+1),d=b.match(e),x=-1,B="/"):40===u||123===u||91===u?++h:
  		41===u||125===u||93===u?--h:p||q.length||34!==u&&39!==u||(B=B.slice(1,-1));q.push(B);}if(0<h)throw Error("Unbalanced parentheses, braces, or brackets");}return c}var c=["true","false","null","undefined"],d=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,e=RegExp("\"(?:\\\\.|[^\"])*\"|'(?:\\\\.|[^'])*'|`(?:\\\\.|[^`])*`|/\\*(?:[^*]|\\*+[^*/])*\\*+/|//.*\n|/(?:\\\\.|[^/])+/w*|[^\\s:,/][^,\"'`{}()/:[\\]]*[^\\s,\"'`{}()/:[\\]]|[^\\s]","g"),f=/[\])"'A-Za-z0-9_$]+$/,g={"in":1,"return":1,"typeof":1},
  		h={};return {Ra:[],wa:h,ac:b,vb:function(e,f){function l(b,e){var f;if(!x){var k=a.getBindingHandler(b);if(k&&k.preprocess&&!(e=k.preprocess(e,b,l)))return;if(k=h[b])f=e,0<=a.a.A(c,f)?f=!1:(k=f.match(d),f=null===k?!1:k[1]?"Object("+k[1]+")"+k[2]:f),k=f;k&&q.push("'"+("string"==typeof h[b]?h[b]:b)+"':function(_z){"+f+"=_z}");}g&&(e="function(){return "+e+" }");p.push("'"+b+"':"+e);}f=f||{};var p=[],q=[],g=f.valueAccessors,x=f.bindingParams,B="string"===typeof e?b(e):e;a.a.D(B,function(a){l(a.key||a.unknown,
  		a.value);});q.length&&l("_ko_property_writers","{"+q.join(",")+" }");return p.join(",")},Id:function(a,b){for(var c=0;c<a.length;c++)if(a[c].key==b)return !0;return !1},eb:function(b,c,d,e,f){if(b&&a.O(b))!a.Za(b)||f&&b.v()===e||b(e);else if((b=c.get("_ko_property_writers"))&&b[d])b[d](e);}}}();a.b("expressionRewriting",a.m);a.b("expressionRewriting.bindingRewriteValidators",a.m.Ra);a.b("expressionRewriting.parseObjectLiteral",a.m.ac);a.b("expressionRewriting.preProcessBindings",a.m.vb);a.b("expressionRewriting._twoWayBindings",
  		a.m.wa);a.b("jsonExpressionRewriting",a.m);a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",a.m.vb);(function(){function b(a){return 8==a.nodeType&&g.test(f?a.text:a.nodeValue)}function c(a){return 8==a.nodeType&&h.test(f?a.text:a.nodeValue)}function d(d,e){for(var f=d,h=1,g=[];f=f.nextSibling;){if(c(f)&&(a.a.g.set(f,k,!0),h--,0===h))return g;g.push(f);b(f)&&h++;}if(!e)throw Error("Cannot find closing comment tag to match: "+d.nodeValue);return null}function e(a,b){var c=d(a,b);return c?
  		0<c.length?c[c.length-1].nextSibling:a.nextSibling:null}var f=w&&"\x3c!--test--\x3e"===w.createComment("test").text,g=f?/^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/:/^\s*ko(?:\s+([\s\S]+))?\s*$/,h=f?/^\x3c!--\s*\/ko\s*--\x3e$/:/^\s*\/ko\s*$/,m={ul:!0,ol:!0},k="__ko_matchedEndComment__";a.h={ea:{},childNodes:function(a){return b(a)?d(a):a.childNodes},Ea:function(c){if(b(c)){c=a.h.childNodes(c);for(var d=0,e=c.length;d<e;d++)a.removeNode(c[d]);}else a.a.Tb(c);},va:function(c,d){if(b(c)){a.h.Ea(c);for(var e=
  		c.nextSibling,f=0,k=d.length;f<k;f++)e.parentNode.insertBefore(d[f],e);}else a.a.va(c,d);},Vc:function(a,c){var d;b(a)?(d=a.nextSibling,a=a.parentNode):d=a.firstChild;d?c!==d&&a.insertBefore(c,d):a.appendChild(c);},Wb:function(c,d,e){e?(e=e.nextSibling,b(c)&&(c=c.parentNode),e?d!==e&&c.insertBefore(d,e):c.appendChild(d)):a.h.Vc(c,d);},firstChild:function(a){if(b(a))return !a.nextSibling||c(a.nextSibling)?null:a.nextSibling;if(a.firstChild&&c(a.firstChild))throw Error("Found invalid end comment, as the first child of "+
  		a);return a.firstChild},nextSibling:function(d){b(d)&&(d=e(d));if(d.nextSibling&&c(d.nextSibling)){var f=d.nextSibling;if(c(f)&&!a.a.g.get(f,k))throw Error("Found end comment without a matching opening comment, as child of "+d);return null}return d.nextSibling},Cd:b,Vd:function(a){return (a=(f?a.text:a.nodeValue).match(g))?a[1]:null},Sc:function(d){if(m[a.a.R(d)]){var f=d.firstChild;if(f){do if(1===f.nodeType){var k;k=f.firstChild;var h=null;if(k){do if(h)h.push(k);else if(b(k)){var g=e(k,!0);g?k=
  		g:h=[k];}else c(k)&&(h=[k]);while(k=k.nextSibling)}if(k=h)for(h=f.nextSibling,g=0;g<k.length;g++)h?d.insertBefore(k[g],h):d.appendChild(k[g]);}while(f=f.nextSibling)}}}};})();a.b("virtualElements",a.h);a.b("virtualElements.allowedBindings",a.h.ea);a.b("virtualElements.emptyNode",a.h.Ea);a.b("virtualElements.insertAfter",a.h.Wb);a.b("virtualElements.prepend",a.h.Vc);a.b("virtualElements.setDomNodeChildren",a.h.va);(function(){a.ga=function(){this.nd={};};a.a.extend(a.ga.prototype,{nodeHasBindings:function(b){switch(b.nodeType){case 1:return null!=
  		b.getAttribute("data-bind")||a.j.getComponentNameForNode(b);case 8:return a.h.Cd(b);default:return !1}},getBindings:function(b,c){var d=this.getBindingsString(b,c),d=d?this.parseBindingsString(d,c,b):null;return a.j.tc(d,b,c,!1)},getBindingAccessors:function(b,c){var d=this.getBindingsString(b,c),d=d?this.parseBindingsString(d,c,b,{valueAccessors:!0}):null;return a.j.tc(d,b,c,!0)},getBindingsString:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind");case 8:return a.h.Vd(b);default:return null}},
  		parseBindingsString:function(b,c,d,e){try{var f=this.nd,g=b+(e&&e.valueAccessors||""),h;if(!(h=f[g])){var m,k="with($context){with($data||{}){return{"+a.m.vb(b,e)+"}}}";m=new Function("$context","$element",k);h=f[g]=m;}return h(c,d)}catch(l){throw l.message="Unable to parse bindings.\nBindings value: "+b+"\nMessage: "+l.message,l;}}});a.ga.instance=new a.ga;})();a.b("bindingProvider",a.ga);(function(){function b(b){var c=(b=a.a.g.get(b,z))&&b.N;c&&(b.N=null,c.Tc());}function c(c,d,e){this.node=c;this.yc=
  		d;this.kb=[];this.H=!1;d.N||a.a.K.za(c,b);e&&e.N&&(e.N.kb.push(c),this.Kb=e);}function d(a){return function(){return a}}function e(a){return a()}function f(b){return a.a.Ga(a.u.G(b),function(a,c){return function(){return b()[c]}})}function g(b,c,e){return "function"===typeof b?f(b.bind(null,c,e)):a.a.Ga(b,d)}function h(a,b){return f(this.getBindings.bind(this,a,b))}function m(b,c){var d=a.h.firstChild(c);if(d){var e,f=a.ga.instance,l=f.preprocessNode;if(l){for(;e=d;)d=a.h.nextSibling(e),l.call(f,e);
  		d=a.h.firstChild(c);}for(;e=d;)d=a.h.nextSibling(e),k(b,e);}a.i.ma(c,a.i.H);}function k(b,c){var d=b,e=1===c.nodeType;e&&a.h.Sc(c);if(e||a.ga.instance.nodeHasBindings(c))d=p(c,null,b).bindingContextForDescendants;d&&!u[a.a.R(c)]&&m(d,c);}function l(b){var c=[],d={},e=[];a.a.P(b,function ca(f){if(!d[f]){var k=a.getBindingHandler(f);k&&(k.after&&(e.push(f),a.a.D(k.after,function(c){if(b[c]){if(-1!==a.a.A(e,c))throw Error("Cannot combine the following bindings, because they have a cyclic dependency: "+e.join(", "));
  		ca(c);}}),e.length--),c.push({key:f,Mc:k}));d[f]=!0;}});return c}function p(b,c,d){var f=a.a.g.Ub(b,z,{}),k=f.hd;if(!c){if(k)throw Error("You cannot apply bindings multiple times to the same element.");f.hd=!0;}k||(f.context=d);f.Zb||(f.Zb={});var g;if(c&&"function"!==typeof c)g=c;else {var p=a.ga.instance,q=p.getBindingAccessors||h,m=a.$(function(){if(g=c?c(d,b):q.call(p,b,d)){if(d[t])d[t]();if(d[B])d[B]();}return g},null,{l:b});g&&m.ja()||(m=null);}var x=d,u;if(g){var J=function(){return a.a.Ga(m?m():
  		g,e)},r=m?function(a){return function(){return e(m()[a])}}:function(a){return g[a]};J.get=function(a){return g[a]&&e(r(a))};J.has=function(a){return a in g};a.i.H in g&&a.i.subscribe(b,a.i.H,function(){var c=(0, g[a.i.H])();if(c){var d=a.h.childNodes(b);d.length&&c(d,a.Ec(d[0]));}});a.i.pa in g&&(x=a.i.Cb(b,d),a.i.subscribe(b,a.i.pa,function(){var c=(0, g[a.i.pa])();c&&a.h.firstChild(b)&&c(b);}));f=l(g);a.a.D(f,function(c){var d=c.Mc.init,e=c.Mc.update,f=c.key;if(8===b.nodeType&&!a.h.ea[f])throw Error("The binding '"+
  		f+"' cannot be used with virtual elements");try{"function"==typeof d&&a.u.G(function(){var a=d(b,r(f),J,x.$data,x);if(a&&a.controlsDescendantBindings){if(u!==n)throw Error("Multiple bindings ("+u+" and "+f+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");u=f;}}),"function"==typeof e&&a.$(function(){e(b,r(f),J,x.$data,x);},null,{l:b});}catch(k){throw k.message='Unable to process binding "'+f+": "+g[f]+'"\nMessage: '+k.message,
  		k;}});}f=u===n;return {shouldBindDescendants:f,bindingContextForDescendants:f&&x}}function q(b,c){return b&&b instanceof a.fa?b:new a.fa(b,n,n,c)}var t=a.a.Da("_subscribable"),x=a.a.Da("_ancestorBindingInfo"),B=a.a.Da("_dataDependency");a.c={};var u={script:!0,textarea:!0,template:!0};a.getBindingHandler=function(b){return a.c[b]};var J={};a.fa=function(b,c,d,e,f){function k(){var b=p?h():h,f=a.a.f(b);c?(a.a.extend(l,c),x in c&&(l[x]=c[x])):(l.$parents=[],l.$root=f,l.ko=a);l[t]=q;g?f=l.$data:(l.$rawData=
  		b,l.$data=f);d&&(l[d]=f);e&&e(l,c,f);if(c&&c[t]&&!a.S.o().Vb(c[t]))c[t]();m&&(l[B]=m);return l.$data}var l=this,g=b===J,h=g?n:b,p="function"==typeof h&&!a.O(h),q,m=f&&f.dataDependency;f&&f.exportDependencies?k():(q=a.xb(k),q.v(),q.ja()?q.equalityComparer=null:l[t]=n);};a.fa.prototype.createChildContext=function(b,c,d,e){!e&&c&&"object"==typeof c&&(e=c,c=e.as,d=e.extend);if(c&&e&&e.noChildContext){var f="function"==typeof b&&!a.O(b);return new a.fa(J,this,null,function(a){d&&d(a);a[c]=f?b():b;},e)}return new a.fa(b,
  		this,c,function(a,b){a.$parentContext=b;a.$parent=b.$data;a.$parents=(b.$parents||[]).slice(0);a.$parents.unshift(a.$parent);d&&d(a);},e)};a.fa.prototype.extend=function(b,c){return new a.fa(J,this,null,function(c){a.a.extend(c,"function"==typeof b?b(c):b);},c)};var z=a.a.g.Z();c.prototype.Tc=function(){this.Kb&&this.Kb.N&&this.Kb.N.sd(this.node);};c.prototype.sd=function(b){a.a.Pa(this.kb,b);!this.kb.length&&this.H&&this.Cc();};c.prototype.Cc=function(){this.H=!0;this.yc.N&&!this.kb.length&&(this.yc.N=
  		null,a.a.K.yb(this.node,b),a.i.ma(this.node,a.i.pa),this.Tc());};a.i={H:"childrenComplete",pa:"descendantsComplete",subscribe:function(b,c,d,e,f){var k=a.a.g.Ub(b,z,{});k.Fa||(k.Fa=new a.T);f&&f.notifyImmediately&&k.Zb[c]&&a.u.G(d,e,[b]);return k.Fa.subscribe(d,e,c)},ma:function(b,c){var d=a.a.g.get(b,z);if(d&&(d.Zb[c]=!0,d.Fa&&d.Fa.notifySubscribers(b,c),c==a.i.H))if(d.N)d.N.Cc();else if(d.N===n&&d.Fa&&d.Fa.Wa(a.i.pa))throw Error("descendantsComplete event not supported for bindings on this node");
  		},Cb:function(b,d){var e=a.a.g.Ub(b,z,{});e.N||(e.N=new c(b,e,d[x]));return d[x]==e?d:d.extend(function(a){a[x]=e;})}};a.Td=function(b){return (b=a.a.g.get(b,z))&&b.context};a.ib=function(b,c,d){1===b.nodeType&&a.h.Sc(b);return p(b,c,q(d))};a.ld=function(b,c,d){d=q(d);return a.ib(b,g(c,d,b),d)};a.Oa=function(a,b){1!==b.nodeType&&8!==b.nodeType||m(q(a),b);};a.vc=function(a,b,c){!v&&A.jQuery&&(v=A.jQuery);if(2>arguments.length){if(b=w.body,!b)throw Error("ko.applyBindings: could not find document.body; has the document been loaded?");
  		}else if(!b||1!==b.nodeType&&8!==b.nodeType)throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");k(q(a,c),b);};a.Dc=function(b){return !b||1!==b.nodeType&&8!==b.nodeType?n:a.Td(b)};a.Ec=function(b){return (b=a.Dc(b))?b.$data:n};a.b("bindingHandlers",a.c);a.b("bindingEvent",a.i);a.b("bindingEvent.subscribe",a.i.subscribe);a.b("bindingEvent.startPossiblyAsyncContentBinding",a.i.Cb);a.b("applyBindings",a.vc);a.b("applyBindingsToDescendants",a.Oa);
  		a.b("applyBindingAccessorsToNode",a.ib);a.b("applyBindingsToNode",a.ld);a.b("contextFor",a.Dc);a.b("dataFor",a.Ec);})();(function(b){function c(c,e){var k=Object.prototype.hasOwnProperty.call(f,c)?f[c]:b,l;k?k.subscribe(e):(k=f[c]=new a.T,k.subscribe(e),d(c,function(b,d){var e=!(!d||!d.synchronous);g[c]={definition:b,Gd:e};delete f[c];l||e?k.notifySubscribers(b):a.na.zb(function(){k.notifySubscribers(b);});}),l=!0);}function d(a,b){e("getConfig",[a],function(c){c?e("loadComponent",[a,c],function(a){b(a,
  		c);}):b(null,null);});}function e(c,d,f,l){l||(l=a.j.loaders.slice(0));var g=l.shift();if(g){var q=g[c];if(q){var t=!1;if(q.apply(g,d.concat(function(a){t?f(null):null!==a?f(a):e(c,d,f,l);}))!==b&&(t=!0,!g.suppressLoaderExceptions))throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");}else e(c,d,f,l);}else f(null);}var f={},g={};a.j={get:function(d,e){var f=Object.prototype.hasOwnProperty.call(g,d)?g[d]:b;f?f.Gd?a.u.G(function(){e(f.definition);}):
  		a.na.zb(function(){e(f.definition);}):c(d,e);},Bc:function(a){delete g[a];},oc:e};a.j.loaders=[];a.b("components",a.j);a.b("components.get",a.j.get);a.b("components.clearCachedDefinition",a.j.Bc);})();(function(){function b(b,c,d,e){function g(){0===--B&&e(h);}var h={},B=2,u=d.template;d=d.viewModel;u?f(c,u,function(c){a.j.oc("loadTemplate",[b,c],function(a){h.template=a;g();});}):g();d?f(c,d,function(c){a.j.oc("loadViewModel",[b,c],function(a){h[m]=a;g();});}):g();}function c(a,b,d){if("function"===typeof b)d(function(a){return new b(a)});
  		else if("function"===typeof b[m])d(b[m]);else if("instance"in b){var e=b.instance;d(function(){return e});}else "viewModel"in b?c(a,b.viewModel,d):a("Unknown viewModel value: "+b);}function d(b){switch(a.a.R(b)){case "script":return a.a.ua(b.text);case "textarea":return a.a.ua(b.value);case "template":if(e(b.content))return a.a.Ca(b.content.childNodes)}return a.a.Ca(b.childNodes)}function e(a){return A.DocumentFragment?a instanceof DocumentFragment:a&&11===a.nodeType}function f(a,b,c){"string"===typeof b.require?
  		T||A.require?(T||A.require)([b.require],function(a){a&&"object"===typeof a&&a.Xd&&a["default"]&&(a=a["default"]);c(a);}):a("Uses require, but no AMD loader is present"):c(b);}function g(a){return function(b){throw Error("Component '"+a+"': "+b);}}var h={};a.j.register=function(b,c){if(!c)throw Error("Invalid configuration for "+b);if(a.j.tb(b))throw Error("Component "+b+" is already registered");h[b]=c;};a.j.tb=function(a){return Object.prototype.hasOwnProperty.call(h,a)};a.j.unregister=function(b){delete h[b];
  		a.j.Bc(b);};a.j.Fc={getConfig:function(b,c){c(a.j.tb(b)?h[b]:null);},loadComponent:function(a,c,d){var e=g(a);f(e,c,function(c){b(a,e,c,d);});},loadTemplate:function(b,c,f){b=g(b);if("string"===typeof c)f(a.a.ua(c));else if(c instanceof Array)f(c);else if(e(c))f(a.a.la(c.childNodes));else if(c.element)if(c=c.element,A.HTMLElement?c instanceof HTMLElement:c&&c.tagName&&1===c.nodeType)f(d(c));else if("string"===typeof c){var h=w.getElementById(c);h?f(d(h)):b("Cannot find element with ID "+c);}else b("Unknown element type: "+
  		c);else b("Unknown template value: "+c);},loadViewModel:function(a,b,d){c(g(a),b,d);}};var m="createViewModel";a.b("components.register",a.j.register);a.b("components.isRegistered",a.j.tb);a.b("components.unregister",a.j.unregister);a.b("components.defaultLoader",a.j.Fc);a.j.loaders.push(a.j.Fc);a.j.dd=h;})();(function(){function b(b,e){var f=b.getAttribute("params");if(f){var f=c.parseBindingsString(f,e,b,{valueAccessors:!0,bindingParams:!0}),f=a.a.Ga(f,function(c){return a.o(c,null,{l:b})}),g=a.a.Ga(f,
  		function(c){var e=c.v();return c.ja()?a.o({read:function(){return a.a.f(c())},write:a.Za(e)&&function(a){c()(a);},l:b}):e});Object.prototype.hasOwnProperty.call(g,"$raw")||(g.$raw=f);return g}return {$raw:{}}}a.j.getComponentNameForNode=function(b){var c=a.a.R(b);if(a.j.tb(c)&&(-1!=c.indexOf("-")||"[object HTMLUnknownElement]"==""+b||8>=a.a.W&&b.tagName===c))return c};a.j.tc=function(c,e,f,g){if(1===e.nodeType){var h=a.j.getComponentNameForNode(e);if(h){c=c||{};if(c.component)throw Error('Cannot use the "component" binding on a custom element matching a component');
  		var m={name:h,params:b(e,f)};c.component=g?function(){return m}:m;}}return c};var c=new a.ga;9>a.a.W&&(a.j.register=function(a){return function(b){return a.apply(this,arguments)}}(a.j.register),w.createDocumentFragment=function(b){return function(){var c=b();a.j.dd;return c}}(w.createDocumentFragment));})();(function(){function b(b,c,d){c=c.template;if(!c)throw Error("Component '"+b+"' has no template");b=a.a.Ca(c);a.h.va(d,b);}function c(a,b,c){var d=a.createViewModel;return d?d.call(a,
  		b,c):b}var d=0;a.c.component={init:function(e,f,g,h,m){function k(){var a=l&&l.dispose;"function"===typeof a&&a.call(l);q&&q.s();p=l=q=null;}var l,p,q,t=a.a.la(a.h.childNodes(e));a.h.Ea(e);a.a.K.za(e,k);a.o(function(){var g=a.a.f(f()),h,u;"string"===typeof g?h=g:(h=a.a.f(g.name),u=a.a.f(g.params));if(!h)throw Error("No component name specified");var n=a.i.Cb(e,m),z=p=++d;a.j.get(h,function(d){if(p===z){k();if(!d)throw Error("Unknown component '"+h+"'");b(h,d,e);var f=c(d,u,{element:e,templateNodes:t});
  		d=n.createChildContext(f,{extend:function(a){a.$component=f;a.$componentTemplateNodes=t;}});f&&f.koDescendantsComplete&&(q=a.i.subscribe(e,a.i.pa,f.koDescendantsComplete,f));l=f;a.Oa(d,e);}});},null,{l:e});return {controlsDescendantBindings:!0}}};a.h.ea.component=!0;})();var V={"class":"className","for":"htmlFor"};a.c.attr={update:function(b,c){var d=a.a.f(c())||{};a.a.P(d,function(c,d){d=a.a.f(d);var g=c.indexOf(":"),g="lookupNamespaceURI"in b&&0<g&&b.lookupNamespaceURI(c.substr(0,g)),h=!1===d||null===
  		d||d===n;h?g?b.removeAttributeNS(g,c):b.removeAttribute(c):d=d.toString();8>=a.a.W&&c in V?(c=V[c],h?b.removeAttribute(c):b[c]=d):h||(g?b.setAttributeNS(g,c,d):b.setAttribute(c,d));"name"===c&&a.a.Yc(b,h?"":d);});}};(function(){a.c.checked={after:["value","attr"],init:function(b,c,d){function e(){var e=b.checked,f=g();if(!a.S.Ya()&&(e||!m&&!a.S.qa())){var k=a.u.G(c);if(l){var q=p?k.v():k,z=t;t=f;z!==f?e&&(a.a.Na(q,f,!0),a.a.Na(q,z,!1)):a.a.Na(q,f,e);p&&a.Za(k)&&k(q);}else h&&(f===n?f=e:e||(f=n)),a.m.eb(k,
  		d,"checked",f,!0);}}function f(){var d=a.a.f(c()),e=g();l?(b.checked=0<=a.a.A(d,e),t=e):b.checked=h&&e===n?!!d:g()===d;}var g=a.xb(function(){if(d.has("checkedValue"))return a.a.f(d.get("checkedValue"));if(q)return d.has("value")?a.a.f(d.get("value")):b.value}),h="checkbox"==b.type,m="radio"==b.type;if(h||m){var k=c(),l=h&&a.a.f(k)instanceof Array,p=!(l&&k.push&&k.splice),q=m||l,t=l?g():n;m&&!b.name&&a.c.uniqueName.init(b,function(){return !0});a.o(e,null,{l:b});a.a.B(b,"click",e);a.o(f,null,{l:b});
  		k=n;}}};a.m.wa.checked=!0;a.c.checkedValue={update:function(b,c){b.value=a.a.f(c());}};})();a.c["class"]={update:function(b,c){var d=a.a.Db(a.a.f(c()));a.a.Eb(b,b.__ko__cssValue,!1);b.__ko__cssValue=d;a.a.Eb(b,d,!0);}};a.c.css={update:function(b,c){var d=a.a.f(c());null!==d&&"object"==typeof d?a.a.P(d,function(c,d){d=a.a.f(d);a.a.Eb(b,c,d);}):a.c["class"].update(b,c);}};a.c.enable={update:function(b,c){var d=a.a.f(c());d&&b.disabled?b.removeAttribute("disabled"):d||b.disabled||(b.disabled=!0);}};a.c.disable=
  		{update:function(b,c){a.c.enable.update(b,function(){return !a.a.f(c())});}};a.c.event={init:function(b,c,d,e,f){var g=c()||{};a.a.P(g,function(g){"string"==typeof g&&a.a.B(b,g,function(b){var k,l=c()[g];if(l){try{var p=a.a.la(arguments);e=f.$data;p.unshift(e);k=l.apply(e,p);}finally{!0!==k&&(b.preventDefault?b.preventDefault():b.returnValue=!1);}!1===d.get(g+"Bubble")&&(b.cancelBubble=!0,b.stopPropagation&&b.stopPropagation());}});});}};a.c.foreach={Rc:function(b){return function(){var c=b(),d=a.a.bc(c);
  		if(!d||"number"==typeof d.length)return {foreach:c,templateEngine:a.ba.Ma};a.a.f(c);return {foreach:d.data,as:d.as,noChildContext:d.noChildContext,includeDestroyed:d.includeDestroyed,afterAdd:d.afterAdd,beforeRemove:d.beforeRemove,afterRender:d.afterRender,beforeMove:d.beforeMove,afterMove:d.afterMove,templateEngine:a.ba.Ma}}},init:function(b,c){return a.c.template.init(b,a.c.foreach.Rc(c))},update:function(b,c,d,e,f){return a.c.template.update(b,a.c.foreach.Rc(c),d,e,f)}};a.m.Ra.foreach=!1;a.h.ea.foreach=
  		!0;a.c.hasfocus={init:function(b,c,d){function e(e){b.__ko_hasfocusUpdating=!0;var f=b.ownerDocument;if("activeElement"in f){var g;try{g=f.activeElement;}catch(l){g=f.body;}e=g===b;}f=c();a.m.eb(f,d,"hasfocus",e,!0);b.__ko_hasfocusLastValue=e;b.__ko_hasfocusUpdating=!1;}var f=e.bind(null,!0),g=e.bind(null,!1);a.a.B(b,"focus",f);a.a.B(b,"focusin",f);a.a.B(b,"blur",g);a.a.B(b,"focusout",g);b.__ko_hasfocusLastValue=!1;},update:function(b,c){var d=!!a.a.f(c());b.__ko_hasfocusUpdating||b.__ko_hasfocusLastValue===
  		d||(d?b.focus():b.blur(),!d&&b.__ko_hasfocusLastValue&&b.ownerDocument.body.focus(),a.u.G(a.a.Fb,null,[b,d?"focusin":"focusout"]));}};a.m.wa.hasfocus=!0;a.c.hasFocus=a.c.hasfocus;a.m.wa.hasFocus="hasfocus";a.c.html={init:function(){return {controlsDescendantBindings:!0}},update:function(b,c){a.a.fc(b,c());}};(function(){function b(b,d,e){a.c[b]={init:function(b,c,h,m,k){var l,p,q={},t,x,n;if(d){m=h.get("as");var u=h.get("noChildContext");n=!(m&&u);q={as:m,noChildContext:u,exportDependencies:n};}x=(t=
  		"render"==h.get("completeOn"))||h.has(a.i.pa);a.o(function(){var h=a.a.f(c()),m=!e!==!h,u=!p,r;if(n||m!==l){x&&(k=a.i.Cb(b,k));if(m){if(!d||n)q.dataDependency=a.S.o();r=d?k.createChildContext("function"==typeof h?h:c,q):a.S.qa()?k.extend(null,q):k;}u&&a.S.qa()&&(p=a.a.Ca(a.h.childNodes(b),!0));m?(u||a.h.va(b,a.a.Ca(p)),a.Oa(r,b)):(a.h.Ea(b),t||a.i.ma(b,a.i.H));l=m;}},null,{l:b});return {controlsDescendantBindings:!0}}};a.m.Ra[b]=!1;a.h.ea[b]=!0;}b("if");b("ifnot",!1,!0);b("with",!0);})();a.c.let={init:function(b,
  		c,d,e,f){c=f.extend(c);a.Oa(c,b);return {controlsDescendantBindings:!0}}};a.h.ea.let=!0;var Q={};a.c.options={init:function(b){if("select"!==a.a.R(b))throw Error("options binding applies only to SELECT elements");for(;0<b.length;)b.remove(0);return {controlsDescendantBindings:!0}},update:function(b,c,d){function e(){return a.a.jb(b.options,function(a){return a.selected})}function f(a,b,c){var d=typeof b;return "function"==d?b(a):"string"==d?a[b]:c}function g(c,d){if(x&&l)a.i.ma(b,a.i.H);else if(t.length){var e=
  		0<=a.a.A(t,a.w.M(d[0]));a.a.Zc(d[0],e);x&&!e&&a.u.G(a.a.Fb,null,[b,"change"]);}}var h=b.multiple,m=0!=b.length&&h?b.scrollTop:null,k=a.a.f(c()),l=d.get("valueAllowUnset")&&d.has("value"),p=d.get("optionsIncludeDestroyed");c={};var q,t=[];l||(h?t=a.a.Mb(e(),a.w.M):0<=b.selectedIndex&&t.push(a.w.M(b.options[b.selectedIndex])));k&&("undefined"==typeof k.length&&(k=[k]),q=a.a.jb(k,function(b){return p||b===n||null===b||!a.a.f(b._destroy)}),d.has("optionsCaption")&&(k=a.a.f(d.get("optionsCaption")),null!==
  		k&&k!==n&&q.unshift(Q)));var x=!1;c.beforeRemove=function(a){b.removeChild(a);};k=g;d.has("optionsAfterRender")&&"function"==typeof d.get("optionsAfterRender")&&(k=function(b,c){g(0,c);a.u.G(d.get("optionsAfterRender"),null,[c[0],b!==Q?b:n]);});a.a.ec(b,q,function(c,e,g){g.length&&(t=!l&&g[0].selected?[a.w.M(g[0])]:[],x=!0);e=b.ownerDocument.createElement("option");c===Q?(a.a.Bb(e,d.get("optionsCaption")),a.w.cb(e,n)):(g=f(c,d.get("optionsValue"),c),a.w.cb(e,a.a.f(g)),c=f(c,d.get("optionsText"),g),
  		a.a.Bb(e,c));return [e]},c,k);if(!l){var B;h?B=t.length&&e().length<t.length:B=t.length&&0<=b.selectedIndex?a.w.M(b.options[b.selectedIndex])!==t[0]:t.length||0<=b.selectedIndex;B&&a.u.G(a.a.Fb,null,[b,"change"]);}(l||a.S.Ya())&&a.i.ma(b,a.i.H);a.a.wd(b);m&&20<Math.abs(m-b.scrollTop)&&(b.scrollTop=m);}};a.c.options.$b=a.a.g.Z();a.c.selectedOptions={init:function(b,c,d){function e(){var e=c(),f=[];a.a.D(b.getElementsByTagName("option"),function(b){b.selected&&f.push(a.w.M(b));});a.m.eb(e,d,"selectedOptions",
  		f);}function f(){var d=a.a.f(c()),e=b.scrollTop;d&&"number"==typeof d.length&&a.a.D(b.getElementsByTagName("option"),function(b){var c=0<=a.a.A(d,a.w.M(b));b.selected!=c&&a.a.Zc(b,c);});b.scrollTop=e;}if("select"!=a.a.R(b))throw Error("selectedOptions binding applies only to SELECT elements");var g;a.i.subscribe(b,a.i.H,function(){g?e():(a.a.B(b,"change",e),g=a.o(f,null,{l:b}));},null,{notifyImmediately:!0});},update:function(){}};a.m.wa.selectedOptions=!0;a.c.style={update:function(b,c){var d=a.a.f(c()||
  		{});a.a.P(d,function(c,d){d=a.a.f(d);if(null===d||d===n||!1===d)d="";if(v)v(b).css(c,d);else if(/^--/.test(c))b.style.setProperty(c,d);else {c=c.replace(/-(\w)/g,function(a,b){return b.toUpperCase()});var g=b.style[c];b.style[c]=d;d===g||b.style[c]!=g||isNaN(d)||(b.style[c]=d+"px");}});}};a.c.submit={init:function(b,c,d,e,f){if("function"!=typeof c())throw Error("The value for a submit binding must be a function");a.a.B(b,"submit",function(a){var d,e=c();try{d=e.call(f.$data,b);}finally{!0!==d&&(a.preventDefault?
  		a.preventDefault():a.returnValue=!1);}});}};a.c.text={init:function(){return {controlsDescendantBindings:!0}},update:function(b,c){a.a.Bb(b,c());}};a.h.ea.text=!0;(function(){if(A&&A.navigator){var b=function(a){if(a)return parseFloat(a[1])},c=A.navigator.userAgent,d,e,f,g,h;(d=A.opera&&A.opera.version&&parseInt(A.opera.version()))||(h=b(c.match(/Edge\/([^ ]+)$/)))||b(c.match(/Chrome\/([^ ]+)/))||(e=b(c.match(/Version\/([^ ]+) Safari/)))||(f=b(c.match(/Firefox\/([^ ]+)/)))||(g=a.a.W||b(c.match(/MSIE ([^ ]+)/)))||
  		(g=b(c.match(/rv:([^ )]+)/)));}if(8<=g&&10>g)var m=a.a.g.Z(),k=a.a.g.Z(),l=function(b){var c=this.activeElement;(c=c&&a.a.g.get(c,k))&&c(b);},p=function(b,c){var d=b.ownerDocument;a.a.g.get(d,m)||(a.a.g.set(d,m,!0),a.a.B(d,"selectionchange",l));a.a.g.set(b,k,c);};a.c.textInput={init:function(b,c,k){function l(c,d){a.a.B(b,c,d);}function m(){var d=a.a.f(c());if(null===d||d===n)d="";L!==n&&d===L?a.a.setTimeout(m,4):b.value!==d&&(y=!0,b.value=d,y=!1,v=b.value);}function r(){w||(L=b.value,w=a.a.setTimeout(z,
  		4));}function z(){clearTimeout(w);L=w=n;var d=b.value;v!==d&&(v=d,a.m.eb(c(),k,"textInput",d));}var v=b.value,w,L,A=9==a.a.W?r:z,y=!1;g&&l("keypress",z);11>g&&l("propertychange",function(a){y||"value"!==a.propertyName||A();});8==g&&(l("keyup",z),l("keydown",z));p&&(p(b,A),l("dragend",r));(!g||9<=g)&&l("input",A);5>e&&"textarea"===a.a.R(b)?(l("keydown",r),l("paste",r),l("cut",r)):11>d?l("keydown",r):4>f?(l("DOMAutoComplete",z),l("dragdrop",z),l("drop",z)):h&&"number"===b.type&&l("keydown",r);l("change",
  		z);l("blur",z);a.o(m,null,{l:b});}};a.m.wa.textInput=!0;a.c.textinput={preprocess:function(a,b,c){c("textInput",a);}};})();a.c.uniqueName={init:function(b,c){if(c()){var d="ko_unique_"+ ++a.c.uniqueName.rd;a.a.Yc(b,d);}}};a.c.uniqueName.rd=0;a.c.using={init:function(b,c,d,e,f){var g;d.has("as")&&(g={as:d.get("as"),noChildContext:d.get("noChildContext")});c=f.createChildContext(c,g);a.Oa(c,b);return {controlsDescendantBindings:!0}}};a.h.ea.using=!0;a.c.value={init:function(b,c,d){var e=a.a.R(b),f="input"==
  		e;if(!f||"checkbox"!=b.type&&"radio"!=b.type){var g=[],h=d.get("valueUpdate"),m=!1,k=null;h&&("string"==typeof h?g=[h]:g=a.a.wc(h),a.a.Pa(g,"change"));var l=function(){k=null;m=!1;var e=c(),f=a.w.M(b);a.m.eb(e,d,"value",f);};!a.a.W||!f||"text"!=b.type||"off"==b.autocomplete||b.form&&"off"==b.form.autocomplete||-1!=a.a.A(g,"propertychange")||(a.a.B(b,"propertychange",function(){m=!0;}),a.a.B(b,"focus",function(){m=!1;}),a.a.B(b,"blur",function(){m&&l();}));a.a.D(g,function(c){var d=l;a.a.Ud(c,"after")&&
  		(d=function(){k=a.w.M(b);a.a.setTimeout(l,0);},c=c.substring(5));a.a.B(b,c,d);});var p;p=f&&"file"==b.type?function(){var d=a.a.f(c());null===d||d===n||""===d?b.value="":a.u.G(l);}:function(){var f=a.a.f(c()),g=a.w.M(b);if(null!==k&&f===k)a.a.setTimeout(p,0);else if(f!==g||g===n)"select"===e?(g=d.get("valueAllowUnset"),a.w.cb(b,f,g),g||f===a.w.M(b)||a.u.G(l)):a.w.cb(b,f);};if("select"===e){var q;a.i.subscribe(b,a.i.H,function(){q?d.get("valueAllowUnset")?p():l():(a.a.B(b,"change",l),q=a.o(p,null,{l:b}));},
  		null,{notifyImmediately:!0});}else a.a.B(b,"change",l),a.o(p,null,{l:b});}else a.ib(b,{checkedValue:c});},update:function(){}};a.m.wa.value=!0;a.c.visible={update:function(b,c){var d=a.a.f(c()),e="none"!=b.style.display;d&&!e?b.style.display="":!d&&e&&(b.style.display="none");}};a.c.hidden={update:function(b,c){a.c.visible.update(b,function(){return !a.a.f(c())});}};(function(b){a.c[b]={init:function(c,d,e,f,g){return a.c.event.init.call(this,c,function(){var a={};a[b]=d();return a},e,f,g)}};})("click");
  		a.ca=function(){};a.ca.prototype.renderTemplateSource=function(){throw Error("Override renderTemplateSource");};a.ca.prototype.createJavaScriptEvaluatorBlock=function(){throw Error("Override createJavaScriptEvaluatorBlock");};a.ca.prototype.makeTemplateSource=function(b,c){if("string"==typeof b){c=c||w;var d=c.getElementById(b);if(!d)throw Error("Cannot find template with ID "+b);return new a.C.F(d)}if(1==b.nodeType||8==b.nodeType)return new a.C.ia(b);throw Error("Unknown template type: "+b);};a.ca.prototype.renderTemplate=
  		function(a,c,d,e){a=this.makeTemplateSource(a,e);return this.renderTemplateSource(a,c,d,e)};a.ca.prototype.isTemplateRewritten=function(a,c){return !1===this.allowTemplateRewriting?!0:this.makeTemplateSource(a,c).data("isRewritten")};a.ca.prototype.rewriteTemplate=function(a,c,d){a=this.makeTemplateSource(a,d);c=c(a.text());a.text(c);a.data("isRewritten",!0);};a.b("templateEngine",a.ca);a.kc=function(){function b(b,c,d,h){b=a.m.ac(b);for(var m=a.m.Ra,k=0;k<b.length;k++){var l=b[k].key;if(Object.prototype.hasOwnProperty.call(m,
  		l)){var p=m[l];if("function"===typeof p){if(l=p(b[k].value))throw Error(l);}else if(!p)throw Error("This template engine does not support the '"+l+"' binding within its templates");}}d="ko.__tr_ambtns(function($context,$element){return(function(){return{ "+a.m.vb(b,{valueAccessors:!0})+" } })()},'"+d.toLowerCase()+"')";return h.createJavaScriptEvaluatorBlock(d)+c}var c=/(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
  		d=/\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;return {xd:function(b,c,d){c.isTemplateRewritten(b,d)||c.rewriteTemplate(b,function(b){return a.kc.Ld(b,c)},d);},Ld:function(a,f){return a.replace(c,function(a,c,d,e,l){return b(l,c,d,f)}).replace(d,function(a,c){return b(c,"\x3c!-- ko --\x3e","#comment",f)})},md:function(b,c){return a.aa.Xb(function(d,h){var m=d.nextSibling;m&&m.nodeName.toLowerCase()===c&&a.ib(m,b,h);})}}}();a.b("__tr_ambtns",a.kc.md);(function(){a.C={};a.C.F=function(b){if(this.F=b){var c=
  		a.a.R(b);this.ab="script"===c?1:"textarea"===c?2:"template"==c&&b.content&&11===b.content.nodeType?3:4;}};a.C.F.prototype.text=function(){var b=1===this.ab?"text":2===this.ab?"value":"innerHTML";if(0==arguments.length)return this.F[b];var c=arguments[0];"innerHTML"===b?a.a.fc(this.F,c):this.F[b]=c;};var b=a.a.g.Z()+"_";a.C.F.prototype.data=function(c){if(1===arguments.length)return a.a.g.get(this.F,b+c);a.a.g.set(this.F,b+c,arguments[1]);};var c=a.a.g.Z();a.C.F.prototype.nodes=function(){var b=this.F;
  		if(0==arguments.length){var e=a.a.g.get(b,c)||{},f=e.lb||(3===this.ab?b.content:4===this.ab?b:n);if(!f||e.jd){var g=this.text();g&&g!==e.bb&&(f=a.a.Md(g,b.ownerDocument),a.a.g.set(b,c,{lb:f,bb:g,jd:!0}));}return f}e=arguments[0];this.ab!==n&&this.text("");a.a.g.set(b,c,{lb:e});};a.C.ia=function(a){this.F=a;};a.C.ia.prototype=new a.C.F;a.C.ia.prototype.constructor=a.C.ia;a.C.ia.prototype.text=function(){if(0==arguments.length){var b=a.a.g.get(this.F,c)||{};b.bb===n&&b.lb&&(b.bb=b.lb.innerHTML);return b.bb}a.a.g.set(this.F,
  		c,{bb:arguments[0]});};a.b("templateSources",a.C);a.b("templateSources.domElement",a.C.F);a.b("templateSources.anonymousTemplate",a.C.ia);})();(function(){function b(b,c,d){var e;for(c=a.h.nextSibling(c);b&&(e=b)!==c;)b=a.h.nextSibling(e),d(e,b);}function c(c,d){if(c.length){var e=c[0],f=c[c.length-1],g=e.parentNode,h=a.ga.instance,m=h.preprocessNode;if(m){b(e,f,function(a,b){var c=a.previousSibling,d=m.call(h,a);d&&(a===e&&(e=d[0]||b),a===f&&(f=d[d.length-1]||c));});c.length=0;if(!e)return;e===f?c.push(e):
  		(c.push(e,f),a.a.Ua(c,g));}b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.vc(d,b);});b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.aa.cd(b,[d]);});a.a.Ua(c,g);}}function d(a){return a.nodeType?a:0<a.length?a[0]:null}function e(b,e,f,h,m){m=m||{};var n=(b&&d(b)||f||{}).ownerDocument,B=m.templateEngine||g;a.kc.xd(f,B,n);f=B.renderTemplate(f,h,m,n);if("number"!=typeof f.length||0<f.length&&"number"!=typeof f[0].nodeType)throw Error("Template engine must return an array of DOM nodes");n=!1;switch(e){case "replaceChildren":a.h.va(b,
  		f);n=!0;break;case "replaceNode":a.a.Xc(b,f);n=!0;break;case "ignoreTargetNode":break;default:throw Error("Unknown renderMode: "+e);}n&&(c(f,h),m.afterRender&&a.u.G(m.afterRender,null,[f,h[m.as||"$data"]]),"replaceChildren"==e&&a.i.ma(b,a.i.H));return f}function f(b,c,d){return a.O(b)?b():"function"===typeof b?b(c,d):b}var g;a.gc=function(b){if(b!=n&&!(b instanceof a.ca))throw Error("templateEngine must inherit from ko.templateEngine");g=b;};a.dc=function(b,c,h,m,t){h=h||{};if((h.templateEngine||g)==
  		n)throw Error("Set a template engine before calling renderTemplate");t=t||"replaceChildren";if(m){var x=d(m);return a.$(function(){var g=c&&c instanceof a.fa?c:new a.fa(c,null,null,null,{exportDependencies:!0}),n=f(b,g.$data,g),g=e(m,t,n,g,h);"replaceNode"==t&&(m=g,x=d(m));},null,{Sa:function(){return !x||!a.a.Sb(x)},l:x&&"replaceNode"==t?x.parentNode:x})}return a.aa.Xb(function(d){a.dc(b,c,h,d,"replaceNode");})};a.Qd=function(b,d,g,h,m){function x(b,c){a.u.G(a.a.ec,null,[h,b,u,g,r,c]);a.i.ma(h,a.i.H);}
  		function r(a,b){c(b,v);g.afterRender&&g.afterRender(b,a);v=null;}function u(a,c){v=m.createChildContext(a,{as:z,noChildContext:g.noChildContext,extend:function(a){a.$index=c;z&&(a[z+"Index"]=c);}});var d=f(b,a,v);return e(h,"ignoreTargetNode",d,v,g)}var v,z=g.as,w=!1===g.includeDestroyed||a.options.foreachHidesDestroyed&&!g.includeDestroyed;if(w||g.beforeRemove||!a.Pc(d))return a.$(function(){var b=a.a.f(d)||[];"undefined"==typeof b.length&&(b=[b]);w&&(b=a.a.jb(b,function(b){return b===n||null===b||
  		!a.a.f(b._destroy)}));x(b);},null,{l:h});x(d.v());var A=d.subscribe(function(a){x(d(),a);},null,"arrayChange");A.l(h);return A};var h=a.a.g.Z(),m=a.a.g.Z();a.c.template={init:function(b,c){var d=a.a.f(c());if("string"==typeof d||"name"in d)a.h.Ea(b);else if("nodes"in d){d=d.nodes||[];if(a.O(d))throw Error('The "nodes" option must be a plain, non-observable array.');var e=d[0]&&d[0].parentNode;e&&a.a.g.get(e,m)||(e=a.a.Yb(d),a.a.g.set(e,m,!0));(new a.C.ia(b)).nodes(e);}else if(d=a.h.childNodes(b),0<d.length)e=
  		a.a.Yb(d),(new a.C.ia(b)).nodes(e);else throw Error("Anonymous template defined, but no template content was provided");return {controlsDescendantBindings:!0}},update:function(b,c,d,e,f){var g=c();c=a.a.f(g);d=!0;e=null;"string"==typeof c?c={}:(g="name"in c?c.name:b,"if"in c&&(d=a.a.f(c["if"])),d&&"ifnot"in c&&(d=!a.a.f(c.ifnot)),d&&!g&&(d=!1));"foreach"in c?e=a.Qd(g,d&&c.foreach||[],c,b,f):d?(d=f,"data"in c&&(d=f.createChildContext(c.data,{as:c.as,noChildContext:c.noChildContext,exportDependencies:!0})),
  		e=a.dc(g,d,c,b)):a.h.Ea(b);f=e;(c=a.a.g.get(b,h))&&"function"==typeof c.s&&c.s();a.a.g.set(b,h,!f||f.ja&&!f.ja()?n:f);}};a.m.Ra.template=function(b){b=a.m.ac(b);return 1==b.length&&b[0].unknown||a.m.Id(b,"name")?null:"This template engine does not support anonymous templates nested within its templates"};a.h.ea.template=!0;})();a.b("setTemplateEngine",a.gc);a.b("renderTemplate",a.dc);a.a.Kc=function(a,c,d){if(a.length&&c.length){var e,f,g,h,m;for(e=f=0;(!d||e<d)&&(h=a[f]);++f){for(g=0;m=c[g];++g)if(h.value===
  		m.value){h.moved=m.index;m.moved=h.index;c.splice(g,1);e=g=0;break}e+=g;}}};a.a.Pb=function(){function b(b,d,e,f,g){var h=Math.min,m=Math.max,k=[],l,p=b.length,q,n=d.length,r=n-p||1,v=p+n+1,u,w,z;for(l=0;l<=p;l++)for(w=u,k.push(u=[]),z=h(n,l+r),q=m(0,l-1);q<=z;q++)u[q]=q?l?b[l-1]===d[q-1]?w[q-1]:h(w[q]||v,u[q-1]||v)+1:q+1:l+1;h=[];m=[];r=[];l=p;for(q=n;l||q;)n=k[l][q]-1,q&&n===k[l][q-1]?m.push(h[h.length]={status:e,value:d[--q],index:q}):l&&n===k[l-1][q]?r.push(h[h.length]={status:f,value:b[--l],index:l}):
  		(--q,--l,g.sparse||h.push({status:"retained",value:d[q]}));a.a.Kc(r,m,!g.dontLimitMoves&&10*p);return h.reverse()}return function(a,d,e){e="boolean"===typeof e?{dontLimitMoves:e}:e||{};a=a||[];d=d||[];return a.length<d.length?b(a,d,"added","deleted",e):b(d,a,"deleted","added",e)}}();a.b("utils.compareArrays",a.a.Pb);(function(){function b(b,c,d,h,m){var k=[],l=a.$(function(){var l=c(d,m,a.a.Ua(k,b))||[];0<k.length&&(a.a.Xc(k,l),h&&a.u.G(h,null,[d,l,m]));k.length=0;a.a.Nb(k,l);},null,{l:b,Sa:function(){return !a.a.kd(k)}});
  		return {Y:k,$:l.ja()?l:n}}var c=a.a.g.Z(),d=a.a.g.Z();a.a.ec=function(e,f,g,h,m,k){function l(b){y={Aa:b,pb:a.ta(w++)};v.push(y);r||F.push(y);}function p(b){y=t[b];w!==y.pb.v()&&D.push(y);y.pb(w++);a.a.Ua(y.Y,e);v.push(y);}function q(b,c){if(b)for(var d=0,e=c.length;d<e;d++)a.a.D(c[d].Y,function(a){b(a,d,c[d].Aa);});}f=f||[];"undefined"==typeof f.length&&(f=[f]);h=h||{};var t=a.a.g.get(e,c),r=!t,v=[],u=0,w=0,z=[],A=[],C=[],D=[],F=[],y,I=0;if(r)a.a.D(f,l);else {if(!k||t&&t._countWaitingForRemove){var E=
  		a.a.Mb(t,function(a){return a.Aa});k=a.a.Pb(E,f,{dontLimitMoves:h.dontLimitMoves,sparse:!0});}for(var E=0,G,H,K;G=k[E];E++)switch(H=G.moved,K=G.index,G.status){case "deleted":for(;u<K;)p(u++);H===n&&(y=t[u],y.$&&(y.$.s(),y.$=n),a.a.Ua(y.Y,e).length&&(h.beforeRemove&&(v.push(y),I++,y.Aa===d?y=null:C.push(y)),y&&z.push.apply(z,y.Y)));u++;break;case "added":for(;w<K;)p(u++);H!==n?(A.push(v.length),p(H)):l(G.value);}for(;w<f.length;)p(u++);v._countWaitingForRemove=I;}a.a.g.set(e,c,v);q(h.beforeMove,D);a.a.D(z,
  		h.beforeRemove?a.oa:a.removeNode);var M,O,P;try{P=e.ownerDocument.activeElement;}catch(N){}if(A.length)for(;(E=A.shift())!=n;){y=v[E];for(M=n;E;)if((O=v[--E].Y)&&O.length){M=O[O.length-1];break}for(f=0;u=y.Y[f];M=u,f++)a.h.Wb(e,u,M);}for(E=0;y=v[E];E++){y.Y||a.a.extend(y,b(e,g,y.Aa,m,y.pb));for(f=0;u=y.Y[f];M=u,f++)a.h.Wb(e,u,M);!y.Ed&&m&&(m(y.Aa,y.Y,y.pb),y.Ed=!0,M=y.Y[y.Y.length-1]);}P&&e.ownerDocument.activeElement!=P&&P.focus();q(h.beforeRemove,C);for(E=0;E<C.length;++E)C[E].Aa=d;q(h.afterMove,D);
  		q(h.afterAdd,F);};})();a.b("utils.setDomNodeChildrenFromArrayMapping",a.a.ec);a.ba=function(){this.allowTemplateRewriting=!1;};a.ba.prototype=new a.ca;a.ba.prototype.constructor=a.ba;a.ba.prototype.renderTemplateSource=function(b,c,d,e){if(c=(9>a.a.W?0:b.nodes)?b.nodes():null)return a.a.la(c.cloneNode(!0).childNodes);b=b.text();return a.a.ua(b,e)};a.ba.Ma=new a.ba;a.gc(a.ba.Ma);a.b("nativeTemplateEngine",a.ba);(function(){a.$a=function(){var a=this.Hd=function(){if(!v||!v.tmpl)return 0;try{if(0<=v.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(a){}return 1}();
  		this.renderTemplateSource=function(b,e,f,g){g=g||w;f=f||{};if(2>a)throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");var h=b.data("precompiled");h||(h=b.text()||"",h=v.template(null,"{{ko_with $item.koBindingContext}}"+h+"{{/ko_with}}"),b.data("precompiled",h));b=[e.$data];e=v.extend({koBindingContext:e},f.templateOptions);e=v.tmpl(h,b,e);e.appendTo(g.createElement("div"));v.fragments={};return e};this.createJavaScriptEvaluatorBlock=function(a){return "{{ko_code ((function() { return "+
  		a+" })()) }}"};this.addTemplate=function(a,b){w.write("<script type='text/html' id='"+a+"'>"+b+"\x3c/script>");};0<a&&(v.tmpl.tag.ko_code={open:"__.push($1 || '');"},v.tmpl.tag.ko_with={open:"with($1) {",close:"} "});};a.$a.prototype=new a.ca;a.$a.prototype.constructor=a.$a;var b=new a.$a;0<b.Hd&&a.gc(b);a.b("jqueryTmplTemplateEngine",a.$a);})();});})();})(); 
  	} (knockoutLatest, knockoutLatest.exports));
  	return knockoutLatest.exports;
  }

  var knockoutLatestExports = requireKnockoutLatest();

  // const urlParam = "Tab";

  class TabsModule {
    constructor(tabOpts, urlParam = "Tab") {
      this.urlParam = urlParam;
      knockoutLatestExports.utils.arrayPushAll(this.tabOpts, tabOpts);
      this.selectedTab.subscribe(this.tabChangeHandler);
      window.addEventListener("popstate", this.popStateHandler);
    }

    tabOpts = knockoutLatestExports.observableArray();
    selectedTab = knockoutLatestExports.observable();

    isSelected = (tab) => {
      return tab.id == this.selectedTab()?.id;
    };

    clickTabLink = (tab) => {
      this.selectedTab(tab);
      console.log("selected: " + tab.id);
    };

    selectTab = (tab) => this.selectById(tab.id);

    selectById = (tabId) => {
      const tabById =
        this.tabOpts().find((tab) => tab.id == tabId) ?? this.getDefaultTab();
      this.selectedTab(tabById);
    };

    getDefaultTab = () => this.tabOpts()[0];

    tabChangeHandler = (newTab) => {
      if (newTab) setUrlParam(this.urlParam, newTab.id);
      // window.history.pushState({ tab: { id: newTab.id } }, "", newTab.id);
    };

    popStateHandler = (event) => {
      if (event.state) {
        if (event.state[this.urlParam])
          this.selectById(event.state[this.urlParam]);
      }
    };
  }

  class Tab {
    constructor(id, linkText, template) {
      this.id = id;
      this.linkText = linkText;
      this.template = template;
    }
  }

  class People {
    constructor({
      ID,
      Title,
      LoginName = null,
      IsGroup = null,
      IsEnsured = false,
    }) {
      this.ID = ID;
      this.Title = Title;
      this.LookupValue = Title;
      this.LoginName = LoginName != "" ? LoginName : null;
      this.IsGroup = IsGroup;
      // Has the user data been fetched? Used for binding handlers.
      this.IsEnsured = IsEnsured;
    }

    ID = null;
    Title = null;
    LoginName = null;
    LookupValue = null;

    Initials = () => {
      if (!this.Title) return "";

      return this.Title.split(" ")
        .slice(0, 2)
        .map((name) => name[0])
        .join("");
    };

    getKey = () => this.LoginName ?? this.Title;

    static Create = function (props) {
      if (!props || (!props.ID && !(props.Title || props.LookupValue)))
        return null;
      return new People({
        ...props,
        Title: props.Title ?? props.LookupValue,
      });
    };
  }

  /*
      SharePoint Acces Layer - sal.js

      Abstract any functions that rely on reading or setting SP items to here.

      Create a new "Connection" object type that will store information for 
      interfacing with a specific list.

      Author: Peter Backlund 
      Contact: backlundpf <@> state.gov
      Created: 2019-02-12
  */

  /*
    TODO:
    - migrate to rest api
    - remove new from "new SP.ClientContext.get_current()"
    - standardize currctx
    - remove unused functions
    - Combine functions 
  */

  window.console = window.console || { log: function () {} };

  window.sal = window.sal ?? {};
  var sal = window.sal;

  // const serverRelativeUrl =
  //   window.context.pageContext.legacyPageContext.webServerRelativeUrl == "/"
  //     ? ""
  //     : window.context.pageContext.legacyPageContext.webServerRelativeUrl;

  sal.globalConfig = sal.globalConfig || {
    siteGroups: [],
    siteUrl: "",
    listServices: "",
    defaultGroups: {},
  };
  sal.site = sal.site || {};

  window.DEBUG = true;

  function executeQuery(currCtx) {
    return new Promise((resolve, reject) =>
      currCtx.executeQueryAsync(resolve, (sender, args) => {
        reject({ sender, args });
      })
    );
  }

  function principalToPeople(oPrincipal, isGroup = null) {
    return {
      ID: oPrincipal.get_id(),
      Title: oPrincipal.get_title(),
      LoginName: oPrincipal.get_loginName(),
      IsEnsured: true,
      IsGroup:
        isGroup != null
          ? isGroup
          : oPrincipal.constructor.getName() == "SP.Group",
      oPrincipal,
    };
  }

  sal.NewAppConfig = function () {
    // TODO: We should take in configuration from our current application, roles/groups etc.
    var siteRoles = {};
    siteRoles.roles = {
      FullControl: "Full Control",
      Design: "Design",
      Edit: "Edit",
      Contribute: "Contribute",
      RestrictedContribute: "Restricted Contribute",
      InitialCreate: "Initial Create",
      Read: "Read",
      RestrictedRead: "Restricted Read",
      LimitedAccess: "Limited Access",
    };
    siteRoles.fulfillsRole = function (inputRole, targetRole) {
      // the site roles are already in authoritative order
      const roles = Object.values(siteRoles.roles);
      if (!roles.includes(inputRole) || !roles.includes(targetRole)) return false;

      return roles.indexOf(inputRole) <= roles.indexOf(targetRole);
    };

    siteRoles.validate = function () {
      Object.keys(siteRoles.roles).forEach(function (role) {
        var roleName = siteRoles.roles[role];
        if (!sal.globalConfig.roles.includes(roleName)) {
          console.error(roleName + " is not in the global roles list");
        } else {
          console.log(roleName);
        }
      });
    };

    var siteGroups = {
      groups: {
        Owners: "workorder Owners",
        Members: "workorder Members",
        Visitors: "workorder Visitors",
        RestrictedReaders: "Restricted Readers",
      },
    };

    var publicMembers = {
      siteRoles,
      siteGroups,
    };

    return publicMembers;
  };

  sal.NewUtilities = function () {
    // TODO: Split this up into UserManager, GroupManager, etc
    function createSiteGroup(groupName, permissions, callback) {
      /* groupName: the name of the new SP Group
       *  permissions: an array of permissions to assign to the group
       * groupOwner: the name of the owner group
       */
      callback = callback === undefined ? null : callback;

      var currCtx = new SP.ClientContext.get_current();
      currCtx.get_web();

      var groupCreationInfo = new SP.GroupCreationInformation();
      groupCreationInfo.set_title(groupName);
      this.oGroup = oWebsite.get_siteGroups().add(groupCreationInfo);
      oGroup.set_owner(oWebsite.get_associatedOwnerGroup());

      oGroup.update();
      var collRoleDefinitionBinding =
        SP.RoleDefinitionBindingCollection.newObject(clientContext);

      this.oRoleDefinitions = [];

      permissions.forEach(function (perm) {
        var oRoleDefinition = oWebsite.get_roleDefinitions().getByName(perm);
        this.oRoleDefinitions.push(oRoleDefinition);
        collRoleDefinitionBinding.add(oRoleDefinition);
      });

      var collRollAssignment = oWebsite.get_roleAssignments();
      collRollAssignment.add(oGroup, collRoleDefinitionBinding);

      function onCreateGroupSucceeded() {
        var roleInfo =
          oGroup.get_title() +
          " created and assigned to " +
          oRoleDefinitions.forEach(function (rd) {
          });
        if (callback) {
          callback(oGroup.get_id());
        }
        console.log(roleInfo);
      }

      function onCreateGroupFailed(sender, args) {
        alert(
          groupnName +
            " - Create group failed. " +
            args.get_message() +
            "\n" +
            args.get_stackTrace()
        );
      }

      clientContext.load(oGroup, "Title");

      var data = {
        groupName: groupName,
        oGroup: oGroup,
        oRoleDefinition: oRoleDefinition,
        callback: callback,
      };

      clientContext.executeQueryAsync(
        Function.createDelegate(data, onCreateGroupSucceeded),
        Function.createDelegate(data, onCreateGroupFailed)
      );
    }

    function getUserGroups(user, callback) {
      var currCtx = new SP.ClientContext.get_current();
      var web = currCtx.get_web();

      var everyone = web.ensureUser(user);
      var oGroups = everyone.get_groups();

      function onQueryGroupsSucceeded() {
        var groups = new Array();
        var groupsInfo = new String();
        var groupsEnumerator = oGroups.getEnumerator();
        while (groupsEnumerator.moveNext()) {
          var oGroup = groupsEnumerator.get_current();
          var group = principalToPeople(oGroup);

          groupsInfo +=
            "\n" +
            "Group ID: " +
            oGroup.get_id() +
            ", " +
            "Title : " +
            oGroup.get_title();
          groups.push(group);
        }
        console.log(groupsInfo.toString());
        callback(groups);
      }

      function onQueryGroupsFailed(sender, args) {
        console.error(
          " Everyone - Query Everyone group failed. " +
            args.get_message() +
            "\n" +
            args.get_stackTrace()
        );
      }
      currCtx.load(everyone);
      currCtx.load(oGroups);
      data = { everyone: everyone, oGroups: oGroups, callback: callback };

      currCtx.executeQueryAsync(
        Function.createDelegate(data, onQueryGroupsSucceeded),
        Function.createDelegate(data, onQueryGroupsFailed)
      );
    }

    function getUsersWithGroup(oGroup, callback) {
      var context = new SP.ClientContext.get_current();

      var oUsers = oGroup.get_users();

      function onGetUserSuccess() {
        var userObjs = [];
        var userEnumerator = oUsers.getEnumerator();
        while (userEnumerator.moveNext()) {
          var oUser = userEnumerator.get_current();
          var userObj = principalToPeople(oUser);
          userObjs.push(userObj);
        }
        callback(userObjs);
      }

      function onGetUserFailed(sender, args) {}

      var data = { oUsers: oUsers, callback: callback };
      context.load(oUsers);
      context.executeQueryAsync(
        Function.createDelegate(data, onGetUserSuccess),
        Function.createDelegate(data, onGetUserFailed)
      );
    }

    function copyFiles(sourceLib, destLib, callback, onError) {
      var context = new SP.ClientContext.get_current();
      var web = context.get_web();
      var folderSrc = web.getFolderByServerRelativeUrl(sourceLib);
      context.load(folderSrc, "Files");
      context.executeQueryAsync(
        function () {
          console.log("Got the source folder right here!");
          var files = folderSrc.get_files();
          var e = files.getEnumerator();
          var dest = [];
          while (e.moveNext()) {
            var file = e.get_current();
            var destLibUrl = destLib + "/" + file.get_name();
            dest.push(destLibUrl); //delete this when we're happy we got the file paths right
            file.copyTo(destLibUrl, true);
          }
          console.log(dest); //delete this when we're happy we got the file paths right
          context.executeQueryAsync(
            function () {
              console.log("Files moved successfully!");
              callback();
            },
            function (sender, args) {
              console.log("error: ") + args.get_message();
            }
          );
        },
        function (sender, args) {
          console.log("Sorry, something messed up: " + args.get_message());
        }
      );
    }

    function copyFilesAsync(sourceFolder, destFolder) {
      return new Promise((resolve, reject) => {
        copyFiles(sourceFolder, destFolder, resolve);
      });
    }

    var publicMembers = {
      copyFiles: copyFiles,
      copyFilesAsync,
      createSiteGroup: createSiteGroup,
      getUserGroups: getUserGroups,
      getUsersWithGroup: getUsersWithGroup,
    };

    return publicMembers;
  };

  // Used in Knockout people custom binding
  async function ensureUserByKeyAsync(userName) {
    return new Promise((resolve, reject) => {
      var group = sal.globalConfig.siteGroups.find(function (group) {
        return group.LoginName == userName;
      });

      if (group) {
        resolve(group);
        return;
      }

      var context = new SP.ClientContext.get_current();
      var oUser = context.get_web().ensureUser(userName);

      function onEnsureUserSucceeded(sender, args) {
        const user = principalToPeople(oUser);
        resolve(user);
      }

      function onEnsureUserFailed(sender, args) {
        console.error(
          "Failed to ensure user :" +
            args.get_message() +
            "\n" +
            args.get_stackTrace()
        );
        reject(args);
      }
      const data = { oUser, resolve, reject };

      context.load(oUser);
      context.executeQueryAsync(
        Function.createDelegate(data, onEnsureUserSucceeded),
        Function.createDelegate(data, onEnsureUserFailed)
      );
    });
  }

  let requestDigest;
  async function fetchSharePointData(
    uri,
    method = "GET",
    headers = {},
    opts = {}
  ) {
    const siteEndpoint = uri.startsWith("http")
      ? uri
      : window.context.pageContext.legacyPageContext.webServerRelativeUrl +
        "/_api" +
        uri;

    const response = await fetch(siteEndpoint, {
      method,
      headers: {
        Accept: "application/json; odata=verbose",
        "Content-Type": "application/json;odata=nometadata",
        "X-RequestDigest": requestDigest,
        ...headers,
      },
      credentials: "same-origin",
      ...opts,
    });

    if (!response.ok) {
      if (response.status == 404) {
        return;
      }
      console.error(response);
    }
    try {
      const result = await response.json();
      return result;
    } catch (e) {
      return;
    }
  }

  async function getRequestDigest() {
    const response = await fetch(
      //window.context.pageContext.legacyPageContext.webServerRelativeUrl +
      "../_api/contextinfo",
      {
        method: "POST",
        headers: {
          Accept: "application/json; odata=verbose",
        },
      }
    );

    if (!response.ok) {
      console.error("Cannot refresh token", response);
      return;
    }
    const result = await response.json();
    return result.d.GetContextWebInformation;
  }

  async function refreshDigestValue() {
    const result = await getRequestDigest();

    if (!result) return;

    requestDigest = result.FormDigestValue;

    // document.getElementById("__REQUESTDIGEST").value = result.FormDigestValue;

    // Refresh before timeout
    window.setTimeout(refreshDigestValue, result.FormDigestTimeoutSeconds * 900);
  }
  refreshDigestValue();

  window.fetchSharePointData = fetchSharePointData;

  const assetsPath = () =>
    `${window.context.pageContext.serverRelativeUrl}/Style Library/apps/audit/src`;

  knockoutLatestExports.subscribable.fn.subscribeChanged = function (callback) {
    var oldValue;
    this.subscribe(
      function (_oldValue) {
        oldValue = _oldValue;
      },
      this,
      "beforeChange"
    );

    this.subscribe(function (newValue) {
      callback(newValue, oldValue);
    });
  };

  knockoutLatestExports.observableArray.fn.subscribeAdded = function (callback) {
    this.subscribe(
      function (arrayChanges) {
        const addedValues = arrayChanges
          .filter((value) => value.status == "added")
          .map((value) => value.value);
        callback(addedValues);
      },
      this,
      "arrayChange"
    );
  };

  knockoutLatestExports.bindingHandlers.searchSelect = {
    init: function (element, valueAccessor, allBindingsAccessor) {
      const { options, selectedOptions, optionsText, onSearchInput } =
        valueAccessor();

      function populateOpts() {
        const optionItems = knockoutLatestExports.unwrap(options);

        const selectedOpts = knockoutLatestExports.unwrap(selectedOptions) ?? [];

        const optionElements = optionItems.map((option) => {
          const optionElement = document.createElement("option");
          knockoutLatestExports.selectExtensions.writeValue(optionElement, knockoutLatestExports.unwrap(option));
          // optionElement.value = option;
          optionElement.innerText = optionsText(option);

          if (
            selectedOpts?.find((selectedOption) => {
              if (option.ID && selectedOption.ID == option.ID) return true;
              if (option == selectedOption) return true;
              return false;
            })
          ) {
            optionElement.setAttribute("selected", "");
          }
          return optionElement;
        });

        element.append(...optionElements);
      }

      populateOpts();

      if (knockoutLatestExports.isObservable(options)) {
        options.subscribe(() => populateOpts(), this);
      }

      knockoutLatestExports.utils.registerEventHandler(element, "change", (e) => {
        selectedOptions(
          element.selectedOptions.map((opt) => knockoutLatestExports.selectExtensions.readValue(opt))
        );
      });

      if (onSearchInput) {
        knockoutLatestExports.utils.registerEventHandler(element, "input", (e) => {
          onSearchInput(e.originalEvent.target.searchInputElement.value);
        });
      }
    },
    update: function (
      element,
      valueAccessor,
      allBindings,
      viewModel,
      bindingContext
    ) {
      const { selectedOptions } = valueAccessor();
      const selectedUnwrapped = knockoutLatestExports.unwrap(selectedOptions);

      for (var i = 0; i < element.options.length; i++) {
        const o = element.options[i];
        o.toggleAttribute(
          "selected",
          selectedUnwrapped.includes(knockoutLatestExports.selectExtensions.readValue(o))
        );
      }

      // element.selectedOptions = ko.unwrap(selectedOptions);
    },
  };

  knockoutLatestExports.bindingHandlers.people = {
    init: function (element, valueAccessor, allBindingsAccessor) {
      var schema = {};
      schema["PrincipalAccountType"] = "User";
      schema["SearchPrincipalSource"] = 15;
      schema["ShowUserPresence"] = true;
      schema["ResolvePrincipalSource"] = 15;
      schema["AllowEmailAddresses"] = true;
      schema["AllowMultipleValues"] = false;
      schema["MaximumEntitySuggestions"] = 50;
      //schema["Width"] = "280px";
      schema["OnUserResolvedClientScript"] = async function (elemId, userKeys) {
        //  get reference of People Picker Control
        var pickerControl = SPClientPeoplePicker.SPClientPeoplePickerDict[elemId];
        var observable = valueAccessor();
        var userJSObject = pickerControl.GetControlValueAsJSObject()[0];
        if (!userJSObject) {
          observable(null);
          return;
        }

        if (userJSObject.IsResolved) {
          if (userJSObject.Key == observable()?.LoginName) return;
          var user = await ensureUserByKeyAsync(userJSObject.Key);
          var person = new People(user);
          observable(person);
        }
      };

      // TODO: Minor - accept schema settings as options
      //var mergedOptions = Object.assign(schema, obs.schemaOpts);

      //  Initialize the Control, MS enforces to pass the Element ID hence we need to provide
      //  ID to our element, no other options
      SPClientPeoplePicker_InitStandaloneControlWrapper(element.id, null, schema);
      // const helpDiv = document.createElement("div");
      // helpDiv.innerHTML = "Search surname first e.g. Smith, John";
      // helpDiv.classList.add("fst-italic", "fw-lighter");
      // element.appendChild(helpDiv);
    },
    update: function (
      element,
      valueAccessor,
      allBindings,
      viewModel,
      bindingContext
    ) {
      var pickerControl =
        SPClientPeoplePicker.SPClientPeoplePickerDict[element.id + "_TopSpan"];
      var userValue = knockoutLatestExports.utils.unwrapObservable(valueAccessor());

      if (!userValue) {
        // Clear the form
        pickerControl?.DeleteProcessedUser();
        return;
      }

      if (
        userValue &&
        !pickerControl
          .GetAllUserInfo()
          .find((pickerUser) => pickerUser.DisplayText == userValue.LookupValue)
      ) {
        pickerControl.AddUserKeys(
          userValue.LoginName ?? userValue.LookupValue ?? userValue.Title
        );
      }
    },
  };

  knockoutLatestExports.bindingHandlers.dateField = {
    init: function (element, valueAccessor, allBindingsAccessor) {},
    update: function (
      element,
      valueAccessor,
      allBindings,
      viewModel,
      bindingContext
    ) {},
  };

  knockoutLatestExports.bindingHandlers.downloadLink = {
    update: function (
      element,
      valueAccessor,
      allBindings,
      viewModel,
      bindingContext
    ) {
      var path = valueAccessor();
      var replaced = path.replace(/:([A-Za-z_]+)/g, function (_, token) {
        return knockoutLatestExports.unwrap(viewModel[token]);
      });
      element.href = replaced;
    },
  };

  knockoutLatestExports.bindingHandlers.files = {
    init: function (element, valueAccessor) {
      function addFiles(fileList) {
        var value = valueAccessor();
        if (!fileList.length) {
          value.removeAll();
          return;
        }

        const existingFiles = knockoutLatestExports.unwrap(value);
        const newFileList = [];
        for (let file of fileList) {
          if (!existingFiles.find((exFile) => exFile.name == file.name))
            newFileList.push(file);
        }
        knockoutLatestExports.utils.arrayPushAll(value, newFileList);
        return;
      }

      knockoutLatestExports.utils.registerEventHandler(element, "change", function () {
        addFiles(element.files);
      });

      const label = element.closest("label");
      if (!label) return;

      knockoutLatestExports.utils.registerEventHandler(label, "dragover", function (event) {
        event.preventDefault();
        event.stopPropagation();
      });

      knockoutLatestExports.utils.registerEventHandler(label, "dragenter", function (event) {
        event.preventDefault();
        event.stopPropagation();
        label.classList.add("dragging");
      });

      knockoutLatestExports.utils.registerEventHandler(label, "dragleave", function (event) {
        event.preventDefault();
        event.stopPropagation();
        label.classList.remove("dragging");
      });

      knockoutLatestExports.utils.registerEventHandler(label, "drop", function (event) {
        event.preventDefault();
        event.stopPropagation();
        let dt = event.originalEvent.dataTransfer;
        let files = dt.files;
        addFiles(files);
      });
    },
    update: function (
      element,
      valueAccessor,
      allBindings,
      viewModel,
      bindingContext
    ) {
      const value = valueAccessor();
      if (!value().length && element.files.length) {
        // clear all files
        element.value = null;
        return;
      }

      return;
    },
  };

  knockoutLatestExports.bindingHandlers.toggleClick = {
    init: function (element, valueAccessor, allBindings) {
      valueAccessor();

      knockoutLatestExports.utils.registerEventHandler(element, "click", function () {
        var classToToggle = allBindings.get("toggleClass");
        var classContainer = allBindings.get("classContainer");
        var containerType = allBindings.get("containerType");

        if (containerType && containerType == "sibling") {
          let sibling = element.nextElementSibling;
          while (sibling && !sibling.matches(classContainer)) {
            sibling.classList.toggle(classToToggle);
            sibling = sibling.nextElementSibling;
          }
        } else if (containerType && containerType == "doc") {
          var curIcon = element.getAttribute("src");
          if (curIcon == "/_layouts/images/minus.gif") {
            element.setAttribute("src", "/_layouts/images/plus.gif");
          } else {
            element.setAttribute("src", "/_layouts/images/minus.gif");
          }

          if (element.parentElement && element.parentElement.parentElement) {
            let sibling = element.parentElement.parentElement.nextElementSibling;
            while (sibling && !sibling.matches(classContainer)) {
              sibling.classList.toggle(classToToggle);
              sibling = sibling.nextElementSibling;
            }
          }
        } else if (containerType && containerType == "any") {
          const elements = document.querySelectorAll("." + classToToggle);

          elements.forEach(function (element) {
            if (element.style.display === "none") {
              element.style.display = ""; // Resets to default display value, such as 'block' or 'inline'
            } else {
              element.style.display = "none";
            }
          });
        } else {
          const containers = element.querySelectorAll(classContainer);
          containers.forEach(function (container) {
            container.classList.toggle(classToToggle);
          });
        }
      });
    },
  };

  knockoutLatestExports.bindingHandlers.toggles = {
    init: function (element, valueAccessor) {
      var value = valueAccessor();

      knockoutLatestExports.utils.registerEventHandler(element, "click", function () {
        value(!value());
      });
    },
  };

  const fromPathTemplateLoader = {
    loadTemplate: function (name, templateConfig, callback) {
      if (templateConfig.fromPath) {
        // TODO: Minor - fix error catching and fallback flow
        fetch(assetsPath() + templateConfig.fromPath)
          .then((response) => {
            if (!response.ok) {
              throw new Error(
                `Error Fetching HTML Template - ${response.statusText}`
              );
            }
            return response.text();
          })
          .catch((error) => {
            if (!templateConfig.fallback) return;
            console.warn(
              "Primary template not found, attempting fallback",
              templateConfig
            );
            fetch(assetsPath() + templateConfig.fallback)
              .then((response) => {
                if (!response.ok) {
                  throw new Error(
                    `Error Fetching fallback HTML Template - ${response.statusText}`
                  );
                }
                return response.text();
              })
              .then((text) =>
                knockoutLatestExports.components.defaultLoader.loadTemplate(name, text, callback)
              );
          })
          .then((text) =>
            text
              ? knockoutLatestExports.components.defaultLoader.loadTemplate(name, text, callback)
              : null
          );
      } else {
        callback(null);
      }
    },
  };

  knockoutLatestExports.components.loaders.unshift(fromPathTemplateLoader);

  const fromPathViewModelLoader = {
    loadViewModel: function (name, viewModelConfig, callback) {
      if (viewModelConfig.viaLoader) {
        // console.log("loading module", name);
        import(assetsPath() + viewModelConfig.viaLoader).then(
          (module) => {
            // console.log("imported module", name);
            const viewModelConstructor = module.default;
            // We need a createViewModel function, not a plain constructor.
            // We can use the default loader to convert to the
            // required format.
            knockoutLatestExports.components.defaultLoader.loadViewModel(
              name,
              viewModelConstructor,
              callback
            );
          }
        );
      } else {
        // Unrecognized config format. Let another loader handle it.
        callback(null);
      }
    },
  };

  knockoutLatestExports.components.loaders.unshift(fromPathViewModelLoader);

  async function getAllItems(listTitle, fields = null) {
    let listItemsResults = [];
    let listItems;

    const currCtx = new SP.ClientContext.get_current();
    const web = currCtx.get_web();

    const list = web.get_lists().getByTitle(listTitle);

    const viewFields = viewFieldsStringBuilder(fields);

    const camlQuery = new SP.CamlQuery();
    camlQuery.set_viewXml(
      `<View Scope="RecursiveAll"><Query></Query><RowLimit>5000</RowLimit>${viewFields}</View>`
    );

    let position = new SP.ListItemCollectionPosition();
    position.set_pagingInfo("Paged=TRUE");

    while (position != null) {
      console.log("Legacy Helper - getAllItems", listTitle, position);
      camlQuery.set_listItemCollectionPosition(position);

      listItems = list.getItems(camlQuery);

      currCtx.load(listItems);

      await executeQuery(currCtx).catch((sender, args) => {
        console.warn(sender);
      });

      const listEnumerator = listItems.getEnumerator();
      while (listEnumerator.moveNext()) {
        listItemsResults.push(listEnumerator.get_current());
      }

      position = listItems.get_listItemCollectionPosition();
    }

    return listItemsResults;
  }

  function viewFieldsStringBuilder(fields) {
    if (!fields) return "";
    return `
  <ViewFields>${fields.map(
    (field) => `<FieldRef Name="${field}"></FieldRef>`
  )}</ViewFields>
  `;
  }

  document.getElementById("app").innerHTML = qaDbTemplate;
  // var SP = window.SP;
  // var ko = window.ko;

  window.Audit = window.Audit || {};
  Audit.QAReport = Audit.QAReport || {};

  const responseParam = "ResNum";

  var paramShowSiteActionsToAnyone = GetUrlKeyValue("ShowSiteActions");
  if (paramShowSiteActionsToAnyone != true) {
    //hide it even for owners unless this param is passed into the URL; pass in param if you want to change the page web parts/settings
    $("#RibbonContainer-TabRowLeft").hide();
    $(".ms-siteactionsmenu").hide();
  }

  if (document.readyState === "ready" || document.readyState === "complete") {
    InitReport();
  } else {
    document.onreadystatechange = () => {
      if (document.readyState === "complete" || document.readyState === "ready") {
        ExecuteOrDelayUntilScriptLoaded(function () {
          SP.SOD.executeFunc("sp.js", "SP.ClientContext", InitReport);
        }, "sp.js");
      }
    };
  }

  function InitReport() {
    Audit.QAReport.Report = new Audit.QAReport.NewReportPage();
    Audit.QAReport.Init();
  }

  Audit.QAReport.Init = function () {
    var paramShowSiteActionsToAnyone = GetUrlKeyValue("ShowSiteActions");
    if (paramShowSiteActionsToAnyone != true) {
      //hide it even for owners unless this param is passed into the URL; pass in param if you want to change the page web parts/settings
      $("#RibbonContainer-TabRowLeft").hide();
      $(".ms-siteactionsmenu").hide();
    }
    /*setInterval(function() {
  	    var divVal = $("#divCounter").text();
  	    var count = divVal * 1 - 1;
  	    $("#divCounter").text(count);
  	    if (count <= 0) {
  	       Audit.Common.Utilities.Refresh();
  	    }
  	}, 1000);*/

    function SetTimer() {
      var intervalRefreshID = setInterval(function () {
        var divVal = $("#divCounter").text();
        var count = divVal * 1 - 1;
        $("#divCounter").text(count);
        if (count <= 0) {
          if (!Audit.QAReport.Report.IsTransactionExecuting())
            Audit.Common.Utilities.Refresh();
          else {
            clearInterval(intervalRefreshID);
            $("#divCounter").text("1200");
            SetTimer();
          }
        }
      }, 1000);
    }

    SetTimer();
  };

  Audit.QAReport.NewReportPage = function () {
    var m_arrRequests = new Array();
    var m_arrResponses = new Array();

    var m_bigMap = new Object();

    var m_IA_SPGroupName = null;
    var m_IA_ActionOffice = null;

    var m_itemID = null;
    var m_RejectReason = "";

    var m_resStatusToFilterOn = "";
    //ko.options.deferUpdates = true;

    var m_bIsTransactionExecuting = false;

    var memberGroup = null;

    var statusId = null;
    let m_waitDialog = null;

    var m_requestItems = null;
    var m_requestInternalItems = null;

    var m_responseItems = null;

    var m_ResponseDocsItems = null;
    var m_aoItems = null;

    let eaReponseDocsFolderItems = null;
    let eaEmailLogListItems = null;

    function CommentChainField(requestId, props) {
      var requestListTitle = props.requestListTitle;
      var columnName = props.columnName;
      var initialValue = props.initialValue;

      var showHistoryBool = ko.observable(false);

      var toggleShowHistory = function () {
        showHistoryBool(!showHistoryBool());
      };

      var arrInitialComments = [];
      // If we have comments here, try to parse them.
      if (initialValue) {
        try {
          arrInitialComments = JSON.parse(initialValue);
          arrInitialComments.forEach(function (comment) {
            comment.timestamp = new Date(comment.timestamp);
          });
        } catch (e) {
          console.error("could not parse internal status comments.");
        }
      }
      var comments = ko.observableArray(arrInitialComments);
      var newCommentText = ko.observable();
      // var requestId = requestId;

      function onSubmit() {
        var comment = {
          id: Math.ceil(Math.random() * 1000000).toString(16),
          text: newCommentText(),
          author: _spPageContextInfo.userLoginName,
          timestamp: new Date(),
        };
        comments.push(comment);
        commitChanges();
      }

      function onRemove(commentToRemove) {
        if (confirm("Are you sure you want to delete this item?")) {
          var commentIndex = comments.indexOf(commentToRemove);
          comments.splice(commentIndex, 1);
          commitChanges();
        }
      }

      function commitChanges() {
        var currCtx = new SP.ClientContext.get_current();
        var web = currCtx.get_web();
        //Now push to the request item:
        var requestList = web.get_lists().getByTitle(requestListTitle);
        const oListItem = requestList.getItemById(requestId);
        oListItem.set_item(columnName, JSON.stringify(comments()));
        oListItem.update();

        currCtx.load(oListItem);

        currCtx.executeQueryAsync(
          function onSuccess() {
            // console.log("Updated comments");
            newCommentText("");
          },
          function onFailure(args, sender) {
            console.error("Failed to commit changes.", args);
          }
        );
      }

      var publicMembers = {
        comments: comments,
        newCommentText: newCommentText,
        onSubmit: onSubmit,
        onRemove: onRemove,
        toggleShowHistory: toggleShowHistory,
        showHistoryBool: showHistoryBool,
      };

      return publicMembers;
    }

    function ViewModel() {
      var self = this;

      self.debugMode = ko.observable(false);

      self.siteUrl = Audit.Common.Utilities.GetSiteUrl();

      //cant add rate limit because it'll affect the refresh
      //self.arrResponses = ko.observableArray( null ).extend({ rateLimit: 500 });
      self.arrResponses = ko.observableArray(null);

      // self.arrFilteredResponsesCount = ko.observable(0);

      self.cntPendingReview = ko.observable(0);

      self.ddOptionsResponseTabRequestID = ko.observableArray();
      self.ddOptionsResponseTabRequestStatus = ko.observableArray();
      self.ddOptionsResponseTabRequestInternalDueDate = ko.observableArray();
      self.ddOptionsResponseTabRequestSample = ko.observableArray();
      self.ddOptionsResponseTabResponseTitle = ko.observableArray();
      self.ddOptionsResponseTabResponseStatus = ko.observableArray();
      self.filterResponseTabRequestID = ko.observable();
      self.filterResponseTabRequestStatus = ko.observable();
      self.filterResponseTabRequestIntDueDate = ko.observable();
      self.filterResponseTabSampleNum = ko.observable();
      self.filterResponseTabResponseName = ko.observable();
      self.filterResponseTabResponseStatus = ko.observable();
      self.doSort = ko.observable(false);

      self.ddOptionsResponseInfoTabResponseNameOpen2 = ko.observableArray();
      self.ddOptionsResponseInfoTabResponseNameProcessed2 = ko.observableArray();
      self.filterResponseInfoTabResponseNameOpen2 = ko.observable("");
      self.filterResponseInfoTabResponseNameProcessed2 = ko.observable("");

      self.currentResponse = ko.observable();
      self.arrCoverSheets = ko.observableArray(null);
      self.arrResponseDocs = ko.observable();
      self.cntResponseDocs = ko.observable(0);

      self.showBulkApprove = ko.observable(false);
      self.showCloseResponse = ko.observable(false);
      self.showReturnToCGFS = ko.observable(false);

      self.tabOpts = {
        Responses: new Tab("response-report", "Status Report", {
          id: "responseStatusReportTemplate",
          data: self,
        }),
        ResponseDetail: new Tab("response-detail", "Responses", {
          id: "responseDetailTemplate",
          data: self,
        }),
      };

      self.tabs = new TabsModule(Object.values(self.tabOpts));

      /** Behaviors **/

      self.ClearFiltersResponseTab = function () {
        self.filterResponseTabRequestID("");
        self.filterResponseTabRequestStatus("");
        self.filterResponseTabRequestIntDueDate("");
        self.filterResponseTabSampleNum("");
        self.filterResponseTabResponseName("");
        self.filterResponseTabResponseStatus("");
      };

      /*self.GoToResponse = function( response )
  		{
  			$('#tabs').tabs({ active: 1 });			
  			
  			var requestStatus = response.requestStatus;
  			var responseStatus = response.status;
  			if( (responseStatus == "4-Approved for QA" || responseStatus == "6-Reposted After Rejection" ) && ( requestStatus  == "Open" || requestStatus == "ReOpened") )  
  				self.filterResponseNameOpen2 ( response.title );
  			else
  				self.filterResponseNameProcessed2 ( response.title );
  		};	*/

      self.filteredResponses = ko.pureComputed(() => {
        const responses = ko.unwrap(self.arrResponses);
        var requestID = self.filterResponseTabRequestID();
        var requestStatus = self.filterResponseTabRequestStatus();
        var requestIntDueDate = self.filterResponseTabRequestIntDueDate();
        var sampleNum = self.filterResponseTabSampleNum();
        var responseName = self.filterResponseTabResponseName();
        var responseStatus = self.filterResponseTabResponseStatus();

        if (
          !requestID &&
          !requestStatus &&
          !requestIntDueDate &&
          !sampleNum &&
          !responseName &&
          !responseStatus
        ) {
          // self.arrFilteredResponsesCount(responses.length);
          document.body.style.cursor = "default";
          return responses;
        }

        const filteredResponses = responses.filter((response) => {
          if (responseStatus && response.status != responseStatus) return false;
          if (requestID && response.reqNumber != requestID) return false;
          if (requestStatus && response.requestStatus != requestStatus)
            return false;
          if (requestIntDueDate && response.internalDueDate != requestIntDueDate)
            return false;
          if (responseName && response.title != responseName) return false;
          if (sampleNum && response.sample != sampleNum) return false;

          return true;
        });
        // self.arrFilteredResponsesCount(filteredResponses.length);

        return filteredResponses;
      });
      self.arrFilteredResponsesCount = ko.pureComputed(() => {
        return self.filteredResponses().length;
      });

      // self.responseIsFiltered = function () {};

      self.FilterChangedResponseTab = function () {
        document.body.style.cursor = "wait";
        setTimeout(function () {
          var requestID = self.filterResponseTabRequestID();
          var requestStatus = self.filterResponseTabRequestStatus();
          var requestIntDueDate = self.filterResponseTabRequestIntDueDate();
          var sampleNum = self.filterResponseTabSampleNum();
          var responseName = self.filterResponseTabResponseName();
          var responseStatus = self.filterResponseTabResponseStatus();

          if (
            !requestID &&
            !requestStatus &&
            !requestIntDueDate &&
            !sampleNum &&
            !responseName &&
            !responseStatus
          ) {
            $(".sr-response-item").show();
            // self.arrFilteredResponsesCount(self.arrResponses().length);
            document.body.style.cursor = "default";
            return;
          }

          requestID = !requestID ? "" : requestID;
          requestStatus = !requestStatus ? "" : requestStatus;
          requestIntDueDate = !requestIntDueDate ? "" : requestIntDueDate;
          sampleNum = !sampleNum ? "" : sampleNum;
          responseName = !responseName ? "" : responseName;
          responseStatus = !responseStatus ? "" : responseStatus;
          var eacher = $(".sr-response-item");
          eacher.each(function () {
            var hide = false;

            if (
              !hide &&
              requestID != "" &&
              $.trim($(this).find(".sr-response-requestNum").text()) != requestID
            )
              hide = true;
            if (
              !hide &&
              requestStatus != "" &&
              $.trim($(this).find(".sr-response-requestStatus").text()) !=
                requestStatus
            )
              hide = true;
            if (
              !hide &&
              requestIntDueDate != "" &&
              $.trim($(this).find(".sr-response-internalDueDate").text()) !=
                requestIntDueDate
            )
              hide = true;
            if (
              !hide &&
              responseName != "" &&
              $.trim($(this).find(".sr-response-title").text()) != responseName
            )
              hide = true;
            if (
              !hide &&
              sampleNum != "" &&
              $.trim($(this).find(".sr-response-sample").text()) != sampleNum
            )
              hide = true;
            if (
              !hide &&
              responseStatus != "" &&
              $.trim($(this).find(".sr-response-status").text()) != responseStatus
            )
              hide = true;

            if (hide) $(this).hide();
            else {
              $(this).show();
            }
          });

          // self.arrFilteredResponsesCount(count);
          document.body.style.cursor = "default";
        }, 100);
      };

      self.ClickHelpResponseDocs = function () {
        m_fnDisplayHelpResponseDocs();
      };

      self.ClickCloseResponse = function () {
        m_fnCloseResponse();
      };

      self.ClickReturnToCGFS = function () {
        m_fnReturnToCGFS();
      };

      self.ClickBulkApprove = function () {
        m_fnApproveAll();
      };

      self.ClickApproveResponseDoc = function (oResponseDoc) {
        if (oResponseDoc && oResponseDoc.ID && oResponseDoc.fileName)
          m_fnApproveResponseDoc(oResponseDoc.ID, oResponseDoc.fileName);
      };

      self.ClickRejectResponseDoc = function (oResponseDoc) {
        if (oResponseDoc && oResponseDoc.ID && oResponseDoc.fileName)
          m_fnRejectResponseDoc(oResponseDoc.ID, oResponseDoc.fileName);
      };

      /** Subscriptions **/

      self.currentResponse.subscribe((response) => {
        if (response) setUrlParam(responseParam, response.title);
      });

      self.doSort.subscribe(function (newValue) {
        Audit.Common.Utilities.OnLoadDisplayTimeStamp();

        //alert("in dosort: " + self.arrResponses().length );
        if (self.arrResponses().length > 0 && newValue) {
          //should trigger only once
          // self.arrFilteredResponsesCount(self.arrResponses().length);

          //draw these first
          ko.utils.arrayPushAll(
            self.ddOptionsResponseTabResponseStatus(),
            self.GetDDVals("status")
          );
          self.ddOptionsResponseTabResponseStatus.valueHasMutated();

          ko.utils.arrayPushAll(
            self.ddOptionsResponseInfoTabResponseNameOpen2(),
            self.GetDDVals2("1", true)
          );
          self.ddOptionsResponseInfoTabResponseNameOpen2.valueHasMutated();

          ko.utils.arrayPushAll(
            self.ddOptionsResponseInfoTabResponseNameProcessed2(),
            self.GetDDVals2("0", true)
          );
          self.ddOptionsResponseInfoTabResponseNameProcessed2.valueHasMutated();

          //draw these next
          ko.utils.arrayPushAll(
            self.ddOptionsResponseTabRequestID(),
            self.GetDDVals("reqNumber")
          );
          self.ddOptionsResponseTabRequestID.valueHasMutated();

          ko.utils.arrayPushAll(
            self.ddOptionsResponseTabRequestStatus(),
            self.GetDDVals("requestStatus")
          );
          self.ddOptionsResponseTabRequestStatus.valueHasMutated();

          ko.utils.arrayPushAll(
            self.ddOptionsResponseTabRequestInternalDueDate(),
            self.GetDDVals("internalDueDate")
          );
          self.ddOptionsResponseTabRequestInternalDueDate.valueHasMutated();

          ko.utils.arrayPushAll(
            self.ddOptionsResponseTabRequestSample(),
            self.GetDDVals("sample")
          );
          self.ddOptionsResponseTabRequestSample.valueHasMutated();

          ko.utils.arrayPushAll(
            self.ddOptionsResponseTabResponseTitle(),
            self.GetDDVals("title", true)
          );
          self.ddOptionsResponseTabResponseTitle.valueHasMutated();

          setTimeout(function () {
            var paramTabIndex = GetUrlKeyValue("Tab");
            if (paramTabIndex != null && paramTabIndex != "") {
              _myViewModel.tabs.selectById(paramTabIndex);
            } else {
              _myViewModel.tabs.selectTab(_myViewModel.tabOpts.Responses);
            }
            var paramResponseNum = GetUrlKeyValue("ResNum");
            if (paramResponseNum != null && paramResponseNum != "") {
              if (paramTabIndex == _myViewModel.tabOpts.Responses.id) {
                if (
                  $("#ddlResponseName option[value='" + paramResponseNum + "']")
                    .length > 0
                )
                  _myViewModel.filterResponseTabResponseName(paramResponseNum);
              } else {
                if (
                  $("#ddlResponsesOpen option[value='" + paramResponseNum + "']")
                    .length > 0
                )
                  _myViewModel.filterResponseInfoTabResponseNameOpen2(
                    paramResponseNum
                  );
                else if (
                  $(
                    "#ddlResponsesProcessed option[value='" +
                      paramResponseNum +
                      "']"
                  ).length > 0
                )
                  _myViewModel.filterResponseInfoTabResponseNameProcessed2(
                    paramResponseNum
                  );
              }
            }

            BindHandlersOnLoad();

            if (m_resStatusToFilterOn != "")
              self.filterResponseTabResponseStatus(m_resStatusToFilterOn);
            else self.filterResponseTabRequestStatus("Open");

            //$( "#tblStatusReportResponses" ).trigger("update");
            $("#tblStatusReportResponses").tablesorter({
              sortList: [[3, 0]],
              selectorHeaders: ".sorter-true",
            });
          }, 200);
        }
      });

      /* second tab */
      self.filterResponseInfoTabResponseNameOpen2.subscribe(function (newValue) {
        self.filterResponseInfoTabResponseName(newValue, true);
      });

      /* second tab */
      self.filterResponseInfoTabResponseNameProcessed2.subscribe(function (
        newValue
      ) {
        self.filterResponseInfoTabResponseName(newValue, false);
      });

      /* second tab */
      self.filterResponseInfoTabResponseName = function (
        newValue,
        bOpenResponses
      ) {
        self.currentResponse(null);
        self.arrCoverSheets([]);
        self.arrResponseDocs(null);
        self.cntResponseDocs(0);
        self.showBulkApprove(false);
        self.showCloseResponse(false);
        self.showReturnToCGFS(false);

        var oResponse = m_bigMap["response-" + newValue];
        if (oResponse) {
          if (bOpenResponses)
            self.filterResponseInfoTabResponseNameProcessed2("");
          else self.filterResponseInfoTabResponseNameOpen2("");

          self.currentResponse(oResponse);

          LoadTabResponseInfoCoverSheets(oResponse);
          LoadTabResponseInfoResponseDocs(oResponse);

          setTimeout(function () {
            SP.UI.Notify.addNotification(
              "Displaying Response (" + oResponse.title + ")",
              false
            );
          });
        }
      };

      /**Other**/
      self.GetDDVals = function (fieldName, sortAsResponse) {
        var types = ko.utils.arrayMap(self.arrResponses(), function (item) {
          return item[fieldName];
        });

        var ddArr = ko.utils.arrayGetDistinctValues(types).sort();
        if (sortAsResponse) ddArr.sort(Audit.Common.Utilities.SortResponseTitles);

        if (ddArr[0] == "") ddArr.shift();

        return ddArr;
      };

      self.GetDDVals2 = function (responseStatusType, sortAsResponse) {
        var types = ko.utils.arrayMap(self.arrResponses(), function (item) {
          var requestStatus = item.requestStatus;
          var responseStatus = item.status;

          if (responseStatusType == 0) {
            //get the other responses
            if (
              responseStatus != "4-Approved for QA" &&
              responseStatus != "6-Reposted After Rejection"
            )
              return item["title"];
            else return "";
          } else if (responseStatusType == 1) {
            //get responses pending action
            if (
              (responseStatus == "4-Approved for QA" ||
                responseStatus == "6-Reposted After Rejection") &&
              (requestStatus == "Open" || requestStatus == "ReOpened")
            )
              return item["title"];
            else return "";
          }
        });

        var ddArr = ko.utils.arrayGetDistinctValues(types).sort();
        if (sortAsResponse) ddArr.sort(Audit.Common.Utilities.SortResponseTitles);

        if (ddArr[0] == "") ddArr.shift();
        return ddArr;
      };
    }

    var _myViewModel = new ViewModel();
    ko.applyBindings(_myViewModel);

    LoadInfo();

    async function LoadInfo() {
      var currCtx = new SP.ClientContext.get_current();
      var web = currCtx.get_web();

      const m_currentUser = web.get_currentUser();
      currCtx.load(m_currentUser);

      var requestList = web
        .get_lists()
        .getByTitle(Audit.Common.Utilities.GetListTitleRequests());
      var requestQuery = new SP.CamlQuery();
      requestQuery.set_viewXml(
        '<View><Query><OrderBy><FieldRef Name="Title"/></OrderBy></Query></View>'
      );
      m_requestItems = requestList.getItems(requestQuery);
      currCtx.load(
        m_requestItems,
        "Include(ID, Title, ReqSubject, ReqStatus, IsSample, InternalDueDate, ActionOffice, Comments, RelatedAudit, ActionItems, EmailSent, ClosedDate, Modified)"
      );

      var requestInternalList = web
        .get_lists()
        .getByTitle(Audit.Common.Utilities.GetListTitleRequestsInternal());
      var requestInternalQuery = new SP.CamlQuery();
      requestInternalQuery.set_viewXml(
        '<View><Query><OrderBy><FieldRef Name="Title"/></OrderBy></Query></View>'
      );
      m_requestInternalItems = requestInternalList.getItems(requestInternalQuery);
      currCtx.load(
        m_requestInternalItems,
        "Include(ID, Title, ReqNum, InternalStatus)"
      );
      /*
      var responseList = web
        .get_lists()
        .getByTitle(Audit.Common.Utilities.GetListTitleResponses());
      var responseQuery = new SP.CamlQuery();
      responseQuery.set_viewXml(
        '<View Scope="RecursiveAll"><Query><OrderBy><FieldRef Name="ReqNum"/></OrderBy></Query></View>'
      );
      m_responseItems = responseList.getItems(responseQuery);
      currCtx.load(
        m_responseItems,
        "Include(ID, Title, ReqNum, ActionOffice, SampleNumber, ResStatus, Comments, Modified, ClosedDate, ClosedBy)"
      );

      //make sure to only pull documents (fsobjtype = 0)
      var responseDocsLib = web
        .get_lists()
        .getByTitle(Audit.Common.Utilities.GetLibTitleResponseDocs());
      var responseDocsQuery = new SP.CamlQuery();
      responseDocsQuery.set_viewXml(
        '<View Scope="RecursiveAll"><Query><Where><Eq><FieldRef Name="ContentType"/><Value Type="Text">Document</Value></Eq></Where></Query></View>'
      );
      m_ResponseDocsItems = responseDocsLib.getItems(responseDocsQuery);
      currCtx.load(
        m_ResponseDocsItems,
        "Include(ID, Title, ReqNum, ResID, DocumentStatus, RejectReason, ReceiptDate, FileLeafRef, FileDirRef, File_x0020_Size, Modified, Editor)"
      );
  */
      await Promise.all([
        getAllItems(Audit.Common.Utilities.GetListTitleResponses(), [
          "ID",
          "Title",
          "ReqNum",
          "ActionOffice",
          "ReturnReason",
          "SampleNumber",
          "ResStatus",
          "Comments",
          "Modified",
          "ClosedDate",
          "ClosedBy",
          "POC",
        ]).then((result) => (m_responseItems = result)),
        getAllItems(Audit.Common.Utilities.GetLibTitleResponseDocs(), [
          "ID",
          "Title",
          "ReqNum",
          "ResID",
          "DocumentStatus",
          "ReceiptDate",
          "FileLeafRef",
          "FileDirRef",
          "File_x0020_Size",
          "Modified",
          "Editor",
        ]).then((result) => (m_ResponseDocsItems = result)),
      ]);

      var aoList = web
        .get_lists()
        .getByTitle(Audit.Common.Utilities.GetListTitleActionOffices());
      var aoQuery = new SP.CamlQuery();
      aoQuery.set_viewXml(
        '<View><Query><OrderBy><FieldRef Name="Title"/></OrderBy></Query></View>'
      );
      m_aoItems = aoList.getItems(aoQuery);
      currCtx.load(m_aoItems, "Include(ID, Title, UserGroup)");

      memberGroup = web.get_associatedMemberGroup();
      currCtx.load(memberGroup);

      currCtx.executeQueryAsync(OnSuccess, OnFailure);
      function OnSuccess(sender, args) {
        $("#divRefresh").show();
        m_fnLoadData();
      }
      function OnFailure(sender, args) {
        $("#divRefresh").hide();
        $("#divLoading").hide();

        const statusId = SP.UI.Status.addStatus(
          "Request failed: " + args.get_message() + "\n" + args.get_stackTrace()
        );
        SP.UI.Status.setStatusPriColor(statusId, "red");
      }
    }

    function m_fnLoadData() {
      Audit.Common.Utilities.LoadActionOffices(m_aoItems);

      if (memberGroup != null) m_IA_SPGroupName = memberGroup.get_title();
      if (m_IA_SPGroupName == null || m_IA_SPGroupName == "") {
        const statusId = SP.UI.Status.addStatus(
          "Unable to retrieve the IA SharePoint Group. Please contact the Administrator"
        );
        SP.UI.Status.setStatusPriColor(statusId, "red");
        return;
      }

      m_IA_ActionOffice = Audit.Common.Utilities.GetActionOffices()?.find(
        (ao) => ao.userGroup == m_IA_SPGroupName
      );

      LoadRequests();
      LoadResponses();
      LoadResponseDocs();

      LoadTabStatusReport(m_arrResponses);
    }

    function LoadRequests() {
      m_bigMap = new Object();
      m_arrRequests = new Array();

      var cnt = 0;
      var listItemEnumerator = m_requestItems.getEnumerator();
      while (listItemEnumerator.moveNext()) {
        var oListItem = listItemEnumerator.get_current();

        var id = oListItem.get_item("ID");
        var number = oListItem.get_item("Title");
        var status = oListItem.get_item("ReqStatus");
        var sample = oListItem.get_item("IsSample");
        var emailSent = oListItem.get_item("EmailSent");

        var subject = oListItem.get_item("ReqSubject");
        if (subject == null) subject = "";

        var arrActionOffice = oListItem.get_item("ActionOffice");
        var actionOffice = "";
        for (var x = 0; x < arrActionOffice.length; x++) {
          actionOffice +=
            "<div>" + arrActionOffice[x].get_lookupValue() + "</div>";
        }

        var internalDueDate = oListItem.get_item("InternalDueDate");
        var closedDate = oListItem.get_item("ClosedDate");

        internalDueDate != null
          ? (internalDueDate = internalDueDate.format("MM/dd/yyyy"))
          : (internalDueDate = "");
        closedDate != null
          ? (closedDate = closedDate.format("MM/dd/yyyy"))
          : (closedDate = "");

        var comments = oListItem.get_item("Comments");
        var relatedAudit = oListItem.get_item("RelatedAudit");
        var actionItems = oListItem.get_item("ActionItems");

        if (comments == null) comments = "";
        if (relatedAudit == null) relatedAudit = "";
        if (actionItems == null) actionItems = "";

        var requestObject = new Object();
        requestObject["ID"] = id;
        requestObject["number"] = number;
        requestObject["subject"] = subject;
        requestObject["status"] = status;
        requestObject["internalDueDate"] = internalDueDate;
        requestObject["sample"] = sample;
        requestObject["actionOffice"] = actionOffice;
        requestObject["comments"] = comments;
        requestObject["emailSent"] = emailSent;
        requestObject["closedDate"] = closedDate;
        requestObject["relatedAudit"] = relatedAudit;
        requestObject["actionItems"] = actionItems;

        requestObject["arrIndex"] = cnt;
        m_arrRequests.push(requestObject);

        m_bigMap[number] = requestObject;
        cnt++;
      }

      // Also load our Internal Request Status here and bolt these objects onto the requests
      try {
        var listItemEnumerator = m_requestInternalItems.getEnumerator();
        while (listItemEnumerator.moveNext()) {
          var oListItem = listItemEnumerator.get_current();

          var id = oListItem.get_item("ID");
          var reqNum = oListItem.get_item("ReqNum");

          if (!reqNum || !reqNum.get_lookupValue()) {
            console.warn("Unaffiliated Internal Status ID:", id);
            continue;
          }

          var requestObject = m_bigMap[reqNum.get_lookupValue()];

          requestObject.internalStatus = new CommentChainField(id, {
            requestListTitle:
              Audit.Common.Utilities.GetListTitleRequestsInternal(),
            columnName: "InternalStatus",
            initialValue: oListItem.get_item("InternalStatus"),
          });
        }
      } catch (err) {
        alert(err);
      }
    }

    function LoadResponses() {
      m_arrResponses = new Array();

      var cnt = 0;

      for (const oListItem of m_responseItems) {
        var number = oListItem.get_item("ReqNum");
        if (number != null) {
          number = number.get_lookupValue();

          var responseObject = new Object();
          responseObject["request"] = m_bigMap[number]; //GetRequest( number );
          if (!responseObject.request || !responseObject.request.emailSent)
            //they should see it if they have access; then there's probably a permissions issue
            continue;

          responseObject["item"] = oListItem;

          responseObject["resStatus"] = oListItem.get_item("ResStatus");

          responseObject["actionOffice"] = oListItem.get_item("ActionOffice");
          if (responseObject["actionOffice"] == null)
            responseObject["actionOffice"] = "";
          else
            responseObject["actionOffice"] =
              responseObject["actionOffice"].get_lookupValue();
          if (responseObject["actionOffice"] == "") continue;

          responseObject["ID"] = oListItem.get_item("ID");
          responseObject["number"] = number;

          var title = oListItem.get_item("Title");
          responseObject["title"] = title;

          var modifiedDate = oListItem.get_item("Modified");
          modifiedDate != null
            ? (modifiedDate = modifiedDate.format("MM/dd/yyyy hh:mm tt"))
            : (modifiedDate = "");
          responseObject["modified"] = modifiedDate;

          var closedDate = oListItem.get_item("ClosedDate");
          closedDate != null
            ? (closedDate = closedDate.format("MM/dd/yyyy"))
            : (closedDate = "");
          responseObject["closedDate"] = closedDate;

          responseObject["sample"] = oListItem.get_item("SampleNumber");
          if (responseObject["sample"] == null) responseObject["sample"] = "";

          responseObject["coversheets"] = new Array();
          responseObject["responseDocs"] = new Array();

          var responseComments = oListItem.get_item("Comments");
          if (responseComments == null) responseComments = "";
          responseObject["comments"] = responseComments;

          responseObject["closedBy"] =
            Audit.Common.Utilities.GetFriendlyDisplayName(oListItem, "ClosedBy");

          responseObject["arrIndex"] = cnt;
          m_arrResponses.push(responseObject);

          m_bigMap["response-" + title] = responseObject;
          cnt++;
        }
      }
    }

    function LoadResponseDocs() {
      for (var oListItem of m_ResponseDocsItems) {
        if (
          oListItem.get_item("DocumentStatus") == "Open" ||
          oListItem.get_item("DocumentStatus") == "Marked for Deletion" ||
          oListItem.get_item("DocumentStatus") == "Submitted"
        )
          //QA shouldn't see any documents that have been uploaded by AO but not sent to them by IA
          continue;

        var requestNumber = oListItem.get_item("ReqNum");
        if (requestNumber != null)
          requestNumber = requestNumber.get_lookupValue();

        var responseID = oListItem.get_item("ResID");
        if (responseID != null) responseID = responseID.get_lookupValue();

        if (requestNumber == null || responseID == null) continue;

        try {
          var bigMapItem = m_bigMap["response-" + responseID];
          var indexOfArrResponses = bigMapItem.arrIndex;
          var oResponse = m_arrResponses[indexOfArrResponses];
          if (oResponse) {
            var responseDocObject = new Object();
            responseDocObject["ID"] = oListItem.get_item("ID");
            responseDocObject["title"] = oListItem.get_item("Title");
            if (responseDocObject["title"] == null)
              responseDocObject["title"] = "";
            responseDocObject["fileName"] = oListItem.get_item("FileLeafRef");
            responseDocObject["title"] = oListItem.get_item("FileLeafRef");
            responseDocObject["folder"] = oListItem.get_item("FileDirRef");
            responseDocObject["documentStatus"] =
              oListItem.get_item("DocumentStatus");

            //if( responseDocObject ["documentStatus"] == "Marked for Deletion" || responseDocObject ["documentStatus"] == "Open" || responseDocObject ["documentStatus"] == "Submitted") //this should never be the case
            //	continue;

            responseDocObject["rejectReason"] =
              oListItem.get_item("RejectReason");
            if (responseDocObject["rejectReason"] == null)
              responseDocObject["rejectReason"] = "";
            else
              responseDocObject["rejectReason"] = responseDocObject[
                "rejectReason"
              ].replace(/(\r\n|\n|\r)/gm, "<br/>");
            //console.log( responseDocObject ["rejectReason"] );

            var fileSize = oListItem.get_item("File_x0020_Size");
            fileSize = Audit.Common.Utilities.GetFriendlyFileSize(fileSize);
            responseDocObject["fileSize"] = fileSize;

            var receiptDate = "";
            if (
              oListItem.get_item("ReceiptDate") != null &&
              oListItem.get_item("ReceiptDate") != ""
            )
              receiptDate = oListItem
                .get_item("ReceiptDate")
                .format("MM/dd/yyyy");
            responseDocObject["receiptDate"] = receiptDate;

            var modifiedDate = "";
            if (
              oListItem.get_item("Modified") != null &&
              oListItem.get_item("Modified") != ""
            )
              modifiedDate = oListItem
                .get_item("Modified")
                .format("MM/dd/yyyy hh:mm tt");
            responseDocObject["modifiedDate"] = modifiedDate;

            responseDocObject["modifiedBy"] =
              Audit.Common.Utilities.GetFriendlyDisplayName(oListItem, "Editor");

            responseDocObject["item"] = oListItem;

            oResponse["responseDocs"].push(responseDocObject);
            //bigMapItem["responseDocs"].push( responseDocObject );
          }
        } catch (err) {}
      }
    }

    function LoadTabStatusReport(arr, fbody) {
      if (arr == null) return;

      //var bLoadTest = GetUrlKeyValue("LoadTest");
      var responseArr = new Array();

      var responseStatus1 = "4-Approved for QA";
      var responseStatus2 = "6-Reposted After Rejection";

      var count = 0;
      var resStatus1 = 0;
      var resStatus2 = 0;

      var arrlength = arr.length;
      while (arrlength--) {
        var oResponse = arr[arrlength];
        var responseTitle = oResponse.title;
        var requestStatus = oResponse.request.status;
        var responseStatus = oResponse.resStatus;

        var highlight = false;
        if (
          (responseStatus == responseStatus1 ||
            responseStatus == responseStatus2) &&
          (requestStatus == "Open" || requestStatus == "ReOpened")
        ) {
          count++;

          if (responseStatus == responseStatus1) resStatus1++;
          else resStatus2++;

          highlight = true;
        }

        var responseTitle = oResponse.title;
        var requestStatus = oResponse.request.status;
        var responseStatus = oResponse.resStatus;

        var aResponse = {
          reqNumber: oResponse.request.number,
          requestSubject: oResponse.request.subject,
          requestStatus: requestStatus,
          internalDueDate: oResponse.request.internalDueDate,
          sample: oResponse.sample,
          title: responseTitle,
          status: responseStatus,
          docCount: oResponse.responseDocs.length,
          modified: oResponse.modified,
          comments: oResponse.comments,
          highlight: highlight,
          visibleRow: ko.observable(true),
        };
        responseArr.push(aResponse);

        /*if( bLoadTest )
  			{
  				for( var z = 0; z < 99; z++ )
  				{
  					responseArr.push( aResponse );
  				}	
  			}*/
      }

      //if( bLoadTest )
      //	_myViewModel.debugMode( true );

      if (responseArr.length > 0) {
        m_resStatusToFilterOn = "";
        if (resStatus1 > 0 && resStatus2 == 0)
          m_resStatusToFilterOn = responseStatus1;
        else if (resStatus2 > 0 && resStatus1 == 0)
          m_resStatusToFilterOn = responseStatus2;

        _myViewModel.cntPendingReview(count);

        ko.utils.arrayPushAll(_myViewModel.arrResponses, responseArr);

        //do this after push all because this takes some time
        // var output = $("#responseTemplate").render(responseArr);
        // $("#" + fbody).html(output);

        //DoUpdateModel( responseArr, true);
      }

      //always do this even if 0 responses
      _myViewModel.doSort(true);
    }

    function LoadTabResponseInfoCoverSheets(oResponse) {
      _myViewModel.arrCoverSheets([]);

      var currCtx = new SP.ClientContext.get_current();
      var web = currCtx.get_web();

      var coverSheetLib = web
        .get_lists()
        .getByTitle(Audit.Common.Utilities.GetLibTitleCoverSheets());
      var coverSheetQuery = new SP.CamlQuery();
      coverSheetQuery.set_viewXml(
        '<View Scope="RecursiveAll"><Query><OrderBy><FieldRef Name="Title"/></OrderBy><Where><Eq><FieldRef Name="ReqNum"/><Value Type="Text">' +
          oResponse.request.number +
          "</Value></Eq></Where></Query></View>"
      );
      const m_subsetCoverSheetItems = coverSheetLib.getItems(coverSheetQuery);
      currCtx.load(
        m_subsetCoverSheetItems,
        "Include(ID, Title, ReqNum, ActionOffice, FileLeafRef, FileDirRef)"
      );

      var data = { oResponse: oResponse };
      function OnSuccess(sender, args) {
        var arrCS = new Array();

        var listItemEnumerator = m_subsetCoverSheetItems.getEnumerator();
        while (listItemEnumerator.moveNext()) {
          var oListItem = listItemEnumerator.get_current();

          if (oListItem.get_item("ActionOffice") != null) {
            var arrActionOffice = oListItem.get_item("ActionOffice");
            if (arrActionOffice.length > 0) {
              for (var y = 0; y < arrActionOffice.length; y++) {
                var curActionOffice = arrActionOffice[y].get_lookupValue();

                if (curActionOffice == this.oResponse.actionOffice) {
                  var csFolder = oListItem.get_item("FileDirRef");
                  var csTitle = oListItem.get_item("FileLeafRef");

                  arrCS.push({
                    folder: csFolder,
                    fileName: csTitle,
                  });
                  break;
                }
              }
            }
          }
        }

        ko.utils.arrayPushAll(_myViewModel.arrCoverSheets(), arrCS);
        _myViewModel.arrCoverSheets.valueHasMutated();
      }
      function OnFailure(sender, args) {
        $("#tblCoverSheets").hide();
        $("#divEmptyCoversheetsMsg").show();
      }
      currCtx.executeQueryAsync(
        Function.createDelegate(data, OnSuccess),
        Function.createDelegate(data, OnFailure)
      );
    }

    function LoadTabResponseInfoResponseDocs(oResponse) {
      _myViewModel.arrResponseDocs(null);
      _myViewModel.cntResponseDocs(0);

      _myViewModel.showBulkApprove(false);
      _myViewModel.showCloseResponse(false);
      _myViewModel.showReturnToCGFS(false);

      if (
        (oResponse == null || oResponse.responseDocs.length == 0) &&
        $("#ddlResponsesOpen").val() != ""
      ) {
        //an open response is selected and there are no documents
        SP.UI.Notify.addNotification(
          "There are 0 documents to review for " + $("#ddlResponsesOpen").val(),
          false
        );
        _myViewModel.showReturnToCGFS(true);
        return;
      }

      var currCtx = new SP.ClientContext.get_current();
      var web = currCtx.get_web();

      for (var z = 0; z < oResponse.responseDocs.length; z++) {
        var oResponseDoc = oResponse.responseDocs[z];

        //this loads on execute
        oResponseDoc["docIcon"] = web.mapToIcon(
          oResponseDoc.fileName,
          "",
          SP.Utilities.IconSize.Size16
        ); // Audit.Common.Utilities.GetSiteUrl() + "/" + _spPageContextInfo.layoutsUrl + "/images/" + docIcon;
      }

      function OnSuccess(sender, args) {
        RenderResponses(oResponse);
      }
      function OnFailure(sender, args) {
        statusId = SP.UI.Status.addStatus(
          "Request failed: " + args.get_message() + "\n" + args.get_stackTrace()
        );
        SP.UI.Status.setStatusPriColor(statusId, "red");
      }
      currCtx.executeQueryAsync(OnSuccess, OnFailure);

      function RenderResponses(oResponse) {
        if (oResponse == null) return;
        var cntCanBeApprovedOrRejected = 0;
        var cntApprovedOrArchived = 0;

        var arrResponseDocs = new Array();
        for (var z = 0; z < oResponse.responseDocs.length; z++) {
          var oResponseDoc = oResponse.responseDocs[z];
          oResponseDoc.docIcon = oResponseDoc.docIcon.get_value();
          oResponseDoc.styleTag = Audit.Common.Utilities.GetResponseDocStyleTag2(
            oResponseDoc.documentStatus
          );
          oResponseDoc.responseTitle = oResponse.title;

          if (
            (oResponse.resStatus == "4-Approved for QA" ||
              oResponse.resStatus == "6-Reposted After Rejection") &&
            oResponseDoc.documentStatus == "Sent to QA"
          ) {
            cntCanBeApprovedOrRejected++;
            _myViewModel.showBulkApprove(true);
          } else if (
            (oResponse.resStatus == "4-Approved for QA" ||
              oResponse.resStatus == "6-Reposted After Rejection") &&
            oResponseDoc.documentStatus == "Rejected"
          ) {
            _myViewModel.showReturnToCGFS(true);
          } else if (
            (oResponse.resStatus == "4-Approved for QA" ||
              oResponse.resStatus == "6-Reposted After Rejection") &&
            (oResponseDoc.documentStatus == "Archived" ||
              oResponseDoc.documentStatus == "Approved")
          ) {
            cntApprovedOrArchived++;
          }
          arrResponseDocs.push(oResponseDoc);
        }

        var arrResponseSummary = {
          responseTitle: oResponse.title,
          responseDocs: arrResponseDocs,
          responseStatus: oResponse.resStatus,
        };

        //this is a fail safe check in case the response didnt close for some reason but all of the documents are approved or archived
        if (
          cntApprovedOrArchived == arrResponseDocs.length &&
          $("#ddlResponsesOpen").val() != ""
        ) {
          //check if all documents are complete for QA and that if the response is still open
          _myViewModel.showCloseResponse(true);
          SP.UI.Notify.addNotification(
            "This Response did not automatically close. Please close this response.",
            false
          );
        }

        if (
          cntCanBeApprovedOrRejected == 0 &&
          $("#ddlResponsesOpen").val() != ""
        ) {
          //make sure an open response is selected
          _myViewModel.showReturnToCGFS(true);
        }

        _myViewModel.arrResponseDocs(arrResponseSummary);
        _myViewModel.arrResponseDocs.valueHasMutated();
        _myViewModel.cntResponseDocs(oResponse.responseDocs.length);
      }
    }

    function m_fnDisplayHelpResponseDocs() {
      var helpDlg =
        "<div id='helpDlg' style='padding:20px; height:100px; width:700px'>" +
        "<div style='padding:20px;'><fieldset><legend>Response Document Status</legend> <ul style='padding-top:10px;'>" +
        "<li style='padding-top:5px;'><b>Submitted</b> - Submitted to the Internal Auditor by the Action Office</li>" +
        "<li style='padding-top:5px;'><b>Sent to QA</b> - Submitted to the Quality Assurance team by the Internal Auditor</li>" +
        "<li style='padding-top:5px;'><b>Approved</b> - Approved by the Quality Assurance team and submitted to the External Auditor</li>" +
        "<li style='padding-top:5px;'><b>Rejected</b> - Rejected by the Quality Assurance team and returned to the Internal Auditor</li>" +
        "<li style='padding-top:5px;'><b>Archived</b> - Previously Rejected by the Quality Assurance team and is now read-only for record keeping</li>" +
        "</ul></fieldset></div>" +
        "<div style='padding:20px; padding-top:10px;'><fieldset style='padding-top:10px;'><legend>Actions</legend> If the Response Status is <b>4-Approved for QA</b> or <b>6-Reposted After Rejection</b>, then the documents can be <b>Approved</b> or <b>Rejected</b><ul style='padding-top:10px;'>" +
        "<li style='padding-top:5px;'><b>Approve</b> - Submit the document to the External Auditor</li>" +
        "<li style='padding-top:5px;'><b>Reject</b> - Reject the document and return to the Internal Auditor</li>" +
        "</ul></fieldset></div>" +
        "<table style='padding-top:10px; width:200px; float:right'>" +
        "<tr><td class='ms-separator'>&#160;</td><td><input id='btnCancel' type='button' class='ms-ButtonHeightWidth' value='Close' title='Close Help' onclick='SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.cancel)'/></td></tr>" +
        "</table></div>";

      $("body").append(helpDlg);

      var options = SP.UI.$create_DialogOptions();
      options.title = "Response Documents Help";
      options.dialogReturnValueCallback = OnCallbackForm;
      options.html = document.getElementById("helpDlg");
      options.height = 450;
      SP.UI.ModalDialog.showModalDialog(options);
    }

    let m_cntToApprove = 0;
    let m_cntApproved = 0;
    function m_fnApproveAll() {
      m_bIsTransactionExecuting = true;

      var approveResponseDocDlg =
        "<div id='approveResponseDocDlg' style='padding:20px; height:100px'><div style='padding:20px;'>Are you sure you would like to <span style='font-weight:bold; color:green'>Approve</span> all remaining documents?</span></div>" +
        "<table style='padding-top:10px; width:200px; margin:0px auto'>" +
        "<tr><td><input id='btnClientOk1' type='button' class='ms-ButtonHeightWidth' value='Send to Auditor' onclick='SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.OK)'/></td>" +
        "<td class='ms-separator'>&#160;</td><td><input id='btnCancel' type='button' class='ms-ButtonHeightWidth' value='Close' onclick='SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.cancel)'/></td></tr>" +
        "</table></div>";

      $("body").append(approveResponseDocDlg);

      var options = SP.UI.$create_DialogOptions();
      options.title = "Approve Response Documents";
      options.dialogReturnValueCallback = OnCallbackApproveAllResponseDoc;
      options.html = document.getElementById("approveResponseDocDlg");
      SP.UI.ModalDialog.showModalDialog(options);
    }

    function m_fnApproveResponseDoc(id, responseDocFileName) {
      m_bIsTransactionExecuting = true;
      //used in callback
      m_itemID = id;
      m_RejectReason = "";

      var approveResponseDocDlg =
        "<div id='approveResponseDocDlg' style='padding:20px; height:100px'><div style='padding:20px;'>Are you sure you would like to <span style='font-weight:bold; color:green'>Approve</span> the Response Document? <p style='padding-top:10px; font-weight:bold; color:green'>" +
        responseDocFileName +
        "</p></span></div>" +
        "<table style='padding-top:10px; width:200px; margin:0px auto'>" +
        "<tr><td><input id='btnClientOk1' type='button' class='ms-ButtonHeightWidth' value='Send to Auditor' onclick='SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.OK)'/></td>" +
        "<td class='ms-separator'>&#160;</td><td><input id='btnCancel' type='button' class='ms-ButtonHeightWidth' value='Close' onclick='SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.cancel)'/></td></tr>" +
        "</table></div>";

      $("body").append(approveResponseDocDlg);

      var options = SP.UI.$create_DialogOptions();
      options.title = "Approve Response Document";
      options.dialogReturnValueCallback = OnCallbackApproveResponseDoc;
      options.html = document.getElementById("approveResponseDocDlg");
      SP.UI.ModalDialog.showModalDialog(options);
    }

    function m_fnRejectResponseDoc(id, responseDocFileName) {
      m_bIsTransactionExecuting = true;
      //used in callback
      m_itemID = id;
      m_RejectReason = "";

      var rejectResponseDocDlg =
        "<div id='rejectResponseDocDlg' style='padding:20px; height:100px'><div style='padding:20px;'>Are you sure you would like to <span style='font-weight:bold; color:DarkRed'>Reject</span> the Response Document? <p style='padding-top:10px; font-weight:bold; color:DarkRed'>" +
        responseDocFileName +
        "</p><p style='padding-top:10px'>If so, please specify the reason: </p><p><textarea id='txtRejectReason' cols='50' rows='3' onkeyup='Audit.QAReport.Report.GetCancelReason()'></textarea></p></span></div>" +
        "<table style='padding-top:10px; width:200px; margin:0px auto'>" +
        "<tr><td><input id='btnClientOk1' type='button' class='ms-ButtonHeightWidth' value='Yes, Reject Document' disabled='disabled' onclick='SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.OK)'/></td>" +
        "<td class='ms-separator'>&#160;</td><td><input id='btnCancel' type='button' class='ms-ButtonHeightWidth' value='Close' onclick='SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.cancel)'/></td></tr>" +
        "</table></div>";

      $("body").append(rejectResponseDocDlg);

      var options = SP.UI.$create_DialogOptions();
      options.title = "Reject Response Document";
      options.dialogReturnValueCallback = OnCallbackRejectResponseDoc;
      options.html = document.getElementById("rejectResponseDocDlg");
      SP.UI.ModalDialog.showModalDialog(options);
      $("#txtRejectReason").focus();
    }

    function m_fnCloseResponse() {
      m_bIsTransactionExecuting = true;

      var responseDocDlg =
        "<div id='responseDocDlg' style='padding:20px; height:100px'><div style='padding:20px;'>All documents in this response are Approved. Are you sure you would like to <span style='font-weight:bold; color:green'>Close this Response</span>? </span></div>" +
        "<table style='padding-top:10px; width:200px; margin:0px auto'>" +
        "<tr><td><input id='btnClientOk1' type='button' class='ms-ButtonHeightWidth' value='Close Response' onclick='SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.OK)'/></td>" +
        "<td class='ms-separator'>&#160;</td><td><input id='btnCancel' type='button' class='ms-ButtonHeightWidth' value='Close' onclick='SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.cancel)'/></td></tr>" +
        "</table></div>";

      $("body").append(responseDocDlg);

      var options = SP.UI.$create_DialogOptions();
      options.title = "Close Response";
      options.dialogReturnValueCallback = OnCallbackCloseResponse;
      options.html = document.getElementById("responseDocDlg");
      SP.UI.ModalDialog.showModalDialog(options);
    }

    function m_fnReturnToCGFS() {
      m_bIsTransactionExecuting = true;

      var responseDocDlg =
        "<div id='responseDocDlg' style='padding:20px; height:100px'><div style='padding:20px;'>Are you sure you would like to <span style='font-weight:bold; color:darkred'>Return this Response to CGFS</span>? <p style='padding-top:10px;'><b>Note</b>: If you return it, you will no longer be able to Approve or Reject the Remaining Response Documents</p></span></div>" +
        "<table style='padding-top:10px; width:200px; margin:0px auto'>" +
        "<tr><td><input id='btnClientOk1' type='button' class='ms-ButtonHeightWidth' value='Return to CGFS' onclick='SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.OK)'/></td>" +
        "<td class='ms-separator'>&#160;</td><td><input id='btnCancel' type='button' class='ms-ButtonHeightWidth' value='Close' onclick='SP.UI.ModalDialog.commonModalDialogClose(SP.UI.DialogResult.cancel)'/></td></tr>" +
        "</table></div>";

      $("body").append(responseDocDlg);

      var options = SP.UI.$create_DialogOptions();
      options.title = "Return to CGFS";
      options.dialogReturnValueCallback = OnCallbackReturnToCGFS;
      options.html = document.getElementById("responseDocDlg");
      SP.UI.ModalDialog.showModalDialog(options);
    }

    function m_fnFormatEmailBodyToIAFromQA(oRequest, responseTitle) {
      var emailText =
        "<div>Audit Request Reference: <b>REQUEST_NUMBER</b></div>" +
        "<div>Audit Request Subject: <b>REQUEST_SUBJECT</b></div>" +
        "<div>Audit Request Due Date: <b>REQUEST_DUEDATE</b></div><br/>" +
        "<div>Below is the Response that was updated: </div>" +
        "<div>RESPONSE_TITLE</div>";

      emailText = emailText.replace("REQUEST_NUMBER", oRequest.number);
      emailText = emailText.replace("REQUEST_SUBJECT", oRequest.subject);
      emailText = emailText.replace("REQUEST_DUEDATE", oRequest.internalDueDate);
      emailText = emailText.replace("REQUEST_ACTIONITEMS", oRequest.actionItems);

      var responseTitleBody = "<ul><li>" + responseTitle + "</li></ul>";
      emailText = emailText.replace("RESPONSE_TITLE", responseTitleBody);

      return emailText;
    }

    function m_fnGetResponseByTitle(title) {
      var oResponse = null;
      try {
        oResponse = m_bigMap["response-" + title];
      } catch (err) {}

      return oResponse;
    }

    function m_fnCreateEAFolder(requestNumber) {
      var ctx2 = new SP.ClientContext.get_current();

      //Check if folder exists in EA library
      var bFolderExists = false;
      var listItemEnumerator = eaReponseDocsFolderItems.getEnumerator();
      while (listItemEnumerator.moveNext()) {
        var folderItem = listItemEnumerator.get_current();

        var itemName = folderItem.get_displayName();
        if (itemName == requestNumber) {
          bFolderExists = true;
          break;
        }
      }

      //If folder doesn't exist, create it in EA library
      if (!bFolderExists) {
        var earesponseDocLib = ctx2
          .get_web()
          .get_lists()
          .getByTitle(Audit.Common.Utilities.GetLibTitleResponseDocsEA());

        var itemCreateInfo = new SP.ListItemCreationInformation();
        itemCreateInfo.set_underlyingObjectType(SP.FileSystemObjectType.folder);
        itemCreateInfo.set_leafName(requestNumber);

        const oNewEAFolder = earesponseDocLib.addItem(itemCreateInfo);
        oNewEAFolder.set_item("Title", requestNumber);
        oNewEAFolder.update();

        function OnSuccess(sender, args) {}
        function OnFailure(sender, args) {}

        ctx2.executeQueryAsync(OnSuccess, OnFailure);
      }
    }

    function m_fnCreateEAEmailLogItem() {
      var ctx2 = new SP.ClientContext.get_current();

      //Check if an item exists in EA Email log list library
      var bExists = false;
      var listItemEnumerator = eaEmailLogListItems.getEnumerator();
      while (listItemEnumerator.moveNext()) {
        listItemEnumerator.get_current();

        var bExists = true;
        break;
      }

      //If folder doesn't exist, create it in EA library
      if (!bExists) {
        //this should never come here
        var eaEmailLogList = ctx2
          .get_web()
          .get_lists()
          .getByTitle("AuditEAEmailLog");
        var date = new Date();
        var friendlyName = date.format("MM/dd/yyyy");

        var itemCreateInfo = new SP.ListItemCreationInformation();
        const oNewEmailLogItem = eaEmailLogList.addItem(itemCreateInfo);
        oNewEmailLogItem.set_item("Title", friendlyName);
        oNewEmailLogItem.update();

        function OnSuccess(sender, args) {}
        function OnFailure(sender, args) {}

        ctx2.executeQueryAsync(OnSuccess, OnFailure);
      }
    }

    function m_fnGetRequestByResponseTitle(responseTitle) {
      var oRequest = null;

      try {
        var response = m_bigMap["response-" + responseTitle];
        if (response) oRequest = response.request;
      } catch (err) {}

      return oRequest;
    }

    function m_fnCreateEmailToIAFromQA(
      emailList,
      oRequest,
      responseTitle,
      emailSubject
    ) {
      if (!oRequest || !emailList) return;

      var emailText = m_fnFormatEmailBodyToIAFromQA(oRequest, responseTitle);

      var itemCreateInfo = new SP.ListItemCreationInformation();
      itemCreateInfo.set_folderUrl(
        location.protocol +
          "//" +
          location.host +
          Audit.Common.Utilities.GetSiteUrl() +
          "/Lists/" +
          Audit.Common.Utilities.GetListNameEmailHistory() +
          "/" +
          oRequest.number
      );
      const oListItem = emailList.addItem(itemCreateInfo);
      oListItem.set_item("Title", emailSubject);
      oListItem.set_item("Body", emailText);
      oListItem.set_item("To", m_IA_ActionOffice.title);
      oListItem.set_item("ReqNum", oRequest.number);
      oListItem.set_item("ResID", responseTitle);
      oListItem.set_item("NotificationType", "IA Notification");
      oListItem.update();
    }

    function OnCallbackForm(result, value) {
      if (result === SP.UI.DialogResult.OK) ;
    }

    function OnCallbackCloseResponse(result, value) {
      if (result === SP.UI.DialogResult.OK) {
        m_waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose(
          "Closing Response",
          "Please wait... Closing Response",
          200,
          400
        );

        var responseTitle = $("#ddlResponsesOpen").val();

        var ctx2 = SP.ClientContext.get_current();

        var aresponseList = ctx2
          .get_web()
          .get_lists()
          .getByTitle(Audit.Common.Utilities.GetListTitleResponses());
        var aresponseQuery = new SP.CamlQuery();
        aresponseQuery.set_viewXml(
          '<View><Query><OrderBy><FieldRef Name="Title"/></OrderBy><Where><Eq><FieldRef Name="Title"/><Value Type="Text">' +
            responseTitle +
            "</Value></Eq></Where></Query><RowLimit>1</RowLimit></View>"
        );
        const aresponseItems = aresponseList.getItems(aresponseQuery);
        ctx2.load(aresponseItems);

        var emailList = ctx2
          .get_web()
          .get_lists()
          .getByTitle(Audit.Common.Utilities.GetListTitleEmailHistory());
        var emailListQuery = new SP.CamlQuery();
        emailListQuery.set_viewXml(
          '<View><Query><OrderBy><FieldRef Name="ID"/></OrderBy><Where><Eq><FieldRef Name="FSObjType"/><Value Type="Text">1</Value></Eq></Where></Query></View>'
        );
        const emailListFolderItems = emailList.getItems(emailListQuery);
        ctx2.load(
          emailListFolderItems,
          "Include(ID, FSObjType, Title, DisplayName)"
        );

        function OnSuccess(sender, args) {
          var listItemEnumerator = aresponseItems.getEnumerator();
          while (listItemEnumerator.moveNext()) {
            var oListItemResponse = listItemEnumerator.get_current();

            var responseTitle = oListItemResponse.get_item("Title");

            var curDate = new Date();
            oListItemResponse.set_item("ResStatus", "7-Closed");
            //oListItemResponse.set_item( "ClosedDate", Audit.Common.Utilities.GetISODateString( curDate) );
            var newClosedTime = new Date(
              curDate.getFullYear(),
              curDate.getMonth(),
              curDate.getDate(),
              curDate.getHours(),
              curDate.getMinutes(),
              curDate.getSeconds(),
              curDate.getMilliseconds()
            );
            oListItemResponse.set_item("ClosedDate", newClosedTime);
            oListItemResponse.set_item("ClosedBy", _spPageContextInfo.userId);
            oListItemResponse.update();

            var oRequest = null;
            try {
              var mapResponse = m_bigMap["response-" + responseTitle];
              if (mapResponse) oRequest = mapResponse.request;
            } catch (err) {}

            if (oRequest) {
              m_fnCreateEmailToIAFromQA(
                emailList,
                oRequest,
                responseTitle,
                "An Audit Response has been Closed by the Quality Assurance Team: " +
                  responseTitle
              );
            } else m_waitDialog.close();

            ctx2.executeQueryAsync(
              function () {
                m_waitDialog.close();

                Audit.Common.Utilities.Refresh();
              },
              function () {
                m_waitDialog.close();
                Audit.Common.Utilities.Refresh();
              }
            );

            break; //should only be once
          }
        }
        function OnFailure(sender, args) {
          m_waitDialog.close();
          alert(
            "Request failed. " + args.get_message() + "\n" + args.get_stackTrace()
          );
        }

        ctx2.executeQueryAsync(OnSuccess, OnFailure);
      } else m_bIsTransactionExecuting = false;
    }

    function OnCallbackReturnToCGFS(result, value) {
      if (result === SP.UI.DialogResult.OK) {
        m_waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose(
          "Returning to CGFS",
          "Please wait... Returning to CGFS",
          200,
          400
        );

        var responseTitle = $("#ddlResponsesOpen").val();

        var ctx2 = SP.ClientContext.get_current();

        var aresponseList = ctx2
          .get_web()
          .get_lists()
          .getByTitle(Audit.Common.Utilities.GetListTitleResponses());
        var aresponseQuery = new SP.CamlQuery();
        aresponseQuery.set_viewXml(
          '<View><Query><OrderBy><FieldRef Name="Title"/></OrderBy><Where><Eq><FieldRef Name="Title"/><Value Type="Text">' +
            responseTitle +
            "</Value></Eq></Where></Query><RowLimit>1</RowLimit></View>"
        );
        const aresponseItems = aresponseList.getItems(aresponseQuery);
        ctx2.load(aresponseItems);

        var emailList = ctx2
          .get_web()
          .get_lists()
          .getByTitle(Audit.Common.Utilities.GetListTitleEmailHistory());
        var emailListQuery = new SP.CamlQuery();
        emailListQuery.set_viewXml(
          '<View><Query><OrderBy><FieldRef Name="ID"/></OrderBy><Where><Eq><FieldRef Name="FSObjType"/><Value Type="Text">1</Value></Eq></Where></Query></View>'
        );
        let emailListFolderItems = emailList.getItems(emailListQuery);
        ctx2.load(
          emailListFolderItems,
          "Include(ID, FSObjType, Title, DisplayName)"
        );

        function OnSuccess(sender, args) {
          var listItemEnumerator = aresponseItems.getEnumerator();
          while (listItemEnumerator.moveNext()) {
            var oListItemResponse = listItemEnumerator.get_current();

            var responseTitle = oListItemResponse.get_item("Title");
            oListItemResponse.set_item("ResStatus", "5-Returned to GFS");
            oListItemResponse.update();

            var oRequest = null;
            try {
              var mapResponse = m_bigMap["response-" + responseTitle];
              if (mapResponse) oRequest = mapResponse.request;
            } catch (err) {}

            if (oRequest) {
              m_fnCreateEmailToIAFromQA(
                emailList,
                oRequest,
                responseTitle,
                "An Audit Response has been Returned by the Quality Assurance Team: " +
                  responseTitle
              );
            } else m_waitDialog.close();

            ctx2.executeQueryAsync(
              function () {
                m_waitDialog.close();

                Audit.Common.Utilities.Refresh();
              },
              function () {
                m_waitDialog.close();
                Audit.Common.Utilities.Refresh();
              }
            );

            break; //should only be once
          }
        }
        function OnFailure(sender, args) {
          m_waitDialog.close();
          alert(
            "Request failed. " + args.get_message() + "\n" + args.get_stackTrace()
          );
        }

        ctx2.executeQueryAsync(OnSuccess, OnFailure);
      } else m_bIsTransactionExecuting = false;
    }

    function OnCallbackApproveResponseDoc(result, value) {
      if (result === SP.UI.DialogResult.OK) {
        m_waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose(
          "Approving Response Document",
          "Please wait... Approving Response Document",
          200,
          400
        );

        var clientContext = SP.ClientContext.get_current();
        var oList = clientContext
          .get_web()
          .get_lists()
          .getByTitle(Audit.Common.Utilities.GetLibTitleResponseDocs());

        let oListItem = oList.getItemById(m_itemID);
        clientContext.load(oListItem);

        var eaResponseDocsLib = clientContext
          .get_web()
          .get_lists()
          .getByTitle(Audit.Common.Utilities.GetLibTitleResponseDocsEA());
        var earesponseDocsQuery = new SP.CamlQuery();
        earesponseDocsQuery.set_viewXml(
          '<View><Query><OrderBy><FieldRef Name="ID"/></OrderBy><Where><Eq><FieldRef Name="FSObjType"/><Value Type="Text">1</Value></Eq></Where></Query></View>'
        );
        eaReponseDocsFolderItems =
          eaResponseDocsLib.getItems(earesponseDocsQuery);
        clientContext.load(
          eaReponseDocsFolderItems,
          "Include(ID, FSObjType, Title, DisplayName)"
        );

        //make sure ea email folder exists
        var eaEmailLogList = clientContext
          .get_web()
          .get_lists()
          .getByTitle("AuditEAEmailLog");
        var eaEmailLogListQuery = new SP.CamlQuery();
        eaEmailLogListQuery.set_viewXml(
          '<View><Query><OrderBy><FieldRef Name="ID"/></OrderBy><Where><Eq><FieldRef Name="Created"/><Value IncludeTimeValue="FALSE" Type="DateTime"><Today/></Value></Eq></Where></Query></View>'
        );
        eaEmailLogListItems = eaEmailLogList.getItems(eaEmailLogListQuery);
        clientContext.load(eaEmailLogListItems, "Include(ID)");

        function OnSuccess(sender, args) {
          var oResponse = m_fnGetResponseByTitle($("#ddlResponsesOpen").val());

          if (oResponse == null || oResponse.request == null) {
            m_waitDialog.close();
            return;
          }
          const oRequest = oResponse.request;
          const folderPath = oRequest.number;

          m_fnCreateEAFolder(folderPath);
          m_fnCreateEAEmailLogItem();

          var requestId = oRequest.number;
          var responseNumber = oResponse.title;
          var fileName = oListItem.get_item("FileLeafRef");

          var ctx2 = new SP.ClientContext.get_current();
          var oList = ctx2
            .get_web()
            .get_lists()
            .getByTitle(Audit.Common.Utilities.GetLibTitleResponseDocs());

          //refetch to avoid version conflict
          oListItem = oList.getItemById(m_itemID);

          var file = oListItem.get_file();
          var absoluteSiteUrl =
            location.protocol +
            "//" +
            location.host +
            _spPageContextInfo.webServerRelativeUrl +
            "/";
          var destinationFileNameUrl =
            absoluteSiteUrl +
            Audit.Common.Utilities.GetLibTitleResponseDocsEA() +
            "/" +
            folderPath +
            "/" +
            fileName;
          file.copyTo(destinationFileNameUrl, 1);

          oListItem.set_item("DocumentStatus", "Approved");
          oListItem.set_item("RejectReason", "");
          oListItem.update();

          var siteUrl = location.protocol + "//" + location.host;
          var urlOfNewFile = destinationFileNameUrl.replace(siteUrl, "");
          const newFile = ctx2.get_web().getFileByServerRelativeUrl(urlOfNewFile);
          ctx2.load(newFile, "ListItemAllFields");
          //ctx2.load(newFile, 'Include(ID)');

          //alert( "folderPath: " + folderPath );
          var data = {
            responseTitle: responseNumber,
            copiedFileName: destinationFileNameUrl,
            requestId: requestId,
            responseNumber: responseNumber,
          };
          //Execute the query and pass the data with our deferred object

          //Check for all response docs statuses, if there are no more pending actions, close the response and set the closed date of the response
          function onUpdateResFolderSuccess() {
            if (
              this.responseTitle == null ||
              this.responseTitle == undefined ||
              this.responseTitle == ""
            ) {
              m_waitDialog.close();
              alert("Error: empty response title ");
              return;
            }

            var ctx3 = SP.ClientContext.get_current();

            //update the file in the EA document library with the request/response properties
            var idOfCopiedFile = newFile.get_listItemAllFields().get_id();
            var oEADocLib = ctx3
              .get_web()
              .get_lists()
              .getByTitle(Audit.Common.Utilities.GetLibTitleResponseDocsEA());
            const oListFileItem = oEADocLib.getItemById(idOfCopiedFile);
            oListFileItem.set_item("RequestNumber", this.requestId);
            oListFileItem.set_item("ResponseID", this.responseNumber);
            oListFileItem.update();

            var aresponseList = ctx3
              .get_web()
              .get_lists()
              .getByTitle(Audit.Common.Utilities.GetListTitleResponses());
            var aresponseQuery = new SP.CamlQuery();
            aresponseQuery.set_viewXml(
              '<View><Query><OrderBy><FieldRef Name="Title"/></OrderBy><Where><Eq><FieldRef Name="Title"/><Value Type="Text">' +
                this.responseTitle +
                "</Value></Eq></Where></Query><RowLimit>1</RowLimit></View>"
            );
            const aresponseItems = aresponseList.getItems(aresponseQuery);
            ctx3.load(aresponseItems);

            var folderPath =
              Audit.Common.Utilities.GetSiteUrl() +
              "/" +
              Audit.Common.Utilities.GetLibNameResponseDocs() +
              "/" +
              this.responseTitle;
            var aresponseDocList = ctx3
              .get_web()
              .get_lists()
              .getByTitle(Audit.Common.Utilities.GetLibTitleResponseDocs());
            var aresponseDocQuery = new SP.CamlQuery();
            aresponseDocQuery.set_viewXml(
              '<View Scope="RecursiveAll"><Query><OrderBy><FieldRef Name="Title"/></OrderBy><Where><And><Eq><FieldRef Name="FSObjType"/><Value Type="Text">0</Value></Eq><Eq><FieldRef Name="FileDirRef"/><Value Type="Text">' +
                folderPath +
                "</Value></Eq></And></Where></Query></View>"
            );
            const aresponseDocItems =
              aresponseDocList.getItems(aresponseDocQuery);
            ctx3.load(aresponseDocItems);

            var emailList = ctx3
              .get_web()
              .get_lists()
              .getByTitle(Audit.Common.Utilities.GetListTitleEmailHistory());
            var emailListQuery = new SP.CamlQuery();
            emailListQuery.set_viewXml(
              '<View><Query><OrderBy><FieldRef Name="ID"/></OrderBy><Where><Eq><FieldRef Name="FSObjType"/><Value Type="Text">1</Value></Eq></Where></Query></View>'
            );
            let emailListFolderItems = emailList.getItems(emailListQuery);
            ctx3.load(
              emailListFolderItems,
              "Include(ID, FSObjType, Title, DisplayName)"
            );

            function onUpdateSucceededZZ() {
              SP.UI.Notify.addNotification(
                "Approved Response Document",
                false
              );

              let bUpdateResponseStatus = true;
              var listxItemEnumerator = aresponseDocItems.getEnumerator();

              var bRejected = false;
              while (listxItemEnumerator.moveNext()) {
                var oListItemResponseDoc = listxItemEnumerator.get_current();
                var oListItemResponseDocStatus =
                  oListItemResponseDoc.get_item("DocumentStatus");

                if (
                  oListItemResponseDocStatus == "Open" ||
                  oListItemResponseDocStatus == "Submitted" ||
                  oListItemResponseDocStatus == "Sent to QA"
                ) {
                  //there should never be one that's open, but checking anyway
                  bUpdateResponseStatus = false;
                } else if (oListItemResponseDocStatus == "Rejected") {
                  bRejected = true;
                }
              }

              //Update the Response status
              //if all items have completed (none are open or sent to QA), then update the status
              //If one is rejected, then returned to gfs. otherwise, close the response
              if (bUpdateResponseStatus) {
                var oRequest = m_fnGetRequestByResponseTitle(this.responseTitle);

                var listxxItemEnumerator = aresponseItems.getEnumerator();
                while (listxxItemEnumerator.moveNext()) {
                  var oListItemResponse = listxxItemEnumerator.get_current();

                  if (!bRejected) {
                    var curDate = new Date();
                    oListItemResponse.set_item("ResStatus", "7-Closed");
                    //oListItemResponse.set_item( "ClosedDate", Audit.Common.Utilities.GetISODateString( curDate) );
                    var newClosedTime = new Date(
                      curDate.getFullYear(),
                      curDate.getMonth(),
                      curDate.getDate(),
                      curDate.getHours(),
                      curDate.getMinutes(),
                      curDate.getSeconds(),
                      curDate.getMilliseconds()
                    );
                    oListItemResponse.set_item("ClosedDate", newClosedTime);

                    oListItemResponse.set_item(
                      "ClosedBy",
                      _spPageContextInfo.userId
                    );

                    m_fnCreateEmailToIAFromQA(
                      emailList,
                      oRequest,
                      this.responseTitle,
                      "An Audit Response has been Closed by the Quality Assurance Team: " +
                        this.responseTitle
                    );
                  } else {
                    oListItemResponse.set_item("ResStatus", "5-Returned to GFS");

                    m_fnCreateEmailToIAFromQA(
                      emailList,
                      oRequest,
                      this.responseTitle,
                      "An Audit Response has been Returned by the Quality Assurance Team: " +
                        this.responseTitle
                    );
                  }

                  oListItemResponse.update();

                  ctx3.executeQueryAsync(function () {
                    m_waitDialog.close();
                    Audit.Common.Utilities.Refresh();
                  });

                  break; //should only be once
                }
              } else {
                m_waitDialog.close();
                Audit.Common.Utilities.Refresh();
              }
            }
            function onUpdateFailedZZ() {
              m_waitDialog.close();
            }

            var data = { responseTitle: this.responseTitle };
            ctx3.executeQueryAsync(
              Function.createDelegate(data, onUpdateSucceededZZ),
              Function.createDelegate(data, onUpdateFailedZZ)
            ); //After this line "return true" in PreSaveAction() will execute and then CallBackMethods will run.
          }

          function onUpdateResFolderFail(sender, args) {
            m_waitDialog.close();

            alert(
              "Request failed. " +
                args.get_message() +
                "\n" +
                args.get_stackTrace()
            );
            Audit.Common.Utilities.Refresh();
          }

          ctx2.executeQueryAsync(
            Function.createDelegate(data, onUpdateResFolderSuccess),
            Function.createDelegate(data, onUpdateResFolderFail)
          ); //After this line "return true" in PreSaveAction() will execute and then CallBackMethods will run.
        }
        function OnFailure(sender, args) {
          m_waitDialog.close();
          alert(
            "Request failed. " + args.get_message() + "\n" + args.get_stackTrace()
          );
        }

        clientContext.executeQueryAsync(OnSuccess, OnFailure);
      } else m_bIsTransactionExecuting = false;
    }

    function OnCallbackRejectResponseDoc(result, value) {
      if (result === SP.UI.DialogResult.OK) {
        m_waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose(
          "Rejecting Response Document",
          "Please wait... Rejecting Response Document",
          200,
          400
        );

        var clientContext = SP.ClientContext.get_current();
        var oList = clientContext
          .get_web()
          .get_lists()
          .getByTitle(Audit.Common.Utilities.GetLibTitleResponseDocs());

        let oListItem = oList.getItemById(m_itemID);
        clientContext.load(oListItem);

        function OnSuccess(sender, args) {
          var ctx2 = new SP.ClientContext.get_current();
          var oList = ctx2
            .get_web()
            .get_lists()
            .getByTitle(Audit.Common.Utilities.GetLibTitleResponseDocs());

          //refetch to avoid version conflict
          oListItem = oList.getItemById(m_itemID);
          oListItem.set_item("DocumentStatus", "Rejected");
          oListItem.set_item("RejectReason", m_RejectReason);

          oListItem.update();

          location.protocol +
            "//" +
            location.host +
            _spPageContextInfo.webServerRelativeUrl +
            "/";
          const filePath = oListItem.get_item("FileDirRef");
          oListItem.get_item("FileLeafRef");
          var lastInd = filePath.lastIndexOf("/");
          var urlpath = filePath.substring(0, lastInd + 1);
          var responseTitle = filePath.replace(urlpath, "");

          var folderPath =
            Audit.Common.Utilities.GetSiteUrl() +
            "/" +
            Audit.Common.Utilities.GetLibNameResponseDocs() +
            "/" +
            responseTitle;
          var aresponseDocList = ctx2
            .get_web()
            .get_lists()
            .getByTitle(Audit.Common.Utilities.GetLibTitleResponseDocs());
          var aresponseDocQuery = new SP.CamlQuery();
          aresponseDocQuery.set_viewXml(
            '<View Scope="RecursiveAll"><Query><OrderBy><FieldRef Name="Title"/></OrderBy><Where><And><Eq><FieldRef Name="FSObjType"/><Value Type="Text">0</Value></Eq><Eq><FieldRef Name="FileDirRef"/><Value Type="Text">' +
              folderPath +
              "</Value></Eq></And></Where></Query></View>"
          );
          const aresponseDocItems = aresponseDocList.getItems(aresponseDocQuery);
          ctx2.load(aresponseDocItems);

          var aresponseList = ctx2
            .get_web()
            .get_lists()
            .getByTitle(Audit.Common.Utilities.GetListTitleResponses());
          var aresponseQuery = new SP.CamlQuery();
          aresponseQuery.set_viewXml(
            '<View><Query><OrderBy><FieldRef Name="Title"/></OrderBy><Where><Eq><FieldRef Name="Title"/><Value Type="Text">' +
              responseTitle +
              "</Value></Eq></Where></Query><RowLimit>1</RowLimit></View>"
          );
          const aresponseItems = aresponseList.getItems(aresponseQuery);
          ctx2.load(aresponseItems);

          var emailList = ctx2
            .get_web()
            .get_lists()
            .getByTitle(Audit.Common.Utilities.GetListTitleEmailHistory());
          var emailListQuery = new SP.CamlQuery();
          emailListQuery.set_viewXml(
            '<View><Query><OrderBy><FieldRef Name="ID"/></OrderBy><Where><Eq><FieldRef Name="FSObjType"/><Value Type="Text">1</Value></Eq></Where></Query></View>'
          );
          const emailListFolderItems = emailList.getItems(emailListQuery);
          ctx2.load(
            emailListFolderItems,
            "Include(ID, FSObjType, Title, DisplayName)"
          );

          function onUpdateSucceededZZ() {
            SP.UI.Notify.addNotification(
              "Rejected Response Document",
              false
            );

            let bUpdateResponseStatus = true;
            var listxItemEnumerator = aresponseDocItems.getEnumerator();

            while (listxItemEnumerator.moveNext()) {
              var oListItemResponseDoc = listxItemEnumerator.get_current();
              var oListItemResponseDocStatus =
                oListItemResponseDoc.get_item("DocumentStatus");

              if (
                oListItemResponseDocStatus == "Open" ||
                oListItemResponseDocStatus == "Submitted" ||
                oListItemResponseDocStatus == "Sent to QA"
              ) {
                //there should never be one that's open, but checking anyway
                bUpdateResponseStatus = false;
              }
            }

            //Update the Response status
            //if all items have completed (none are open or sent to QA), then update the status to returned to gfs because we know
            //at least 1 was rejected
            if (bUpdateResponseStatus) {
              var oRequest = m_fnGetRequestByResponseTitle(this.responseTitle);

              var listxxItemEnumerator = aresponseItems.getEnumerator();
              while (listxxItemEnumerator.moveNext()) {
                var oListItemResponse = listxxItemEnumerator.get_current();
                oListItemResponse.set_item("ResStatus", "5-Returned to GFS");
                oListItemResponse.update();

                m_fnCreateEmailToIAFromQA(
                  emailList,
                  oRequest,
                  this.responseTitle,
                  "An Audit Response has been Returned by the Quality Assurance Team: " +
                    this.responseTitle
                );

                ctx2.executeQueryAsync(function () {
                  m_waitDialog.close();
                  Audit.Common.Utilities.Refresh();
                });

                break; //should only be once
              }
            } else {
              m_waitDialog.close();
              Audit.Common.Utilities.Refresh();
            }
          }
          function onUpdateFailedZZ() {
            m_waitDialog.close();
          }

          var data = { responseTitle: responseTitle };
          ctx2.executeQueryAsync(
            Function.createDelegate(data, onUpdateSucceededZZ),
            Function.createDelegate(data, onUpdateFailedZZ)
          ); //After this line "return true" in PreSaveAction() will execute and then CallBackMethods will run.
        }
        function OnFailure(sender, args) {
          m_waitDialog.close();
          alert(
            "Request failed. " + args.get_message() + "\n" + args.get_stackTrace()
          );
        }

        clientContext.executeQueryAsync(OnSuccess, OnFailure);
      } else m_bIsTransactionExecuting = false;
    }

    function OnCallbackApproveAllResponseDoc(result, value) {
      if (result === SP.UI.DialogResult.OK) {
        m_waitDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose(
          "Approving Response Documents",
          "Please wait... Approving Response Documents",
          200,
          400
        );

        $("#ddlResponsesOpen").val();

        var clientContext = SP.ClientContext.get_current();

        //make sure ea folder exists
        var eaResponseDocsLib = clientContext
          .get_web()
          .get_lists()
          .getByTitle(Audit.Common.Utilities.GetLibTitleResponseDocsEA());
        var earesponseDocsQuery = new SP.CamlQuery();
        earesponseDocsQuery.set_viewXml(
          '<View><Query><OrderBy><FieldRef Name="ID"/></OrderBy><Where><Eq><FieldRef Name="FSObjType"/><Value Type="Text">1</Value></Eq></Where></Query></View>'
        );
        eaReponseDocsFolderItems =
          eaResponseDocsLib.getItems(earesponseDocsQuery);
        clientContext.load(
          eaReponseDocsFolderItems,
          "Include(ID, FSObjType, Title, DisplayName)"
        );

        //make sure ea email folder exists
        var eaEmailLogList = clientContext
          .get_web()
          .get_lists()
          .getByTitle("AuditEAEmailLog");
        var eaEmailLogListQuery = new SP.CamlQuery();
        eaEmailLogListQuery.set_viewXml(
          '<View><Query><OrderBy><FieldRef Name="ID"/></OrderBy><Where><Eq><FieldRef Name="Created"/><Value IncludeTimeValue="FALSE" Type="DateTime"><Today/></Value></Eq></Where></Query></View>'
        );
        eaEmailLogListItems = eaEmailLogList.getItems(eaEmailLogListQuery);
        clientContext.load(eaEmailLogListItems, "Include(ID)");

        function OnSuccess(sender, args) {
          var oRequest = null;
          var oResponse = null;
          oResponse = m_fnGetResponseByTitle($("#ddlResponsesOpen").val());

          if (oResponse == null || oResponse.request == null) return;

          oRequest = oResponse.request;
          const folderPath = oRequest.number;

          m_fnCreateEAFolder(oRequest.number);
          m_fnCreateEAEmailLogItem();

          var requestId = oRequest.number;
          var responseNumber = oResponse.title;

          m_cntToApprove = 0;
          m_cntApproved = 0;

          for (var x = 0; x < oResponse.responseDocs.length; x++) {
            if (oResponse.responseDocs[x].documentStatus != "Sent to QA")
              continue;

            m_cntToApprove++;

            var ctx2 = new SP.ClientContext.get_current();
            var oList = ctx2
              .get_web()
              .get_lists()
              .getByTitle(Audit.Common.Utilities.GetLibTitleResponseDocs());

            //refetch to avoid version conflict
            let oListItem = oResponse.responseDocs[x].item;
            const fileName = oListItem.get_item("FileLeafRef");
            oListItem = oList.getItemById(oListItem.get_item("ID"));

            //copy the file to the EA library
            var file = oListItem.get_file();
            var absoluteSiteUrl =
              location.protocol +
              "//" +
              location.host +
              _spPageContextInfo.webServerRelativeUrl +
              "/";
            var destinationFileNameUrl =
              absoluteSiteUrl +
              Audit.Common.Utilities.GetLibTitleResponseDocsEA() +
              "/" +
              folderPath +
              "/" +
              fileName;
            file.copyTo(destinationFileNameUrl, 1);

            //update the reponse
            oListItem.set_item("DocumentStatus", "Approved");
            oListItem.set_item("RejectReason", "");
            oListItem.update();

            //load the file
            var siteUrl = location.protocol + "//" + location.host;
            var urlOfNewFile = destinationFileNameUrl.replace(siteUrl, "");
            const newFile = ctx2
              .get_web()
              .getFileByServerRelativeUrl(urlOfNewFile);
            ctx2.load(newFile, "ListItemAllFields");

            var data = {
              responseTitle: responseNumber,
              copiedFileName: destinationFileNameUrl,
              requestId: requestId,
              responseNumber: responseNumber,
              newFile: newFile,
            };

            function onUpdateResFolderSuccess() {
              if (
                this.responseTitle == null ||
                this.responseTitle == undefined ||
                this.responseTitle == ""
              ) {
                document.body.style.cursor = "default";
                //alert( "Error: empty response title ");
                SP.UI.Notify.addNotification(
                  "Error: empty response title ",
                  false
                );

                m_waitDialog.close();
                return;
              }

              var ctx3 = SP.ClientContext.get_current();

              //update the file in the EA document library with the request/response properties
              var idOfCopiedFile = this.newFile.get_listItemAllFields().get_id();
              var oEADocLib = ctx3
                .get_web()
                .get_lists()
                .getByTitle(Audit.Common.Utilities.GetLibTitleResponseDocsEA());
              const oListFileItem = oEADocLib.getItemById(idOfCopiedFile);
              oListFileItem.set_item("RequestNumber", this.requestId);
              oListFileItem.set_item("ResponseID", this.responseNumber);
              oListFileItem.update();

              var aresponseList = ctx3
                .get_web()
                .get_lists()
                .getByTitle(Audit.Common.Utilities.GetListTitleResponses());
              var aresponseQuery = new SP.CamlQuery();
              aresponseQuery.set_viewXml(
                '<View><Query><OrderBy><FieldRef Name="Title"/></OrderBy><Where><Eq><FieldRef Name="Title"/><Value Type="Text">' +
                  this.responseTitle +
                  "</Value></Eq></Where></Query><RowLimit>1</RowLimit></View>"
              );
              const aresponseItems = aresponseList.getItems(aresponseQuery);
              ctx3.load(aresponseItems);

              var folderPath =
                Audit.Common.Utilities.GetSiteUrl() +
                "/" +
                Audit.Common.Utilities.GetLibNameResponseDocs() +
                "/" +
                this.responseTitle;
              var aresponseDocList = ctx3
                .get_web()
                .get_lists()
                .getByTitle(Audit.Common.Utilities.GetLibTitleResponseDocs());
              var aresponseDocQuery = new SP.CamlQuery();
              aresponseDocQuery.set_viewXml(
                '<View Scope="RecursiveAll"><Query><OrderBy><FieldRef Name="Title"/></OrderBy><Where><And><Eq><FieldRef Name="FSObjType"/><Value Type="Text">0</Value></Eq><Eq><FieldRef Name="FileDirRef"/><Value Type="Text">' +
                  folderPath +
                  "</Value></Eq></And></Where></Query></View>"
              );
              const aresponseDocItems =
                aresponseDocList.getItems(aresponseDocQuery);
              ctx3.load(aresponseDocItems);

              var emailList = ctx3
                .get_web()
                .get_lists()
                .getByTitle(Audit.Common.Utilities.GetListTitleEmailHistory());
              var emailListQuery = new SP.CamlQuery();
              emailListQuery.set_viewXml(
                '<View><Query><OrderBy><FieldRef Name="ID"/></OrderBy><Where><Eq><FieldRef Name="FSObjType"/><Value Type="Text">1</Value></Eq></Where></Query></View>'
              );
              const emailListFolderItems = emailList.getItems(emailListQuery);
              ctx3.load(
                emailListFolderItems,
                "Include(ID, FSObjType, Title, DisplayName)"
              );

              function onUpdateSucceededZZ() {
                m_cntApproved++;

                if (m_cntApproved != m_cntToApprove) {
                  //skip the code below if all of the expected documents that were to be approved haven't yet approved
                  return;
                }

                SP.UI.Notify.addNotification(
                  "Approved Response Documents",
                  false
                );

                let bUpdateResponseStatus = true;
                var listxItemEnumerator = this.aresponseDocItems.getEnumerator();

                var bRejected = false;
                while (listxItemEnumerator.moveNext()) {
                  var oListItemResponseDoc = listxItemEnumerator.get_current();
                  var oListItemResponseDocStatus =
                    oListItemResponseDoc.get_item("DocumentStatus");

                  if (
                    oListItemResponseDocStatus == "Open" ||
                    oListItemResponseDocStatus == "Submitted" ||
                    oListItemResponseDocStatus == "Sent to QA"
                  ) {
                    //there should never be one that's open, but checking anyway
                    bUpdateResponseStatus = false;
                  } else if (oListItemResponseDocStatus == "Rejected") {
                    bRejected = true;
                  }
                }

                //Update the Response status
                //if all items have completed (none are open or sent to QA), then update the status
                //If one is rejected, then returned to gfs. otherwise, close the response
                if (bUpdateResponseStatus) {
                  var oRequest = m_fnGetRequestByResponseTitle(
                    this.responseTitle
                  );

                  var listxxItemEnumerator = this.aresponseItems.getEnumerator();
                  while (listxxItemEnumerator.moveNext()) {
                    var oListItemResponse = listxxItemEnumerator.get_current();

                    if (!bRejected) {
                      var curDate = new Date();
                      oListItemResponse.set_item("ResStatus", "7-Closed");
                      //oListItemResponse.set_item( "ClosedDate", Audit.Common.Utilities.GetISODateString( curDate) );
                      var newClosedTime = new Date(
                        curDate.getFullYear(),
                        curDate.getMonth(),
                        curDate.getDate(),
                        curDate.getHours(),
                        curDate.getMinutes(),
                        curDate.getSeconds(),
                        curDate.getMilliseconds()
                      );
                      oListItemResponse.set_item("ClosedDate", newClosedTime);

                      oListItemResponse.set_item(
                        "ClosedBy",
                        _spPageContextInfo.userId
                      );

                      m_fnCreateEmailToIAFromQA(
                        this.emailList,
                        oRequest,
                        this.responseTitle,
                        "An Audit Response has been Closed by the Quality Assurance Team: " +
                          this.responseTitle
                      );
                    } else {
                      oListItemResponse.set_item(
                        "ResStatus",
                        "5-Returned to GFS"
                      );

                      m_fnCreateEmailToIAFromQA(
                        this.emailList,
                        oRequest,
                        this.responseTitle,
                        "An Audit Response has been Returned by the Quality Assurance Team: " +
                          this.responseTitle
                      );
                    }

                    oListItemResponse.update();

                    ctx3.executeQueryAsync(function () {
                      m_waitDialog.close();
                      Audit.Common.Utilities.Refresh();
                    });

                    break; //should only be once
                  }
                } else {
                  m_waitDialog.close();
                  Audit.Common.Utilities.Refresh();
                }
              }
              function onUpdateFailedZZ() {
                m_waitDialog.close();
              }

              var data = {
                responseTitle: this.responseTitle,
                emailList: emailList,
                aresponseItems: aresponseItems,
                aresponseDocItems: aresponseDocItems,
                emailListFolderItems: emailListFolderItems,
              };
              ctx3.executeQueryAsync(
                Function.createDelegate(data, onUpdateSucceededZZ),
                Function.createDelegate(data, onUpdateFailedZZ)
              ); //After this line "return true" in PreSaveAction() will execute and then CallBackMethods will run.
            }
            function onUpdateResFolderFail(sender, args) {
              m_waitDialog.close();

              SP.UI.Notify.addNotification(
                "Request failed. " +
                  args.get_message() +
                  "\n" +
                  args.get_stackTrace(),
                false
              );

              alert(
                "Request failed. " +
                  args.get_message() +
                  "\n" +
                  args.get_stackTrace()
              );
              Audit.Common.Utilities.Refresh();
            }
            ctx2.executeQueryAsync(
              Function.createDelegate(data, onUpdateResFolderSuccess),
              Function.createDelegate(data, onUpdateResFolderFail)
            ); //After this line "return true" in PreSaveAction() will execute and then CallBackMethods will run.
          }
        }
        function OnFailure(sender, args) {
          m_waitDialog.close();
          alert(
            "Request failed. " + args.get_message() + "\n" + args.get_stackTrace()
          );
        }

        clientContext.executeQueryAsync(OnSuccess, OnFailure);
      } else m_bIsTransactionExecuting = false;
    }

    function BindHandlersOnLoad() {
      BindPrintButton(
        "#btnPrint1",
        "#divStatusReportRespones",
        "QA Response Status Report"
      );
      //////////Note: for the export to work, make sure this is added to the html: <iframe id="CsvExpFrame" style="display: none"></iframe>
      BindExportButton(
        ".export1",
        "QAResponseStatusReport_",
        "tblStatusReportResponses"
      );
    }

    function BindPrintButton(btnPrint, divTbl, pageTitle) {
      $(btnPrint).on("click", function () {
        Audit.Common.Utilities.PrintStatusReport(pageTitle, divTbl);
      });
    }

    function BindExportButton(btnExport, fileNamePrefix, tbl) {
      $(btnExport).on("click", function (event) {
        var curDate = new Date().format("yyyyMMdd_hhmmtt");
        Audit.Common.Utilities.ExportToCsv(fileNamePrefix + curDate, tbl);
      });
    }

    function GoToResponse(response) {
      _myViewModel.tabs.selectTab(_myViewModel.tabOpts.ResponseDetail);

      if (response) {
        response = m_bigMap["response-" + response];

        var requestStatus = response.request.status;
        var responseStatus = response.resStatus;
        if (
          (responseStatus == "4-Approved for QA" ||
            responseStatus == "6-Reposted After Rejection") &&
          (requestStatus == "Open" || requestStatus == "ReOpened")
        )
          _myViewModel.filterResponseInfoTabResponseNameOpen2(response.title);
        else
          _myViewModel.filterResponseInfoTabResponseNameProcessed2(
            response.title
          );
      }
    }

    var publicMembers = {
      Load: m_fnLoadData,
      IsTransactionExecuting: function () {
        return m_bIsTransactionExecuting;
      },
      GoToResponse: GoToResponse,
      GetCancelReason: function () {
        m_RejectReason = $("#txtRejectReason").val();
        if ($.trim(m_RejectReason) == "")
          $("#btnClientOk1").attr("disabled", "disabled");
        else $("#btnClientOk1").removeAttr("disabled");
        return m_RejectReason;
      },
    };

    return publicMembers;
  };

}));
//# sourceMappingURL=qa_db.umd.js.map
