"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFilterAction = void 0;
const constants_1 = require("../constants");
function isFilterAction(action) {
    return action.type === constants_1.ActionType.FILTER;
}
exports.isFilterAction = isFilterAction;
//# sourceMappingURL=isFilterAction.js.map