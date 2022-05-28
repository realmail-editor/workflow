import { IActionParams, IFilter } from '../types';
import { getConditionResult } from '../utils/getConditionResult';

export async function Filter(params: IActionParams<IFilter>): Promise<any> {
  const condition = params.action.data.condition;

  const nextSignal = getConditionResult(condition);

  return nextSignal;
}
