import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import {privateUserData} from './privateUserData';
@Component({
  selector: 'private-user-data-form',
  templateUrl: './private-user-data-form.component.html',
  styleUrls: ['./private-user-data-form.component.css']
})
export class PrivateUserDataFormComponent implements OnInit {
  
  privateUserData : FormGroup;

  ngOnInit() {
   this.privateUserData = new FormGroup({
    firstName: new FormControl('',Validators.required),
    lastName:new FormControl('',Validators.required),
    personalCode: new FormControl('',[
      Validators.minLength(11),
      Validators.required
    ]),
    adress: new FormControl('',Validators.required),
    phoneNumber: new FormControl('',Validators.required),
    email: new FormControl('',[
      Validators.required,
      Validators.pattern("[^@]*@[^@]*")
    ])
   })
  }
}
