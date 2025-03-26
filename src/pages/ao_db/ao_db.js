import * as ko from "knockout";
import { NewUtilities, getUrlParam } from "../../common/index.js";
import aoDbTemplate from "./ao_db.html";
import "../../../lib/webcomponents/searchselect/query-select.js";
import "../../../lib/webcomponents/searchselect/searchselect.js";
import "../../../lib/webcomponents/data-table/data-table.js";

import { TabsModule, Tab } from "../../components/tabs/tabs_module.js";
import { setUrlParam } from "../../common/index.js";
import {
  appContext,
  initAppcontext,
} from "../../infrastructure/application_db_context.js";
import { uploadResponseDocFile } from "../../services/index.js";
import { getAllItems } from "../../services/legacy_helpers.js";

import {
  addTask,
  blockingTasks,
  finishTask,
  runningTasks,
} from "../../services/tasks.js";

import "../../sal/infrastructure/knockout_extensions.js";
import { registerStyles } from "../../infrastructure/register_styles.js";
import { InitSal } from "../../sal/infrastructure/sal.js";
import { addNotification } from "../../services/notifications.js";
import { loadData, loadInfo, submitPackageTaskDef } from "../../tasks/index.js";
import { configurationsStore } from "../../infrastructure/store.js";
import { CONFIGKEY } from "../../env.js";

var Audit = window.Audit || {
  Common: {},
  AOReport: {},
};

// Audit.AOReport = Audit.AOReport || {};

const responseParam = "ResNum";

export async function load(element, context) {
  window.context = context;
  element.innerHTML = aoDbTemplate;
  registerStyles(element);
  initAppcontext();
  await InitSal();

  await appContext.AuditConfigurations.ToList().then((configurations) => {
    configurations.map(
      (config) => (configurationsStore[config.key] = config.value)
    );
  });

  Audit.Common.Utilities = new NewUtilities();
  Audit.AOReport.Report = new Audit.AOReport.NewReportPage();
  Audit.AOReport.Init();
}

Audit.AOReport.Init = function () {
  var paramShowSiteActionsToAnyone = getUrlParam("ShowSiteActions");
  if (paramShowSiteActionsToAnyone != true) {
    //hide it even for owners unless this param is passed into the URL; pass in param if you want to change the page web parts/settings
    $("#RibbonContainer-TabRowLeft").hide();
    $(".ms-siteactionsmenu").hide();
  }

  function SetTimer() {
    var intervalRefreshID = setInterval(function () {
      var divVal = document.getElementById("divCounter").innerText;
      var count = divVal * 1 - 1;
      document.getElementById("divCounter").innerText = count;
      if (count <= 0) {
        if (!Audit.AOReport.Report.IsTransactionExecuting())
          Audit.AOReport.Report.Refresh();
        else {
          clearInterval(intervalRefreshID);
          document.getElementById("divCounter").innerText = "1200";
          SetTimer();
        }
      }
    }, 1000);
  }

  SetTimer();
};

Audit.AOReport.NewReportPage = function () {
  var m_bigMap = new Object();
  var m_arrRequests = new Array();
  var m_arrResponses = new Array();
  var m_IA_SPGroupName = null;
  var m_IA_ActionOffice = null;

  var ownerGroup,
    memberGroup,
    visitorGroup = null;
  var m_groupColl = null;

  var m_requestItems = null;
  var m_responseItems = null;
  var m_ResponseDocsItems = null;
  var m_aoItems = null;

  var m_responseDocsLibrary = null;

  var m_statusToFilterOn = "";
  var m_curResponseSelectedIsEditableByAO = false;

  var m_bIsTransactionExecuting = false;

  var m_responseStatus1 = "1-Open";
  var m_responseStatus2 = "3-Returned to Action Office";

  function ViewModel() {
    var self = this;

    self.debugMode = ko.observable(false);
    self.siteUrl = Audit.Common.Utilities.GetSiteUrl();
    self.loadedAt = ko.observable();

    self.supportEmail = `mailto:${
      configurationsStore[CONFIGKEY.SUPPORTEMAILAO] ??
      "cgfsauditrequests@state.gov"
    }`;

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

    self.runningTasks = runningTasks;
    self.blockingTasks = blockingTasks;

    //cant add rate limit because it'll affect the refresh
    //self.arrResponses = ko.observableArray( null ).extend({ rateLimit: 500 });
    self.arrResponses = ko.observableArray(null);
    self.arrResponses.subscribe(() => {
      document.getElementById("tblStatusReportResponses")?.update();
    }, "arrayChange");

    self.cntPendingReview = ko.observable(0);

    self.doSort = ko.observable(false);

    self.ddOptionsResponseInfoTabResponseNameOpen2 = ko.observableArray();
    self.ddOptionsResponseInfoTabResponseNameProcessed2 = ko.observableArray();
    self.filterResponseInfoTabResponseNameOpen2 = ko.observable("");
    self.filterResponseInfoTabResponseNameProcessed2 = ko.observable("");

    self.currentResponse = ko.observable();
    self.arrCoverSheets = ko.observableArray(null);
    self.arrResponseDocs = ko.observable(null);
    self.cntResponseDocs = ko.observable(0);

    // File Input Control
    self.responseDocFiles = ko.observableArray();

    self.showUpload = ko.observable(false);
    self.showSubmit = ko.observable(false);
    self.showReturned = ko.pureComputed(() => {
      const oResponse = ko.unwrap(self.currentResponse);

      if (!oResponse) return false;

      return (
        oResponse.resStatus == m_responseStatus2 &&
        oResponse.returnReason != null &&
        oResponse.returnReason != ""
      );
    });

    self.refresh = () => window.location.reload();
    self.onNewResponseDocCallback = self.refresh;

    self.currentResponse.subscribe((newResponse) => {
      if (!newResponse) return;
      setUrlParam(responseParam, newResponse.title);
    });

    self.relatedRequestLink = ko.pureComputed(() => {
      const res = ko.unwrap(this.currentResponse);
      const relReq = ko.unwrap(res?.request?.relatedRequest?.title);
      if (!relReq) return "<span>Not Provided</span>";
      let loc =
        window.location.pathname +
        `?&Tab=${self.tabOpts.Responses.id}&ResNum=${relReq}`;
      return `<a target='_blank' href=${loc}>${relReq}</a>`;
    });

    /** Behaviors **/

    self.ClickGoToResponse = function (response) {
      GoToResponse(response);
    };

    self.ClickSubmitResponse = function () {
      m_fnSubmitPackage();
    };

    self.ClickMarkForDeletionResponseDoc = function (oResponseDoc) {
      if (oResponseDoc && oResponseDoc.ID)
        m_fnMarkForDeletionResponseDoc(oResponseDoc.ID);
    };

    /** Subscriptions **/

    self.doSort.subscribe(function (newValue) {
      Audit.Common.Utilities.OnLoadDisplayTimeStamp();

      if (self.arrResponses().length > 0 && newValue) {
        //should trigger only once

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

        setTimeout(function () {
          var paramTabIndex = getUrlParam("Tab");
          if (paramTabIndex != null && paramTabIndex != "") {
            // $("#tabs").tabs("option", "active", paramTabIndex);
            self.tabs.selectById(paramTabIndex);
          } else {
            self.tabs.selectById(self.tabOpts.Responses.id);
          }
          if (
            paramTabIndex == null ||
            paramTabIndex == "" ||
            paramTabIndex == 0
          ) {
            if (self.cntPendingReview() > 0) {
              addNotification(
                "<div style='text-align:left'>There are <b>" +
                  self.cntPendingReview() +
                  "</b> Responses pending your review/action. <br/> <br/> Please click on the links in the <b>Response Name</b> column of the <b>Status Report tab</b> <br/> to access each response and upload documents and submit the package.</div>",
                false
              );
            }
          }

          const tblResponses = document.getElementById(
            "tblStatusReportResponses"
          );

          var paramResponseNum = getUrlParam("ResNum");
          if (paramResponseNum != null && paramResponseNum != "") {
            if (paramTabIndex == self.tabOpts.Responses.id) {
              tblResponses.filterByColIndex(0, paramResponseNum);
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

          tblResponses.filterByColIndex(3, m_statusToFilterOn);
        }, 200);
      }
    });

    /**TODO: factor these below **/
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

    self.filterResponseInfoTabResponseName = function (
      newValue,
      bOpenResponses
    ) {
      self.currentResponse(null);
      self.arrCoverSheets([]);
      self.arrResponseDocs(null);
      self.cntResponseDocs(0);
      m_curResponseSelectedIsEditableByAO = false;

      var oResponse = m_bigMap["response-" + newValue];
      if (oResponse) {
        if (bOpenResponses)
          self.filterResponseInfoTabResponseNameProcessed2("");
        else self.filterResponseInfoTabResponseNameOpen2("");

        self.currentResponse(oResponse);

        LoadTabResponseInfoCoverSheets(oResponse);
        LoadTabResponseInfoResponseDocs(oResponse);

        if (bOpenResponses) m_curResponseSelectedIsEditableByAO = true;
      }
    };

    self.responseDocFiles.subscribe(async function (files) {
      if (!files.length) return;
      const resId = self.currentResponse()?.ID;
      if (!resId) return;
      // const request = await getRequestByTitle(this.number);

      const promises = [];

      for (let {} of files) {
        promises.push(
          new Promise(async (resolve) => {
            resolve();
          })
        );
      }

      await Promise.all(promises);
      // TODO: need to requery responsedocs
      self.responseDocFiles.removeAll();
      self.onNewResponseDocCallback();
    });

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
            responseStatus != m_responseStatus1 &&
            responseStatus != m_responseStatus2
          )
            return item["title"];
          else return "";
        } else if (responseStatusType == 1) {
          //get responses pending action
          if (
            (responseStatus == m_responseStatus1 ||
              responseStatus == m_responseStatus2) &&
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
    const loadInfoTask = addTask(loadInfo);

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
      "Include(ID, Title, ReqSubject, ReqStatus, InternalDueDate, ActionOffice, RelatedAudit, RelatedRequest, ActionItems, Comments, EmailSent, ClosedDate)"
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

    //Library GUIDS
    m_responseDocsLibrary = currCtx
      .get_web()
      .get_lists()
      .getByTitle(Audit.Common.Utilities.GetLibTitleResponseDocs());
    currCtx.load(m_responseDocsLibrary, "Title", "Id");

    ownerGroup = web.get_associatedOwnerGroup();
    memberGroup = web.get_associatedMemberGroup();
    visitorGroup = web.get_associatedVisitorGroup();

    currCtx.load(ownerGroup);
    currCtx.load(memberGroup);
    currCtx.load(visitorGroup);

    //Site Users
    m_groupColl = web.get_siteGroups();
    currCtx.load(m_groupColl);

    currCtx.executeQueryAsync(OnSuccess, OnFailure);
    function OnSuccess(sender, args) {
      $("#divRefresh").show();
      m_fnLoadData();
      finishTask(loadInfoTask);
    }
    function OnFailure(sender, args) {
      $("#divRefresh").hide();
      $("#divLoading").hide();

      loadInfoTask.addStatus(
        "Request failed: " + args.get_message() + "\n" + args.get_stackTrace()
      );
    }
  }

  function m_fnLoadData() {
    const loadDataTask = addTask(loadData);
    _myViewModel.loadedAt(new Date());
    Audit.Common.Utilities.LoadSiteGroups(m_groupColl);
    LoadLibGUIDS();
    Audit.Common.Utilities.LoadActionOffices(m_aoItems);

    if (memberGroup != null) m_IA_SPGroupName = memberGroup.get_title();
    if (m_IA_SPGroupName == null || m_IA_SPGroupName == "") {
      loadDataTask.addStatus(
        "Unable to retrieve the IA SharePoint Group. Please contact the Administrator"
      );
      return;
    }

    m_IA_ActionOffice = Audit.Common.Utilities.GetActionOffices()?.find(
      (ao) => ao.userGroup == m_IA_SPGroupName
    );

    LoadRequests();
    LoadResponses();
    LoadResponseDocs();

    LoadTabStatusReport(m_arrResponses);

    finishTask(loadDataTask);
  }

  function LoadLibGUIDS() {
    Audit.Common.Utilities.SetResponseDocLibGUID(
      m_responseDocsLibrary.get_id()
    );
  }

  function LoadRequests() {
    m_bigMap = new Object();
    m_arrRequests = new Array();

    var cnt = 0;
    var listItemEnumerator = m_requestItems.getEnumerator();
    while (listItemEnumerator.moveNext()) {
      var oListItem = listItemEnumerator.get_current();

      var emailSent = oListItem.get_item("EmailSent");
      if (!emailSent) continue;

      var id = oListItem.get_item("ID");
      var number = oListItem.get_item("Title");
      var status = oListItem.get_item("ReqStatus");

      var subject = oListItem.get_item("ReqSubject");
      if (subject == null) subject = "";

      var arrActionOffice = oListItem.get_item("ActionOffice");
      var actionOffice = "";
      for (var x = 0; x < arrActionOffice.length; x++) {
        actionOffice +=
          "<div>" + arrActionOffice[x].get_lookupValue() + "</div>";
      }

      var comments = oListItem.get_item("Comments");
      var relatedAudit = oListItem.get_item("RelatedAudit");
      var oRelatedRequest = oListItem.get_item("RelatedRequest");
      const relatedRequest = oRelatedRequest
        ? {
            id: oRelatedRequest.get_lookupId(),
            title: oRelatedRequest.get_lookupValue(),
          }
        : null;

      var actionItems = oListItem.get_item("ActionItems");

      if (comments == null) comments = "";
      if (relatedAudit == null) relatedAudit = "";
      if (actionItems == null) actionItems = "";

      var internalDueDate = oListItem.get_item("InternalDueDate");
      var closedDate = oListItem.get_item("ClosedDate");

      internalDueDate != null
        ? (internalDueDate = internalDueDate.format("MM/dd/yyyy"))
        : (internalDueDate = "");
      closedDate != null
        ? (closedDate = closedDate.format("MM/dd/yyyy"))
        : (closedDate = "");

      var requestObject = new Object();
      requestObject["ID"] = id;
      requestObject["number"] = number;
      requestObject["subject"] = subject;
      requestObject["status"] = status;
      requestObject["internalDueDate"] = internalDueDate;
      requestObject["actionOffice"] = actionOffice;
      requestObject["comments"] = comments;
      requestObject["relatedAudit"] = relatedAudit;
      requestObject["relatedRequest"] = relatedRequest;
      requestObject["actionItems"] = actionItems;
      requestObject["emailSent"] = emailSent;
      requestObject["closedDate"] = closedDate;
      requestObject["responses"] = new Array();

      requestObject["arrIndex"] = cnt;

      m_arrRequests.push(requestObject);

      m_bigMap["request-" + number] = requestObject;
      cnt++;
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
        responseObject["request"] = m_bigMap["request-" + number]; //GetRequest( number );
        if (!responseObject.request || !responseObject.request.emailSent)
          //if request is null, then there's probably a permission issue
          continue;

        responseObject["actionOffice"] = oListItem.get_item("ActionOffice");
        if (responseObject["actionOffice"] == null)
          responseObject["actionOffice"] = "";
        else
          responseObject["actionOffice"] =
            responseObject["actionOffice"].get_lookupValue();
        if (responseObject["actionOffice"] == "") continue;

        responseObject["poc"] = oListItem.get_item("POC");
        if (responseObject["poc"] == null) responseObject["poc"] = "";
        else responseObject["poc"] = responseObject["poc"].get_lookupValue();

        responseObject["ID"] = oListItem.get_item("ID");
        responseObject["number"] = number;

        var title = oListItem.get_item("Title");
        responseObject["title"] = title;

        responseObject["resStatus"] = oListItem.get_item("ResStatus");
        if (
          responseObject.request.status == "Closed" ||
          responseObject.request.status == "Canceled"
        )
          //make it appear that it's closed so that it doesnt confuse AO
          responseObject["resStatus"] = "7-Closed";

        var modifiedDate = oListItem.get_item("Modified");
        var closedDate = oListItem.get_item("ClosedDate");

        modifiedDate != null
          ? (modifiedDate = modifiedDate.format("MM/dd/yyyy hh:mm tt"))
          : (modifiedDate = "");
        closedDate != null
          ? (closedDate = closedDate.format("MM/dd/yyyy"))
          : (closedDate = "");

        responseObject["modified"] = modifiedDate;
        responseObject["closedDate"] = closedDate;
        responseObject["closedBy"] =
          Audit.Common.Utilities.GetFriendlyDisplayName(oListItem, "ClosedBy");

        responseObject["sample"] = oListItem.get_item("SampleNumber");
        if (responseObject["sample"] == null) responseObject["sample"] = "";

        var comments = oListItem.get_item("Comments");
        if (comments == null) comments = "";
        responseObject["comments"] = comments;

        var returnReason = oListItem.get_item("ReturnReason");
        if (returnReason == null) returnReason = "";
        responseObject["returnReason"] = returnReason;

        responseObject["responseDocs"] = new Array();
        responseObject["coversheets"] = new Array();

        responseObject["arrIndex"] = cnt;
        m_arrResponses.push(responseObject);

        m_bigMap["response-" + title] = responseObject;
        cnt++;
      }
    }
  }

  function LoadResponseDocs() {
    for (var oListItem of m_ResponseDocsItems) {
      var requestNumber = oListItem.get_item("ReqNum");
      if (requestNumber != null)
        requestNumber = requestNumber.get_lookupValue();

      var responseID = oListItem.get_item("ResID");
      if (responseID != null) responseID = responseID.get_lookupValue();

      if (requestNumber == null || responseID == null) continue;

      if (oListItem.get_item("DocumentStatus") == "Marked for Deletion") {
        //ao can mark a document for deletion, but their permissions do not have delete. IA will have to delete
        //do  nothing
      } else {
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
            responseDocObject["folder"] = oListItem.get_item("FileDirRef");
            responseDocObject["documentStatus"] =
              oListItem.get_item("DocumentStatus");

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
              Audit.Common.Utilities.GetFriendlyDisplayName(
                oListItem,
                "Editor"
              );

            oResponse["responseDocs"].push(responseDocObject);
          }
        } catch (err) {}
      }
    }
  }

  function LoadTabStatusReport(arr) {
    if (arr == null) return;

    var responseArr = new Array();

    var count = 0;
    var resStatus1 = 0;
    var resStatus2 = 0;

    var arrlength = arr.length;
    while (arrlength--) {
      var oResponse = arr[arrlength];

      var responseTitle = oResponse.title;

      var highlight = false;
      var responseStatus = oResponse.resStatus;
      if (
        responseStatus == m_responseStatus1 ||
        responseStatus == m_responseStatus2
      ) {
        count++;
        if (responseStatus == m_responseStatus1) resStatus1++;
        else resStatus2++;

        highlight = true;
      }

      var aResponse = {
        title: responseTitle,
        requestSubject: oResponse.request.subject,
        requestStatus: oResponse.request.status,
        internalDueDate: oResponse.request.internalDueDate,
        status: responseStatus,
        docCount: oResponse.responseDocs.length,
        modified: oResponse.modified,
        highlight: highlight,
        visibleRow: ko.observable(true),
      };

      responseArr.push(aResponse);
    }

    if (responseArr.length > 0) {
      m_statusToFilterOn = "";
      if (resStatus1 > 0 && resStatus2 == 0)
        m_statusToFilterOn = m_responseStatus1;
      else if (resStatus2 > 0 && resStatus1 == 0)
        m_statusToFilterOn = m_responseStatus2;

      _myViewModel.cntPendingReview(count);

      ko.utils.arrayPushAll(_myViewModel.arrResponses, responseArr);
      _myViewModel.arrResponses.valueHasMutated();
    }

    //aleways calls this even if 0 responses
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

                var encodedTitle = csTitle.replace(/'/g, "&#39");
                arrCS.push({
                  folder: csFolder,
                  title: csTitle,
                  link:
                    "STSNavigate('../_layouts/download.aspx?SourceUrl=" +
                    csFolder +
                    "/" +
                    encodedTitle +
                    "')",
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
    function OnFailure(sender, args) {}

    currCtx.executeQueryAsync(
      Function.createDelegate(data, OnSuccess),
      Function.createDelegate(data, OnFailure)
    );
  }

  function LoadTabResponseInfoResponseDocs(oResponse) {
    _myViewModel.arrResponseDocs(null);
    _myViewModel.cntResponseDocs(0);
    _myViewModel.showUpload(false);
    _myViewModel.showSubmit(false);

    var currCtx = new SP.ClientContext.get_current();
    var web = currCtx.get_web();

    for (var z = 0; z < oResponse.responseDocs.length; z++) {
      var oResponseDoc = oResponse.responseDocs[z];

      //this loads on execute
      oResponseDoc["docIcon"] = web.mapToIcon(
        oResponseDoc.fileName,
        "",
        SP.Utilities.IconSize.Size16
      ); // m_siteUrl + "/" + window.context.pageContext.legacyPageContext.layoutsUrl + "/images/" + docIcon;
    }

    function OnSuccess(sender, args) {
      RenderResponses(oResponse);
    }
    function OnFailure(sender, args) {
      alert(
        "Request failed: " + args.get_message() + "\n" + args.get_stackTrace()
      );
    }
    currCtx.executeQueryAsync(OnSuccess, OnFailure);

    function RenderResponses(oResponse) {
      var cntAddedByAO = 0;

      var arrResponseDocs = new Array();
      for (var z = 0; z < oResponse.responseDocs.length; z++) {
        var oResponseDoc = oResponse.responseDocs[z];
        oResponseDoc.docIcon = oResponseDoc.docIcon.get_value();
        oResponseDoc.styleTag = Audit.Common.Utilities.GetResponseDocStyleTag2(
          oResponseDoc.documentStatus
        );
        oResponseDoc.responseTitle = oResponse.title;

        if (
          oResponseDoc.documentStatus == "Open" &&
          (oResponse.resStatus == m_responseStatus1 ||
            oResponse.resStatus == m_responseStatus2)
        )
          cntAddedByAO++;

        arrResponseDocs.push(oResponseDoc);
      }

      if (m_curResponseSelectedIsEditableByAO) {
        _myViewModel.showUpload(true);
        if (cntAddedByAO > 0) _myViewModel.showSubmit(true);
      }

      var arrResponseSummary = {
        responseTitle: oResponse.title,
        responseDocs: arrResponseDocs,
        responseStatus: oResponse.resStatus,
      };
      _myViewModel.arrResponseDocs(arrResponseSummary);
      _myViewModel.arrResponseDocs.valueHasMutated();
      _myViewModel.cntResponseDocs(oResponse.responseDocs.length);

      if (
        oResponse.resStatus == "1-Open" ||
        oResponse.resStatus == "3-Returned to Action Office"
      ) {
        if (m_curResponseSelectedIsEditableByAO && cntAddedByAO > 0) {
          addNotification(
            "<div style='text-align:left'>Response documents have been added. <br/><br/>Your package <span style='font-weight:bold; color:red'>has not yet been submitted</span>. <br></br>Please review your documents and click on the link <b>SUBMIT this Response Package</b> below</div>",
            false
          );

          $(".btnSubmitPackage")
            .parent()
            .css({ "background-color": "yellow", "font-weight": "inherit" });
          $(".btnSubmitPackage").get(0).scrollIntoView();

          function resetColor() {
            $(".btnSubmitPackage")
              .parent()
              .css({ "background-color": "inherit", "font-weight": "inherit" });
          }
          setTimeout(function () {
            resetColor();
          }, 2000);
        } else if (m_curResponseSelectedIsEditableByAO && cntAddedByAO == 0) {
          addNotification(
            "<div style='text-align:left'>Please review the Response Information and any CoverSheets/Supplemental Documents. <br/><br/>Then, click the link to <span style='font-weight:bold; color:gree'>Upload Response Documents</span> pertaining to this Response</div>",
            false
          );
        }
      }
    }
  }

  function m_fnFormatEmailBodyToIAFromAO(oRequest, responseTitle) {
    var emailText =
      "<div>Audit Request Reference: <b>{REQUEST_NUMBER}</b></div>" +
      "<div>Audit Request Subject: <b>{REQUEST_SUBJECT}</b></div>" +
      "<div>Audit Request Due Date: <b>{REQUEST_DUEDATE}</b></div><br/>" +
      "<div>Below is the Response that was submitted: </div>" +
      "<div>{RESPONSE_TITLE}</div>";

    emailText = emailText.replace("{REQUEST_NUMBER}", oRequest.number);
    emailText = emailText.replace("{REQUEST_SUBJECT}", oRequest.subject);
    emailText = emailText.replace(
      "{REQUEST_DUEDATE}",
      oRequest.internalDueDate
    );

    var responseTitleBody = "<ul><li>" + responseTitle + "</li></ul>";
    emailText = emailText.replace("{RESPONSE_TITLE}", responseTitleBody);

    return emailText;
  }

  function m_fnSubmitPackage() {
    var responseToSubmit = $("#ddlResponsesOpen").val();
    if (
      confirm(
        "Are you sure you would like to submit these response documents? Note: You will NOT be able to make changes or upload any more documents after you submit this package."
      )
    ) {
      const submitPackageTask = addTask(submitPackageTaskDef);

      m_bIsTransactionExecuting = true;

      var currCtx = new SP.ClientContext.get_current();
      var web = currCtx.get_web();

      var folderPath =
        Audit.Common.Utilities.GetSiteUrl() +
        "/" +
        Audit.Common.Utilities.GetLibNameResponseDocs() +
        "/" +
        responseToSubmit;
      var responseDocLib = web
        .get_lists()
        .getByTitle(Audit.Common.Utilities.GetLibTitleResponseDocs());
      var responseDocQuery = new SP.CamlQuery();
      responseDocQuery.set_viewXml(
        "<View Scope=\"RecursiveAll\"><Query><Where><And><Eq><FieldRef Name='FileDirRef'/><Value Type='Text'>" +
          folderPath +
          "</Value></Eq><Eq><FieldRef Name='DocumentStatus'/><Value Type='Text'>Open</Value></Eq></And></Where></Query></View>"
      );
      const responseDocOpenItems = responseDocLib.getItems(responseDocQuery);
      currCtx.load(
        responseDocOpenItems,
        "Include(ID, DocumentStatus, FileDirRef)"
      );

      var emailList = web
        .get_lists()
        .getByTitle(Audit.Common.Utilities.GetListTitleEmailHistory());
      var emailListQuery = new SP.CamlQuery();
      emailListQuery.set_viewXml(
        '<View><Query><OrderBy><FieldRef Name="ID"/></OrderBy><Where><Eq><FieldRef Name="FSObjType"/><Value Type="Text">1</Value></Eq></Where></Query></View>'
      );
      const emailListFolderItems = emailList.getItems(emailListQuery);
      currCtx.load(emailListFolderItems, "Include(ID, Title, DisplayName)");

      function OnSuccessLoadedResponseDocs(sender, args) {
        var ctOpenResponseDocs = 0;
        if (responseDocOpenItems != null) {
          var listItemEnumerator = responseDocOpenItems.getEnumerator();
          while (listItemEnumerator.moveNext()) {
            var oListItem = listItemEnumerator.get_current();
            oListItem.set_item("DocumentStatus", "Submitted");
            oListItem.update();
            ctOpenResponseDocs++;
          }
        }

        if (ctOpenResponseDocs == 0) {
          alert("Please upload a Response document.");
          submitPackageTask.addStatus(
            "Please upload a Response document.",
            false
          );

          finishTask(submitPackageTask);
          return;
        }

        var oRequest = null;
        try {
          var bigMapItem = m_bigMap["response-" + responseToSubmit];
          var indexOfArrResponses = bigMapItem.arrIndex;
          const oResponse = m_arrResponses[indexOfArrResponses];
          if (oResponse) {
            oRequest = oResponse.request;

            var responseList = currCtx
              .get_web()
              .get_lists()
              .getByTitle(Audit.Common.Utilities.GetListTitleResponses());
            const responseItem = responseList.getItemById(oResponse.ID);
            responseItem.set_item("ResStatus", "2-Submitted");
            responseItem.update();
          }
        } catch (err) {
          alert(err);
          Audit.Common.Utilities.Refresh();
        }

        if (oRequest == null) {
          finishTask(submitPackageTask);
          return;
        }

        var emailSubject =
          "A Response has been Submitted by an Action Office: " +
          oRequest.number;
        var emailText = m_fnFormatEmailBodyToIAFromAO(
          oRequest,
          responseToSubmit
        );

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
        oListItem = emailList.addItem(itemCreateInfo);
        oListItem.set_item("Title", emailSubject);
        oListItem.set_item("Body", emailText);
        oListItem.set_item("To", m_IA_ActionOffice.title);
        oListItem.set_item("ReqNum", oRequest.number);
        oListItem.set_item("ResID", responseToSubmit);
        oListItem.set_item("NotificationType", "IA Notification");
        oListItem.update();

        function OnSuccessUpdateResponse(sender, args) {
          document.body.style.cursor = "default";

          finishTask(submitPackageTask);
          Audit.Common.Utilities.Refresh();
        }
        function OnFailureUpdateResponse(sender, args) {
          submitPackageTask.addStatus(
            "Request failed: " +
              args.get_message() +
              "\n" +
              args.get_stackTrace()
          );

          finishTask(submitPackageTask);
        }

        currCtx.executeQueryAsync(
          OnSuccessUpdateResponse,
          OnFailureUpdateResponse
        );
      }

      function OnFailureLoadedResponseDocs(sender, args) {
        submitPackageTask.addStatus(
          "Request failed: " + args.get_message() + "\n" + args.get_stackTrace()
        );

        // finishTask(submitPackageTask)
      }

      currCtx.executeQueryAsync(
        OnSuccessLoadedResponseDocs,
        OnFailureLoadedResponseDocs
      );
    }
  }

  function m_fnMarkForDeletionResponseDoc(itemID) {
    if (
      confirm("Are you sure you would like to Delete this Response Document?")
    ) {
      var currCtx = new SP.ClientContext.get_current();
      var responseDocsLib = currCtx
        .get_web()
        .get_lists()
        .getByTitle(Audit.Common.Utilities.GetLibNameResponseDocs());

      const oListItem = responseDocsLib.getItemById(itemID);
      oListItem.set_item("DocumentStatus", "Marked for Deletion");
      oListItem.update();

      function OnSuccess(sender, args) {
        Audit.Common.Utilities.Refresh();
      }
      function OnFailure(sender, args) {
        alert(
          "Request failed: " + args.get_message() + "\n" + args.get_stackTrace()
        );
      }
      currCtx.executeQueryAsync(OnSuccess, OnFailure);
    }
  }

  function GoToResponse(response) {
    //$("#tabs").tabs({ active: 1 });
    _myViewModel.tabs.selectById(_myViewModel.tabOpts.ResponseDetail.id);

    if (response) {
      response = m_bigMap["response-" + response];

      var requestStatus = response.request.status;
      var responseStatus = response.resStatus;
      if (
        (responseStatus == m_responseStatus1 ||
          responseStatus == m_responseStatus2) &&
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
    GoToResponse: GoToResponse,
    IsTransactionExecuting: function () {
      return m_bIsTransactionExecuting;
    },
  };

  return publicMembers;
};
