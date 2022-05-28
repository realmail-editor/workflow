"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const worker_1 = require("@temporalio/worker");
const actions_1 = require("./actions");
async function run() {
    const worker = await worker_1.Worker.create({
        workflowsPath: require.resolve('./workflows'),
        activities: actions_1.actions,
        taskQueue: 'automation-flow',
    });
    await worker.run();
}
run().catch((err) => {
    console.error(err);
    process.exit(1);
});
//# sourceMappingURL=worker.js.map