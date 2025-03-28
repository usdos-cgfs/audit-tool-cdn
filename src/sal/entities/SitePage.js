import { Entity } from "../primitives/entity.js";

export class SitePage extends Entity {
  constructor(params) {
    super(params);
  }

  static Views = {
    All: ["ID", "Title", "Created", "Author", "Modified", "Editor"],
  };

  static ListDef = {
    name: "SitePages",
    title: "Site Pages",
  };
}
