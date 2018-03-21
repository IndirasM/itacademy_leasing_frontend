import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PrivateUserDataFormComponent } from './private/private-user-data-form/private-user-data-form.component';
import { MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PrivateLeasingFormDialogComponent } from './private/private-user-data-form/private-leasing-form-dialog-component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrivateUserDataFormComponent,
    PrivateLeasingFormDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [PrivateLeasingFormDialogComponent]
})
export class AppModule { }
