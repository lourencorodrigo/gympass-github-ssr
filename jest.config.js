module.exports = {
  moduleFileExtensions: ["js"],
  transform: {
    "^.+\\.(js|jsx)$": "<rootDir>/node_modules/babel-jest"
  },
  testMatch: ["**/*.(test|spec).(js|jsx)"],
  coveragePathIgnorePatterns: ["/node_modules/", "jest.setup.js"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  coverageReporters: ["json", "lcov", "text", "text-summary"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/mocks.js",
    "\\.(css|less|scss)$": "<rootDir>/__mocks__/mocks.js"
  }
};
