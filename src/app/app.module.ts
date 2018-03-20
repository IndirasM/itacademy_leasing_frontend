import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MatSliderModule } from '@angular/material';
import { LeasingFormComponent } from './leasing-form/leasing-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LeasingFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
