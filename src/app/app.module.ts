import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormPreviewComponent } from "./private/form-preview/form-preview.component";
import { PrivateUserDataFormComponent } from "./private/private-user-data-form/private-user-data-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatDialogModule, MatTabsModule } from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PrivateLeasingDataFormComponent } from "./private/private-leasing-data-form/private-leasing-data-form.component";
import { ProductFilterPipe } from "./private/private-leasing-data-form/private-leasing-form-filter.pipe";
import { MatSliderModule } from "@angular/material/slider";
import { MatRadioModule } from "@angular/material/radio";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatInputModule } from "@angular/material/input";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSelectModule } from "@angular/material/select";
import { MatCardModule } from "@angular/material/card";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { LeaseToUserService } from "./services/leasing-to-user.service";
import { BrandsAndModelsService } from "./services/BrandsAndModelsService";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatFormFieldModule } from "@angular/material/form-field";
import { CorporateUserDataFormComponent } from "./corporate/corporate-user-data-form/corporate-user-data-form.component";
import { HomeComponent } from "./home/home.component";
import { FormsToBackService } from "./services/forms-to-back.service";
import { StepperComponent } from "./stepper/stepper.component";
import { MatStepperModule } from "@angular/material/stepper";
import { EndScreenComponent } from "./end-screen/end-screen.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatTableModule } from "@angular/material/table";
import { SubmittedFormSearchComponent } from "./submitted-form-search/submitted-form-search.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { LeasingOfficerComponent } from "./leasing-officer/leasing-officer.component";
import { MatListModule } from "@angular/material/list";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { ErrorSnackBarComponent } from './leasing-officer/errorComponent';
import { BrowserModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { GestureConfig } from '@angular/material';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    PrivateUserDataFormComponent,
    PageNotFoundComponent,
    PrivateLeasingDataFormComponent,
    ProductFilterPipe,
    FormPreviewComponent,
    CorporateUserDataFormComponent,
    HomeComponent,
    StepperComponent,
    EndScreenComponent,
    LeasingOfficerComponent,
    SubmittedFormSearchComponent,
    ErrorSnackBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
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
    MatCheckboxModule,
    MatFormFieldModule,
    MatStepperModule,
    MatToolbarModule,
    MatGridListModule,
    MatTableModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTabsModule
  ],
  providers: [LeaseToUserService, BrandsAndModelsService, FormsToBackService, { provide: HAMMER_GESTURE_CONFIG, useClass: GestureConfig }],
  bootstrap: [AppComponent],
  entryComponents: [ErrorSnackBarComponent]

})
export class AppModule {}
