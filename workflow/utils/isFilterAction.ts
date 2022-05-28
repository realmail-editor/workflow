import { IAction, IFilter } from '../types';
import { ActionType } from '../constants';

export function isFilterAction(action: IAction): action is IFilter {
  return action.type === ActionType.FILTER;
}
