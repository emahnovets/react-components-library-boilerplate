const jestConfig = require('./jest.config');

module.exports = {
  ...jestConfig,
  testRegex: "(/__tests__/.*|(\\.|/)integration\\.(test|spec))\\.tsx?$",
  testPathIgnorePatterns: [
    "/node_modules/"
  ],
  "setupTestFrameworkScriptFile": "<rootDir>/scripts/setup-integration.ts",
}