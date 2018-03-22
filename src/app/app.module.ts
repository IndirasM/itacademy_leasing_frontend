import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivateLeasingFormComponent } from './private/private-leasing-form-list/private-leasing-form/private-leasing-form.component';
import { MatSliderModule, MatDialogModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrivateLeasingFormsService } from './services/private-leasing-forms.service';
import { PrivateLeasingFormDialogComponent } from './private/private-leasing-data-form/private-leasing-form-dialog-component';
import { PrivateLeasingDataFormComponent } from './private/private-leasing-data-form/private-leasing-data-form.component';
import { ProductFilterPipe } from './private/private-leasing-data-form/private-leasing-form-filter.pipe';

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    PrivateLeasingFormComponent,
    PageNotFoundComponent,
    PrivateLeasingFormDialogComponent,
    PrivateLeasingDataFormComponent,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [
    PrivateLeasingFormsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
