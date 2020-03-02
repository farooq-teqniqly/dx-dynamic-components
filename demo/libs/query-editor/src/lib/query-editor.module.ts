import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxModule } from '@demo/dx';
import { QueryEditorComponent } from './query-editor/query-editor.component';
import { ConditionEditorComponent } from './condition-editor/condition-editor.component';

@NgModule({
  imports: [CommonModule, DxModule],
  declarations: [QueryEditorComponent, ConditionEditorComponent],
  exports: [QueryEditorComponent, ConditionEditorComponent],
  entryComponents: [ConditionEditorComponent]
})
export class QueryEditorModule {}
