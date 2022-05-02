import { DYNAMODB_TABLE } from "./src/libs/config.ts";

// eslint-disable-next-line no-undef
module.exports = {
  tables: [
    {
      TableName: DYNAMODB_TABLE,
      AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S" }],
      KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
      BillingMode: "PAY_PER_REQUEST",
    },
  ],
};
