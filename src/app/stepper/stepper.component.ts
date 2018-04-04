import { Component, OnInit, ViewChild } from '@angular/core';
import { PrivateUserDataFormComponent } from '../private/private-user-data-form/private-user-data-form.component';
import {LeaseToUserService} from '../services/leasing-to-user.service';
import { PrivateLeasingDataFormComponent } from '../private/private-leasing-data-form/private-leasing-data-form.component';
import { FormPreviewComponent } from '../private/form-preview/form-preview.component';
import { CorporateUserDataFormComponent } from '../corporate/corporate-user-data-form/corporate-user-data-form.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  @ViewChild('stepper') privateLeasingDataFormComponent: PrivateLeasingDataFormComponent;
  // @ViewChild("PrivateUserDataFormComponent") privateUserDataFormComponent:PrivateUserDataFormComponent;
  // @ViewChild("FormPreviewComponent") formPreviewComponent:FormPreviewComponent;
  // @ViewChild("CorporateUserDataFormComponent") corporateUserDataFormComponent:CorporateUserDataFormComponent;

  firstFormGroup: FormGroup;
  constructor(private leaseService: LeaseToUserService, private fb: FormBuilder) { }
  customerType: string;
  ngOnInit() {
    this.leaseService.toSendType.subscribe(customerType => this.customerType = customerType);

    // this.firstFormGroup = this.fb.group({
    //   firstName: [null, [Validators.pattern('[a-zA-Z]{3,15}')]],
    //   lastName: [null, [Validators.pattern('[a-zA-Z]{3,15}')]],
    //   personalCode: [null, [Validators.pattern('(^[34])[0-9]{10}')]],
    //   phoneNumber: [null, [Validators.pattern('(86|\\+3706|3706)\\d{3}\\d{4}')]],
    //   email: [null, [Validators.email]],
    //   address: [null, [Validators.pattern('.*[0-9].*'),
    //                    Validators.pattern('.*[A-Za-z].*'),
    //                    Validators.pattern(/.+[\s].+/)]]
    // })
    // this.firstFormGroup = this.privateUserForm;
  }

  // get carLeasingForm(){
  //   return this.privateLeasingDataFormComponent ? this.privateLeasingDataFormComponent.carLeasingForm : null;
  // }

  // get privateUserForm(){
  //   return this.privateUserDataFormComponent ? this.privateUserDataFormComponent.userForm : null;
  // }

  // get corporateUserForm(){
  //   return this.corporateUserDataFormComponent ? this.corporateUserDataFormComponent.corporateUserForm : null;
  // }
}
