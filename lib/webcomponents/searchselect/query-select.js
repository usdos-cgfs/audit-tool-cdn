import searchSelectTemplate from "./SearchSelectTemplate.html";

class QuerySelect extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    this.shadowRoot.innerHTML = searchSelectTemplate;

    this.searchGroupElement = this.shadowRoot.getElementById("search-group");

    this.searchInputElement = this.shadowRoot.getElementById("search-input");
    this.filteredItemsElement = this.shadowRoot.getElementById(
      "filtered-items-text"
    );

    this.selectedItemsElement = this.shadowRoot.getElementById(
      "selected-items-text"
    );

    this.searchingElement = this.shadowRoot.getElementById("searching");

    this.multiple = this.hasAttribute("multiple");
    this.minQueryLength = this.getAttribute("query-length") || 3;
    // this.endpoint = this.getAttribute("endpoint") || null;
  }

  _options = [];
  get options() {
    return [...this.searchOptions, ...this.selectedOptions];
  }

  selectedOptions = [];

  searchOptions = [];

  initializeOptions = () => {
    // Our options have changed, we need to update our available options
    this.updateItems(true);
  };

  setSearchFunction = (fn) => {
    if (typeof fn === "function") {
      this.searchFunction = fn;
    }
  };

  async onSearch(event) {
    const query = event.target.value.trim();
    if (!query || !this.searchFunction || query.length < this.minQueryLength) {
      return;
    }
    this.searchingElement.classList.toggle("hidden", false);
    const searchResults = await this.searchFunction(query);

    this.searchOptions = searchResults.map((result) => {
      if (result?.constructor?.name === "HTMLOptionElement") {
        return result;
      }
      const option = document.createElement("option");
      option.value = result.value;
      option.innerText = result.label;
      return option;
    });

    this.searchingElement.classList.toggle("hidden", true);
    this.updateItems();
  }

  updateItems = (initialUpdate = false) => {
    // Create and insert selected options elements
    const newOpts = this.selectedOptions.map((opt) => {
      const itemGroup = document.createElement("div");
      itemGroup.classList.add("selected", "item");
      itemGroup.dataset.value = opt.value;

      const itemText = document.createElement("div");
      itemText.innerText = opt.innerHTML;

      // Append our close button
      const close = document.createElement("div");
      close.classList.add("remove");

      //Add our svg close button
      close.innerHTML = this.shadowRoot.getElementById("icon-close").innerHTML;

      itemGroup.appendChild(itemText);
      itemGroup.appendChild(close);
      return itemGroup;
    });
    this.selectedItemsElement.replaceChildren(...newOpts);

    // Create and insert filtered option elements
    this.updateFilteredItems();

    if (!initialUpdate) {
      this.dispatchEvent(new Event("change"));
    }
  };

  updateFilteredItems = () => {
    this.filteredItemsElement.replaceChildren(
      ...this.searchOptions.map((opt, index) => {
        const li = document.createElement("li");
        li.classList.add("filtered", "item");
        li.innerHTML = opt.innerHTML;
        li.dataset.value = opt.value;
        return li;
      })
    );
  };

  updateActiveFilteredItem = (keyDirection) => {
    // We have used our arrow keys to navigate to an item

    // find the currently active item
    const activeItemElement =
      this.filteredItemsElement.querySelector("li.active");

    let index;

    if (activeItemElement) {
      // We have an active item, so the new index is the current index +/- 1 depending on key direction
      activeItemElement.classList.remove("active");
      index =
        [...this.filteredItemsElement.children].indexOf(activeItemElement) +
        keyDirection;
    } else {
      // If we are going down, start at 0
      index = keyDirection > 0 ? 0 : keyDirection;
    }

    const optionCount = this.filteredItemsElement.childElementCount;

    index = (index + optionCount) % optionCount;

    const item = this.filteredItemsElement.children[index];

    item?.classList.add("active");
  };

  selectActiveFilteredItem = () => {
    // We have hit enter after navigating to an item in our list
    // find the currently active item
    const activeItem = this.filteredItemsElement.querySelector("li.active");

    if (activeItem) {
      // The selectFilteredItem function will add the selected attribute to the option
      // which triggers a dom mutation, so don't need to run updateItems
      this.selectFilteredItem(activeItem);
      this.updateActiveFilteredItem(1);
    }
  };

  selectFilteredItem = (item) => {
    if (!item) return;
    // We have clicked or otherwise selected an item.
    const newOpt = [...this.searchOptions].find(
      (opt) => opt.value === item.dataset.value
    );
    // If this isn't a multiple select, remove other selected options
    if (!this.hasAttribute("multiple")) {
      this.selectedOptions = [];
      this.selectedOptions.length = 0;
    }

    newOpt.setAttribute("selected", "");

    this.selectedOptions.push(newOpt);
    this.resetInput();
  };

  resetInput = () => {
    this.searchInputElement.value = "";
    this.searchOptions = [];
    this.searchInputElement.focus();
    this.updateItems();
  };

  removeSelectedItem = (item) => {
    if (!item) return;
    // We are removing an item from our selected items
    const optToRemove = [...this.selectedOptions].find(
      (opt) => opt.value === item.dataset.value
    );

    optToRemove.removeAttribute("selected");

    this.selectedOptions.splice(this.selectedOptions.indexOf(optToRemove), 1);
    this.updateItems();
  };

  connectedCallback() {
    // Child node added mutation listener
    const mutationCallback = (mutationList, observer) => {
      for (const mutation of mutationList) {
        if (mutation.type === "childList") {
          this.initializeOptions();
        }
      }
    };

    const attributeChangeMutationCallback = (mutationList, observer) => {
      for (const mutation of mutationList) {
        if (mutation.type === "attributes") {
          this.updateItems();
        }
      }
    };

    this.attributeChangeMutationObserver = new MutationObserver(
      attributeChangeMutationCallback
    );

    this.mutationObserver = new MutationObserver(mutationCallback);
    this.mutationObserver.observe(this, {
      attributes: true,
      childList: true,
    });

    this.filteredItemsElement.classList.toggle("active", false);
    this.initializeOptions();

    this.searchGroupElement.addEventListener("focusin", (e) => {
      this.filteredItemsElement.classList.toggle("active", true);
      this.searchGroupElement.classList.toggle("active", true);
      clearTimeout(this.focusOutTimeout);
    });

    this.searchGroupElement.addEventListener("focusout", (e) => {
      this.focusOutTimeout = setTimeout(() => {
        this.filteredItemsElement.classList.remove("active");
        this.searchGroupElement.classList.remove("active");
      }, 0);
    });

    this.searchInputElement.addEventListener("input", this.onSearch.bind(this));

    this.searchInputElement.addEventListener("focusout", (e) => {});

    this.searchGroupElement.addEventListener("keydown", (e) => {
      // get the key
      switch (e.code) {
        case "Tab":
          // tab
          this.filteredItemsElement.classList.remove("active");
          break;
        case "ArrowDown":
          // down arrow
          this.updateActiveFilteredItem(1);
          break;
        case "ArrowUp":
          // up arrow
          this.updateActiveFilteredItem(-1);
          break;
        case "Enter":
          // Enter
          this.handlingClick = true;
          this.selectActiveFilteredItem();
          break;
        default:
        // console.log(e.keyCode);
      }
    });

    this.filteredItemsElement.addEventListener("click", (e) => {
      this.selectFilteredItem(e.target);
    });

    this.selectedItemsElement.addEventListener("click", (e) => {
      this.removeSelectedItem(e.target.closest("div.item"));
    });
  }

  disconnectedCallback() {
    try {
      this.mutationObserver.disconnect();
      this.attributeChangeMutationObserver.disconnect();
    } catch (e) {
      console.warn("cannot remove event listeners");
    }
  }
}

customElements.define("query-select", QuerySelect);
