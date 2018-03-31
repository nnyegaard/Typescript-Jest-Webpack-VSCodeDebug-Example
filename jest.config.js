module.exports = {
  globals: {
    "ts-jest": {
      tsConfigFile: "./tsconfig.test.json"
    }
  },
  transform: {
    ".ts": "<rootDir>/node_modules/ts-jest/preprocessor.js"
  },
  testEnvironment: "node",
  testRegex: "(/tests/.*|\\.test)\\.js$",
  moduleFileExtensions: ["ts", "js", "json"],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10
    }
  }
};
