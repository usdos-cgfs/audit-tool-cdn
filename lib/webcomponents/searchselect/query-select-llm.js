import searchSelectTemplate from "./search-select.html";

class QuerySelect extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.selectedItems = [];
    this.searchResults = [];
    this.isLoading = false;
    this.searchFunction = null;
    this.multiple = this.hasAttribute("multiple");
    this.endpoint = this.getAttribute("endpoint") || null;
    this.render();
  }

  connectedCallback() {
    this.inputElement.addEventListener("input", this.onSearch.bind(this));
    this.inputElement.addEventListener("keydown", this.onKeyDown.bind(this));
    this.shadowRoot.addEventListener("click", (event) =>
      event.stopPropagation()
    );
    document.addEventListener("click", this.hideResults.bind(this));
  }

  disconnectedCallback() {
    document.removeEventListener("click", this.hideResults.bind(this));
  }

  setSearchFunction(fn) {
    if (typeof fn === "function") {
      this.searchFunction = fn;
    }
  }

  async onSearch(event) {
    const query = event.target.value.trim();
    if (!query || !this.searchFunction || query.length < 3) {
      this.searchResults = [];
      //   this.render();
      return;
    }
    this.isLoading = true;
    // this.render();
    this.searchResults = await this.searchFunction(query);
    this.isLoading = false;

    if (this.endpoint) {
      this.searchResults.push({
        value: query,
        label: `Add "${query}"`,
        isNew: true,
      });
    }

    this.render();
  }

  onKeyDown(event) {
    if (event.key === "Enter" && this.searchResults.length > 0) {
      this.selectItem(this.searchResults[0]);
    }
  }

  async selectItem(item) {
    if (item.isNew && this.endpoint) {
      item = await this.addNewItem(item.value);
    }
    if (!this.multiple) {
      this.selectedItems = [item];
    } else if (!this.selectedItems.some((i) => i.value === item.value)) {
      this.selectedItems.push(item);
    }
    this.inputElement.value = "";
    this.searchResults = [];
    this.dispatchEvent(new Event("change"));
    this.render();
  }

  async addNewItem(label) {
    try {
      const response = await fetch(this.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ label }),
      });
      if (!response.ok) throw new Error("Failed to add item");
      return await response.json();
    } catch (error) {
      console.error("Error adding new item:", error);
      return { value: label, label }; // Fallback if API fails
    }
  }

  removeItem(item) {
    this.selectedItems = this.selectedItems.filter(
      (i) => i.value !== item.value
    );
    this.dispatchEvent(new Event("change"));
    this.render();
  }

  hideResults() {
    this.searchResults = [];
    this.render();
  }

  get value() {
    return this.multiple
      ? this.selectedItems.map((i) => i.value)
      : this.selectedItems[0]?.value;
  }

  render() {
    this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    font-family: Arial, sans-serif;
                    position: relative;
                }
                .selected-items {
                    display: flex;
                    gap: 5px;
                    margin-bottom: 5px;
                }
                .selected-item {
                    background: #007bff;
                    color: white;
                    padding: 5px 10px;
                    border-radius: 5px;
                    cursor: pointer;
                }
                input {
                    width: 100%;
                    padding: 5px;
                    border: 1px solid #ccc;
                    border-radius: 3px;
                }
                .dropdown {
                    position: absolute;
                    width: 100%;
                    background: white;
                    border: 1px solid #ccc;
                    border-radius: 3px;
                    max-height: 150px;
                    overflow-y: auto;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                }
                .dropdown div {
                    padding: 5px;
                    cursor: pointer;
                }
                .dropdown div:hover {
                    background: #f0f0f0;
                }
                .loading {
                    text-align: center;
                    color: gray;
                    font-size: 12px;
                }
            </style>
            <div class="selected-items">
                ${this.selectedItems
                  .map(
                    (item) =>
                      `<span class="selected-item" data-value="${item.value}">${item.label} ✖</span>`
                  )
                  .join("")}
            </div>
            <input type="text" placeholder="Search...">
            ${this.isLoading ? '<div class="loading">Loading...</div>' : ""}
            ${
              this.searchResults.length > 0
                ? `
                <div class="dropdown">
                    ${this.searchResults
                      .map(
                        (item) =>
                          `<div data-value="${item.value}" ${
                            item.isNew
                              ? 'style="font-style:italic; color:blue;"'
                              : ""
                          }>${item.label}</div>`
                      )
                      .join("")}
                </div>
            `
                : ""
            }
        `;

    this.inputElement = this.shadowRoot.querySelector("input");
    this.shadowRoot.querySelectorAll(".selected-item").forEach((el) => {
      el.addEventListener("click", () =>
        this.removeItem({
          value: el.getAttribute("data-value"),
          label: el.textContent,
        })
      );
    });
    this.shadowRoot.querySelectorAll(".dropdown div").forEach((el) => {
      el.addEventListener("click", () =>
        this.selectItem({
          value: el.getAttribute("data-value"),
          label: el.textContent,
          isNew: el.style.fontStyle === "italic",
        })
      );
    });
  }
}

customElements.define("query-select", QuerySelect);
