"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConditionResult = void 0;
const constants_1 = require("../constants");
function getConditionResult(condition) {
    const { symbol, groups } = condition;
    let result = false;
    if (symbol === constants_1.GroupExpressionOperator.AND) {
        result = groups.map(item => {
            if (item.symbol === constants_1.GroupExpressionOperator.AND) {
                return item.groups.map(generateExpression).every(Boolean);
            }
            return item.groups.map(generateExpression).some(Boolean);
        }).every(Boolean);
    }
    else if (symbol === constants_1.GroupExpressionOperator.OR) {
        result = groups.map(item => {
            if (item.symbol === constants_1.GroupExpressionOperator.AND) {
                return item.groups.map(generateExpression).every(Boolean);
            }
            return item.groups.map(generateExpression).some(Boolean);
        }).some(Boolean);
    }
    return result;
}
exports.getConditionResult = getConditionResult;
const generateExpression = (condition) => {
    switch (condition.operator) {
        case constants_1.GroupItemExpressionOperator.STRING_EQUAL:
            return condition.left === condition.right;
        case constants_1.GroupItemExpressionOperator.STRING_NOT_EQUAL:
            return condition.left !== condition.right;
        case constants_1.GroupItemExpressionOperator.STRING_IS_EMPTY:
            return !condition.left;
        case constants_1.GroupItemExpressionOperator.STRING_CONTAINS:
            return condition.left.includes(condition.right);
        case constants_1.GroupItemExpressionOperator.STRING_START_WITH:
            return condition.left.startsWith(condition.right);
        case constants_1.GroupItemExpressionOperator.STRING_END_WITH:
            return condition.left.endsWith(condition.right);
        case constants_1.GroupItemExpressionOperator.NUMBER_EQUAL:
            return Number(condition.left) === Number(condition.right);
        case constants_1.GroupItemExpressionOperator.NUMBER_NOT_EQUAL:
            return Number(condition.left) !== Number(condition.right);
        case constants_1.GroupItemExpressionOperator.NUMBER_GREATER_THEN:
            return Number(condition.left) > Number(condition.right);
        case constants_1.GroupItemExpressionOperator.NUMBER_GREATER_THEN_OR_EQUAL:
            return Number(condition.left) >= Number(condition.right);
        case constants_1.GroupItemExpressionOperator.NUMBER_LESS_THEN:
            return Number(condition.left) < Number(condition.right);
        case constants_1.GroupItemExpressionOperator.NUMBER_LESS_THEN_OR_EQUAL:
            return Number(condition.left) <= Number(condition.right);
        case constants_1.GroupItemExpressionOperator.BOOLEAN_EQUAL:
            return Boolean(condition.left) === Boolean(condition.right);
        case constants_1.GroupItemExpressionOperator.BOOLEAN_NOT_EQUAL:
            return Boolean(condition.left) !== Boolean(condition.right);
        case constants_1.GroupItemExpressionOperator.IS_EMPTY:
            return !condition.left;
    }
};
//# sourceMappingURL=getConditionResult.js.map