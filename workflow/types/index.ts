import { FlowTriggerType } from '../constants';
import { IAction } from './actions';

export * from './actions';
export * from './condition';

// https://crontab.guru/#0_0_*_*_*
export type DSL = {
  id: string;
  trigger:
    | {
        type: FlowTriggerType.CRON_SCHEDULE;
        cron: string;
      }
    | {
        type: FlowTriggerType.EVENT;
        event: string;
      };
  variables: ActionResponse;
  elements: IAction[];
};

export type ActionResponse = {
  prevResult: Record<string, any>;
  results: Record<string, any>;
};

export interface IActionParams<T extends IAction = IAction> {
  action: T;
  payload: {
    prevResult: Record<string, any>;
    results: Record<string, any>;
  };
}
