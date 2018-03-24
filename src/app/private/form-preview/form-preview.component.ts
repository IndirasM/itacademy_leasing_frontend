///<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {LeaseData} from '../private-leasing-data-form/private-leasing-data';
import {PrivateUserData} from '../private-user-data-form/privateUserData';
import {FormGroup} from '@angular/forms';
import {LeaseToUserService} from '../../services/leasing-to-user.service';

@Component({
  selector: 'app-form-preview',
  templateUrl: './form-preview.component.html',
  styleUrls: ['./form-preview.component.css']
})
export class FormPreviewComponent implements OnInit {
  constructor(private leaseService: LeaseToUserService) {

  }

  private leaseData: LeaseData;
  private userData: PrivateUserData;

  ngOnInit() {
    this.leaseService.toSend.subscribe(leaseData => this.leaseData = leaseData);
    this.leaseService.toSendUser.subscribe(userData => this.userData = userData);
    console.log('form', this.leaseData);
    console.log('user', this.userData);
  }


}
