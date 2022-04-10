import { nanoid } from "nanoid";
import { ActionType, DSL } from "./types";

export const template: DSL = {
  variables: { result: {}, results: {} },
  elements: [
    {
      type: ActionType.HTTP,
      data: {
        id: nanoid(),
        name: 'http',
        description: '',
        method: 'get',
        url: 'https://www.maocanhua.cn/article/visitors/list?page=1&size=1000&category_id=96&user_id=107',
        headers: {
          // 'authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMDcsInJhbmsiOjEsImV4cGlyZXNJbiI6IjdkIiwiaWF0IjoxNjQ5NTY5OTA2fQ.HWXTMVl9q_OZsYsDhtDWxW3aO_6k_hX3PlQgBM1TbZc'
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
        url: 'https://www.baidu.com',
      }
    }
  ],
};
