"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filter = void 0;
const getConditionResult_1 = require("../utils/getConditionResult");
async function Filter(params) {
    const condition = params.action.data.condition;
    const nextSignal = (0, getConditionResult_1.getConditionResult)(condition);
    return nextSignal;
}
exports.Filter = Filter;
//# sourceMappingURL=Filter.js.map