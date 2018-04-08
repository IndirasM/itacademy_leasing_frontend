import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
import { PrivateUserData } from './privateUserData';
import { LeaseToUserService } from '../../services/leasing-to-user.service';
import { LeaseData } from '../private-leasing-data-form/private-leasing-data';
import { Directive, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-private-user-data-form',
  templateUrl: './private-user-data-form.component.html',
  styleUrls: ['./private-user-data-form.component.css']
})
export class PrivateUserDataFormComponent implements OnInit {
  public userForm: FormGroup;
  public leaseData: LeaseData;
  public userData: PrivateUserData;

  constructor(fb: FormBuilder, private leaseService: LeaseToUserService) {
    this.userForm = fb.group({
      firstName: [
        null,
        [
          Validators.pattern(
            '[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]{3,15}'
          )
        ]
      ],
      lastName: [
        null,
        [
          Validators.pattern(
            '[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð]{3,15}'
          )
        ]
      ],
      personalCode: [
        null,
        [Validators.pattern('(^[3456])[0-9]{2}(0[1-9]|1[0-2])([0-1][1-9]|2[0-9]|3[0-1])[0-9]{4}'), Validators.maxLength(11)]
      ],
      phoneNumber: [
        null,
        [Validators.pattern('(86|\\+3706|3706)\\d{3}\\d{4}')]
      ],
      email: [null, [Validators.pattern(/.+@.+[\.].+/), Validators.maxLength(64)]],
      address: [
        null,
        [
          Validators.pattern('.*[0-9].*'),
          Validators.pattern(
            '.*[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð].*'
          ),
          Validators.pattern(/.+[\s].+/),
          Validators.maxLength(64)
        ]
      ]
    });
  }

  ngOnInit() {
    this.leaseService.toSend.subscribe(
      leaseData => (this.leaseData = leaseData)
    );
  }
  send() {
    if (this.userForm.valid) {
      this.userData = {
        firstName: this.userForm.value['firstName'],
        lastName: this.userForm.value['lastName'],
        personalCode: this.userForm.value['personalCode'],
        phoneNumber: this.userForm.value['phoneNumber'],
        email: this.userForm.value['email'],
        address: this.userForm.value['address']
      };
      this.leaseService.changeUserData(this.userData);
    } else {
      this.validateAllFormFields(this.userForm);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
