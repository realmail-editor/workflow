import { Expression, GroupExpression, GroupItemExpression } from "../types/condition";

export function isGroupItemExpression(exp: Expression): exp is GroupItemExpression {
  return !(exp as GroupExpression).exprs;
}