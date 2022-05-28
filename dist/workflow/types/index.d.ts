import { FlowTriggerType } from '../constants';
import { IAction } from './actions';
export * from './actions';
export * from './condition';
export declare type DSL = {
    id: string;
    trigger: {
        type: FlowTriggerType.CRON_SCHEDULE;
        cron: string;
    } | {
        type: FlowTriggerType.EVENT;
        event: string;
    };
    variables: ActionResponse;
    elements: IAction[];
};
export declare type ActionResponse = {
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
