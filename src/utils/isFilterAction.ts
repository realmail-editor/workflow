import { ActionType, IAction, IFilter } from "../types";

export function isFilterAction(action: IAction): action is IFilter {
  return action.type === ActionType.FILTER;
}