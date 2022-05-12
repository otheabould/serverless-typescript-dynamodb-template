import Responses from "./apiResponses";

describe("Responses", () => {
  it("should be an object", () => {
    expect(Responses).toBeInstanceOf(Object);
  });
});

describe("_DefineResponse", () => {
  it("should be a function", () => {
    expect(Responses._DefineResponse).toBeInstanceOf(Function);
  });

  const data = { any: "thing" };
  const res = Responses._DefineResponse(382, data);

  it("should return an object", () => {
    expect(res).toBeInstanceOf(Object);
  });

  it("should set the Content-Type header", () => {
    expect(res.headers["Content-Type"]).toBe("application/json");
  });

  it("should set the status code", () => {
    expect(res.statusCode).toBe(382);
  });

  it("should set the body", () => {
    expect(typeof res.body).toBe("string");
    expect(res.body).toBe(JSON.stringify(data));
  });
});

describe("_200", () => {
  it("should be a function", () => {
    expect(Responses._200).toBeInstanceOf(Function);
  });

  const res = Responses._200({ any: "thing" });
  it("should return an object", () => {
    expect(res).toBeInstanceOf(Object);
  });

  it("should set the status code", () => {
    expect(res.statusCode).toBe(200);
  });

  it("should set the body", () => {
    expect(typeof res.body).toBe("string");
    expect(res.body).toBe(JSON.stringify({ any: "thing" }));
  });
});

describe("_400", () => {
  it("should be a function", () => {
    expect(Responses._400).toBeInstanceOf(Function);
  });

  const data = "Hello";
  const res = Responses._400(data);

  it("should return an object", () => {
    expect(res).toBeInstanceOf(Object);
  });

  it("should set the status code", () => {
    expect(res.statusCode).toBe(400);
  });

  it("should set the body", () => {
    expect(typeof res.body).toBe("string");
    expect(res.body).toBe(JSON.stringify({ message: data }));
  });
});

describe("_404", () => {
  it("should be a function", () => {
    expect(Responses._404).toBeInstanceOf(Function);
  });

  const data = "Hello";
  const res = Responses._404(data);

  it("should return an object", () => {
    expect(res).toBeInstanceOf(Object);
  });

  it("should set the status code", () => {
    expect(res.statusCode).toBe(404);
  });

  it("should set the body", () => {
    expect(typeof res.body).toBe("string");
    expect(res.body).toBe(JSON.stringify({ message: data }));
  });
});

describe("_409", () => {
  it("should be a function", () => {
    expect(Responses._409).toBeInstanceOf(Function);
  });

  const data = "Hello";
  const res = Responses._409(data);

  it("should return an object", () => {
    expect(res).toBeInstanceOf(Object);
  });

  it("should set the status code", () => {
    expect(res.statusCode).toBe(409);
  });

  it("should set the body", () => {
    expect(typeof res.body).toBe("string");
    expect(res.body).toBe(JSON.stringify({ message: data }));
  });
});

describe("_500", () => {
  it("should be a function", () => {
    expect(Responses._500).toBeInstanceOf(Function);
  });

  const data = "Hello";
  const res = Responses._500(data);

  it("should return an object", () => {
    expect(res).toBeInstanceOf(Object);
  });

  it("should set the status code", () => {
    expect(res.statusCode).toBe(500);
  });

  it("should set the body", () => {
    expect(typeof res.body).toBe("string");
    expect(res.body).toBe(JSON.stringify({ message: data }));
  });
});
