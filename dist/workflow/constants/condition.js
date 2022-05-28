"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupItemExpressionOperator = exports.GroupExpressionOperator = void 0;
var GroupExpressionOperator;
(function (GroupExpressionOperator) {
    GroupExpressionOperator["AND"] = "and";
    GroupExpressionOperator["OR"] = "or";
    GroupExpressionOperator["NOT"] = "not";
})(GroupExpressionOperator = exports.GroupExpressionOperator || (exports.GroupExpressionOperator = {}));
var GroupItemExpressionOperator;
(function (GroupItemExpressionOperator) {
    GroupItemExpressionOperator["STRING_EQUAL"] = "str_eq";
    GroupItemExpressionOperator["STRING_NOT_EQUAL"] = "str_ne";
    GroupItemExpressionOperator["STRING_IS_EMPTY"] = "str_is_empty";
    GroupItemExpressionOperator["STRING_CONTAINS"] = "str_contains";
    GroupItemExpressionOperator["STRING_START_WITH"] = "start_with";
    GroupItemExpressionOperator["STRING_END_WITH"] = "end_with";
    GroupItemExpressionOperator["NUMBER_EQUAL"] = "num_eq";
    GroupItemExpressionOperator["NUMBER_NOT_EQUAL"] = "num_ne";
    GroupItemExpressionOperator["NUMBER_GREATER_THEN"] = "num_gt";
    GroupItemExpressionOperator["NUMBER_GREATER_THEN_OR_EQUAL"] = "num_gte";
    GroupItemExpressionOperator["NUMBER_LESS_THEN"] = "num_lt";
    GroupItemExpressionOperator["NUMBER_LESS_THEN_OR_EQUAL"] = "num_lte";
    GroupItemExpressionOperator["BOOLEAN_EQUAL"] = "bool_eq";
    GroupItemExpressionOperator["BOOLEAN_NOT_EQUAL"] = "bool_ne";
    GroupItemExpressionOperator["IS_EMPTY"] = "is_empty";
    GroupItemExpressionOperator["CONTAINS"] = "contains";
})(GroupItemExpressionOperator = exports.GroupItemExpressionOperator || (exports.GroupItemExpressionOperator = {}));
//# sourceMappingURL=condition.js.map