import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  extensionsToTreatAsEsm: [".ts", ".tsx", ".mts"],
  roots: ["<rootDir>/../../src"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/../../src/$1",
  },
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        useESM: true,
        isolatedModules: true,
        tsconfig: "./config/jest/tsconfig.jest.json",
      },
    ],
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
};

module.exports = config;
