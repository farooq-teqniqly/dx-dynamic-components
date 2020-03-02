import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { QueryEditorModule } from '@demo/query-editor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    QueryEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
