// <reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {LeaseData} from '../../private/private-leasing-data-form/private-leasing-data';
import {FormGroup} from '@angular/forms';
import {LeaseToUserService} from '../../services/leasing-to-user.service';
import {FormsToBackService} from '../../services/forms-to-back.service';
import { CorporateUserData } from '../../corporate/corporate-user-data-form/corporateUserData';

@Component({
  selector: 'app-corporate-form-preview',
  templateUrl: './corporate-form-preview.component.html',
  styleUrls: ['./corporate-form-preview.component.css']
})

export class FormPreviewComponent implements OnInit {
  constructor(private leaseService: LeaseToUserService,
              private sendService: FormsToBackService) {
  }

  private leaseData: LeaseData;
  private corporateUserData: CorporateUserData;
  // public newData: PromisedLease;
  public errorMessages: string;
  public sendReady = false;
  public userReady = false;
  public corporateReady = false;
  public ready;
  public clicked = false;

  ngOnInit() {
    this.leaseService.toSend.subscribe(leaseData => {
      if (leaseData) {
        this.sendReady = true;
        this.leaseData = leaseData;
      }
    });
    this.leaseService.toSendCorporate.subscribe(corporateUserData => {
      this.corporateReady = true;
      this.corporateUserData = corporateUserData;
    });

  }

  sendToDb() {
    this.clicked = true;
    let dataArray;
    if (this.leaseData.leaseType = 'Corporate') {
      dataArray = {'lease': this.leaseData, 'corporateCustomer': this.corporateUserData};
    }
    console.log(dataArray);

    this.sendService.sendLeasingForm(JSON.stringify(dataArray)).then(data => {
        // this.errorMessages =
        //   'Your application has been accepted and is being processed right now. You should receive decision within 3 days.';
          this.leaseService.changeStep(3);
      }).catch(data => {
        // return user to incorrectly filled field (user form)
        // if 500 smth went wrong, try again
        if (data.status === 500) {
          this.errorMessages = 'Something went wrong, please try again.';
        }
        if (data.status === 503) {
          this.errorMessages = 'Service is currently unavailable, please try again later.';
        }
        // if 400 bad input data, retrieve error and send user to the field
        if (data.status === 400) {
          let errors = [];
          errors = data.error.fieldErrors;
          for (let i = 0; i < errors.length; i++) {
            this.errorMessages += errors[i].field + '\n';
          }
        }
    });
  }
}

// export class PromisedLease {
//   assetType: string;
//   leaseType: string;
//   carBrand: string;
//   carModel: string;
//   years: string;
//   enginePower: number;
//   assetPrice: number;
//   advancePaymentPercentage: number;
//   advancePaymentAmount: number;
//   leasePeriod: number;
//   margin: number;
//   contractFee: number;
//   paymentDate: number;
//   errorCodes: number;

//   constructor(data) {
//     this.assetType = data.assetType;
//     this.leaseType = data.leaseType;
//     this.carBrand = data.carBrand;
//     this.carModel = data.carModel;
//     this.years = data.years;
//     this.enginePower = data.enginePower;
//     this.assetPrice = data.assetPrice;
//     this.advancePaymentPercentage = data.advancePaymentPercentage;
//     this.advancePaymentAmount = data.advancePaymentAmount;
//     this.leasePeriod = data.leasePeriod;
//     this.margin = data.margin;
//     this.contractFee = data.contractFee;
//     this.paymentDate = data.paymentDate;
//     this.errorCodes = data.errorCodes;
//   }
// }
