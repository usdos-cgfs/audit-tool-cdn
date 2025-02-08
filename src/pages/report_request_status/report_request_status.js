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
    self.arrFilteredRequestsCount = ko.observable(0);

    /* request tab */
    self.ddOptionsRequestAuditStatus = ko.observableArray();
    self.ddOptionsRequestNum = ko.observableArray();
    self.ddOptionsRequestStatus = ko.observableArray();

    self.filterRequestAuditStatus = ko.observable();
    self.filterRequestNum = ko.observable();
    self.filterRequestStatus = ko.observable();
    self.doSort = ko.observable(false);

    self.selectedFiltersTab = ko.computed(function () {
      var requestAuditStatus = self.filterRequestAuditStatus();
      var requestNum = self.filterRequestNum();
      var requestStatus = self.filterRequestStatus();

      return requestAuditStatus + " " + requestNum + " " + requestStatus;
    });

    self.ClearFilters = function () {
      self.filterRequestAuditStatus("");
      self.filterRequestNum("");
      self.filterRequestStatus("");
    };

    self.selectedFiltersTab.subscribe(function (value) {
      self.FilterChanged();
    });

    self.FilterChanged = function () {
      //	console.log("filter changed");
      setTimeout(function () {
        var requestAuditStatus = self.filterRequestAuditStatus();
        var requestNum = self.filterRequestNum();
        var requestStatus = self.filterRequestStatus();

        if (!requestAuditStatus && !requestNum && !requestStatus) {
          document
            .querySelectorAll(".sr1-request-item")
            .forEach((item) => (item.style.display = ""));
          self.arrFilteredRequestsCount(self.arrRequests().length);
          return;
        }

        requestAuditStatus = !requestAuditStatus ? "" : requestAuditStatus;
        requestNum = !requestNum ? "" : requestNum;
        requestStatus = !requestStatus ? "" : requestStatus;
        var count = 0;
        var eacher = document.querySelectorAll(".sr1-request-item");
        eacher.forEach((item) => {
          var hide = false;

          if (
            !hide &&
            requestNum != "" &&
            item.querySelector(".sr1-request-requestNum").textContent.trim() !=
              requestNum
          )
            hide = true;
          if (
            !hide &&
            requestAuditStatus != "" &&
            item.querySelector(".sr1-request-auditStatus").textContent.trim() !=
              requestAuditStatus
          )
            hide = true;
          if (
            !hide &&
            requestStatus != "" &&
            item
              .querySelector(".sr1-request-status")
              .textContent.trim()
              .indexOf(requestStatus) < 0
          )
            hide = true;

          if (hide) item.style.display = "none";
          else {
            item.style.display = "";
            count++;
          }
        });

        self.arrFilteredRequestsCount(count);
      }, 100);
    };

    self.doSort.subscribe(function (newValue) {
      //alert("in dosort: " + self.arrResponses().length );
      if (self.arrRequests().length > 0 && newValue) {
        //should trigger only once
        self.arrFilteredRequestsCount(self.arrRequests().length);

        //tab1
        ko.utils.arrayPushAll(
          self.ddOptionsRequestNum(),
          self.GetDDVals({ type: 0, field: "reqNumber" })
        );
        self.ddOptionsRequestNum.valueHasMutated();

        ko.utils.arrayPushAll(
          self.ddOptionsRequestAuditStatus(),
          self.GetDDVals({ type: 0, field: "requestAuditStatus" })
        );
        self.ddOptionsRequestAuditStatus.valueHasMutated();

        ko.utils.arrayPushAll(
          self.ddOptionsRequestStatus(),
          self.GetDDVals({ type: 0, field: "status" })
        );
        self.ddOptionsRequestStatus.valueHasMutated();

        setTimeout(function () {
          Audit.Common.Utilities.OnLoadDisplayTimeStamp();

          /**Note: on the jsrender of the request/response tables, I set the rows to display none; the filters below show the rows I want **/
          self.filterRequestAuditStatus("Late");

          //$( "#tblStatusReportResponses" ).trigger("update");
          // $("#tblStatusReportRequests").tablesorter({
          //   sortList: [
          //     [0, 0],
          //     [4, 1],
          //   ],
          //   selectorHeaders: ".sorter-true",
          // });
        }, 200);
      }
    });

    /**Other**/
    self.GetDDVals = function (oObjectProperties) {
      var arr = self.arrRequests();
      if (oObjectProperties.type == 1) arr = self.arrResponses();

      var fieldName = oObjectProperties.field;
      var types = ko.utils.arrayMap(arr, function (item) {
        if (oObjectProperties.isArr) {
          var fieldArr = item[fieldName];

          var arrToReturn = new Array();
          //var arrToReturn = "";
          for (var x = 0; x < fieldArr.length; x++) {
            arrToReturn.push(fieldArr[x].ao);
            //	arrToReturn += fieldArr[x].ao  + ","
          }
          return arrToReturn;
        } else if (oObjectProperties.isDate)
          return item[fieldName].split(" ")[0];
        else return item[fieldName].toString();
      });

      var ddArr = null;
      if (oObjectProperties.isArr) {
        var tempArr = new Array();
        for (var x = 0; x < types.length; x++) {
          if (types[x].length > 0) {
            for (var y = 0; y < types[x].length; y++) {
              tempArr.push(types[x][y]);
            }
          }
        }
        ddArr = ko.utils.arrayGetDistinctValues(tempArr).sort();
      } else ddArr = ko.utils.arrayGetDistinctValues(types).sort();
      if (oObjectProperties.sort)
        ddArr.sort(Audit.Common.Utilities.SortResponseTitles);

      if (ddArr[0] == "") ddArr.shift();

      return ddArr;
    };

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
    // var currCtx = new SP.ClientContext.get_current();
    // var web = currCtx.get_web();

    // var requestList = web
    //   .get_lists()
    //   .getByTitle(Audit.Common.Utilities.GetListTitleRequests());
    // var requestQuery = new SP.CamlQuery();

    // requestQuery.set_viewXml(
    //   '<View><Query><OrderBy><FieldRef Name="Title"/></OrderBy></Query></View>'
    // );
    // m_requestItems = requestList.getItems(requestQuery);
    // currCtx.load(
    //   m_requestItems,
    //   "Include(ID, Title, ReqSubject, ReqStatus, IsSample, ReqDueDate, ActionOffice, ClosedDate, ClosedBy, Modified)"
    // );

    // currCtx.executeQueryAsync(OnSuccess, OnFailure);
    // function OnSuccess(sender, args) {
    //   m_fnLoadData();
    // }
    // function OnFailure(sender, args) {
    //   document.getElementById("divLoading").style.display = "none";
    //   statusId = SP.UI.Status.addStatus(
    //     "Request failed: " + args.get_message() + "\n" + args.get_stackTrace()
    //   );
    //   SP.UI.Status.setStatusPriColor(statusId, "red");
    // }
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
    //_myViewModel.arrRequests.valueHasMutated(); //not doing this because we're using jsrender

    //do this after push all because this takes some time
    // var requestTemplateOutput = $( "#requestTemplate" ).render( requestArr );
    //alert( requestTemplateOutput );

    setTimeout(function () {
      // $( "#" + fbody ).html( requestTemplateOutput ).show();

      _myViewModel.doSort(true);
      BindHandlersOnLoad();

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

  function BindHandlersOnLoad() {
    BindPrintButton(
      "#btnPrint1",
      "#divStatusReportRequests",
      "Request Status Report"
    );

    //////////Note: for the export to work, make sure this is added to the html: <iframe id="CsvExpFrame" style="display: none"></iframe>
    BindExportButton(
      ".export1",
      "RequestStatusReport_",
      "tblStatusReportRequests"
    );
  }

  function BindPrintButton(btnPrint, divTbl, pageTitle) {
    document.querySelector(btnPrint).addEventListener("click", function () {
      PrintPage(pageTitle, divTbl);
    });
  }

  function BindExportButton(btnExport, fileNamePrefix, tbl) {
    document
      .querySelector(btnExport)
      .addEventListener("click", function (event) {
        var curDate = new Date().format("yyyyMMdd_hhmmtt");
        ExportToCsv(fileNamePrefix + curDate, tbl);
      });
  }

  function PrintPage(pageTitle, divTbl) {
    var curDate = new Date();
    var siteUrl = Audit.Common.Utilities.GetSiteUrl();
    var cssLink1 =
      siteUrl +
      "/siteassets/css/tablesorter/style.css?v=" +
      curDate.format("MM_dd_yyyy");
    var cssLink2 =
      siteUrl +
      "/siteAssets/css/audit_styles.css?v=" +
      curDate.format("MM_dd_yyyy");

    var divOutput = document.querySelector(divTbl).innerHTML;

    var printDateString = curDate.format("MM/dd/yyyy hh:mm tt");
    printDateString =
      "<div style='padding-bottom:10px;'>" +
      printDateString +
      " - " +
      pageTitle +
      "</div>";

    divOutput = printDateString + divOutput;

    var cssFileText = "";
    fetch(cssLink1)
      .then((response) => response.text())
      .then((data) => {
        cssFileText += "<style>" + data + "</style>";
        return fetch(cssLink2);
      })
      .then((response) => response.text())
      .then((data) => {
        cssFileText += "<style>" + data + "</style>";
        var html =
          "<HTML>\n" +
          "<HEAD>\n\n" +
          "<Title>" +
          pageTitle +
          "</Title>\n" +
          cssFileText +
          "\n" +
          "<style>" +
          ".hideOnPrint, .rowFilters, .actionOfficeContainer {display:none}" +
          "</style>\n" +
          "</HEAD>\n" +
          "<BODY>\n" +
          divOutput +
          "\n" +
          "</BODY>\n" +
          "</HTML>";

        var printWP = window.open("", "printWebPart");
        printWP.document.open();
        //insert content
        printWP.document.write(html);

        printWP.document.close();
        //open print dialog
        printWP.print();
      });
  }
  //make sure iframe with id csvexprframe is added to page up top
  //http://stackoverflow.com/questions/18185660/javascript-jquery-exporting-data-in-csv-not-working-in-ie
  function ExportToCsv(fileName, tableName, removeHeader) {
    var data = GetCellValues(tableName);

    if (removeHeader == true) data = data.slice(1);

    var csv = ConvertToCsv(data);
    //	console.log( csv );
    if (navigator.userAgent.search("Trident") >= 0) {
      window.CsvExpFrame.document.open("text/html", "replace");
      //		window.CsvExpFrame.document.open("application/csv", "replace");
      //		window.CsvExpFrame.document.charset = "utf-8";
      //		window.CsvExpFrame.document.open("application/ms-excel", "replace");
      window.CsvExpFrame.document.write(csv);
      window.CsvExpFrame.document.close();
      window.CsvExpFrame.focus();
      window.CsvExpFrame.document.execCommand(
        "SaveAs",
        true,
        fileName + ".csv"
      );
    } else {
      var uri = "data:text/csv;charset=utf-8," + escape(csv);
      var downloadLink = document.createElement("a");
      downloadLink.href = uri;
      downloadLink.download = fileName + ".csv";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  }

  function GetCellValues(tableName) {
    var table = document.getElementById(tableName);

    //remove headers and footers
    if (table.innerHTML.indexOf("rowFilters") >= 0) {
      var deets = document.createElement("div");
      deets.innerHTML = table.outerHTML;
      deets.querySelectorAll(".rowFilters").forEach((item) => item.remove());
      table = deets.querySelector("table");
    }
    if (table.innerHTML.indexOf("footer") >= 0) {
      var deets = document.createElement("div");
      deets.innerHTML = table.outerHTML;
      deets.querySelectorAll(".footer").forEach((item) => item.remove());
      table = deets.querySelector("table");
    }

    if (table.innerHTML.indexOf("actionOfficeContainer") >= 0) {
      var deets = document.createElement("div");
      deets.innerHTML = table.outerHTML;
      deets
        .querySelectorAll(".actionOfficeContainer")
        .forEach((item) => item.remove());

      deets
        .querySelectorAll(".sr1-request-actionOffice-item")
        .forEach((item) => {
          var curText = item.textContent + ", ";
          item.textContent = curText;
        });

      table = deets.querySelector("table");
    }

    var tableArray = [];
    for (var r = 0, n = table.rows.length; r < n; r++) {
      tableArray[r] = [];
      for (var c = 0, m = table.rows[r].cells.length; c < m; c++) {
        var text =
          table.rows[r].cells[c].textContent ||
          table.rows[r].cells[c].innerText;
        tableArray[r][c] = text.trim();
      }
    }
    return tableArray;
  }

  function ConvertToCsv(objArray) {
    var array = typeof objArray != "object" ? JSON.parse(objArray) : objArray;
    var str = "sep=,\r\n";
    var line = "";
    var index;
    var value;
    for (var i = 0; i < array.length; i++) {
      line = "";
      var array1 = array[i];
      for (index in array1) {
        if (array1.hasOwnProperty(index)) {
          value = array1[index] + "";
          line += '"' + value.replace(/"/g, '""') + '",';
        }
      }
      line = line.slice(0, -1);
      str += line + "\r\n";
    }
    return str;
  }

  var publicMembers = {};

  return publicMembers;
};
