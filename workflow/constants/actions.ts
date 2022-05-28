export enum ActionType {
  HTTP = 'http',
  Condition = 'condition',
  FOREACH = 'foreach',
  DELAY = 'delay',
  FILTER = 'filter',
  CONDITION = 'condition',
}

export enum FlowTriggerType {
  CRON_SCHEDULE = 'cronSchedule',
  EVENT = 'event',
}
