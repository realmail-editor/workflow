import { Method } from 'axios';
import { IConditionExpression } from './condition';

export interface IAction<T extends Record<string, any> = Record<string, any>> {
  type: string;
  data: {
    id: string;
    name: string;
    description?: string;
  } & T;
}

export type IHttp = IAction<{
  method: Method;
  url: string;
  headers?: Record<string, string>;
  body?: Record<string, any>;
  timeout_seconds?: number;
  attempts?: number;
  expected_codes: number[];
}>;

export type ICondition = IAction<{
  truthy: IAction[];
  falsy: IAction[];
  condition: IConditionExpression;
}>;

export type IFilter = IAction<{
  condition: IConditionExpression;
}>;

export type IForEach = IAction<{
  steps: IAction[];
}>;
export type IDelay = IAction<{
  seconds: number;
}>;
