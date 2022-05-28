"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Condition = void 0;
const getConditionResult_1 = require("../utils/getConditionResult");
async function Condition(params) {
    const condition = params.action.data.condition;
    const nextSignal = (0, getConditionResult_1.getConditionResult)(condition);
    return nextSignal;
}
exports.Condition = Condition;
//# sourceMappingURL=Condition.js.map