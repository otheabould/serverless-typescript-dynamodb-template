import { IS_OFFLINE, IS_TEST } from "@libs/config";
import { DocumentClient } from "aws-sdk/clients/dynamodb";

let options = {};

if (IS_OFFLINE) {
  options = {
    region: "localhost",
    endpoint: "http://localhost:8000",
    accessKeyId: "DEFAULT_ACCESS_KEY",
    secretAccessKey: "DEFAULT_SECRET",
  };
}

if (IS_TEST) {
  options = {
    region: "local-env",
    endpoint: "http://localhost:8000",
    sslEnabled: false,
    accessKeyId: "DEFAULT_ACCESS_KEY",
    secretAccessKey: "DEFAULT_SECRET",
  };
}

export interface ITest {
  id: string;
  createdAt: number;
  name: string;
}

export default new DocumentClient(options);
