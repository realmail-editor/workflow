import { DSL } from '../types';
export declare function runFlow(template: DSL): Promise<{
    current: {
        id: string;
        name: string;
        description?: string;
    } & Record<string, any>;
    actions: import("../types").ActionResponse;
}>;
