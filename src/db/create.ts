import { DYNAMODB_TABLE } from "@libs/config";
import { v1 as uuidv1 } from "uuid";

import Dynamo, { ITest } from "./Dynamo";

export interface ICreate {
  name: string;
}

const create = async (data: ICreate) => {
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
  };

  await Dynamo.put(params).promise();
  return item;
};

export default create;
