import { InitialOptionsTsJest } from "ts-jest";

const config: InitialOptionsTsJest = {
  verbose: true,
  preset: "@shelf/jest-dynamodb",
  testEnvironment: "node",
  transform: { "^.+\\.tsx?$": "ts-jest" },
  moduleNameMapper: {
    "^@functions/(.*)$": "<rootDir>/src/functions/$1",
    "^@libs/(.*)$": "<rootDir>/src/libs/$1",
    "^@db/(.*)$": "<rootDir>/src/db/$1",
    "^@models/(.*)$": "<rootDir>/src/models/$1",
  },
};

export default config;
