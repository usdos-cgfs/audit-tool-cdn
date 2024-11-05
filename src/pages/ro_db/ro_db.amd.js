// amd samples:
// https://github.com/umdjs/umd/blob/master/templates/amdWeb.js

(function (global, factory) {
  "use strict";

  if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = global.document
      ? factory(global, true)
      : function (w) {
          if (!w.document) {
            throw new Error("jQuery requires a window with a document");
          }
          return factory(w);
        };
  } else {
    factory(global);
  }
})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {
  "use strict";

  console.log("Loaded ro_db.js from cdn");
  function load(element) {
    console.log("Loading app", element);
    element.innerHtml = "<div>Hello from ro_db.js</div>";
  }

  function foo() {}

  var ro_db = { load };

  if (typeof define === "function" && define.amd) {
    define(function () {
      return ro_db;
    });
  }

  if (typeof noGlobal === "undefined") {
    window.RO_DB = ro_db;
  }

  return ro_db;
});
