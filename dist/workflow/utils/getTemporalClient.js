"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = exports.client = void 0;
const client_1 = require("@temporalio/client");
const connection = new client_1.Connection({});
exports.connection = connection;
const client = new client_1.WorkflowClient(connection.service, {});
exports.client = client;
//# sourceMappingURL=getTemporalClient.js.map