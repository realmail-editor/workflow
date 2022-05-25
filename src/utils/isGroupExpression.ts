import { Expression, GroupExpression } from "../types/condition";

export function isGroupExpression(exp: Expression): exp is GroupExpression {
  return !!(exp as GroupExpression).exprs;
}