import Responses from "./apiResponses";

test("Responses is an object", () => {
  expect(Responses).toBeInstanceOf(Object);
});

test("_DefineResponse", () => {
  const res = Responses._DefineResponse(382, { any: "thing" });

  expect(res.statusCode).toBe(382);
  expect(res.headers["Content-Type"]).toBe("application/json");

  expect(typeof res.body).toBe("string");
  expect(res.body).toBe(JSON.stringify({ any: "thing" }));
});

test("_200 works", () => {
  const res = Responses._200({ message: "Hello" });

  expect(res.statusCode).toBe(200);
  expect(res.headers["Content-Type"]).toBe("application/json");

  expect(typeof res.body).toBe("string");
  expect(res.body).toBe(JSON.stringify({ message: "Hello" }));
});

test("_400 works", () => {
  const res = Responses._400("Hello");

  expect(res.statusCode).toBe(400);
  expect(res.headers["Content-Type"]).toBe("application/json");

  expect(typeof res.body).toBe("string");
  expect(res.body).toBe(JSON.stringify({ message: "Hello" }));
});

test("_404 works", () => {
  const res = Responses._404("Hello");

  expect(res.statusCode).toBe(404);
  expect(res.headers["Content-Type"]).toBe("application/json");

  expect(typeof res.body).toBe("string");
  expect(res.body).toBe(JSON.stringify({ message: "Hello" }));
});

test("_409 works", () => {
  const res = Responses._409("Hello");

  expect(res.statusCode).toBe(409);
  expect(res.headers["Content-Type"]).toBe("application/json");

  expect(typeof res.body).toBe("string");
  expect(res.body).toBe(JSON.stringify({ message: "Hello" }));
});

test("_500 works", () => {
  const res = Responses._500("Hello");

  expect(res.statusCode).toBe(500);
  expect(res.headers["Content-Type"]).toBe("application/json");

  expect(typeof res.body).toBe("string");
  expect(res.body).toBe(JSON.stringify({ message: "Hello" }));
});
