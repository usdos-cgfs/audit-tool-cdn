import "../../../lib/webcomponents/searchselect/searchselect.js";
import "../../../lib/webcomponents/data-table/data-table.js";

import qaDbTemplate from "./qa_db.html";
import { setUrlParam } from "../../common/router.js";
import { TabsModule, Tab } from "../../components/tabs/tabs_module.js";
import { getAllItems } from "../../services/legacy_helpers.js";

import { addNotification } from "../../services/notifications.js";

import * as ko from "knockout";
import { NewUtilities } from "../../common/index.js";
import {
  appContext,
  initAppcontext,
} from "../../infrastructure/application_db_context.js";

import "../../sal/infrastructure/knockout_extensions.js";
import { registerStyles } from "../../infrastructure/register_styles.js";
import { InitSal } from "../../sal/infrastructure/sal.js";

import {
  auditOrganizationStore,
  configurationsStore,
} from "../../infrastructure/store.js";

import * as ModalDialog from "../../sal/components/modal/index.js";
import { ConfirmApproveResponseDocForm } from "../../components/forms/response_doc/confirm_approve/confirm_approve_response_doc_form.js";
import {
  approveResponseDocsForRO,
  returnResponseDocsToIA,
} from "../../services/approvals_service.js";
import { AuditResponseDocStates } from "../../entities/audit_response_doc.js";
import {
  closeOrReturnFinalizedResponsesQA,
  closeResponseById,
  returnResponseToIAById,
} from "../../services/audit_response_service.js";
import { sortByTitle } from "../../sal/infrastructure/entity_utilities.js";
import { ConfirmRejectResponseDocForm } from "../../components/forms/response_doc/confirm_reject/confirm_reject_response_doc_form.js";

const html = String.raw;
var Audit = { ...window.Audit, Common: {}, QAReport: {} };

window.Audit = Audit;

const responseParam = "ResNum";

export async function load(element, context) {
  window.context = context;
  element.innerHTML = qaDbTemplate;
  registerStyles(element);
  initAppcontext();
  await InitSal();

  await appContext.AuditConfigurations.ToList().then((configurations) => {
    configurations.map(
      (config) => (configurationsStore[config.key] = config.value)
    );
  });
  await appContext.AuditOrganizations.ToList().then((organizations) => {
    ko.utils.arrayPushAll(
      auditOrganizationStore,
      organizations.sort(sortByTitle)
    );
  });

  Audit.Common.Utilities = new NewUtilities();
  Audit.QAReport.Report = new Audit.QAReport.NewReportPage();
  Audit.QAReport.Init();
}

Audit.QAReport.Init = function () {
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
  var m_RejectReason = "";

  var m_resStatusToFilterOn = "";
  //ko.options.deferUpdates = true;

  var m_bIsTransactionExecuting = false;

  var memberGroup = null;

  var statusId = null;

  var m_requestItems = null;
  var m_requestInternalItems = null;

  var m_responseItems = null;

  var m_ResponseDocsItems = null;
  var m_aoItems = null;

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

    self.currentDialogs = ModalDialog.currentDialogs;

    self.arrResponses = ko.observableArray(null);

    self.arrResponses.subscribe((arrayChanges) => {
      document.getElementById("tblStatusReportResponses")?.update();
    }, "arrayChange");

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

      return filteredResponses;
    });

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

        //draw these first
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

          if (m_resStatusToFilterOn != "")
            self.filterResponseTabResponseStatus(m_resStatusToFilterOn);
          else self.filterResponseTabRequestStatus("Open");
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
          const notifyId = addNotification(
            "Displaying Response (" + oResponse.title + ")",
            false
          );
        });
      }
    };

    /**Other**/

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
      "Include(ID, Title, ReqSubject, ReqStatus, IsSample, InternalDueDate, RequestingOffice, ActionOffice, Comments, RelatedAudit, ActionItems, EmailSent, ClosedDate, Modified)"
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
        "RejectReason",
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
    currCtx.load(m_aoItems, "Include(ID, Title, UserGroup, Role)");

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

    LoadRequests();
    LoadResponses();
    LoadResponseDocs();

    LoadTabStatusReport(m_arrResponses, "fbody");
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

      var requestingOffice = oListItem.get_item("RequestingOffice");
      if (requestingOffice != null)
        requestingOffice = requestingOffice.get_lookupValue();
      else requestingOffice = "";

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
      requestObject["requestingOffice"] = requestingOffice;
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
    }

    if (responseArr.length > 0) {
      m_resStatusToFilterOn = "";
      if (resStatus1 > 0 && resStatus2 == 0)
        m_resStatusToFilterOn = responseStatus1;
      else if (resStatus2 > 0 && resStatus1 == 0)
        m_resStatusToFilterOn = responseStatus2;

      _myViewModel.cntPendingReview(count);

      ko.utils.arrayPushAll(_myViewModel.arrResponses, responseArr);
      _myViewModel.arrResponses.valueHasMutated();
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
      notifyId = addNotification(
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

      var rowCount = 0;
      var cntCanBeApprovedOrRejected = 0;
      var cntApprovedOrArchived = 0;
      var bDisplayingCloseBtn = false;

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
        addNotification(
          "This Response did not automatically close. Please close this response.",
          false
        );
      }

      if (
        !bDisplayingCloseBtn &&
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
      "</ul></fieldset></div></div>";

    var options = {};
    options.title = "Response Documents Help";
    options.dialogReturnValueCallback = OnCallbackForm;
    options.html = helpDlg;
    options.height = 450;
    Modal.showModalDialog(options);
  }

  function m_fnApproveAll() {
    m_bIsTransactionExecuting = true;

    const oResponse = m_fnGetResponseByTitle($("#ddlResponsesOpen").val());
    if (oResponse == null || oResponse.request == null) return;

    const oResponseDocsForApproval = oResponse.responseDocs.filter(
      (doc) => doc.documentStatus == AuditResponseDocStates.SentToQA
    );

    getResponseDocApproval(oResponseDocsForApproval);
  }

  function m_fnApproveResponseDoc(id, responseDocFileName) {
    m_bIsTransactionExecuting = true;
    //used in callback
    m_itemID = id;
    m_RejectReason = "";
    const oResponseDocsForApproval = [
      { ID: id, fileName: responseDocFileName },
    ];

    getResponseDocApproval(oResponseDocsForApproval);
  }

  function getResponseDocApproval(oResponseDocsForApproval) {
    var oResponse = m_fnGetResponseByTitle($("#ddlResponsesOpen").val());

    if (oResponse == null || oResponse.request == null) {
      //m_waitDialog.close();
      return;
    }
    const request = oResponse.request;

    const sendToText = request.requestingOffice;

    const onApprove = async () => {
      await approveResponseDocsForRO(
        request.ID,
        oResponseDocsForApproval.map((doc) => doc.ID)
      );
      await closeOrReturnFinalizedResponsesQA(request.ID);
      return true;
    };

    const newResponseDocForm = new ConfirmApproveResponseDocForm(
      sendToText,
      oResponseDocsForApproval,
      onApprove
    );

    const options = {
      form: newResponseDocForm,
      dialogReturnValueCallback: window.location.reload,
      title: "Approve Response Docs?",
    };

    ModalDialog.showModalDialog(options);
  }

  function m_fnRejectResponseDoc(id, responseDocFileName) {
    var oResponse = m_fnGetResponseByTitle($("#ddlResponsesOpen").val());

    if (oResponse == null || oResponse.request == null) {
      return;
    }
    const request = oResponse.request;

    const oResponseDocsForRejection = [
      { ID: id, fileName: responseDocFileName },
    ];

    const onSubmit = async (rejectReason) => {
      await returnResponseDocsToIA(
        request.ID,
        oResponseDocsForRejection.map((doc) => doc.ID),
        rejectReason
      );
      await closeOrReturnFinalizedResponsesQA(request.ID);
      return true;
    };

    const newResponseDocForm = new ConfirmRejectResponseDocForm(
      oResponseDocsForRejection,
      onSubmit
    );

    const options = {
      form: newResponseDocForm,
      dialogReturnValueCallback: window.location.reload,
      title: "Reject Response Docs?",
    };

    ModalDialog.showModalDialog(options);
  }

  function m_fnCloseResponse() {
    m_bIsTransactionExecuting = true;

    var responseDocDlg = html`
      <div id="responseDocDlg" style="padding:20px; height:100px">
        <div style="padding:20px;">
          All documents in this response are Approved. Are you sure you would
          like to
          <span style="font-weight:bold; color:green">Close this Response</span
          >?
        </div>
      </div>
    `;

    var options = {};
    options.title = "Close Response";
    options.dialogReturnValueCallback = OnCallbackCloseResponse;
    options.html = responseDocDlg;
    options.showSubmit = true;
    ModalDialog.showModalDialog(options);
  }

  function m_fnReturnToCGFS() {
    m_bIsTransactionExecuting = true;

    var responseDocDlg = html` <div id="responseDocDlg">
      <div style="">
        <p>
          Are you sure you would like to
          <span style="font-weight:bold; color:darkred"
            >Return this Response to CGFS</span
          >?
        </p>
        <p style="padding-top:10px;">
          <b>Note</b>: If you return it, you will no longer be able to Approve
          or Reject the Remaining Response Documents
        </p>
      </div>
    </div>`;

    var options = {};
    options.title = "Return to CGFS";
    options.dialogReturnValueCallback = OnCallbackReturnToIA;
    options.html = responseDocDlg;
    options.showSubmit = true;
    ModalDialog.showModalDialog(options);
  }

  function m_fnGetResponseByTitle(title) {
    var oResponse = null;
    try {
      oResponse = m_bigMap["response-" + title];
    } catch (err) {}

    return oResponse;
  }

  function OnCallbackForm(result, value) {
    if (result === SP.UI.DialogResult.OK) {
    }
  }

  async function OnCallbackCloseResponse(result, value) {
    if (!result) return;
    var oResponse = m_fnGetResponseByTitle($("#ddlResponsesOpen").val());

    if (oResponse == null || oResponse.request == null) {
      return;
    }

    await closeResponseById(oResponse.ID);
    window.location.reload();
  }

  async function OnCallbackReturnToIA(result, value) {
    if (!result) return;
    var oResponse = m_fnGetResponseByTitle($("#ddlResponsesOpen").val());

    if (oResponse == null || oResponse.request == null) {
      return;
    }

    await returnResponseToIAById(oResponse.ID);
    window.location.reload();
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
