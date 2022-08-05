import { nanoid } from 'nanoid';
import { ActionType, FlowTriggerType } from './constants';
import { DSL } from './types';

const id = `workflow-testv` + nanoid();
export const makeTemplate = (): DSL => {
  return {
    id,
    trigger: {
      type: FlowTriggerType.EVENT,
      event: '',
    },
    variables: {
      prevResult: {},
      results: {},
    },
    elements: [
      {
        type: ActionType.DELAY,
        data: {
          id: nanoid(),
          name: 'delay',
          seconds: 2,
        },
      },
      {
        type: ActionType.FILTER,
        data: {
          id: nanoid(),
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
      // {
      //   type: ActionType.DELAY,
      //   data: {
      //     id: nanoid(),
      //     name: 'delay',
      //     seconds: 1,
      //   },
      // },
      // {
      //   type: ActionType.DELAY,
      //   data: {
      //     id: nanoid(),
      //     name: 'delay',
      //     seconds: 1,
      //   },
      // },

      // {
      //   type: ActionType.HTTP,
      //   data: {
      //     id: nanoid(),
      //     name: 'http',
      //     description: '',
      //     method: 'get',
      //     url: 'https://www.maocanhua.cn/article/visitor/list?page=1&size=1000&category_id=96&user_id=107',
      //     headers: {
      //       authorization:
      //         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMDcsInJhbmsiOjEsImV4cGlyZXNJbiI6IjdkIiwiaWF0IjoxNjUzNDkwNzkyfQ.CmQCfcC_XAWPIjX485s0gQG_dDBpiJzh10PTT1Z6Txg',
      //     },
      //     expected_codes: [201],
      //   },
      // },
      // {
      //   type: ActionType.FILTER,
      //   data: {
      //     id: nanoid(),
      //     name: 'filter',
      //     condition: {
      //       enabled: true,
      //       symbol: 'and',
      //       groups: [
      //         {
      //           symbol: 'and',
      //           groups: [
      //             {
      //               left: '{{ prevResult.response.count }}',
      //               right: '8',
      //               operator: 'num_eq',
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //   },
      // },
    ],
  };
};
