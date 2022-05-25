import { Worker } from '@temporalio/worker';
import { actions } from './actions';

async function run() {
  const worker = await Worker.create({
    workflowsPath: require.resolve('./workflows'),
    activities: actions,
    taskQueue: 'dsl-interpreter-v1',
  });
  await worker.run();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
