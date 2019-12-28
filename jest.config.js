// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
  coverageReporters: ["json", "html"],

  // An array of directory names to be searched recursively up from the requiring module's location
  moduleDirectories: [".", "node_modules"],

  // An array of file extensions your modules use
  moduleFileExtensions: ["js", "ts"],

  // A preset that is used as a base for Jest's configuration
  preset: 'ts-jest',

  // The test environment that will be used for testing
  testEnvironment: "node"
};
