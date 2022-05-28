import { WorkflowService } from './workflow.service';
export declare class WorkflowController {
    private readonly appService;
    constructor(appService: WorkflowService);
    list(): Promise<import("@temporalio/proto").temporal.api.workflowservice.v1.ListWorkflowExecutionsResponse>;
    id(workflowId: string): Promise<import("@temporalio/proto").temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse>;
}
