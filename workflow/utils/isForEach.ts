import { IAction, IForEach } from '../types';
import { ActionType } from '../constants';

export function isForEachAction(action: IAction): action is IForEach {
  return action.type === ActionType.FOREACH;
}
