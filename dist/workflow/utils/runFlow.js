"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runFlow = void 0;
const constants_1 = require("../constants");
const workflows_1 = require("../workflows");
async function runFlow(client, template) {
    if (template.trigger.type === constants_1.FlowTriggerType.CRON_SCHEDULE) {
        return client.start(workflows_1.DSLInterpreter, {
            args: [template],
            taskQueue: 'automation-flow',
            workflowId: template.id,
            cronSchedule: template.trigger.cron,
        });
    }
    else {
        return client.start(workflows_1.DSLInterpreter, {
            args: [template],
            taskQueue: 'automation-flow',
            workflowId: template.id,
        });
    }
}
exports.runFlow = runFlow;
//# sourceMappingURL=runFlow.js.map