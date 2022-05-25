import { WorkflowClient } from '@temporalio/client';
import { DSLInterpreter } from './workflows';
import { template } from './template';
import { nanoid } from 'nanoid';


async function run() {
  const client = new WorkflowClient(); // remember to configure Connection for production
  // Invoke the `DSLInterpreter` Workflow, only resolved when the workflow completes
  await client.execute(DSLInterpreter, {
    args: [template],
    taskQueue: 'dsl-interpreter-v1',
    workflowId: nanoid(),
  });
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
