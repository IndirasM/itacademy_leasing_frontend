import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { PrivateUserData } from './privateUserData';
import { LeaseToUserService } from '../../services/leasing-to-user.service';
import { LeaseData } from '../private-leasing-data-form/private-leasing-data';


@Component({
  selector: 'private-user-data-form',
  templateUrl: './private-user-data-form.component.html',
  styleUrls: ['./private-user-data-form.component.css']
})
export class PrivateUserDataFormComponent implements OnInit  {
  
  public userForm : FormGroup;
  public leaseData: LeaseData;
  public userData: PrivateUserData;

  constructor(fb: FormBuilder, private leaseService: LeaseToUserService){
    this.userForm = fb.group({
      firstName: [null,[Validators.minLength(3),Validators.maxLength(15)]],
      lastName: [null,[Validators.minLength(3),Validators.maxLength(20)]],
      personalCode:[null,[Validators.pattern('(^[34])[0-9]{10}')]],
      phoneNumber:[null,[Validators.pattern('[0-9]+')]],
      email:[null,[Validators.email]],
      adress:[null,[]]
    })
    this.send();
  }
  ngOnInit() {
    this.leaseService.toSend.subscribe(leaseData => this.leaseData = leaseData);
  }

get firstName(){
  return this.userForm.get('firstName') as FormControl;
}
get lastName(){
  return this.userForm.get('lastName') as FormControl;
}
get personalCode(){
  return this.userForm.get('personalCode') as FormControl;
}
get phoneNumber(){
  return this.userForm.get('phoneNumber') as FormControl;
}
get email(){
  return this.userForm.get('email') as FormControl;
}
get adress(){
  return this.userForm.get('adress') as FormControl;
}
 send(){
  
   this.userData ={
     firstName: this.userForm.get('firstName').value,
     lastName: this.userForm.get('lastName').value,
     personalCode: this.userForm.get('personalCode').value,
     phoneNumber: this.userForm.get('phoneNumber').value,
     email: this.userForm.get('email').value,
     address: this.userForm.get('adress').value,
     leasId:1
   }
   console.log(this.userData);
   console.log(this.leaseData);

   
 }
}
