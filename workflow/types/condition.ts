import { GroupExpressionOperator, GroupItemExpressionOperator } from '../constants';

export interface IConditionExpression {
  groups: Array<IConditionGroup>;
  symbol: GroupExpressionOperator;
  enabled: boolean;
}

export interface IConditionGroup {
  symbol: GroupExpressionOperator;
  groups: Array<IConditionGroupItem>;
}

export interface IConditionGroupItem {
  left: string;
  operator: GroupItemExpressionOperator;
  right: string;
}