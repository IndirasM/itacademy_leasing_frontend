import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorporateLeasingDataFormComponent } from './corporate-leasing-data-form/corporate-leasing-data-form.component';
import { CorporateFormPreviewComponent } from '../corporate/corporate-form-preview/corporate-form-preview.component';


@NgModule({
  imports: [
    CommonModule,
    CorporateLeasingDataFormComponent,
    CorporateFormPreviewComponent
  ],
  declarations: []
})
export class CorporateModule { }
