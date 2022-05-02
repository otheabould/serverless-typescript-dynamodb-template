import { IS_OFFLINE, IS_TEST } from "@libs/config";
import { DocumentClient } from "aws-sdk/clients/dynamodb";

let options = {};

if (IS_OFFLINE) {
  options = {
    region: "localhost",
    endpoint: "http://localhost:8000",
  };
}

if (IS_TEST) {
  options = {
    region: "local-env",
    endpoint: "http://localhost:8000",
    sslEnabled: false,
  };
}

export default new DocumentClient(options);
