import { DataType } from '.';

export interface Field {
  name: string;
  dataType: DataType;
  unit?: string;
  expandedName?: string;
}
