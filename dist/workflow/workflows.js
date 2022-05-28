"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DSLInterpreter = void 0;
const workflow_1 = require("@temporalio/workflow");
const liquidjs_1 = require("liquidjs");
const isConditionAction_1 = require("./utils/isConditionAction");
const isFilterAction_1 = require("./utils/isFilterAction");
const isForEach_1 = require("./utils/isForEach");
const isHttpAction_1 = require("./utils/isHttpAction");
const engine = new liquidjs_1.Liquid();
async function DSLInterpreter(dsl) {
    const acts = (0, workflow_1.proxyActivities)({
        retry: {
            maximumAttempts: 1,
        },
        startToCloseTimeout: '36500d',
    });
    const bindings = dsl.variables;
    let currentStep = dsl.elements[0];
    for (const childAction of dsl.elements) {
        currentStep = childAction;
        const next = await execute(acts, childAction, bindings);
        if (!next)
            break;
    }
    console.log('', {
        current: currentStep.data,
        actions: bindings,
    });
    return {
        current: currentStep.data,
        actions: bindings,
    };
}
exports.DSLInterpreter = DSLInterpreter;
async function execute(acts, action, bindings) {
    const tpl = engine.parse(JSON.stringify(action));
    const actionWithData = JSON.parse(engine.renderSync(tpl, bindings));
    const actionResult = await acts[action.type]({
        action: actionWithData,
        payload: bindings,
    });
    bindings.prevResult = actionResult;
    bindings.results = Object.assign(Object.assign({}, bindings.results), { [action.data.id]: actionResult });
    if ((0, isHttpAction_1.isHttpAction)(action)) {
        const httpResult = actionResult;
        const httpPayload = actionWithData;
        if (httpPayload.data.expected_codes.length === 0 ||
            httpPayload.data.expected_codes.includes(httpResult.status)) {
            return true;
        }
        return false;
    }
    if ((0, isFilterAction_1.isFilterAction)(action)) {
        if (!actionResult)
            return false;
    }
    if ((0, isConditionAction_1.isConditionAction)(action)) {
        const childActions = actionResult ? action.data.truthy : action.data.falsy;
        for (const childAction of childActions) {
            const next = await execute(acts, childAction, bindings);
            if (!next)
                break;
        }
    }
    if ((0, isForEach_1.isForEachAction)(action)) {
        const childActions = action.data.steps;
        await Promise.all(childActions.map((el) => execute(acts, el, bindings)));
    }
    return true;
}
//# sourceMappingURL=workflows.js.map