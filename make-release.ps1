# Make sure our main branch is up to date
git checkout main
git pull

# Collect the version number
Write-Output "Collect the version number from package.json"
$releaseVersionNum = dotnet-gitversion /showvariable FullSemVer
$releaseVersion = "v$releaseVersionNum"
Write-Output "Release: $releaseVersion"

# Check for existing tags
Write-Output "Checking for existing tags"
$existingTags = git tag
if ($existingTags -contains $releaseVersion) {
    Write-Output "Version conflict detected: $releaseVersion already exists."
    Exit

    # Increment patch version
    $versionParts = $releaseVersionNum -split '\.'
    $versionParts[2] = [int]$versionParts[2] + 1
    # $versionParts[2] = 0 # Reset patch version
    $releaseVersionNum = $versionParts -join '.'
    $releaseVersion = "v$releaseVersionNum"

    # Update package.json
    Write-Output "Updating package.json to $releaseVersionNum"
    node -e "let package = require('./package.json'); package.version = '$releaseVersionNum'; require('fs').writeFileSync('./package.json', JSON.stringify(package, null, 2));"

    # Commit version bump
    git add package.json
    git commit -m "[VERSION BUMP] Increment version to $releaseVersionNum"
    git push origin main
}

Write-Output "Remove our former release branch"
git push origin --delete latest-release
git branch -D latest-release

Write-Output "Create a new branch to run the build under"
git checkout -b latest-release

Write-Output "Ensure we have the latest version of things"
# rm -rf node_modules # package-lock.json <-- may want to remove this file too if it suits your project.
npm install 

# Test validity 
# npm test

# Build and update docs
npm run build # && git add -A docs


# Allow the `dist` folder to be in the release
# newIgnore=`sed -e 's#dist##g' .gitignore`
# echo "$newIgnore" > .gitignore # the redirect here is put into a spereate step to avoid a locking issue with git

$newIgnore = Get-Content .gitignore | ForEach-Object { $_ -replace '/dist', '' }
$newIgnore | Set-Content .gitignore

node -e "let package = require('./package.json'); package.version = '$releaseVersionNum'; require('fs').writeFileSync('./package.json', JSON.stringify(package, null, 2));"

git add -A
git commit -m "[BUILD] $releaseVersion"

# Make a new tag off of the latest build
git checkout main
git tag "$releaseVersion" latest-release
git push origin "$releaseVersion"
git push origin latest-release

# Don't forget to purge!
<#
https://www.jsdelivr.com/tools/purge

https://cdn.jsdelivr.net/gh/usdos-cgfs/audit-tool-cdn@latest/dist/pages/ao_db/ao_db.umd.js
https://cdn.jsdelivr.net/gh/usdos-cgfs/audit-tool-cdn@latest/dist/pages/ao_db/ao_db.umd.js.map
https://cdn.jsdelivr.net/gh/usdos-cgfs/audit-tool-cdn@latest/dist/pages/ia_db/ia_db.umd.js
https://cdn.jsdelivr.net/gh/usdos-cgfs/audit-tool-cdn@latest/dist/pages/ia_db/ia_db.umd.js.map
#>