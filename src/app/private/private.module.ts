import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateLeasingFormComponent } from './private-leasing-form/private-leasing-form.component';
import { PrivateUserDataFormComponent } from './private-user-data-form/private-user-data-form.component';
import { CreatePrivateLeasingFormComponent } from './create-private-leasing-form/create-private-leasing-form.component';
import { PrivateLeasingFormListComponent } from './private-leasing-form-list/private-leasing-form-list.component';
import { PrivateLeasingFormsComponent } from './private-leasing-forms/private-leasing-forms.component';

@NgModule({
  imports: [
    CommonModule
  ],

  declarations: [
    PrivateLeasingFormComponent,
    CreatePrivateLeasingFormComponent,
    PrivateLeasingFormListComponent,
    PrivateLeasingFormsComponent,
    PrivateUserDataFormComponent,
    PrivateLeasingFormComponent
  ]
})
export class PrivateModule { }
