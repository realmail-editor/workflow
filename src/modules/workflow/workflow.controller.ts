import { Controller, Get, Param } from '@nestjs/common';
import { connection } from './utils/getTemporalClient';
import { WorkflowService } from './workflow.service';

@Controller('/workflow')
export class WorkflowController {
  constructor(private readonly appService: WorkflowService) { }

  @Get('/')
  list() {
    return connection.service.listWorkflowExecutions({
      namespace: 'default',
    });
  }
  @Get('/:id')
  id(@Param('id') workflowId: string) {
    return connection.service.getWorkflowExecutionHistory({
      execution: { workflowId },
    });
  }
}
