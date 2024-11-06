import roDbTemplate from "./ro_db.html"; // with { type: 'html' }
import { NewUtilities, getUrlParam } from "../../common/index.js";
console.log("Loaded ro_db.js from cdn");

function load(element, context) {
  window.context = context;
  console.log("Loading app", element);
  element.append(roDbTemplate);
  InitReport();
}

var ro_db = { load };
window.ro_db = ro_db;

window.Audit = window.Audit || {
  Common: {},
};
Audit.EAReport = Audit.EAReport || {};

var paramShowSiteActionsToAnyone = getUrlParam("ShowSiteActions");
if (paramShowSiteActionsToAnyone != true) {
  //hide it even for owners unless this param is passed into the URL; pass in param if you want to change the page web parts/settings
  //Hide Site Actions (fail safe even though master page does it)
  // document.getElementById("#RibbonContainer-TabRowLeft").style.display = "none";
  // document.getElementById("#s4-ribbonrow").style.display = "none";
}

// if (document.readyState === "ready" || document.readyState === "complete") {
//   InitReport();
// } else {
//   document.onreadystatechange = () => {
//     if (document.readyState === "complete" || document.readyState === "ready") {
//       InitReport();
//     }
//   };
// }

function InitReport() {
  Audit.Common.Utilities = new NewUtilities();
  Audit.EAReport.Report = new NewReportPage();
}

function NewReportPage() {
  var path =
    location.protocol +
    "//" +
    location.host +
    Audit.Common.Utilities.GetSiteUrl() +
    "/" +
    Audit.Common.Utilities.GetLibTitleResponseDocsEA();
  //$("#divExplorerView").html( '<a href="#" onClick="javascript:CoreInvoke(\'NavigateHttpFolder\', \'http://cgfsauditst.rm.state.gov/sites/itaudit/AuditResponseDocsEA/\', \'_blank\');">View In Explorer</a>');
  // $("#divExplorerView").html(
  //   '<span class="ui-icon ui-icon-folder-open"></span><a title="Open documents in Explorer View" href="#" onClick="javascript:CoreInvoke(\'NavigateHttpFolder\', \'' +
  //     path +
  //     "', '_blank');\">View In Explorer</a>"
  // );

  var filterField = getUrlParam("FilterField1");
  var filterValue = getUrlParam("FilterValue1");

  if (filterField == "Modified" && filterValue != null && filterValue != "") {
    filterValue = filterValue.replace(/%2D/g, "/");
    filterValue = filterValue.replace(/-/g, "/");
    var modifiedDate = new Date(filterValue);
    modifiedDate = modifiedDate.format("M/d/yyyy");

    document.getElementById("lblFilteredOn").innerHTML =
      "Filtered Documents (<b>" +
      filterField +
      "</b> = <b>" +
      modifiedDate +
      "</b>)";
  } else if (
    filterField != null &&
    filterField != "" &&
    filterValue != null &&
    filterValue != ""
  ) {
    document.getElementById("lblFilteredOn").innerHTML =
      "Filtered Documents (<b>" +
      filterField +
      "</b> = <b>" +
      filterValue +
      "</b>)";
  } else {
    document.getElementById("lblFilteredOn").innerHTML = "";
  }

  Audit.Common.Utilities.OnLoadDisplayTimeStamp();

  var publicMembers = {
    //Load: m_fnLoadData
  };
  return publicMembers;
}
