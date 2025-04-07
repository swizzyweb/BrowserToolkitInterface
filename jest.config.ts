// jest.config.ts

import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  testMatch: ["**/*.spec.ts"],
};

export default config;
