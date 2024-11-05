// src/pages/ro_db/ro_db.js
console.log($);
console.log("Loaded ro_db.js from cdn");
function load(element) {
  console.log("Loading app", element);
  element.innerHtml = "<div>Hello from ro_db.js</div>";
}
function foo() {
}
var ro_db_default = load;
export {
  ro_db_default as default,
  foo,
  load
};
//# sourceMappingURL=ro_db.js.map
