import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import Responses from "@libs/apiResponses";
import { middyfy } from "@libs/middlewares";
import create from "@db/create";
import schema from "./schema";

const handler: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  try {
    const { name } = event.body;
    const newItem = await create({ name });

    return Responses._200({ data: newItem });
  } catch (error) {
    return Responses._500(error.message);
  }
};

export const main = middyfy(handler);
