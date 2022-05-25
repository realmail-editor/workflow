import axios from 'axios';
import { IActionParams, IHttp } from "../types";


export async function Http(params: IActionParams<IHttp>): Promise<any> {

  try {
    const { action: { data }, payload } = params;
    console.log(payload.results);


    const response = await axios({
      method: data.method,
      url: data.url,
      data: data.body
    });
    return {
      status: response.status,
      data: response.data
    };
  } catch (error: any) {
    return {
      status: error.response.status,
      data: error.response.data,
      message: error.response?.message || error.message || error
    };
  }

}

