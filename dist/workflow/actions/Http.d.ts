import { IActionParams, IHttp } from '../types';
export declare function Http(params: IActionParams<IHttp>): Promise<{
    status: number;
    response: any;
}>;
