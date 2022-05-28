"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlowTriggerType = exports.ActionType = void 0;
var ActionType;
(function (ActionType) {
    ActionType["HTTP"] = "http";
    ActionType["Condition"] = "condition";
    ActionType["FOREACH"] = "foreach";
    ActionType["DELAY"] = "delay";
    ActionType["FILTER"] = "filter";
    ActionType["CONDITION"] = "condition";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
var FlowTriggerType;
(function (FlowTriggerType) {
    FlowTriggerType["CRON_SCHEDULE"] = "cronSchedule";
    FlowTriggerType["EVENT"] = "event";
})(FlowTriggerType = exports.FlowTriggerType || (exports.FlowTriggerType = {}));
//# sourceMappingURL=actions.js.map