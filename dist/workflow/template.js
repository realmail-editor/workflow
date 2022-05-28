"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.template = void 0;
const nanoid_1 = require("nanoid");
const constants_1 = require("./constants");
exports.template = {
    id: `workflow-${(0, nanoid_1.nanoid)()}`,
    trigger: {
        type: constants_1.FlowTriggerType.EVENT,
        event: '',
    },
    variables: {
        prevResult: {},
        results: {},
    },
    elements: [
        {
            type: constants_1.ActionType.DELAY,
            data: {
                id: (0, nanoid_1.nanoid)(),
                name: 'delay',
                seconds: 3,
            },
        },
        {
            type: constants_1.ActionType.HTTP,
            data: {
                id: (0, nanoid_1.nanoid)(),
                name: 'http',
                description: '',
                method: 'get',
                url: 'https://www.maocanhua.cn/article/visitor/list?page=1&size=1000&category_id=96&user_id=107',
                headers: {
                    authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMDcsInJhbmsiOjEsImV4cGlyZXNJbiI6IjdkIiwiaWF0IjoxNjUzNDkwNzkyfQ.CmQCfcC_XAWPIjX485s0gQG_dDBpiJzh10PTT1Z6Txg',
                },
                expected_codes: [201],
            },
        },
        {
            type: constants_1.ActionType.FILTER,
            data: {
                id: (0, nanoid_1.nanoid)(),
                name: 'filter',
                condition: {
                    enabled: true,
                    symbol: 'and',
                    groups: [
                        {
                            symbol: 'and',
                            groups: [
                                {
                                    left: '{{ prevResult.response.count }}',
                                    right: '8',
                                    operator: 'num_eq',
                                },
                            ],
                        },
                    ],
                },
            },
        },
    ],
};
//# sourceMappingURL=template.js.map