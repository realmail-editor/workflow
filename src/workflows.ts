import { proxyActivities } from '@temporalio/workflow';
import jsonata from 'jsonata';

import { Liquid } from 'liquidjs';

import type { actions } from './actions';
import { ActionResponse, DSL, IAction } from './types';
import { isConditionAction } from './utils/isConditionAction';
import { isFilterAction } from './utils/isFilterAction';
import { isForEachAction } from './utils/isForEach';

const engine = new Liquid();



const acts = proxyActivities<typeof actions>({
  startToCloseTimeout: '1 minute',
});

export async function DSLInterpreter(dsl: DSL) {

  const bindings = dsl.variables;
  console.log('start workflow');

  for (const childAction of dsl.elements) {
    const next = await execute(childAction, bindings);
    if (!next) break;
  }
  console.log('end workflow');
}

async function execute(action: IAction, bindings: ActionResponse): Promise<boolean> {
  const tpl = engine.parse(JSON.stringify(action));
  const actionWithData = JSON.parse(engine.renderSync(tpl, bindings));
  console.log('bindings', bindings);

  const actionResult = await acts[action.type]({
    action: actionWithData,
    payload: bindings
  });

  if (isFilterAction(action)) {
    if (!actionResult) return false;
  }

  if (isConditionAction(action)) {
    const childActions = actionResult ? action.data.truthy : action.data.falsy;
    for (const childAction of childActions) {
      const next = await execute(childAction, bindings);
      if (!next) break;
    }
  }

  if (isForEachAction(action)) {
    const childActions = action.data.steps;
    await Promise.all(childActions.map((el) => execute(el, bindings)));
  }

  bindings.prevResult = actionResult;
  bindings.results = {
    ...bindings.results,
    [action.data.id]: actionResult
  };

  return true;
}
