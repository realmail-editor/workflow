import axios from 'axios';
import { Context } from '@temporalio/activity'
import { IActionParams, IHttp } from "../types";


export async function Http(params: IActionParams<IHttp>): Promise<any> {
  console.log('Http start',);

  try {
    const { action: { data } } = params;

    const response = await axios({
      method: data.method,
      url: data.url,
      data: data.body
    })
    console.log('Http end success',);
    return {
      status: response.status,
      data: response.data
    }
  } catch (error: any) {
    console.log('Http end error', error);
    await Context.current().cancelled;
    return {
      status: error.response.status,
      data: error.response.data,
      message: error.response?.message || error.message || error
    }
  }

}

