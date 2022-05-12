// eslint-disable-next-line no-undef
module.exports = {
  tables: [
    {
      TableName: "test-table",
      AttributeDefinitions: [{ AttributeName: "id", AttributeType: "S" }],
      KeySchema: [{ AttributeName: "id", KeyType: "HASH" }],
      BillingMode: "PAY_PER_REQUEST",
    },
  ],
};
