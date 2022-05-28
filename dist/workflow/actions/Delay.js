"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Delay = void 0;
const activity_1 = require("@temporalio/activity");
async function Delay(params) {
    await activity_1.Context.current().sleep(params.action.data.seconds * 1000);
}
exports.Delay = Delay;
//# sourceMappingURL=Delay.js.map