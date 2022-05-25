import { IAction } from './actions';

export * from './actions';

export type DSL = {
  variables: ActionResponse;
  elements: IAction[];
};

export type ActionResponse = {
  prevResult: Record<string, any>;
  results: Record<string, any>;
};

export interface IActionParams<T extends IAction = IAction> {
  action: T,
  payload: {
    prevResult: Record<string, any>;
    results: Record<string, any>;
  };
}

export enum ActionType {
  HTTP = 'http',
  Condition = 'condition',
  FOREACH = 'foreach',
  DELAY = 'delay',
  FILTER = 'filter',
  CONDITION = 'condition',
}