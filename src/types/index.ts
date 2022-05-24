import { IAction } from './actions';

export * from './actions';

export type DSL = {
  variables: ActionResponse;
  elements: IAction[];
};

export type ActionResponse = {
  result: Record<string, any>
  results: Record<string, any>
}

export interface IActionParams<T extends IAction = IAction> {
  action: T,
  payload: {
    result: Record<string, any>;
    results: Record<string, any>;
  }
}

export enum ActionType {
  HTTP = 'http',
  Condition = 'condition',
  FOREACH = 'foreach',
  DELAY = 'delay',
}