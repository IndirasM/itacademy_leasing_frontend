import {Component, OnInit} from '@angular/core';
import {LeaseData} from '../../private/private-leasing-data-form/private-leasing-data';
import {FormGroup} from '@angular/forms';
import {LeaseToUserService} from '../../services/leasing-to-user.service';
import {FormsToBackService} from '../../services/forms-to-back.service';
import {CorporateUserData } from '../../corporate/corporate-user-data-form/corporateUserData';

@Component({
  selector: 'app-corporate-form-preview',
  templateUrl: './corporate-form-preview.component.html',
  styleUrls: ['./corporate-form-preview.component.css']
})

export class CorporateFormPreviewComponent implements OnInit {
  constructor(private leaseService: LeaseToUserService,
              private sendService: FormsToBackService) {
  }

  private leaseData: LeaseData;
  private corporateUserData: CorporateUserData;
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
    this.sendService.sendLeasingForm(JSON.stringify(dataArray)).then(data => {
              this.leaseService.changeStep(3);
      }).catch(data => {
        if (data.status === 500) {
          this.errorMessages = 'Something went wrong, please try again.';
        }
        if (data.status === 503) {
          this.errorMessages = 'Service is currently unavailable, please try again later.';
        }

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
