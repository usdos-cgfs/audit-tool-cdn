import * as ko from "knockout";
import {
  html,
  BaseFieldModule,
  registerFieldComponents,
} from "../BaseFieldModule.js";

import viewTemplate from "./PeopleView.html";
import editTemplate from "./PeopleEdit.html";
import { ensureUserByKeyAsync } from "../../../infrastructure/sal.js";

import { People } from "../../../entities/index.js";

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

  stagedUsers = ko.observableArray();

  selectedUsers = ko.pureComputed(() => {
    const staged = ko.unwrap(this.stagedUsers);

    const value = ko.unwrap(this.Value);

    const valueArr = [];
    if (value) {
      if (ko.isObservableArray(this.Value)) {
        valueArr.push(...value);
      } else {
        valueArr.push(value);
      }
    }

    return [...staged, ...valueArr];
  });

  userOpts = ko.pureComputed(() => {
    const selectedPrincipals = this.selectedUsers().map(
      (user) => user.LoginName
    );
    return this.searchResults().filter(
      (result) =>
        !selectedPrincipals.includes(result.LoginName.toLocaleLowerCase())
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
      const mappedResults = result.value.map(
        (user) =>
          new People({
            Title: user.displayName,
            LoginName:
              "i:0#.f|membership|" + user.userPrincipalName.toLocaleLowerCase(),
          })
      );
      this.searchResults(mappedResults);
    }
  };

  selectUser = async (user) => {
    // 1. Stage

    const stagedUser = {
      resolutionStatus: ko.observable("searching"),
      resolutionMessage: ko.observable(),
      ...user,
    };

    this.stagedUsers.push(stagedUser);

    // 2. Ensure
    const result = await ensureUserByKeyAsync(user.LoginName);

    if (!result) {
      stagedUser.resolutionStatus("fail");
      stagedUser.resolutionMessage("Could not ensure user!");
      return;
    }

    // 3. Store
    this.stagedUsers.remove(stagedUser);

    const people = new People(result);

    if (ko.isObservableArray(this.Value)) {
      this.Value.push(people);
    } else {
      this.Value(people);
    }
  };

  storePeople = (people) => {};

  removeUser = (user) => {
    if (this.stagedUsers.remove(user).length) return;

    if (ko.isObservableArray(this.Value)) {
      this.Value.remove(user);
      return;
    }

    if (this.Value() == user) {
      this.Value(null);
    }
  };

  static viewTemplate = viewTemplate;
  static editTemplate = editTemplate;

  static view = "people-view";
  static edit = "people-edit";
  static new = "people-edit";
}

registerFieldComponents(PeopleModule);
