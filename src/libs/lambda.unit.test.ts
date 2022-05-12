import { middyfy } from "./lambda";

describe("middyfy", () => {
  it("should be a function", () => {
    expect(middyfy).toBeInstanceOf(Function);
  });
});
