# If our branch doesn't start with 'release/' or 'hotfix/', we should fail the build
$currentBranch = git rev-parse --abbrev-ref HEAD
if (-not ($currentBranch -like "release/*" -or $currentBranch -like "hotfix/*")) {
    Write-Error "You must be on a 'release/*' or 'hotfix/*' branch to prepare a release."
    exit 1
}

# Make sure our main branch is up to date
git checkout main
git pull

git merge --no-ff $currentBranch

# Collect the version number
Write-Output "Collect the version number from package.json"
$releaseVersionNum = dotnet-gitversion /showvariable MajorMinorPatch
$releaseVersion = "v$releaseVersionNum"
Write-Output "Release: $releaseVersion"

# Check for existing tags
Write-Output "Checking for existing tags"
$existingTags = git tag
if ($existingTags -contains $releaseVersion) {
    Write-Output "Version conflict detected: $releaseVersion already exists."
    Exit
}

Write-Output "Remove our former release branch"
git push origin --delete latest-release
git branch -D latest-release

Write-Output "Create a new branch to run the build under"
git checkout -b latest-release

# Update package.json with latest version number
node -e "let package = require('./package.json'); package.version = '$releaseVersionNum'; require('fs').writeFileSync('./package.json', JSON.stringify(package, null, 2));"

Write-Output "Ensure we have the latest version of things"
# rm -rf node_modules # package-lock.json <-- may want to remove this file too if it suits your project.
npm install 

# Test validity 
# npm test

# Build and update docs
npm run build # && git add -A docs

# Allow the `dist` folder to be in the release
$newIgnore = Get-Content .gitignore | ForEach-Object { $_ -replace '/dist', '' }
$newIgnore | Set-Content .gitignore


git add -A
git commit -m "[BUILD] $releaseVersion"

# Make a new tag off of the latest build
git checkout main

git tag "$releaseVersion" latest-release
git push origin "$releaseVersion"
git push origin latest-release

git push origin main

# Update the develop branch with the latest changes
git checkout develop
if ($currentBranch -like "release/*" ) {
    git merge --no-ff $currentBranch
}
else {
    git merge --no-ff main
}


Write-Output "Collect the version number from package.json"
$releaseVersionNum = dotnet-gitversion /showvariable FullSemVer
$releaseVersion = "v$releaseVersionNum"
Write-Output "Release: $releaseVersion"

# Update package.json
Write-Output "Updating package.json to $releaseVersionNum"
node -e "let package = require('./package.json'); package.version = '$releaseVersionNum'; require('fs').writeFileSync('./package.json', JSON.stringify(package, null, 2));"

# Commit version bump
git add package.json
git commit -m "[VERSION BUMP] Increment version to $releaseVersionNum"

git push origin develop

git branch -d $currentBranch
# Don't forget to purge!
<#
https://www.jsdelivr.com/tools/purge

https://cdn.jsdelivr.net/gh/usdos-cgfs/audit-tool-cdn@latest/dist/pages/ao_db/ao_db.umd.js
https://cdn.jsdelivr.net/gh/usdos-cgfs/audit-tool-cdn@latest/dist/pages/ao_db/ao_db.umd.js.map
https://cdn.jsdelivr.net/gh/usdos-cgfs/audit-tool-cdn@latest/dist/pages/ia_db/ia_db.umd.js
https://cdn.jsdelivr.net/gh/usdos-cgfs/audit-tool-cdn@latest/dist/pages/ia_db/ia_db.umd.js.map
https://cdn.jsdelivr.net/gh/usdos-cgfs/audit-tool-cdn@latest/dist/pages/qa_db/qa_db.umd.js
https://cdn.jsdelivr.net/gh/usdos-cgfs/audit-tool-cdn@latest/dist/pages/qa_db/qa_db.umd.js.map
https://cdn.jsdelivr.net/gh/usdos-cgfs/audit-tool-cdn@latest/dist/pages/ro_db/ro_db.umd.js
https://cdn.jsdelivr.net/gh/usdos-cgfs/audit-tool-cdn@latest/dist/pages/ro_db/ro_db.umd.js.map
#>