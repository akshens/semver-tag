const isValidSemverVersion = require('semver/functions/valid');
const parseSemverVersionPreRelease = require('semver/functions/prerelease');

function parsePreReleaseTag(prerelease) {
  if (prerelease.length === 1) {
    return 'dev'
  }
  return prerelease[0]
}

function parse(version) {
  if (!isValidSemverVersion(version)) {
    throw new Error(`Invalid semver version <${version}> is provided`)
  }

  const prerelease = parseSemverVersionPreRelease(version);

  const isPreRelease = prerelease !== null;
  const tag = isPreRelease ? parsePreReleaseTag(prerelease) : 'latest';

  return {
    isPreRelease,
    tag
  }
}

module.exports = parse;
