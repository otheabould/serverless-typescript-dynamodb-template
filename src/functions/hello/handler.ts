import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import Responses from "@libs/apiResponses";
import { middyfy } from "@libs/middlewares";
import schema from "./schema";

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  try {
    return Responses._200({ message: `Hello ${event.body.name}!` });
  } catch (error) {
    return Responses._500(error.message);
  }
};

export const main = middyfy(hello);
