import * as ko from "knockout";
import { NewUtilities, getUrlParam } from "../../common/index.js";
import reportTemplate from "./report_request_status.html";
import { registerStyles } from "../../infrastructure/register_styles.js";
import { InitSal } from "../../sal/infrastructure/sal.js";
import {
  appContext,
  initAppcontext,
} from "../../infrastructure/application_db_context.js";

import "../../sal/infrastructure/knockout_extensions.js";

import { GoogleCharts } from "google-charts";
import { getAllItems } from "../../services/legacy_helpers.js";

import "../../../lib/webcomponents/searchselect/searchselect.js";
import "../../../lib/webcomponents/data-table/data-table.js";
var Audit = window.Audit || {
  Common: {},
  IAReport: {},
};

const responseParam = "ResNum";

export async function load(element, context) {
  window.context = context;
  element.innerHTML = reportTemplate;
  registerStyles(element);
  initAppcontext();
  await InitSal();

  Audit.Common.Utilities = new NewUtilities();
  Audit.IAReport.Report = new Audit.IAReport.NewReportPage();
  Audit.IAReport.Init();
}

Audit.IAReport.Init = function () {};

Audit.IAReport.NewReportPage = function () {
  GoogleCharts.load("current", { packages: ["corechart"] });

  var m_arrRequests = new Array();
  var m_requestsStatus = new Object();
  let m_requestItems = null;

  function ViewModel() {
    var self = this;

    self.debugMode = ko.observable(false);
    self.siteUrl = Audit.Common.Utilities.GetSiteUrl();

    //cant add rate limit because it'll affect the refresh
    //self.arrResponses = ko.observableArray( null ).extend({ rateLimit: 500 });
    self.arrRequests = ko.observableArray(null);

    self.arrRequests.subscribe((changes) => {
      document.getElementById("tblStatusReportRequests")?.update();
    }, "arrayChange");

    self.doSort = function (newValue) {
      if (self.arrRequests().length > 0 && newValue) {
        setTimeout(function () {
          Audit.Common.Utilities.OnLoadDisplayTimeStamp();
        }, 200);
      }
    };

    /**Other**/
    self.clickExpandActionOffices = (item, e) => {
      e.target.parentElement
        .querySelector(".sr1-request-actionOffice-items")
        .classList.toggle("collapsed");
    };
  }

  var _myViewModel = new ViewModel();
  ko.applyBindings(_myViewModel);

  LoadInfo();

  async function LoadInfo() {
    m_requestItems = await getAllItems(
      Audit.Common.Utilities.GetListTitleRequests()
    );
    m_fnLoadData();
  }

  function m_fnLoadData() {
    LoadRequests();
    document.getElementById("tabs").style.display = "block";
    LoadTabStatusReport1(m_arrRequests, "fbody1");
  }

  function LoadRequests() {
    m_arrRequests = new Array();
    m_requestsStatus = new Object();

    try {
      var curDate = new Date();

      m_requestsStatus.closedLate = 0;
      m_requestsStatus.closedOnTime = 0;
      m_requestsStatus.openOnTime = 0;
      m_requestsStatus.openLate = 0;
      m_requestsStatus.other = 0;
      m_requestsStatus.late = 0;
      m_requestsStatus.onTime = 0;

      // var listItemEnumerator = m_requestItems.getEnumerator();
      // while (listItemEnumerator.moveNext()) {
      //   var oListItem = listItemEnumerator.get_current();
      for (var oListItem of m_requestItems) {
        var dueDate = oListItem.get_item("ReqDueDate");
        var closedDate = oListItem.get_item("ClosedDate");
        var status = oListItem.get_item("ReqStatus");

        var requestAuditStatus = "N/A";
        var daysLate = 0;

        //canceled, closed, reopened, open
        if (status.indexOf("Open") >= 0) {
          curDate = new Date(
            curDate.getFullYear(),
            curDate.getMonth(),
            curDate.getDate()
          ); //strip time
          if (curDate > dueDate) {
            requestAuditStatus = "Late";
            m_requestsStatus.openLate++;
            m_requestsStatus.late++;

            daysLate = GetDateDiff(curDate, dueDate);
          } else {
            requestAuditStatus = "On Time";
            m_requestsStatus.openOnTime++;
            m_requestsStatus.onTime++;

            if (closedDate)
              //clear out the closed date so that it doesnt confuse people; date would be there if it was reopened
              closedDate = null;
          }
        } else if (status == "Closed") {
          var bFound = false;

          if (closedDate) {
            closedDate = new Date(
              closedDate.getFullYear(),
              closedDate.getMonth(),
              closedDate.getDate()
            ); //strip time

            if (closedDate > dueDate) {
              requestAuditStatus = "Late";
              m_requestsStatus.closedLate++;
              m_requestsStatus.late++;
              daysLate = GetDateDiff(closedDate, dueDate);

              bFound = true;
            }
          }

          if (!bFound) {
            requestAuditStatus = "On Time";
            m_requestsStatus.closedOnTime++;
            m_requestsStatus.onTime++;
          }
        }

        if (requestAuditStatus == "N/A") m_requestsStatus.other++;

        var id = oListItem.get_item("ID");
        var number = oListItem.get_item("Title");

        var subject = oListItem.get_item("ReqSubject");
        if (subject == null) subject = "";

        var sample = oListItem.get_item("IsSample");

        dueDate != null
          ? (dueDate = dueDate.format("MM/dd/yyyy"))
          : (dueDate = "");
        closedDate != null
          ? (closedDate = closedDate.format("MM/dd/yyyy"))
          : (closedDate = "");

        var arrAOs =
          oListItem
            .get_item("ActionOffice")
            ?.map((item) => item.get_lookupValue()) ?? [];

        /*var arrAOs = new Array();
				var arrActionOffice = oListItem.get_item('ActionOffice');
				if ( arrActionOffice.length > 0 )
				{			
					var tempAOs = new Array();		
					for( var x = 0; x < arrActionOffice.length; x++ )
						tempAOs.push( arrActionOffice[x].get_lookupValue() );
					tempAOs = tempAOs.sort();
					
					for( var x = 0; x < tempAOs.length; x++ )
						arrAOs.push( {"ao" : tempAOs[x] } );
				}*/

        var closedBy = Audit.Common.Utilities.GetFriendlyDisplayName(
          oListItem,
          "ClosedBy"
        );

        var requestObject = new Object();
        requestObject["ID"] = id;
        requestObject["number"] = number;
        requestObject["subject"] = subject;
        requestObject["dueDate"] = dueDate;
        requestObject["status"] = status;
        requestObject["sample"] = sample;
        requestObject["closedDate"] = closedDate;
        requestObject["closedBy"] = closedBy;
        requestObject["requestAuditStatus"] = requestAuditStatus;
        requestObject["daysLate"] = daysLate;
        requestObject["actionOffices"] = arrAOs;

        m_arrRequests.push(requestObject);
      }
    } catch (err) {
      alert(err);
    }
  }

  function GetDateDiff(date1, date2) {
    if (!date1 || !date2) return 0;

    const start = Math.floor(date1.getTime() / (3600 * 24 * 1000)); //days as integer from..
    const end = Math.floor(date2.getTime() / (3600 * 24 * 1000)); //days as integer from..
    var daysDiff = end - start; // exact dates

    return Math.abs(daysDiff);
  }

  function LoadTabStatusReport1(arr, fbody) {
    _myViewModel.arrRequests([]);
    _myViewModel.arrRequests.valueHasMutated();

    if (arr == null) return;

    var requestArr = new Array();

    var arrLength = arr.length;
    while (arrLength--) {
      var oRequest = arr[arrLength];

      var aRequest = {
        reqNumber: oRequest.number,
        subject: oRequest.subject,
        status: oRequest.status,
        dueDate: oRequest.dueDate,
        sample: oRequest.sample,
        closedDate: oRequest.closedDate,
        requestAuditStatus: oRequest.requestAuditStatus,
        daysLate: oRequest.daysLate,
        actionOffices: oRequest.actionOffices,
      };
      requestArr.push(aRequest);
    }

    ko.utils.arrayPushAll(_myViewModel.arrRequests, requestArr);
    _myViewModel.arrRequests.valueHasMutated(); //not doing this because we're using jsrender

    //do this after push all because this takes some time
    // var requestTemplateOutput = $( "#requestTemplate" ).render( requestArr );
    //alert( requestTemplateOutput );

    setTimeout(function () {
      // $( "#" + fbody ).html( requestTemplateOutput ).show();

      _myViewModel.doSort(true);

      GoogleCharts.api.setOnLoadCallback(drawChart);

      function drawChart() {
        var data1 = GoogleCharts.api.visualization.arrayToDataTable([
          ["Satus", "Number"],
          ["Late", m_requestsStatus.late],
          ["On Time", m_requestsStatus.onTime],
          ["Other", m_requestsStatus.other],
        ]);

        var options1 = {
          title: "Status",
          colors: ["red", "green", "grey"],
        };

        var chart1 = new GoogleCharts.api.visualization.PieChart(
          document.getElementById("piechart1")
        );
        chart1.draw(data1, options1);

        var data2 = google.visualization.arrayToDataTable([
          ["Satus", "Number"],
          ["Late (Closed)", m_requestsStatus.closedLate],
          ["Late (Open)", m_requestsStatus.openLate],
          ["On Time (Closed)", m_requestsStatus.closedOnTime],
          ["On Time (Open)", m_requestsStatus.openOnTime],
          ["Other", m_requestsStatus.other],
        ]);

        var options2 = {
          title: "Status",
          colors: ["salmon", "red", "lightgreen", "green", "grey"],
        };

        var chart2 = new GoogleCharts.api.visualization.PieChart(
          document.getElementById("piechart2")
        );
        chart2.draw(data2, options2);
      }
    }, 100);
  }

  var publicMembers = {};

  return publicMembers;
};
