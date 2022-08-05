import { proxyActivities } from '@temporalio/workflow';

import { Liquid } from 'liquidjs';

import type { actions } from './actions';
import { ActionResponse, DSL, IAction, IActionParams } from './types';
import { isConditionAction } from './utils/isConditionAction';
import { isFilterAction } from './utils/isFilterAction';
import { isForEachAction } from './utils/isForEach';
import { isHttpAction } from './utils/isHttpAction';
import { Http } from './actions/Http';

const engine = new Liquid();

export async function DSLInterpreter(dsl: DSL) {
  const acts = proxyActivities<typeof actions>({
    retry: {
      maximumAttempts: 1,
    },
    startToCloseTimeout: '36500d',
  });

  const bindings = dsl.variables;
  let currentStep = dsl.elements[0];

  for (const childAction of dsl.elements) {
    currentStep = childAction;
    const response = await execute(acts, childAction, bindings);
    if (response.error) break;
  }

  return {
    current: currentStep.data,
    actions: bindings,
  };
}

async function execute(
  acts: Record<string, (params: IActionParams<any>) => Promise<any>>,
  action: IAction,
  bindings: ActionResponse
): Promise<{
  error: boolean;
  output: any;
  input: any;
}> {
  let hasError = false;
  const tpl = engine.parse(JSON.stringify(action));
  const actionWithData = JSON.parse(
    engine.renderSync(tpl, bindings)
  ) as Parameters<typeof Http>[0]['action'];

  const actionResult = await acts[action.type]({
    action: actionWithData,
    payload: bindings,
  });

  if (isHttpAction(action)) {
    const httpResult = actionResult as { status: number };
    const httpPayload = actionWithData;
    if (
      httpPayload.data.expected_codes.length === 0 ||
      httpPayload.data.expected_codes.includes(httpResult.status)
    ) {
      hasError = true;
    }
  } else if (isFilterAction(action)) {
    hasError = !actionResult;
  } else if (isConditionAction(action)) {
    const childActions = actionResult ? action.data.truthy : action.data.falsy;
    for (const childAction of childActions) {
      const next = await execute(acts, childAction, bindings);
      if (!next) {
        hasError = true;
        break;
      }
    }
  } else if (isForEachAction(action)) {
    const childActions = action.data.steps;
    await Promise.all(childActions.map((el) => execute(acts, el, bindings)));
  }

  if (!hasError) {
    bindings.prevResult = actionResult;
    bindings.results = {
      ...bindings.results,
      [action.data.id]: actionResult,
    };
  }
  return {
    error: hasError,
    output: actionResult,
    input: bindings,
  };
}
