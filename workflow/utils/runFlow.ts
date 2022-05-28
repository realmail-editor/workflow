import { FlowTriggerType } from '../constants';
import { WorkflowClient } from '@temporalio/client';
import { DSLInterpreter } from '../workflows';
import { DSL } from '../types';

export async function runFlow(template: DSL) {
  const client = new WorkflowClient();
  if (template.trigger.type === FlowTriggerType.CRON_SCHEDULE) {
    return client.execute(DSLInterpreter, {
      args: [template],
      taskQueue: 'automation-flow',
      workflowId: template.id,
      cronSchedule: template.trigger.cron,
    });
  } else {
    return client.execute(DSLInterpreter, {
      args: [template],
      taskQueue: 'automation-flow',
      workflowId: template.id,
    });
  }
}
