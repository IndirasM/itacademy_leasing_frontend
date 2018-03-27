import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CorporateUserData } from './corporateUserData';
import { LeaseToUserService } from '../../services/leasing-to-user.service';
import { LeaseData } from '../../private/private-leasing-data-form/private-leasing-data';


@Component({
  selector: 'app-corporate-user-data-form',
  templateUrl: './corporate-user-data-form.component.html',
  styleUrls: ['./corporate-user-data-form.component.css']
})
export class CorporateUserDataFormComponent implements OnInit {

  public corporateUserForm: FormGroup;
  public leaseData: LeaseData;
  public corporateUserData: CorporateUserData;

  constructor(fb: FormBuilder, private leaseService: LeaseToUserService) {
    this.corporateUserForm = fb.group({
      companyName: [null, [Validators.pattern('[a-zA-Z]{3,20}')]],
      companyCode: [null, [Validators.pattern('[0-9]{9}')]],
      phoneNumber: [null, [Validators.pattern('(86|\\+3706|3706)\\d{3}\\d{4}')]],
      email: [null, [Validators.email]],
      adress: [null, [Validators.pattern('.*[0-9].*'),
                      Validators.pattern('.*[A-Za-z].*'),
                      Validators.pattern(/.+[\s].+/)]]
    });
  }

  ngOnInit() {
    this.leaseService.toSend.subscribe(leaseData => this.leaseData = leaseData);
  }

  get companyName() {
    return this.corporateUserForm.get('companyName') as FormControl;
  }

  get companyCode() {
    return this.corporateUserForm.get('companyCode') as FormControl;
  }

  get phoneNumber() {
    return this.corporateUserForm.get('phoneNumber') as FormControl;
  }

  get email() {
    return this.corporateUserForm.get('email') as FormControl;
  }

  get adress() {
    return this.corporateUserForm.get('adress') as FormControl;
  }

  send() {

    if (this.corporateUserForm.valid) {
      console.log('form submitted');
      this.corporateUserData = {
        companyName: this.corporateUserForm.value['companyName'],
        companyCode: this.corporateUserForm.value['companyCode'],
        phoneNumber: this.corporateUserForm.value['phoneNumber'],
        email: this.corporateUserForm.value['email'],
        address: this.corporateUserForm.value['adress'],
        leasId: 1};
        this.leaseService.changeCorporateData(this.corporateUserData);
      } else {
      console.log('invalid sumbit');
      this.validateAllFormFields(this.corporateUserForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {

    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({onlySelf: true});
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
