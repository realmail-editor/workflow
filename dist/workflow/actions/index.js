"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actions = void 0;
const Http_1 = require("./Http");
const Delay_1 = require("./Delay");
const Filter_1 = require("./Filter");
const Condition_1 = require("./Condition");
const constants_1 = require("../constants");
exports.actions = {
    [constants_1.ActionType.HTTP]: Http_1.Http,
    [constants_1.ActionType.DELAY]: Delay_1.Delay,
    [constants_1.ActionType.FILTER]: Filter_1.Filter,
    [constants_1.ActionType.CONDITION]: Condition_1.Condition,
};
//# sourceMappingURL=index.js.map