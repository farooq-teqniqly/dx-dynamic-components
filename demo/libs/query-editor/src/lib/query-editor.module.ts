import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxModule } from '@demo/dx';
import { QueryEditorComponent } from './query-editor/query-editor.component';

@NgModule({
  imports: [CommonModule, DxModule],
  declarations: [QueryEditorComponent],
  exports: [QueryEditorComponent]
})
export class QueryEditorModule {}
