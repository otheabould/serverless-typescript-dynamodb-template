import { DYNAMODB_TABLE } from "@libs/config";
import create from "./create";
import Dynamo, { ITest } from "./Dynamo";

describe("create", () => {
  it("should be a function", () => {
    expect(create).toBeInstanceOf(Function);
  });

  it("should return the new item", async () => {
    const params = { name: "test" };
    const result = await create(params);

    expect(result.id).toBeTruthy();
    expect(result.createdAt).toBeGreaterThan(0);
    expect(result.name).toBe(params.name);
  });

  it("should insert item into table", async () => {
    const params = { name: "test" };
    const result = await create(params);

    const { Item } = await Dynamo.get({
      TableName: DYNAMODB_TABLE,
      Key: { id: result.id },
    }).promise();

    const item = Item as ITest;

    expect(item.id).toBe(result.id);
    expect(item.createdAt).toBe(result.createdAt);
    expect(item.name).toBe(params.name);
  });
});
