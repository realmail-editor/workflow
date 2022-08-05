"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeTemplate = void 0;
const nanoid_1 = require("nanoid");
const constants_1 = require("./constants");
const id = `workflow-testv` + (0, nanoid_1.nanoid)();
const makeTemplate = () => {
    return {
        id,
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
                    seconds: 2,
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
                                        left: '7',
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
};
exports.makeTemplate = makeTemplate;
//# sourceMappingURL=template.js.map