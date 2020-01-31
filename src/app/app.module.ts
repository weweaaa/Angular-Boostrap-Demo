import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableFilteringComponent } from './table-filtering/table-filtering.component';
import { TableBasicComponent } from './table-basic/table-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    TableFilteringComponent,
    TableBasicComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,


    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
