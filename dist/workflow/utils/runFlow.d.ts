import { WorkflowClient } from '@temporalio/client';
import { DSLInterpreter } from '../workflows';
import { DSL } from '../types';
export declare function runFlow(client: WorkflowClient, template: DSL): Promise<import("@temporalio/client").WorkflowHandleWithRunId<typeof DSLInterpreter>>;
