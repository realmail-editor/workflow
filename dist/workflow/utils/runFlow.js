"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runFlow = void 0;
const constants_1 = require("../constants");
const client_1 = require("@temporalio/client");
const workflows_1 = require("../workflows");
async function runFlow(template) {
    const client = new client_1.WorkflowClient();
    if (template.trigger.type === constants_1.FlowTriggerType.CRON_SCHEDULE) {
        return client.execute(workflows_1.DSLInterpreter, {
            args: [template],
            taskQueue: 'automation-flow',
            workflowId: template.id,
            cronSchedule: template.trigger.cron,
        });
    }
    else {
        return client.execute(workflows_1.DSLInterpreter, {
            args: [template],
            taskQueue: 'automation-flow',
            workflowId: template.id,
        });
    }
}
exports.runFlow = runFlow;
//# sourceMappingURL=runFlow.js.map