"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const template_1 = require("./template");
const runFlow_1 = require("./utils/runFlow");
async function run() {
    return (0, runFlow_1.runFlow)(template_1.template);
}
run().catch((err) => {
    console.error('err console', err);
    process.exit(1);
});
//# sourceMappingURL=client.js.map