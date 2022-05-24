import { ActionType, IActionParams } from '../types'
import { Http } from './Http';
import { Delay } from './Delay';

export const actions: Record<string, (params: IActionParams<any>) => Promise<any>> = {
  [ActionType.HTTP]: Http,
  [ActionType.DELAY]: Delay,
}