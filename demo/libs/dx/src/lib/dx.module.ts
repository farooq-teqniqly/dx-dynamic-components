import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  DxButtonModule,
  DxSelectBoxModule,
  DxTextBoxModule
} from 'devextreme-angular';

@NgModule({
  imports: [CommonModule, DxButtonModule, DxSelectBoxModule, DxTextBoxModule],
  exports: [DxButtonModule, DxSelectBoxModule, DxTextBoxModule]
})
export class DxModule {}
