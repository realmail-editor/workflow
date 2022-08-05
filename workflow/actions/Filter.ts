import { IActionParams, IFilter } from '../types';
import * as wf from '@temporalio/workflow';
import { getConditionResult } from '../utils/getConditionResult';

export async function Filter(params: IActionParams<IFilter>): Promise<any> {
  const condition = params.action.data.condition;

  const nextSignal = await wf.condition(() => getConditionResult(condition), 0);
  return wf.condition(() => nextSignal, 0);
}
