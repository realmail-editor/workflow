
export enum GroupExpressionOperator {
  AND = 'and',
  OR = 'or',
  NOT = 'not'
}

export enum GroupItemExpressionOperator {
  STRING_EQUAL = 'str_eq',
  STRING_NOT_EQUAL = 'str_ne',
  STRING_IS_EMPTY = 'str_is_empty',
  STRING_CONTAINS = 'str_contains',
  STRING_START_WITH = 'start_with',
  STRING_END_WITH = 'end_with',

  NUMBER_EQUAL = 'num_eq',
  NUMBER_NOT_EQUAL = 'num_ne',
  NUMBER_GREATER_THEN = 'num_gt',
  NUMBER_GREATER_THEN_OR_EQUAL = 'num_gte',
  NUMBER_LESS_THEN = 'num_lt',
  NUMBER_LESS_THEN_OR_EQUAL = 'num_lte',

  BOOLEAN_EQUAL = 'bool_eq',
  BOOLEAN_NOT_EQUAL = 'bool_ne',

  IS_EMPTY = 'is_empty',

  CONTAINS = 'contains'
}