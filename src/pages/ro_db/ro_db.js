import roDbTemplate from "./ro_db.html"; // with { type: 'html' }

console.log("Loaded ro_db.js from cdn");

function load(element) {
  console.log("Loading app", element);
  element.append(roDbTemplate);
}

var ro_db = { load };
window.ro_db = ro_db;
