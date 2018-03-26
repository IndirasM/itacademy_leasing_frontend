import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateUserDataFormComponent } from './private-user-data-form/private-user-data-form.component';
import { FormPreviewComponent } from './form-preview/form-preview.component';

@NgModule({
  imports: [
    CommonModule
  ],

  declarations: [
    PrivateUserDataFormComponent,
    FormPreviewComponent,
  ]
})
export class PrivateModule { }
