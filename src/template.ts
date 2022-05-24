import { nanoid } from "nanoid";
import { ActionType, DSL } from "./types";

export const template: DSL = {
  variables: { result: {}, results: {} },
  elements: [
    {
      type: ActionType.DELAY,
      data: {
        id: nanoid(),
        name: 'delay',
        seconds: 3
      }
    },
    {
      type: ActionType.HTTP,
      data: {
        id: nanoid(),
        name: 'http',
        description: '',
        method: 'get',
        url: 'https://www.baidu.cn',

      }
    },
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
