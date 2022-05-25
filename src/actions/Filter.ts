import { IActionParams, IFilter } from "../types";
import { isGroupExpression } from '../utils/isGroupExpression';
import { isGroupItemExpression } from '../utils/isGroupItemExpression';

export async function Filter(params: IActionParams<IFilter>): Promise<any> {
  const condition = params.action.data.condition;
  let nextSignal = true;
  console.log(condition);

  if (isGroupExpression(condition)) {
    nextSignal = false;
  }
  if (isGroupItemExpression(condition)) {


    nextSignal = condition.left === condition.right;
  }

  return nextSignal;

}

