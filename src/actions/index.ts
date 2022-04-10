import { ActionType, IActionParams } from '../types'
import { Http } from './Http'

export const actions: Record<string, (params: IActionParams<any>) => Promise<any>> = {
  [ActionType.HTTP]: Http
}