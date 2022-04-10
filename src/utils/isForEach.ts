import { ActionType, IAction, IForEach } from "../types";

export function isForEachAction(action: IAction): action is IForEach {
  return action.type === ActionType.FOREACH;
}