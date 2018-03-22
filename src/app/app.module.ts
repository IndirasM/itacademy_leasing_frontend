import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrivateLeasingFormComponent } from './private/private-leasing-form-list/private-leasing-form/private-leasing-form.component';
import { MatDialogModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrivateLeasingFormsService } from './services/private-leasing-forms.service';
import { PrivateLeasingFormDialogComponent } from './private/private-leasing-data-form/private-leasing-form-dialog-component';
import { PrivateLeasingDataFormComponent } from './private/private-leasing-data-form/private-leasing-data-form.component';
import { ProductFilterPipe } from './private/private-leasing-data-form/private-leasing-form-filter.pipe';
import {MatSliderModule} from '@angular/material/slider';
import { HttpModule } from '@angular/http';
import {MatRadioModule} from '@angular/material/radio';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';


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
    ReactiveFormsModule,
    BrowserAnimationsModule,
        MatRadioModule,
        MatInputModule,
        MatAutocompleteModule,
        MatDatepickerModule,
        MatSelectModule,
        MatCardModule,
        MatDatepickerModule
  ],
  providers: [
    PrivateLeasingFormsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
