import { ActionType } from '../constants';
import { IAction, IHttp } from '../types';

export function isHttpAction(action: IAction): action is IHttp {
  return action.type === ActionType.HTTP;
}
