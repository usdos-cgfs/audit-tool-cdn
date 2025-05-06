# If we aren't on the develop branch, we should fail the build
$currentBranch = git rev-parse --abbrev-ref HEAD
if ($currentBranch -ne "develop") {
    Write-Error "You must be on the 'develop' branch to prepare a release."
    exit 1
}

# Checkout a new branch of the format release/vX.Y.Z from develop, where the version number is provided by gitversion
Write-Output "Collect the version number from package.json"
$releaseVersionNum = dotnet-gitversion /showvariable MajorMinorPatch
$releaseVersion = "$releaseVersionNum"
Write-Output "Release: $releaseVersion"

git checkout -b "release/$releaseVersion"
Write-Output "Created and switched to branch release/$releaseVersion"

# get the new version number from gitversion
Write-Output "Collect the version number from package.json"
$releaseVersionNum = dotnet-gitversion -showvariable SemVer
$releaseVersion = "v$releaseVersionNum"
Write-Output "Release: $releaseVersion"

# Update package.json
Write-Output "Updating package.json to $releaseVersionNum"
node -e "let package = require('./package.json'); package.version = '$releaseVersionNum'; require('fs').writeFileSync('./package.json', JSON.stringify(package, null, 2));"

# Commit version bump
git add package.json
git commit -m "[PREPARE RELEASE] Increment version to $releaseVersionNum"