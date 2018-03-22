import { Component, OnInit } from '@angular/core';
// import {privateUserData} from './privateUserData';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'private-user-data-form',
  templateUrl: './private-user-data-form.component.html',
  styleUrls: ['./private-user-data-form.component.css']
})
export class PrivateUserDataFormComponent implements OnInit  {
  
  privateUserData : FormGroup;
  post:any;                       // A property for our submitted form
  description: string = '';
  name: string='';
  titleAlert:string = 'This field is required';

  constructor(private fb:FormBuilder){
    this.privateUserData = fb.group({
     'name':[null,Validators.required],
     'description': [null,Validators.compose([Validators.required,Validators.minLength(30),Validators.maxLength(500)])],
      'validate':''
    });
  }
  addPost(post){
    this.description = post.description;
    this.name = post.name;
  }
  ngOnInit() {
    this.privateUserData.get('validate').valueChanges.subscribe(

      (validate) => {

          if (validate == '1') {
              this.privateUserData.get('name').setValidators([Validators.required, Validators.minLength(3)]);
              this.titleAlert = 'You need to specify at least 3 characters';
          } else {
              this.privateUserData.get('name').setValidators(Validators.required);
          }
          this.privateUserData.get('name').updateValueAndValidity();

      });
  }
}
