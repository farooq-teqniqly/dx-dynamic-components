import { Injectable } from '@angular/core';
import {
  ComponentType,
  TelemetryType,
  LogicalOperator,
  Field,
  Aggregation,
  Operator
} from '@demo/query-editor';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RuleService {
  constructor() {}

  getFields(
    currentComponentId: string,
    telemetryId: string
  ): Observable<Field[]> {
    const telemetryIdCopy = telemetryId.toLowerCase();

    switch (currentComponentId.toLowerCase()) {
      case 'engine':
        return of([
          {
            name: 'time-since-start',
            dataType: { id: 'number', name: 'number' },
            unit: 's',
            expandedName: 'time-since-start (s) [number]'
          }
        ]);

      case 'drivetrain':
        if (telemetryIdCopy === 'telemetry') {
          return of([
            {
              name: 'tire-pressure-lf',
              dataType: { id: 'number', name: 'number' },
              unit: 'psi',
              expandedName: 'tire-pressure-lf (psi) [number]'
            }
          ]);
        }

        return of([
          {
            name: 'engine-miles',
            unit: 'mi',
            expandedName: 'engine-miles (mi) [number]',
            dataType: {
              id: 'number',
              name: 'number'
            }
          }
        ]);

      case 'vehicle':
        if (telemetryIdCopy === 'event') {
          return of([
            {
              name: 'started',
              dataType: { id: 'boolean', name: 'boolean' },
              expandedName: 'started () [boolean]'
            }
          ]);
        }

        return of([
          {
            name: 'vin',
            dataType: { id: 'string', name: 'string' },
            expandedName: 'vin () [string]'
          }
        ]);
    }
  }

  getAggregations(
    componentId: string,
    fieldName: string
  ): Observable<Aggregation[]> {
    const fieldNameCopy = fieldName.toLowerCase();

    switch (componentId.toLowerCase()) {
      case 'engine':
        if (fieldNameCopy === 'time-since-start') {
          return of([{ id: 'last', name: 'Last' }]);
        }
        break;

      case 'drivetrain':
        if (fieldNameCopy === 'tire-pressure-lf') {
          return of([
            { id: 'last', name: 'Last' },
            { id: 'min', name: 'Min' },
            { id: 'max', name: 'Max' }
          ]);
        }

        if (fieldNameCopy === 'engine-miles') {
          return of([{ id: 'last', name: 'Last' }]);
        }

        break;

      case 'vehicle':
        if (fieldNameCopy === 'started') {
          return of([
            { id: 'last', name: 'Last' },
            { id: 'count', name: 'Count' }
          ]);
        }

        if (fieldNameCopy === 'vin') {
          return of([{ id: 'last', name: 'Last' }]);
        }

        break;
    }
  }

  getOperators(componentId: string, fieldName: string): Observable<Operator[]> {
    const fieldNameCopy = fieldName.toLowerCase();

    switch (componentId.toLowerCase()) {
      case 'engine':
        if (fieldNameCopy === 'time-since-start') {
          return of([
            { id: 'eq', name: '=' },
            { id: 'gt', name: '>' },
            { id: 'gte', name: '>=' }
          ]);
        }
        break;

      case 'drivetrain':
        if (fieldNameCopy === 'tire-pressure-lf') {
          return of([
            { id: 'eq', name: '=' },
            { id: 'gt', name: '>' },
            { id: 'gte', name: '>=' },
            { id: 'lt', name: '<' },
            { id: 'lte', name: '<=' }
          ]);
        }

        if (fieldNameCopy === 'engine-miles') {
          return of([
            { id: 'eq', name: '=' },
            { id: 'gt', name: '>' },
            { id: 'gte', name: '>=' }
          ]);
        }

        break;

      case 'vehicle':
        if (fieldNameCopy === 'started') {
          return of([{ id: 'eq', name: '=' }, { id: 'neq', name: '!=' }]);
        }

        if (fieldNameCopy === 'vin') {
          return of([{ id: 'eq', name: '=' }, { id: 'neq', name: '!=' }]);
        }

        break;
    }
  }

  getComponentTypes(): Observable<ComponentType[]> {
    return of([
      { id: 'engine', name: 'Engine' },
      { id: 'drivetrain', name: 'Drivetrain' },
      { id: 'vehicle', name: 'Vehicle' }
    ]);
  }

  getTelemetryTypes(): Observable<TelemetryType[]> {
    return of([
      { id: 'telemetry', name: 'Telemetry' },
      { id: 'property', name: 'Property' },
      { id: 'event', name: 'Event' }
    ]);
  }

  getLogicalOperators(): Observable<LogicalOperator[]> {
    return of([{ id: 'and', name: 'And' }, { id: 'or', name: 'Or' }]);
  }

  getTelemetryTypesForComponent(
    componentId: string
  ): Observable<TelemetryType[]> {
    switch (componentId.toLowerCase()) {
      case 'engine':
        return of([{ id: 'telemetry', name: 'Telemetry' }]);

      case 'drivetrain':
        return of([
          { id: 'telemetry', name: 'Telemetry' },
          { id: 'property', name: 'Property' }
        ]);

      case 'vehicle':
        return of([
          { id: 'event', name: 'Event' },
          { id: 'property', name: 'Property' }
        ]);
    }
  }
}
