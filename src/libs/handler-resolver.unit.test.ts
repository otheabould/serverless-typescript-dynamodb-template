import { handlerPath } from "./handler-resolver";

describe("handlerPath", () => {
  it("should be a function", () => {
    expect(handlerPath).toBeInstanceOf(Function);
  });

  it("should make absolute paths relative to project", async () => {
    expect(`${handlerPath(__dirname)}`).toEqual("src/libs");
  });
});
