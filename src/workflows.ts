import { proxyActivities } from '@temporalio/workflow';
import type { actions } from './actions';
import { ActionResponse, DSL, IAction } from './types';
import { isConditionAction } from './utils/isConditionAction';
import { isForEachAction } from './utils/isForEach';


const acts = proxyActivities<typeof actions>({
  startToCloseTimeout: '1 minute',
});

export async function DSLInterpreter(dsl: DSL) {
  const bindings = dsl.variables;
  for (const childAction of dsl.elements) {
    await execute(childAction, bindings);
  }
}

async function execute(action: IAction, bindings: ActionResponse): Promise<void> {
  if (isConditionAction(action)) {
    const childActions = action.data.condition ? action.data.truthy : action.data.falsy;
    for (const childAction of childActions) {
      await execute(childAction, bindings);
    }
  }

  if (isForEachAction(action)) {
    const childActions = action.data.steps;
    await Promise.all(childActions.map((el) => execute(el, bindings)));
  }

  const actionResult = await acts[action.type]({
    action: action,
    payload: bindings
  })
  console.log(actionResult);

  bindings.result = actionResult;
  bindings.results = {
    ...bindings.results,
    [action.data.id]: actionResult
  };

}
