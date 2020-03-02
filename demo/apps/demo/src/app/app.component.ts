import { Component, OnInit } from '@angular/core';
import {
  Aggregation,
  ComponentType,
  Condition,
  Field,
  LogicalOperator,
  Operator,
  TelemetryType
} from '@demo/query-editor';
import { Observable } from 'rxjs';
import { RuleService } from './rule.service';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'demo';
  componentTypes$: Observable<ComponentType[]>;
  telemetryTypes$: Observable<TelemetryType[]> = new Observable<
    TelemetryType[]
  >();
  logicalOperators$: Observable<LogicalOperator[]>;
  fields$: Observable<Field[]>;
  aggregations$: Observable<Aggregation[]>;
  operators$: Observable<Operator[]>;

  currentComponentId: string;

  condition: Condition = {
    logicalOperator: { id: 'and', name: 'And' },
    group: '1',
    field: { name: 'vin', dataType: { id: 'string', name: 'string' } },
    aggregation: { id: 'avg', name: 'Average' },
    operator: { id: 'eq', name: '=' }
  };

  constructor(private ruleService: RuleService) {}

  ngOnInit(): void {
    this.componentTypes$ = this.ruleService.getComponentTypes();
    this.logicalOperators$ = this.ruleService.getLogicalOperators();
  }

  setTelemetryTypesForComponent(componentId: string) {
    this.currentComponentId = componentId;
    this.telemetryTypes$ = this.ruleService.getTelemetryTypesForComponent(
      componentId
    );
  }

  setFieldsForTelemetryType(telemetryId: string) {
    this.fields$ = this.ruleService.getFields(
      this.currentComponentId,
      telemetryId
    );
  }

  onFormDataChanged(e: any): void {
    if (e.dataField === 'field') {
      this.aggregations$ = this.ruleService.getAggregations(
        this.currentComponentId,
        e.value
      );
      this.operators$ = this.ruleService.getOperators(
        this.currentComponentId,
        e.value
      );
      return;
    }
  }
}
