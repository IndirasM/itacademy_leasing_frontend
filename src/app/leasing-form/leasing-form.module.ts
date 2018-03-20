import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeasingFormRoutingModule } from './leasing-form-routing.module';
import { LeasingFormComponent } from './leasing-form.component';

@NgModule({
  imports: [
    CommonModule,
    LeasingFormRoutingModule
  ],
  declarations: [LeasingFormComponent]
})
export class LeasingFormModule { }
