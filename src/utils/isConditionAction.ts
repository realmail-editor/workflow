import { ActionType, IAction, ICondition } from "../types";

export function isConditionAction(action: IAction): action is ICondition {
  return action.type === ActionType.Condition;
}