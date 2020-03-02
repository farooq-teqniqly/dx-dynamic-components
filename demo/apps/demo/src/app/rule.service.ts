import { Injectable } from '@angular/core';
import { ComponentType, TelemetryType } from '@demo/query-editor';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RuleService {

  constructor() { }

  getComponentTypes(): Observable<ComponentType[]> {
    return of([
      { id: 'engine', name: 'Engine'},
      { id: 'drivetrain', name: 'Drivetrain'},
      { id: 'vehicle', name: 'Vehicle'}
    ]);
  }

  getTelemetryTypes(): Observable<TelemetryType[]> {
    return of([
      {id: 'telemetry', name: 'Telemetry'},
      {id: 'property', name: 'Property'},
      {id: 'event', name: 'Event'}
    ]);
  }
}
