import { IActionParams, ICondition } from "../types";
import { isGroupExpression } from '../utils/isGroupExpression';
import { isGroupItemExpression } from '../utils/isGroupItemExpression';

export async function Condition(params: IActionParams<ICondition>): Promise<any> {
  const condition = params.action.data.condition;
  let nextSignal = true;
  if (isGroupExpression(condition)) {
    nextSignal = false;
  }
  if (isGroupItemExpression(condition)) {
    nextSignal = condition.left === condition.right;
  }

  return nextSignal;

}

