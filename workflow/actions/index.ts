import { IActionParams } from '../types';
import { Http } from './Http';
import { Delay } from './Delay';
import { Filter } from './Filter';
import { Condition } from './Condition';
import { ActionType } from '../constants';

export const actions: Record<
  string,
  (params: IActionParams<any>) => Promise<any>
> = {
  [ActionType.HTTP]: Http,
  [ActionType.DELAY]: Delay,
  [ActionType.FILTER]: Filter,
  [ActionType.CONDITION]: Condition,
};
