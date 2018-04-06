import { Component, OnInit } from '@angular/core';
import { LeaseData } from '../private-leasing-data-form/private-leasing-data';
import { PrivateUserData } from '../private-user-data-form/privateUserData';
import { FormGroup } from '@angular/forms';
import { LeaseToUserService } from '../../services/leasing-to-user.service';
import { FormsToBackService } from '../../services/forms-to-back.service';
import { CorporateUserData } from '../../corporate/corporate-user-data-form/corporateUserData';

@Component({
  selector: 'app-form-preview',
  templateUrl: './form-preview.component.html',
  styleUrls: ['./form-preview.component.css']
})
export class FormPreviewComponent implements OnInit {
  constructor(
    private leaseService: LeaseToUserService,
    private sendService: FormsToBackService
  ) {}

  public leaseData: LeaseData;
  public userData: PrivateUserData;
  private corporateUserData: CorporateUserData;

  public errorMessages: string;
  public sendReady = false;
  public userReady = false;
  public corporateReady = false;
  public clicked = false;

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
    this.leaseService.toSendCorporate.subscribe(corporateUserData => {
      this.corporateReady = true;
      this.corporateUserData = corporateUserData;
    });
  }

  sendToDb() {
    this.clicked = true;
    let dataArray;
    if ((this.leaseData.leaseType = 'Private')) {
      dataArray = { lease: this.leaseData, privateCustomer: this.userData };
    } else if ((this.leaseData.leaseType = 'Corporate')) {
      dataArray = {
        lease: this.leaseData,
        corporateCustomer: this.corporateUserData
      };
    }
    this.sendService
      .sendLeasingForm(JSON.stringify(dataArray))
      .then(data => {
         this.leaseService.changeLeaseId(data.leaseId);
         console.log(data.leaseId);
        this.leaseService.changeStep(3);
      })
      .catch(error => {
        this.clicked = false;
        if (error.status == 500) {
          this.errorMessages = 'Something went wrong, please try again.';
        }
        if (error.status == 503) {
          this.errorMessages =
            'Service is currently unavailable, please try again later.';
        }
        if (error.status === 400) {
          let errors = [];
          errors = error.error.fieldErrors;
          for (let i = 0; i < errors.length; i++) {
            this.errorMessages += errors[i].field + '\n';
            this.errorMessages = this.errorMessages.replace('undefined', '');
          }
        }
      });
    this.errorMessages = '';
  }
}
// export class LeaseId (data: LeaseData){
//  leaseId: string;
//   constructor(){
//     this.leaseId= data.leaseId;
//   }
}
