import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ComponentType, TelemetryType } from '../models';

@Component({
  selector: 'demo-query-editor',
  templateUrl: './query-editor.component.html',
  styleUrls: ['./query-editor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QueryEditorComponent implements OnInit {

  constructor() { }

  @Input() components: ComponentType[];
  @Input() telemetryTypes: TelemetryType[];

  ngOnInit(): void {
  }

}
