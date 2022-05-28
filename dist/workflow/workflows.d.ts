import { ActionResponse, DSL } from './types';
export declare function DSLInterpreter(dsl: DSL): Promise<{
    current: {
        id: string;
        name: string;
        description?: string;
    } & Record<string, any>;
    actions: ActionResponse;
}>;
