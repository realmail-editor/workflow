import { GroupExpressionOperator, GroupItemExpressionOperator } from '../constants';
import { IConditionExpression } from '../types';




export function getConditionResult(condition: IConditionExpression) {
  const { symbol, groups } = condition;

  let result = false;
  if (symbol === GroupExpressionOperator.AND) {
    result = groups.map(item => {
      if (item.symbol === GroupExpressionOperator.AND) {
        return item.groups.map(generateExpression).every(Boolean);
      }
      return item.groups.map(generateExpression).some(Boolean);
    }).every(Boolean);

  } else if (symbol === GroupExpressionOperator.OR) {
    result = groups.map(item => {
      if (item.symbol === GroupExpressionOperator.AND) {
        return item.groups.map(generateExpression).every(Boolean);
      }
      return item.groups.map(generateExpression).some(Boolean);
    }).some(Boolean);
  }

  return result;
}

const generateExpression = (condition: {
  left: string;
  operator: GroupItemExpressionOperator;
  right: string;
}) => {

  switch (condition.operator) {
    //  string
    case GroupItemExpressionOperator.STRING_EQUAL:

      return condition.left === condition.right;
    case GroupItemExpressionOperator.STRING_NOT_EQUAL:
      return condition.left !== condition.right;
    case GroupItemExpressionOperator.STRING_IS_EMPTY:
      return !condition.left;
    case GroupItemExpressionOperator.STRING_CONTAINS:
      return condition.left.includes(condition.right);
    case GroupItemExpressionOperator.STRING_START_WITH:
      return condition.left.startsWith(condition.right);
    case GroupItemExpressionOperator.STRING_END_WITH:
      return condition.left.endsWith(condition.right);

    //  number
    case GroupItemExpressionOperator.NUMBER_EQUAL:
      return Number(condition.left) === Number(condition.right);
    case GroupItemExpressionOperator.NUMBER_NOT_EQUAL:
      return Number(condition.left) !== Number(condition.right);
    case GroupItemExpressionOperator.NUMBER_GREATER_THEN:
      return Number(condition.left) > Number(condition.right);
    case GroupItemExpressionOperator.NUMBER_GREATER_THEN_OR_EQUAL:
      return Number(condition.left) >= Number(condition.right);
    case GroupItemExpressionOperator.NUMBER_LESS_THEN:
      return Number(condition.left) < Number(condition.right);
    case GroupItemExpressionOperator.NUMBER_LESS_THEN_OR_EQUAL:
      return Number(condition.left) <= Number(condition.right);

    // boolean
    case GroupItemExpressionOperator.BOOLEAN_EQUAL:
      return Boolean(condition.left) === Boolean(condition.right);
    case GroupItemExpressionOperator.BOOLEAN_NOT_EQUAL:
      return Boolean(condition.left) !== Boolean(condition.right);


    case GroupItemExpressionOperator.IS_EMPTY:
      return !condition.left;
  }

};