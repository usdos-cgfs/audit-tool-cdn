# If we aren't on the develop branch, we should fail the build
$currentBranch = git rev-parse --abbrev-ref HEAD
if ($currentBranch -ne "main") {
    Write-Error "You must be on the 'main' branch to prepare a hotfix."
    exit 1
}

# Checkout a new branch of the format hotfix/vX.Y.Z from main, where the version number is provided by gitversion
Write-Output "Collect the version number from package.json"
$releaseVersionNum = dotnet-gitversion /showvariable MajorMinorPatch
$releaseVersion = "$releaseVersionNum"
Write-Output "Hotfix: $releaseVersion"

git checkout -b "hotfix/$releaseVersion"
Write-Output "Created and switched to branch hotfix/$releaseVersion"

# get the new version number from gitversion
Write-Output "Collect the version number from package.json"
$releaseVersionNum = dotnet-gitversion -showvariable FullSemVer
$releaseVersion = "v$releaseVersionNum"
Write-Output "hotfix: $releaseVersion"

# Update package.json
Write-Output "Updating package.json to $releaseVersionNum"
node -e "let package = require('./package.json'); package.version = '$releaseVersionNum'; require('fs').writeFileSync('./package.json', JSON.stringify(package, null, 2));"

# Commit version bump
git add package.json
git commit -m "[PREPARE HOTFIX] Increment version to $releaseVersionNum"