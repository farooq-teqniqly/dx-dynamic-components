import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { LogicalOperator, Condition, Operator } from '@demo/query-editor';
import { Field, Aggregation } from '../models';

@Component({
  selector: 'demo-condition-editor',
  templateUrl: './condition-editor.component.html',
  styleUrls: ['./condition-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConditionEditorComponent implements OnInit {

  constructor() { }

  @Input() index = 0;
  @Input() condition: Condition;
  @Input() logicalOperators: LogicalOperator[] = [];
  @Input() fields: Field[] = [];
  @Input() aggregations: Aggregation[] = [];
  @Input() operators: Operator[] = [];

  @Output() formDataChanged: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit(): void {
  }

  onFormDataChanged(e: any): any {
    console.log(e);
    this.formDataChanged.emit({dataField: e.dataField, value: e.value});
  }
}
