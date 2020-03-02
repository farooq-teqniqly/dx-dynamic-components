import { Component, OnInit } from '@angular/core';
import { RuleService } from './rule.service';
import { ComponentType, TelemetryType } from '@demo/query-editor';
import { Observable } from 'rxjs';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'demo';
  componentTypes$: Observable<ComponentType[]>;
  telemetryTypes$: Observable<TelemetryType[]>;

  constructor(private ruleService: RuleService){}

  ngOnInit(): void {
    this.componentTypes$ = this.ruleService.getComponentTypes();
    this.telemetryTypes$ = this.ruleService.getTelemetryTypes();
  }
}
