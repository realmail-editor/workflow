import { nanoid } from "nanoid";
import { ActionType, DSL } from "./types";

export const template: DSL = {
  variables: { prevResult: {}, results: {} },
  elements: [
    // {
    //   type: ActionType.DELAY,
    //   data: {
    //     id: nanoid(),
    //     name: 'delay',
    //     seconds: 3
    //   }
    // },
    // {
    //   type: ActionType.DELAY,
    //   data: {
    //     id: nanoid(),
    //     name: 'delay',
    //     seconds: 3
    //   }
    // },
    // {
    //   type: ActionType.CONDITION,
    //   data: {
    //     id: nanoid(),
    //     name: 'condition',
    //     condition: {
    //       left: '10',
    //       right: '11'
    //     },
    //     truthy: [
    //       {
    //         type: ActionType.DELAY,
    //         data: {
    //           id: nanoid(),
    //           name: 'delay',
    //           seconds: 5
    //         }
    //       },
    //     ],
    //     falsy: [],
    //   }
    // },
    {
      type: ActionType.HTTP,
      data: {
        id: 'pjt610rNrQuvO6gsDsTaz',
        name: 'http',
        description: '',
        method: 'get',
        url: 'https://www.maocanhua.cn/article/visitor/list?page=1&size=1000&category_id=96&user_id=107',
        headers: {
          'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMDcsInJhbmsiOjEsImV4cGlyZXNJbiI6IjdkIiwiaWF0IjoxNjUzNDkwNzkyfQ.CmQCfcC_XAWPIjX485s0gQG_dDBpiJzh10PTT1Z6Txg'
        }
      }
    },
    {
      type: ActionType.FILTER,
      data: {
        id: nanoid(),
        name: 'filter',
        condition: {
          left: '{{results.pjt610rNrQuvO6gsDsTaz.data.count}}',
          right: '11'
        }
      }
    },
    {
      type: ActionType.HTTP,
      data: {
        id: nanoid(),
        name: 'http',
        description: '',
        method: 'get',
        url: 'https://www.maocanhua.cn/article/visitor/list?page=1&size=1000&category_id=96&user_id=107',
        headers: {
          'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMDcsInJhbmsiOjEsImV4cGlyZXNJbiI6IjdkIiwiaWF0IjoxNjUzNDkwNzkyfQ.CmQCfcC_XAWPIjX485s0gQG_dDBpiJzh10PTT1Z6Txg'
        }
      }
    },
    // {
    //   type: ActionType.DELAY,
    //   data: {
    //     id: nanoid(),
    //     name: 'delay',
    //     seconds: 2
    //   }
    // },
    // {
    //   type: ActionType.HTTP,
    //   data: {
    //     id: nanoid(),
    //     name: 'http',
    //     description: '',
    //     method: 'get',
    //     url: 'https://www.baidu.com',
    //   }
    // }
  ],
};
