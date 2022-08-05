"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filter = void 0;
const wf = require("@temporalio/workflow");
const getConditionResult_1 = require("../utils/getConditionResult");
async function Filter(params) {
    const condition = params.action.data.condition;
    const nextSignal = await wf.condition(() => (0, getConditionResult_1.getConditionResult)(condition), 0);
    return wf.condition(() => nextSignal, 0);
}
exports.Filter = Filter;
//# sourceMappingURL=Filter.js.map