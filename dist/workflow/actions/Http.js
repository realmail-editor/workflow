"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Http = void 0;
const axios_1 = require("axios");
async function Http(params) {
    let result = {
        status: 200,
        response: {},
    };
    try {
        const { action: { data }, } = params;
        const response = await (0, axios_1.default)({
            method: data.method,
            url: data.url,
            data: data.body,
        });
        result = {
            status: response.status,
            response: response.data,
        };
    }
    catch (error) {
        result = {
            status: error.response.status,
            response: error.response.data,
        };
    }
    return result;
}
exports.Http = Http;
//# sourceMappingURL=Http.js.map