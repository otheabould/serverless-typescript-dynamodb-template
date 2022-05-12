// import { APIGatewayProxyEvent, Context } from "aws-lambda";
import { main } from "./handler";

describe("handler", () => {
  it("should be a function", () => {
    expect(main).toBeInstanceOf(Function);
  });

  // it("should be a function", async () => {
  //   const event: APIGatewayProxyEvent = {
  //     queryStringParameters: {
  //       a: "1",
  //     },
  //   } as any;
  //   const context: Context = {} as any;

  //   const result = await main(event, context);
  //   expect(result.statusCode).toEqual(200);
  //   expect(result.body).toEqual(
  //     `Queries: ${JSON.stringify(event.queryStringParameters)}`
  //   );
  // });
});
