# Deployment Instructions

This project uses [GitVersion](https://gitversion.net/) (must be installed locally) to manage semantic versioning. Therefore it is important to stick to the consistent GitFlow branching strategy as outlined here: [GitFlow](https://nvie.com/posts/a-successful-git-branching-model/).

To run the project locally, run the `npm run dev` script.

Convenience scripts are provided to generate releases.

To prepare a new release from the development branch, run the prepare-release.ps1 script, this will:

1. create a new release branch with the appropriate semver
2. update the package.js with that semver.

To prepare a new hotfix from the main branch, run the prepare-hotfix.ps1 script, this will:

1. create a new hotfix branch with the appropriate semver
2. update the package.js with that semver.

When you are ready to publish the new release, run the make-release.ps1, this will:

1. checkout main
2. merge the current release or hotfix branch
3. tag the commit
4. checkout a new 'latest-release' branch
5. build the package and commit
6. merge changes back into the develop branch

The latest tagged commit then needs to be turned into a release on GitHub.

Finally, purge the CDN:
https://www.jsdelivr.com/tools/purge

https://cdn.jsdelivr.net/gh/usdos-cgfs/audit-tool-cdn@latest/dist/pages/ao_db/ao_db.umd.js
https://cdn.jsdelivr.net/gh/usdos-cgfs/audit-tool-cdn@latest/dist/pages/ao_db/ao_db.umd.js.map
https://cdn.jsdelivr.net/gh/usdos-cgfs/audit-tool-cdn@latest/dist/pages/ia_db/ia_db.umd.js
https://cdn.jsdelivr.net/gh/usdos-cgfs/audit-tool-cdn@latest/dist/pages/ia_db/ia_db.umd.js.map
https://cdn.jsdelivr.net/gh/usdos-cgfs/audit-tool-cdn@latest/dist/pages/qa_db/qa_db.umd.js
https://cdn.jsdelivr.net/gh/usdos-cgfs/audit-tool-cdn@latest/dist/pages/qa_db/qa_db.umd.js.map
https://cdn.jsdelivr.net/gh/usdos-cgfs/audit-tool-cdn@latest/dist/pages/ro_db/ro_db.umd.js
https://cdn.jsdelivr.net/gh/usdos-cgfs/audit-tool-cdn@latest/dist/pages/ro_db/ro_db.umd.js.map
