//<reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {LeaseData} from '../private-leasing-data-form/private-leasing-data';
import {PrivateUserData} from '../private-user-data-form/privateUserData';
import {FormGroup} from '@angular/forms';
import {LeaseToUserService} from '../../services/leasing-to-user.service';
import {FormsToBackService} from '../../services/forms-to-back.service';

@Component({
  selector: 'app-form-preview',
  templateUrl: './form-preview.component.html',
  styleUrls: ['./form-preview.component.css']
})

export class FormPreviewComponent implements OnInit {
  constructor(private leaseService: LeaseToUserService,
              private sendService: FormsToBackService) {
  }

  private leaseData: LeaseData;
  private userData: PrivateUserData;
  public newData: promisedLease;

  ngOnInit() {
    this.leaseService.toSend.subscribe(leaseData => this.leaseData = leaseData);
    this.leaseService.toSendUser.subscribe(userData => this.userData = userData);
  }

  sendToDb(){
    this.sendService.sendLeasingForm(this.leaseData).then(data => {
      console.log(data);
      this.sendService.sendPrivateUserForm(this.userData).then(data => {
        console.log(data);
      }).catch( data => {
        console.log(data);
        let errors = data.error.fieldErrors; 
      })
    })
  }
}

export class promisedLease {
  id: string;
  assetType: string;
  //leaseType: string;
  carBrand: string;
  carModel: string;
  years: string;
  enginePower: number;
  assetPrice: number;
  advancePaymentPercentage: number;
  advancePaymentAmount: number;
  leasePeriod: number;
  margin: number;
  contractFee: number;
  paymentDate: number;
  errorCodes: number;
}
