import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ComponentType, TelemetryType } from '../models';

@Component({
  selector: 'demo-query-editor',
  templateUrl: './query-editor.component.html',
  styleUrls: ['./query-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueryEditorComponent implements OnInit {

  constructor() { }

  componentSelected = false;

  @Input() components: ComponentType[];
  @Input() telemetryTypes: TelemetryType[];
  @Output() componentChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() telemetryTypeChanged: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
  }

  onComponentChanged(componentId: string): void {
    this.componentChanged.emit(componentId);
    this.componentSelected = true;
  }

  onTelemetryTypeChanged(telemetryTypeId: string): void {
    this.telemetryTypeChanged.emit(telemetryTypeId);
  }
}
