"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isForEachAction = void 0;
const constants_1 = require("../constants");
function isForEachAction(action) {
    return action.type === constants_1.ActionType.FOREACH;
}
exports.isForEachAction = isForEachAction;
//# sourceMappingURL=isForEach.js.map