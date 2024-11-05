// src/pages/ro_db/ro_db.html
var import_meta_document = new DocumentFragment();
var htmlFrag = "<body><div>Hello from RO_DB.html!</div>\r\n</body>";
var fragment = new DOMParser().parseFromString(htmlFrag, "text/html");
import_meta_document.append(...fragment.body.childNodes);
var ro_db_default = import_meta_document;

// src/pages/ro_db/ro_db.js
console.log("Loaded ro_db.js from cdn");
function load(element) {
  console.log("Loading app", element);
  element.append(ro_db_default);
}
var ro_db = { load };
window.ro_db = ro_db;
//# sourceMappingURL=ro_db.js.map
