import { Component, OnInit } from '@angular/core';
import { FormsToBackService } from '../services/forms-to-back.service';
import {
  BackLeaseData,
  LeaseData
} from '../private/private-leasing-data-form/private-leasing-data';
import { PrivateUserData } from '../private/private-user-data-form/privateUserData';
import { CorporateUserData } from '../corporate/corporate-user-data-form/corporateUserData';

@Component({
  selector: 'app-leasing-officer',
  templateUrl: './leasing-officer.component.html',
  styleUrls: ['./leasing-officer.component.css']
})
export class LeasingOfficerComponent implements OnInit {
  public users = [];
  public privateCustomers = [];
  public corporateCustomers = [];
  public size = 0;
  public item;
  panelOpenState = false;
  public privateUser: PrivateUserData;
  public lease;
  public statusChanged = false;

  constructor(
    private retrievalService: FormsToBackService,
    private updateService: FormsToBackService
  ) {}

  ngOnInit() {
    this.retrievalService.retrieveUsers().then(data => {
      (this.size = 0), this.item;
      for (this.item in data) {
        if (data.hasOwnProperty(this.item)) {
          this.size++;
        }
      }
      for (let i = 0; i < this.size; i++) {
        this.users.push(data[i]);
      }
      this.createCustomers();
    });
  }

  createCustomers() {
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].lease.leaseType == 'Private') {
        this.privateCustomers.push(
          new PrivateCustomer(this.users[i].lease, this.users[i].customer)
        );
      } else if (this.users[i].lease.leaseType == 'Corporate') {
        this.corporateCustomers.push(
          new CorporateCustomer(this.users[i].lease, this.users[i].customer)
        );
      }
    }
  }

  checkStatus(privateCustomer) {
    if (privateCustomer.status != 'Waiting') { return true; } else { return false; }
  }

  approveLease(customer) {
    customer.status = 'Accepted';
    this.lease = new BackLeaseData(customer);
    this.updateService.updateApprovedLease(this.lease);
  }

  declineLease(customer) {
    customer.status = 'Rejected';
    this.lease = new BackLeaseData(customer);
    this.updateService.updateDeclinedLease(this.lease);
  }
}

export class PrivateCustomer {
  address: string;
  email: string;
  firstName: string;
  lastName: string;
  personalCode: string;
  phoneNumber: string;
  /*=======================*/
  advancePaymentAmount: string;
  advancePaymentPercentage: string;
  applicationDate: string;
  assetPrice: string;
  assetType: string;
  carBrand: string;
  carModel: string;
  contractFee: string;
  enginePower: string;
  leasePeriod: string;
  leaseType: string;
  margin: string;
  paymentDate: string;
  status: string;
  years: string;
  id: string;

  constructor(leaseData: BackLeaseData, userData: PrivateUserData) {
    this.address = userData.address;
    this.email = userData.email;
    this.firstName = userData.firstName;
    this.lastName = userData.lastName;
    this.personalCode = userData.personalCode;
    this.phoneNumber = userData.phoneNumber;
    this.advancePaymentAmount = leaseData.advancePaymentAmount;
    this.advancePaymentPercentage = leaseData.advancePaymentPercentage;
    this.applicationDate = leaseData.applicationDate;
    this.assetPrice = leaseData.assetPrice;
    this.assetType = leaseData.assetType;
    this.carBrand = leaseData.carBrand;
    this.carModel = leaseData.carModel;
    this.contractFee = leaseData.contractFee;
    this.enginePower = leaseData.enginePower;
    this.leasePeriod = leaseData.leasePeriod;
    this.leaseType = leaseData.leaseType;
    this.margin = leaseData.margin;
    this.paymentDate = leaseData.paymentDate;
    this.status = leaseData.status;
    this.years = leaseData.years;
    this.id = leaseData.id;
  }
}
export class CorporateCustomer {
  address: string;
  companyCode: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  /*=======================*/
  advancePaymentAmount: string;
  advancePaymentPercentage: string;
  applicationDate: string;
  assetPrice: string;
  assetType: string;
  carBrand: string;
  carModel: string;
  contractFee: string;
  enginePower: string;
  leasePeriod: string;
  leaseType: string;
  margin: string;
  paymentDate: string;
  status: string;
  years: string;
  id: string;

  constructor(leaseData: BackLeaseData, userData: CorporateUserData) {
    this.address = userData.address;
    this.email = userData.email;
    this.companyName = userData.companyName;
    this.companyCode = userData.companyCode;
    this.phoneNumber = userData.phoneNumber;
    this.advancePaymentAmount = leaseData.advancePaymentAmount;
    this.advancePaymentPercentage = leaseData.advancePaymentPercentage;
    this.applicationDate = leaseData.applicationDate;
    this.assetPrice = leaseData.assetPrice;
    this.assetType = leaseData.assetType;
    this.carBrand = leaseData.carBrand;
    this.carModel = leaseData.carModel;
    this.contractFee = leaseData.contractFee;
    this.enginePower = leaseData.enginePower;
    this.leasePeriod = leaseData.leasePeriod;
    this.leaseType = leaseData.leaseType;
    this.margin = leaseData.margin;
    this.paymentDate = leaseData.paymentDate;
    this.status = leaseData.status;
    this.years = leaseData.years;
    this.id = leaseData.id;
  }
}
