"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isConditionAction = void 0;
const constants_1 = require("../constants");
function isConditionAction(action) {
    return action.type === constants_1.ActionType.Condition;
}
exports.isConditionAction = isConditionAction;
//# sourceMappingURL=isConditionAction.js.map