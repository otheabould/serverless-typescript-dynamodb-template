import { IS_OFFLINE } from "@libs/config";
import { DocumentClient } from "aws-sdk/clients/dynamodb";

const offlineOptions = {
  region: "localhost",
  endpoint: "http://localhost:8008",
};

export default IS_OFFLINE
  ? new DocumentClient(offlineOptions)
  : new DocumentClient();
