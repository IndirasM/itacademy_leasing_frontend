// <reference path="../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
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
  public newData: PromisedLease;
  public errorMessages: string;
  public sendReady = false;
  public userReady = false;
  public ready;

  ngOnInit() {
    this.leaseService.toSend.subscribe(leaseData => {
      if (leaseData) {
        this.sendReady = true;
        this.leaseData = leaseData;
      }
    });
    this.leaseService.toSendUser.subscribe(userData => {
      if (userData) {
        this.userReady = true;
        this.userData = userData;
      }
    });
  }

  sendToDb() {
    this.sendService.sendLeasingForm(this.leaseData).then(data => {
      this.newData = new PromisedLease(data);
      this.userData.leaseId = this.newData.id;
      this.sendService.sendPrivateUserForm(this.userData).then(data => {
        this.ready = true;
        this.errorMessages =
          'Your application has been accepted and is being processed right now. You should receive decision within 3 days.';
        this.leaseService.passFinalMessage(this.errorMessages);
      }).catch(data => {
        // return user to incorrectly filled field (user form)

        // if 500 smth went wrong, try again
        if (data.status == 500) {
          this.errorMessages = 'Something went wrong, please try again.';
          this.leaseService.passFinalMessage(this.errorMessages);
        }
        if (data.status == 503) {
          this.errorMessages = 'Service is currently unavailable, please try again later.';
          this.leaseService.passFinalMessage(this.errorMessages);
        }
        // if 400 bad input data, retrieve error and send user to the field
        if (data.status === 400) {
          let errors = [];
          errors = data.error.fieldErrors;
          for (let i = 0; i < errors.length; i++) {
            this.errorMessages += errors[i].field + '\n';
          }
          this.leaseService.passFinalMessage(this.errorMessages);
        }
        if (data.status == 200) {
          this.errorMessages =
            'Your application has been accepted and is being processed right now. You should receive decision within 3 days.';
          this.leaseService.passFinalMessage(this.errorMessages);
        }
      });
    }).catch(data => {
      // return user to incorrectly filled field (leasing form)
    });
    // this.leaseService.passFinalMessage(this.errorMessages);
    console.log(this.errorMessages);
  }

}

export class PromisedLease {
  id: string;
  assetType: string;
  // leaseType: string;
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

  constructor(data) {
    this.id = data.id;
    this.assetPrice = data.assetType;
    this.carBrand = data.carBrand;
    this.carModel = data.carModel;
    this.years = data.years;
    this.enginePower = data.enginePower;
    this.assetPrice = data.assetPrice;
    this.advancePaymentPercentage = data.advancePaymentPercentage;
    this.advancePaymentAmount = data.advancePaymentAmount;
    this.leasePeriod = data.leasePeriod;
    this.margin = data.margin;
    this.contractFee = data.contractFee;
    this.paymentDate = data.paymentDate;
    this.errorCodes = data.errorCodes;
  }
}
