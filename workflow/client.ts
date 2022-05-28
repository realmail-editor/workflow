import { template } from './template';
import { runFlow } from './utils/runFlow';

async function run() {
  return runFlow(template);
}

run().catch((err) => {
  console.error('err console', err);
  process.exit(1);
});
