import {
  BadRequestException,
  Controller,
  Get,
  Param,
  Post,
} from '@nestjs/common';
import { connection, client } from '@workflow/utils/getTemporalClient';
import { WorkflowService } from './workflow.service';
import { makeTemplate } from '@workflow/template';
import { runFlow } from '@workflow/utils/runFlow';

@Controller('/workflow')
export class WorkflowController {
  constructor(private readonly appService: WorkflowService) {}

  @Get('/')
  list() {
    return connection.service.listWorkflowExecutions({
      namespace: 'default',
    });
  }

  @Post('/')
  async create() {
    const response = await runFlow(client, makeTemplate());
    return {
      runId: response.originalRunId,
      workflowId: response.workflowId,
    };
  }

  @Get('/:id')
  id(@Param('id') workflowId: string) {
    return connection.service.getWorkflowExecutionHistory({
      execution: { workflowId },
      namespace: 'default',
    });
  }

  @Get('/:id/run/:run_id')
  runId(@Param('id') workflowId: string, @Param('run_id') runId: string) {
    try {
      return connection.service.getWorkflowExecutionHistory({
        execution: { workflowId, runId: runId },
        namespace: 'default',
      });
    } catch (error) {
      return new BadRequestException(error);
    }
  }
}
