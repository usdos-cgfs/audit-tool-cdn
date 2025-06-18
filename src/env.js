import Package from "../package.json";

export const version = Package.version;

export const assetsPath = () =>
  `${window.context.pageContext.serverRelativeUrl}/Style Library/apps/audit/src`;

export const CONFIGKEY = {
  SUPPORTEMAILAO: "support-email-ao",
  DEFAULTREQTYPE: "default-req-type",
  CURRENTFY: "current-fy",
  DEFAULTRO: "default-ro",
  REQNUMPREFIX: "reqnum-prefix",
  REQNUMSUFFIX: "reqnum-suffix",
  SENSITIVITY: "default-sensitivity",
};
