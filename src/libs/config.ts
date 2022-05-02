export const IS_OFFLINE = process.env.IS_OFFLINE == "true";
export const IS_TEST = process.env.JEST_WORKER_ID;

export const DYNAMODB_TABLE = process.env.DYNAMODB_TABLE;
export const ALLOW_ORIGIN = process.env.ALLOW_ORIGIN || "*";
