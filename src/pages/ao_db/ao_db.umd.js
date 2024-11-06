import { load } from "./ao_db.js";
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else {
    // Browser globals
    root.amdWeb = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  console.log("hello from ao_db");

  // function load(element, context) {
  //   console.log("ao db executing: ", element);
  // }

  return {
    load,
  };
});
