import { GroupExpressionOperator, GroupItemExpressionOperator } from '../constants';

export type GroupExpression = {
  op: GroupExpressionOperator;
  exprs: Expression[];
};

export type GroupItemExpression = {
  op: GroupItemExpressionOperator;
  left?: string;
  right?: string;
};

export type Expression = GroupExpression | GroupItemExpression;