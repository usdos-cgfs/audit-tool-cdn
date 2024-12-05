import * as ko from "knockout";
import {
  html,
  BaseFieldModule,
  registerFieldComponents,
} from "../BaseFieldModule.js";

import viewTemplate from "./PeopleView.html";
import editTemplate from "./PeopleEdit.html";
import { ensureUserByKeyAsync } from "../../../infrastructure/sal.js";

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
  selectedUsers = ko.observableArray();

  userOpts = ko.pureComputed(() => {
    const selectedPrincipals = this.selectedUsers().map(
      (user) => user.userPrincipalName
    );
    return this.searchResults().filter(
      (result) => !selectedPrincipals.includes(result.userPrincipalName)
    );
  });

  onSearch = async (searchTerm) => {
    if (!searchTerm) {
      this.searchResults.removeAll();
      return;
    }
    console.log("Searching People for: ", searchTerm);
    // Only search for terms that are 3 letters or longer
    if (searchTerm.length < 3) return;

    const encodedSearchTerm = encodeURIComponent(searchTerm);
    const result = await window.context.aadHttpClientFactory
      .getClient("https://graph.microsoft.com")
      .then((client) => {
        // Search for the users with givenName, surname, or displayName equal to the searchFor value
        return client.get(
          `https://graph.microsoft.com/v1.0/users?` +
            `$select=givenName,surname,displayName,mail,userPrincipalName&` +
            `$filter=startsWith(givenName, '${encodedSearchTerm}') or ` +
            `startsWith(surname, '${encodedSearchTerm}') or ` +
            `startsWith(displayName, '${encodedSearchTerm}')`,
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

  selectUser = async (user) => {
    const initials = user.givenName[0] + user.surname[0];

    const selectedUser = {
      resolutionStatus: ko.observable("searching"),
      resolutionMessage: ko.observable(),
      id: ko.observable(),
      initials,
      ...user,
    };

    this.selectedUsers.push(selectedUser);

    const result = await ensureUserByKeyAsync(user.userPrincipalName);

    if (!result) {
      selectedUser.resolutionStatus("fail");
      selectedUser.resolutionMessage("Could not ensure user!");
      return;
    }

    selectedUser.resolutionStatus("resolved");
    selectedUser.id(result.ID);
  };

  removeUser = (user) => this.selectedUsers.remove(user);

  static viewTemplate = viewTemplate;
  static editTemplate = editTemplate;

  static view = "people-view";
  static edit = "people-edit";
  static new = "people-edit";
}

registerFieldComponents(PeopleModule);
