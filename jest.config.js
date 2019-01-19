module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  "testPathIgnorePatterns": [
    "/node_modules/",
    "/.*\\.integration\\.(spec|test)\\.tsx?$"
  ],
  "collectCoverageFrom" : ["src/**/*.{ts,tsx}"],
  "coveragePathIgnorePatterns": [
    "/node_modules/",
    "/.*\\.(spec|test)\\.tsx?$",
  ],
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],
  "moduleNameMapper": {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
  },
  "snapshotSerializers": ["enzyme-to-json/serializer"],
  "setupTestFrameworkScriptFile": "<rootDir>/scripts/setup-enzyme.ts",
}