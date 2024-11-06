const dbMap = {
  ao_db: function () {
    console.log("loading ao db");
  },
  qa_db: function () {
    console.log("loading qa db");
  },
  ro_db: function () {
    console.log("loading ro db");
  },
  sp_db: function () {
    console.log("loading sp db");
  },
}(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else {
    // Browser globals
    root.amdWeb = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  console.log("hello from db_loader");

  function load(db, element, context) {
    console.log("Loading Dashboard: ", db);

    if (!Object.hasOwn(dbMap, db)) {
      alert("db not registered!");
      return;
    }

    dbMap[db](element, context);
  }

  return {
    load,
  };
});
