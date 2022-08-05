import { BadRequestException } from '@nestjs/common';
import { WorkflowService } from './workflow.service';
export declare class WorkflowController {
    private readonly appService;
    constructor(appService: WorkflowService);
    list(): Promise<import("@temporalio/proto").temporal.api.workflowservice.v1.ListWorkflowExecutionsResponse>;
    create(): Promise<{
        runId: string;
        workflowId: string;
    }>;
    id(workflowId: string): Promise<import("@temporalio/proto").temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse>;
    runId(workflowId: string, runId: string): Promise<import("@temporalio/proto").temporal.api.workflowservice.v1.GetWorkflowExecutionHistoryResponse> | BadRequestException;
}
