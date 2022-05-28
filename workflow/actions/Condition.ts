import { IActionParams, ICondition } from '../types';
import { getConditionResult } from '../utils/getConditionResult';

export async function Condition(
  params: IActionParams<ICondition>
): Promise<any> {
  const condition = params.action.data.condition;

  const nextSignal = getConditionResult(condition);

  return nextSignal;
}
