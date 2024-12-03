import * as ko from "knockout";
import {
  html,
  BaseFieldModule,
  registerFieldComponents,
} from "../BaseFieldModule.js";

import viewTemplate from "./PeopleView.html";
import editTemplate from "./PeopleEdit.html";

export class PeopleModule extends BaseFieldModule {
  constructor(params) {
    super(params);

    this.searchTerm.subscribe(this.onSearch);
  }

  ValueFunc = ko.pureComputed({
    read: () => {
      if (!this.Value()) return;
      const userOpts = ko.unwrap(this.userOpts);
      return userOpts.find((opt) => opt.ID == this.Value().ID);
    },
    write: (opt) => {
      const userOpts = ko.unwrap(this.userOpts);
      if (!userOpts) return;
      this.Value(opt);
    },
  });

  ShowUserSelect = ko.pureComputed(() => {
    // We don't care to unwrap this, since we want to know if it's set or an observable.
    const groupName = this.spGroupName;
    if (!groupName) return false;
    const options = ko.unwrap(this.userOpts);
    return options.length;
  });

  searchTerm = ko.observable();
  searchResults = ko.observableArray();

  onSearch = async (searchTerm) => {
    console.log("Searching People for: ", searchTerm);
    // Only search for terms that are 3 letters or longer
    if (searchTerm.length < 3) return;

    const result = await window.context.aadHttpClientFactory
      .getClient("https://graph.microsoft.com")
      .then((client) => {
        // Search for the users with givenName, surname, or displayName equal to the searchFor value
        return client.get(
          `https://graph.microsoft.com/v1.0/users?` +
            `$select=displayName,mail,userPrincipalName&` +
            `$filter=(givenName%20eq%20'${encodeURIComponent(
              searchTerm
            )}')%20or%20(surname%20eq%20'${encodeURIComponent(
              searchTerm
            )}')%20or%20(displayName%20eq%20'${encodeURIComponent(
              searchTerm
            )}')`,
          client.constructor.configurations.v1
        );
      })
      .then((response) => {
        if (ko.unwrap(searchTerm) != searchTerm) return;
        return response.json();
      });

    if (ko.unwrap(searchTerm) != searchTerm) return;

    if (result?.value) {
      this.searchResults(result.value);
    }
  };

  static viewTemplate = viewTemplate;
  static editTemplate = editTemplate;

  static view = "people-view";
  static edit = "people-edit";
  static new = "people-edit";
}

registerFieldComponents(PeopleModule);
