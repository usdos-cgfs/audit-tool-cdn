customElements.define(
  "data-table",
  class DataTable extends HTMLTableElement {
    constructor() {
      const self = super();
      this.table = self;
      this.head = this.table.querySelector("thead");
      this.body = this.table.querySelector("tbody");
      // this.rows = this.body.rows;
      // this.connectedCallback();
    }

    onFilterEventHandler = (e) => {
      [...this.table.querySelectorAll("tbody > tr.hidden")].map((row) =>
        row.classList.remove("hidden")
      );

      [...this.table.querySelectorAll("tbody td.filtered")].map((cell) =>
        cell.closest("tr").classList.add("hidden")
      );

      this.updateCounts();
    };

    onSearchEventHandler = (e) => {
      [...this.table.querySelectorAll("tbody > tr:not(.hidden)")].map((row) =>
        row.classList.add("hidden")
      );

      [...this.table.querySelectorAll("tbody td.included")].map((cell) =>
        cell.closest("tr").classList.remove("hidden")
      );
      //updateFilters()
    };

    onSortEventHandler = (e) => {
      const headerCells = this.table.querySelectorAll("thead th.sorter-true");

      let sortOrder = 0;
      let sortIndex = 0;
      for (const th of headerCells) {
        const cellIndex = th.cellIndex;
        const classList = th.classList;
        const i = th.querySelector("i");
        i.classList.remove("fa-sort-down", "fa-sort-up", "fa-sort");

        if (classList.contains("desc")) {
          i.classList.add("fa-sort-down");
          sortOrder = 1;
          sortIndex = cellIndex;
        } else if (classList.contains("asc")) {
          i.classList.add("fa-sort-up");
          sortOrder = -1;
          sortIndex = cellIndex;
        } else {
          i.classList.add("fa-sort");
        }
      }

      if (!sortOrder) return;

      var collator = new Intl.Collator([], { numeric: true });
      const rowsArr = [...this.table.querySelectorAll("tbody > tr")];

      // Determine teh type of data in the column
      var testVal = rowsArr
        .find((row) => row.cells[sortIndex].textContent)
        ?.cells[sortIndex].textContent.trim();

      let type;
      try {
        const d = Date.parse(testVal);
        if (!isNaN(d)) type = "date";
      } catch (e) {}
      if (!type) {
        type = isNaN(testVal) ? "string" : "number";
      }

      switch (type) {
        case "date":
          rowsArr.sort((tr1, tr2) => {
            const tr1Text = new Date(tr1.cells[sortIndex]?.textContent);
            const tr2Text = new Date(tr2.cells[sortIndex]?.textContent);
            return (tr1Text - tr2Text) * sortOrder;
          });
          break;
        case "number":
          rowsArr.sort((tr1, tr2) => {
            const tr1Text = Number(tr1.cells[sortIndex]?.textContent);
            const tr2Text = Number(tr2.cells[sortIndex]?.textContent);
            return (tr1Text - tr2Text) * sortOrder;
          });
          break;
        default:
          rowsArr.sort((tr1, tr2) => {
            const tr1Text = tr1.cells[sortIndex]?.textContent;
            const tr2Text = tr2.cells[sortIndex]?.textContent;
            //const comp = tr1Text.localeCompare(tr2Text)
            const comp = collator.compare(tr1Text, tr2Text);
            return comp * sortOrder;
          });
      }

      this.table.querySelector("tbody").append(...rowsArr);
    };

    createSortListeners = () => {
      const headerCells = this.table.querySelectorAll("thead th.sorter-true");

      for (const th of headerCells) {
        if (th.querySelector("i[class*=fa-sort")) return;
        // Add our sort icon
        let i = document.createElement("i");
        i.classList.add("fa-solid", "fa-sort");

        th.append(i);

        // Add the onclick event listener

        th.addEventListener("click", (e) => {
          const headerCells = this.table.querySelectorAll(
            "thead th.sorter-true"
          );
          const cellIndex = th.cellIndex;
          // Reset our other sort icons
          for (const otherTh of headerCells) {
            if (!otherTh.classList.contains("sorter-true")) continue;

            if (otherTh != th) {
              otherTh.classList.remove("asc", "desc");
              otherTh
                .querySelector("i")
                .classList.remove("fa-sort-up", "fa-sort-down");
              otherTh.querySelector("i").classList.add("fa-sort");
            }
          }

          th.querySelector("i").classList.remove("fa-sort");

          let sortOrder = 0;
          const classList = th.classList;
          if (classList.contains("desc")) {
            //   th.querySelector("i").classList.replace("fa-sort-down", "fa-sort-up");
            classList.replace("desc", "asc");
            //   sortOrder = -1;
          } else if (classList.contains("asc")) {
            //   th.querySelector("i").classList.replace("fa-sort-up", "fa-sort-down");
            classList.replace("asc", "desc");
            //   sortOrder = 1;
          } else {
            //   th.querySelector("i").classList.add("fa-sort-down");
            classList.add("desc");
            //   sortOrder = 1;
          }

          const event = new Event("sort");
          this.table.dispatchEvent(event);
        });
      }
    };

    createFilters = () => {
      const filterTypes = {
        checkbox: checkboxElement,
        daterange: dateRangeElement,
        multiselect: multiselectElement,
        search: searchElement,
      };

      let filters = [];

      this.table.querySelectorAll("[data-filter]").forEach((filterCell) => {
        //   const index = [...filterCell.parentElement.children].indexOf(filterCell);
        const index = filterCell.cellIndex;

        const filterType = filterTypes[filterCell.dataset.filter];

        if (filterType) {
          const filter = new filterType(
            this.table,
            index,
            filterCell.dataset.filterText
          );
          filterCell.replaceChildren(filter.element);
          filters.push(filter);
          if (filterCell.dataset.filterValue) {
            filter.setFilter(filterCell.dataset.filterValue);
          }
        }
      });

      return filters;
    };

    filterByColIndex = (col, value) => {
      const th = this.table.querySelector(
        `tr.rowFilters th:nth-of-type(${col + 1})`
      );
      // if (!("filterValue" in th.dataset))

      th.dataset.filterValue = value;
      this.update();
    };

    clearFilters = () => {
      for (const filter of this.filters) {
        filter.setFilter("");
      }
    };

    createExportOptions = () => {
      // const tr = document.createElement("tr");
      // const cell = document.createElement("th");
      // cell.setAttribute(
      //   "colspan",
      //   this.table.querySelector("tr").children.length
      // );

      const div = document.createElement("div");
      div.classList.add("export-options", "quick-links", "secondary");

      const printButton = document.createElement("button");
      printButton.setAttribute("type", "button");
      printButton.setAttribute("title", "Click here to Print");
      printButton.classList.add("btn", "btn-link");
      printButton.innerHTML = `<i class="fa-solid fa-print"></i>`;
      printButton.addEventListener("click", () => {
        PrintPage(this.table);
      });

      const exportButton = document.createElement("button");
      exportButton.setAttribute("type", "button");
      exportButton.setAttribute("title", "Export to CSV");
      exportButton.classList.add("btn", "btn-link");
      exportButton.innerHTML = `<i class="fa-solid fa-file-csv"></i>`;
      exportButton.addEventListener("click", () => {
        const fileName =
          this.table.dataset.filePrefix + new Date().format("yyyyMMdd_hhmmtt");
        exportTableToCsv(fileName, this.table);
      });

      div.append(printButton, exportButton);
      // div.innerHTML = `<div>
      // <button type="button" title="Print Table" class="btn btn-link"><i class="fa-solid fa-print"></i></button>
      // <button type="button" title="Export CSV" class="btn btn-link"><i class="fa-solid fa-file-csv"></i></button>
      // </div>`;

      // tr.append(cell);

      // const tfoot =
      //   this.table.querySelector("tfoot") ??
      //   this.table.append(document.createElement("tfoot"));

      // tfoot.append(tr);
      this.table.before(div);
    };

    createRowCount = () => {
      const tr = document.createElement("tr");
      const cell = document.createElement("th");
      cell.setAttribute(
        "colspan",
        this.table.querySelector("tr").children.length
      );

      // cell.innerHTML = `Displaying
      // <span
      //   class="table-count filtered-count"
      //   >0</span
      // >
      // out of
      // <span
      //   class="table-count total-count"
      //   >0</span
      // > items
      // `;

      this.filteredCntElement = document.createElement("span");
      this.filteredCntElement.classList.add("table-count", "filtered-count");

      this.totalCntElement = document.createElement("span");
      this.totalCntElement.classList.add("table-count", "total-count");

      this.clearFiltersButton = document.createElement("button");
      this.clearFiltersButton.setAttribute("type", "button");
      this.clearFiltersButton.classList.add(
        "btn",
        "btn-link",
        "clear-filters",
        "hidden"
      );
      this.clearFiltersButton.innerHTML = `Clear Filters <i class="fa-solid fa-filter-circle-xmark"></i>`;
      this.clearFiltersButton.addEventListener("click", () => {
        this.clearFilters();
      });
      this.clearFiltersButton.setAttribute("title", "Clear Filters");
      this.clearFiltersButton.style.marginLeft = ".5rem";

      const div = document.createElement("div");

      div.append(
        "Displaying ",
        this.filteredCntElement,
        " out of ",
        this.totalCntElement,
        " items",
        this.clearFiltersButton
      );
      cell.append(div);
      tr.append(cell);

      let tfoot = this.table.querySelector("tfoot");
      if (!tfoot) {
        tfoot = document.createElement("tfoot");
        this.table.append(tfoot);
      }

      tfoot.append(tr);
    };

    updateCounts = () => {
      const filteredCount = this.table.querySelectorAll(
        "tbody > tr:not(.hidden)"
      ).length;

      const rowCount = this.table.querySelectorAll("tbody > tr").length;

      this.filteredCntElement.innerText = filteredCount;
      this.totalCntElement.innerText = rowCount;
      this.rowCount = rowCount;
      this.colCount = this.table.querySelectorAll("thead > tr th").length;

      this.clearFiltersButton.classList.toggle(
        "hidden",
        rowCount == filteredCount
      );
    };

    //   search = (searchTerm) => {
    //     //remove our search designator from all items
    //     [...this.querySelectorAll(".included")].map((cell) =>
    //       cell.classList.remove("included")
    //     );

    //     let includedCells = [];
    //     this.filters.map(
    //       (filter) =>
    //         (includedCells = includedCells.concat(filter.search(searchTerm)))
    //     );

    //     includedCells.map((cell) => cell.classList.add("included"));

    //     const searchEvent = new Event("search");
    //     this.table.dispatchEvent(searchEvent);
    //   };

    update = () => {
      this.isUpdating = true;
      this.filters = this.createFilters();
      this.createSortListeners();

      this.onSortEventHandler();
      this.onFilterEventHandler();

      this.updateCounts();
    };

    init = () => {
      this.createExportOptions();
      this.createRowCount();
      this.update();
      // run our sort for pre-sorted fields
    };

    connectedCallback() {
      // const rowsArr = [...this.rows];

      /* TODO: 
        - Column Sorting and 
        - row count changes trigger select updates
        - implement search feature
        */

      let tableSearchEventListener = this.table.addEventListener(
        "search",
        (e) => this.onSearchEventHandler(e)
      );

      // Track our column level filters, includes filter element and other column filter methods
      let tableFilterEventListener = this.table.addEventListener(
        "filter",
        (e) => this.onFilterEventHandler(e)
      );

      let sortEventListener = this.table.addEventListener("sort", (e) => {
        this.isUpdating = true;
        this.onSortEventHandler(e);
      });

      this.init();

      // TO LISTEN TO DOM CHANGES, UNCOMMENT BELOW LINES
      // const headerMutationCallback = (mutationList, observer) => {
      //   // This table manages a limited set of nodes:
      //   // search input filters: thead tr
      //   // sort function: tbody > tr
      //   if (this.isUpdating) {
      //     this.isUpdating = false;
      //     return;
      //   } else {
      //     this.update();
      //   }
      // };

      // this.headerMutationObserver = new MutationObserver(
      //   headerMutationCallback
      // );

      // this.headerMutationObserver.observe(
      //   this.table.querySelector("thead > tr"),
      //   {
      //     childList: true,
      //   }
      // );
      // this.headerMutationObserver.observe(this.table.querySelector("tbody"), {
      //   childList: true,
      // });
    }

    disconnectedCallback() {
      try {
        this.headerMutationObserver.disconnect();
        // this.bodyMutationCallback.disconnect();
      } catch (e) {
        console.warn("failed to disconnect data-table");
      }
    }
  },
  { extends: "table" }
);

const MAX_TIMESTAMP = 8640000000000000;

function dateRangeElement(tbl, colIndex, text) {
  const datesChangeHandler = (e) => {
    filter(dateStartElement.value, dateEndElement.value);

    const event = new Event("filter");
    tbl.dispatchEvent(event);
  };
  const dateStartElement = document.createElement("input");
  dateStartElement.setAttribute("type", "date");
  dateStartElement.classList.add("form-control", "small");
  const labelFrom = document.createElement("label");
  labelFrom.append("From: ", dateStartElement);
  labelFrom.setAttribute("title", "Filter Start Date");

  dateStartElement.addEventListener("change", datesChangeHandler);

  const dateEndElement = document.createElement("input");
  dateEndElement.setAttribute("type", "date");
  dateEndElement.classList.add("form-control", "small");
  const labelTo = document.createElement("label");
  labelTo.append("To: ", dateEndElement);
  labelTo.setAttribute("title", "Filter End Date");

  dateEndElement.addEventListener("change", datesChangeHandler);

  const clearButton = document.createElement("button");
  clearButton.setAttribute("title", "Clear Filter");
  clearButton.setAttribute("type", "button");
  clearButton.classList.add("btn", "btn-link");
  clearButton.append("clear filters");
  clearButton.addEventListener("click", clearDateInputs);

  function clearDateInputs() {
    dateStartElement.value = dateStartElement.defaultValue;
    dateEndElement.value = dateEndElement.defaultValue;

    datesChangeHandler();
  }

  const inputsContainer = document.createElement("div");
  inputsContainer.append(labelFrom, labelTo, clearButton);
  inputsContainer.classList.add("filter-inputs");

  const filtersContainer = document.createElement("div");

  const presetsSelect = document.createElement("select");
  presetsSelect.innerHTML = `
  <option value="">Select...</option>
  <option value="week">Last 7 Days</option>
  <option value="month">This Month</option>
  <option value="quarter">This Quarter</option>
  <option value="custom">Custom</option>
  `;
  presetsSelect.classList.add("form-select", "small");

  presetsSelect.addEventListener("change", (e) => {
    let ds = new Date();
    ds.setHours(0, 0, 0, 0);

    const de = new Date();
    de.setHours(0, 0, 0, 0);

    switch (e.target.value) {
      case "":
        clearDateInputs();
        inputsContainer.classList.remove("active");
        return;
      case "week":
        ds = new Date(ds.getTime() - 7 * 24 * 60 * 60 * 1000);
        break;
      case "month":
        ds.setDate(1);
        de.setMonth(de.getMonth() + 1);
        de.setDate(0);
        break;
      case "quarter":
        ds.setDate(1);
        let dmonth = ds.getMonth();
        if (dmonth <= 2) {
          ds.setMonth(0);
          de.setMonth(3);
        } else if (dmonth <= 5) {
          ds.setMonth(3);
          de.setMonth(6);
        } else if (dmonth <= 8) {
          ds.setMonth(6);
          de.setMonth(9);
        } else if (dmonth <= 11) {
          ds.setMonth(9);
          de.setMonth(12);
        }
        de.setDate(0);
        break;
      default:
        // "Custom" date ranges case
        inputsContainer.classList.add("active");
        return;
    }

    inputsContainer.classList.add("active");

    dateStartElement.value = ds.toISOString().split("T")[0];
    dateEndElement.value = de.toISOString().split("T")[0];

    // presetsSelect.value = "";
    datesChangeHandler();
  });

  filtersContainer.append(presetsSelect, inputsContainer);
  filtersContainer.classList.add("filter-date-range");

  const cells = [
    ...tbl.querySelectorAll(`tbody > tr td:nth-of-type(${colIndex + 1})`),
  ];

  const filter = (dateStart, dateEnd = null) => {
    dateStart = dateStart ? new Date(dateStart) : new Date(0);
    dateEnd = dateEnd ? new Date(dateEnd) : new Date(MAX_TIMESTAMP);

    cells.map((cell) => {
      const val = cell.innerText.trim();
      if (!val) return;
      const cellDate = new Date(val);
      cell.classList.toggle(
        "filtered",
        !(dateStart <= cellDate && cellDate <= dateEnd)
      );
    });
  };

  const setFilter = (filterTerm) => {
    if (!filterTerm) {
      clearDateInputs();
    }
  };

  const search = (searchTerm) => searchCells(cells, searchTerm);

  return {
    element: filtersContainer,
    search,
    filter,
    setFilter,
  };
}

function searchElement(tbl, col, text) {
  // const rows = tbl.tbody.rows;
  const rows = tbl.querySelectorAll("tbody > tr");

  const inputElem = document.createElement("input");
  inputElem.classList.add(
    "input",
    "border",
    "border-lightGray",
    "rounded",
    "form-control",
    "small"
  );
  inputElem.setAttribute("placeholder", "Search...");
  inputElem.setAttribute("type", "search");

  const cells = [];
  for (let i = 0; i < rows.length; i++) {
    const cell = rows[i].getElementsByTagName("td")[col];
    cells.push(cell);
  }

  inputElem.addEventListener("keyup", (e) => {
    //cells.map(cell => cell.classList.remove('filtered'))
    const searchTerm = e.target.value;

    filter(searchTerm);

    const event = new Event("filter");
    tbl.dispatchEvent(event);
  });

  const clearButton = document.createElement("button");
  // clearButton.setAttribute("type", "button");
  clearButton.classList.add("btn", "btn-link", "x-icon");
  clearButton.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  clearButton.addEventListener("click", () => {
    setFilter("");
  });
  clearButton.setAttribute("title", "Clear Filters");

  const element = document.createElement("div");
  element.classList.add("search-wrapper");

  const html = String.raw;
  const style = html`
    <style>
      .search-wrapper {
        display: flex;
        position: relative;
      }

      .input {
        width: 90%;
        transition: width 0.25s;
      }

      .x-icon {
        position: absolute;
        right: 0.25rem;
        color: var(--foreground-color-dark);
        opacity: 0;
        rotate: 90deg;
        pointer-events: none;
        visibility: hidden;
        border-radius: 0.25rem;
        transition-behavior: discrete;
        transition-property: opacity, rotate, visibility;
        transition-duration: 0.15s;
      }

      .search-wrapper:has(.input:not(:placeholder-shown)) .x-icon {
        opacity: 1;
        pointer-events: all;
        rotate: 0deg;
        visibility: visible;
      }

      .input:focus,
      .input:not(:placeholder-shown) {
        width: 100%;
      }

      /* clears the ‘X’ from Chrome */
      input[type="search"]::-webkit-search-decoration,
      input[type="search"]::-webkit-search-cancel-button,
      input[type="search"]::-webkit-search-results-button,
      input[type="search"]::-webkit-search-results-decoration {
        appearance: none;
      }
    </style>
  `;

  element.innerHTML = style;
  element.append(inputElem, clearButton);
  const setFilter = (filterTerm) => {
    inputElem.value = filterTerm;
    filter(filterTerm);

    const event = new Event("filter");
    tbl.dispatchEvent(event);
  };

  const search = (searchTerm) => searchCells(cells, searchTerm);
  const filter = (filterTerm) => filterCells(cells, filterTerm);

  //function search(searchVal) {
  //    cells.forEach(cell => {
  //        const val = cell.innerHTML.toString().toLowerCase()
  //        if (!val.includes(searchVal)) {
  //            cell.classList.add('filtered')
  //        } else {
  //            cell.classList.remove('filtered')
  //        }
  //    })
  //}

  return {
    element,
    search,
    filter,
    setFilter,
  };
}

function checkboxElement(tbl, colIndex, text) {
  // const rows = tbl.tbody.rows;
  const rows = tbl.querySelectorAll("tbody > tr");

  const inputElem = document.createElement("input");
  inputElem.classList.add("form-check-input", "small");
  inputElem.setAttribute("type", "checkbox");
  inputElem.setAttribute("autocomplete", "off");
  inputElem.checked = "true";

  const cells = [];
  for (let i = 0; i < rows.length; i++) {
    const cell = rows[i].getElementsByTagName("td")[colIndex];
    cells.push(cell);
  }

  inputElem.addEventListener("change", (e) => {
    //cells.map(cell => cell.classList.remove('filtered'))
    const searchTerm = e.target.checked ? "true" : "false";

    filter(e.target.checked);

    const event = new Event("filter");
    tbl.dispatchEvent(event);
  });

  const setFilter = (filterTerm) => {
    // const checked = !!filterTerm;
    inputElem.checked = filterTerm ? "true" : "false";
    filter(inputElem.checked);

    const event = new Event("filter");
    tbl.dispatchEvent(event);
  };

  const clearFilter = () => setFilter(true);

  const filter = (isChecked) => filterCheckBoxCells(cells, isChecked);
  const search = (searchTerm) => searchCells(cells, searchTerm);

  return {
    element: inputElem,
    search,
    filter,
    setFilter,
    clearFilter,
  };
}

function multiselectElement(tbl, colIndex, text) {
  // const rows = tbl.tbody.rows;
  const rows = tbl.querySelectorAll("tbody > tr");

  const selectElem = document.createElement("search-select");
  selectElem.setAttribute("multiple", true);
  selectElem.classList.add("multiple");

  let cells = [
    ...tbl.querySelectorAll(`tbody > tr td:nth-of-type(${colIndex + 1})`),
  ];
  const selectVals = new Set();

  function populateOptions() {
    // Add our clear value
    //const opt = document.createElement('option')
    //opt.value = ""
    //opt.innerHTML = "Select...";
    //selectElem.appendChild(opt)

    cells.map((cell) => {
      if (cell.textContent) selectVals.add(cell.textContent.trim());
    });

    // for (const row of rows) {
    //   const cell = row.getElementsByTagName("td")[colIndex];
    //   if (!cell) return;
    //   cells.push(cell);
    //   const val = cell.innerText;
    //   if (val) {
    //     selectVals.add(val);
    //   }
    // }

    var collator = new Intl.Collator([], { numeric: true });

    const opts = [...selectVals].sort(collator.compare).map((val) => {
      const opt = document.createElement("option");
      opt.value = val;
      opt.innerText = val;
      return opt;
    });

    selectElem.replaceChildren(...opts);
  }

  function tblRowsUpdate() {
    console.log("Rows added to table");
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].classList.contains("hidden")) {
        selectVals.delete(cells[i].innerHTML);
      } else {
        selectVals.add(cells[i].innerHTML);
      }
    }

    [...selectVals].sort().forEach((val) => {
      const opt = document.createElement("option");
      opt.value = val;
      opt.innerHTML = val;
      selectElem.appendChild(opt);
    });
  }

  // tbl.addEventListener('filter', update)
  function setFilter(value) {
    [...selectElem.options].forEach((opt) => {
      const selected = Array.isArray(value)
        ? value.contains(opt.value)
        : opt.value == value;
      if (selected) {
        opt.setAttribute("selected", "");
        opt.selected = true;
      } else {
        opt.removeAttribute("selected");
        opt.selected = false;
      }
    });
  }

  selectElem.addEventListener("change", (e) => {
    const selectedVals = [...selectElem.selectedOptions].map(
      (opt) => opt.value
    );
    // Check if we're clearing this field
    const isClear = selectedVals[0] == "";
    filterArr(selectedVals);
    const event = new Event("filter");
    tbl.dispatchEvent(event);
  });

  const search = (searchTerm) => searchCells(cells, searchTerm);
  const filter = (filterTerm) => filterCells(cells, filterTerm);
  const filterArr = (filterTerms) => filterCellsArr(cells, filterTerms);

  populateOptions();

  return {
    setFilter,
    element: selectElem,
    search,
    filter,
  };
}

function searchCells(cells, searchTerm) {
  searchTerm = searchTerm.toLowerCase();
  return cells.filter((cell) => {
    const val = cell.textContent.toString().trim().toLowerCase();
    return val.includes(searchTerm);
  });
}

function filterCells(cells, searchTerm) {
  searchTerm = searchTerm.toLowerCase();
  cells.map((cell) => {
    const val = cell.textContent.toString().trim().toLowerCase();
    cell.classList.toggle("filtered", !val.includes(searchTerm));
  });
}

function filterCheckBoxCells(cells, isChecked) {
  cells.map((cell) => {
    cell.classList.toggle(
      "filtered",
      cell.querySelector("input").checked != isChecked
    );
  });
}

// Must match exact values in searchTerms array
function filterCellsArr(cells, searchTermsArr) {
  const isClear = searchTermsArr.flatMap((term) => term) == "";
  cells.map((cell) => {
    const val = cell.textContent?.trim();
    cell.classList.toggle(
      "filtered",
      !isClear && !searchTermsArr.includes(val)
    );
  });
}

/* Export Functionality */

function PrintPage(table) {
  const pageTitle = table.dataset.title;
  var curDate = new Date();
  // var siteUrl = Audit.Common.Utilities.GetSiteUrl();
  // var cssLink1 =
  //   siteUrl +
  //   "/siteassets/css/tablesorter/style.css?v=" +
  //   curDate.format("MM_dd_yyyy");
  // var cssLink2 =
  //   siteUrl +
  //   "/siteAssets/css/audit_styles.css?v=" +
  //   curDate.format("MM_dd_yyyy");

  var divOutput = table.outerHTML;

  //remove hyperlinks pointing to the job codes
  var updatedDivOutput = document.createElement("div");
  updatedDivOutput.innerHTML = divOutput;

  updatedDivOutput
    .querySelectorAll(".sr1-request-requestNum a, .sr2-response-requestNum a")
    .forEach((link) => {
      link.removeAttribute("onclick");
      link.removeAttribute("href");
    });

  updatedDivOutput.querySelectorAll("button").forEach((btn) => {
    btn.remove();
  });

  divOutput = updatedDivOutput.innerHTML;

  var printDateString =
    "<div style='padding-bottom:10px;'>" +
    curDate.format("MM/dd/yyyy hh:mm tt") +
    " - " +
    pageTitle +
    "</div>";

  divOutput = printDateString + divOutput;

  var cssFileText = "";

  var loadCSS = (url) => {
    return fetch(url)
      .then((response) => response.text())
      .then((data) => "<style>" + data + "</style>");
  };

  // Promise.all([loadCSS(cssLink1), loadCSS(cssLink2)]).then((styles) => {
  // cssFileText = styles.join("");
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

  var printWP = window.open("", "Print Web Part");
  if (!printWP) {
    alert("No printWebPart!");
    return;
  }
  printWP.document.open();
  //insert content
  printWP.document.write(html);

  printWP.document.close();
  //open print dialog
  printWP.print();
  // });
}
//make sure iframe with id csvexprframe is added to page up top
//http://stackoverflow.com/questions/18185660/javascript-jquery-exporting-data-in-csv-not-working-in-ie
function exportTableToCsv(fileName, table, removeHeader) {
  var data = getCellValues(table);

  if (!data) {
    alert("No data!");
    return;
  }

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
    window.CsvExpFrame.document.execCommand("SaveAs", true, fileName + ".csv");
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

function getCellValues(tableToExport) {
  if (!tableToExport) return;
  const table = tableToExport.cloneNode(true);
  // Remove headers and footers
  if (table.innerHTML.indexOf("rowFilters") >= 0) {
    table.querySelectorAll(".rowFilters").forEach((el) => el.remove());
  }
  if (table.innerHTML.indexOf("footer") >= 0) {
    table.querySelectorAll(".footer").forEach((el) => el.remove());
  }
  if (table.innerHTML.indexOf("ul") >= 0) {
    table.querySelectorAll("ul").forEach((list) => {
      const listItems = [...list.querySelectorAll("li")];
      list.parentElement.replaceChildren(
        listItems
          .map((li) => li.textContent.trim())
          .join(" ")
          .trim()
      );
    });
    // table.querySelectorAll(".sr1-request-actionOffice-item").forEach((el) => {
    //   el.textContent += "; ";
    // });
  }

  const tableArray = [];
  for (let r = 0, n = table.rows.length; r < n; r++) {
    tableArray[r] = [];
    for (let c = 0, m = table.rows[r].cells.length; c < m; c++) {
      const text =
        table.rows[r].cells[c].textContent || table.rows[r].cells[c].innerText;
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
