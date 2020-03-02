import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  DxButtonModule,
  DxSelectBoxModule,
  DxTextBoxModule,
  DxFormModule
} from 'devextreme-angular';

@NgModule({
  imports: [
    CommonModule,
    DxButtonModule,
    DxSelectBoxModule,
    DxTextBoxModule,
    DxFormModule
  ],
  exports: [DxButtonModule, DxSelectBoxModule, DxTextBoxModule, DxFormModule]
})
export class DxModule {}
