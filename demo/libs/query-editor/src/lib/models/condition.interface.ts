import { LogicalOperator } from './logical-operator.interface';
import { Field, Aggregation, Operator } from '.';

export interface Condition {
  logicalOperator: LogicalOperator;
  group?: string;
  field: Field;
  aggregation: Aggregation;
  operator: Operator;
  threshold?: any
}
