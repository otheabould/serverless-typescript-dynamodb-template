import { middyfy } from "./middlewares";

describe("middyfy", () => {
  it("should be a function", () => {
    expect(middyfy).toBeInstanceOf(Function);
  });
});
