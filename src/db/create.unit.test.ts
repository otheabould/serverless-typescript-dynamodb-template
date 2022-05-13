import { DYNAMODB_TABLE } from "@libs/config";
import create, { ICreate } from "./create";
import Dynamo, { ITest } from "./Dynamo";

describe("create", () => {
  it("should be a function", () => {
    expect(create).toBeInstanceOf(Function);
  });

  it("should return the new item", async () => {
    const data: ICreate = { name: "test" };
    const result = await create(data);

    expect(result.id).toBeTruthy();
    expect(result.createdAt).toBeGreaterThan(0);
    expect(result.name).toBe(data.name);
  });

  it("should insert item into table", async () => {
    const data: ICreate = { name: "test" };
    const result = await create(data);

    const { Item } = await Dynamo.get({
      TableName: DYNAMODB_TABLE,
      Key: { id: result.id },
    }).promise();

    const item = Item as ITest;

    expect(item.id).toBe(result.id);
    expect(item.createdAt).toBe(result.createdAt);
    expect(item.name).toBe(data.name);
  });
});
