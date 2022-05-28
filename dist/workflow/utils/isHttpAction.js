"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isHttpAction = void 0;
const constants_1 = require("../constants");
function isHttpAction(action) {
    return action.type === constants_1.ActionType.HTTP;
}
exports.isHttpAction = isHttpAction;
//# sourceMappingURL=isHttpAction.js.map