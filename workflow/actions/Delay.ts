import { Context } from '@temporalio/activity';
import { IActionParams, IDelay } from "../types";


export async function Delay(params: IActionParams<IDelay>): Promise<any> {

  await Context.current().sleep(params.action.data.seconds * 1000);
}

