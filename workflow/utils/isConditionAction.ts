import { IAction, ICondition } from '../types';
import { ActionType } from '../constants';

export function isConditionAction(action: IAction): action is ICondition {
  return action.type === ActionType.Condition;
}
