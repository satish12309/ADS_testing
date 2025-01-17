// jest.config.js
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

const customJestConfig = {
  // Add more custom settings here if needed
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    // Handle module aliases (if any) from next.config.js
    "^@/components/(.*)$": "<rootDir>/components/$1",
  },
  //   setupFilesAfterEnv: ["<rootDir>/jest.setup.js"], // Optional, for setting up the testing environment
};

module.exports = createJestConfig(customJestConfig);
