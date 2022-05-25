import { DYNAMODB_TABLE } from "@libs/config";
import { v1 as uuidv1 } from "uuid";

import Dynamo, { ITest } from "./Dynamo";

interface ICreateParams {
  name: string;
}

const create = async (data: ICreateParams): Promise<ITest> => {
  const id = uuidv1();
  const now = new Date().getTime();

  const item: ITest = {
    id,
    createdAt: now,
    name: data.name,
  };

  const params = {
    TableName: DYNAMODB_TABLE,
    Item: item,
    accessKeyId: "DEFAULT_ACCESS_KEY",
    secretAccessKey: "DEFAULT_SECRET",
  };

  await Dynamo.put(params).promise();
  return item;
};

export default create;
