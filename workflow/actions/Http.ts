import axios from 'axios';
import { IActionParams, IHttp } from '../types';

export async function Http(
  params: IActionParams<IHttp>
): Promise<{ status: number; response: any }> {
  let result = {
    status: 200,
    response: {},
  };

  try {
    const {
      action: { data },
    } = params;

    const response = await axios({
      method: data.method,
      url: data.url,
      data: data.body,
    });
    result = {
      status: response.status,
      response: response.data,
    };
  } catch (error: any) {
    result = {
      status: error.response.status,
      response: error.response.data,
    };
  }

  return result;
}
