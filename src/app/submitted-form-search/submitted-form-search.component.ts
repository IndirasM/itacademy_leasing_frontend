import {Component, OnInit} from '@angular/core';
import {LeaseToUserService} from '../services/leasing-to-user.service';
import {FormsToBackService} from '../services/forms-to-back.service';
import {LeaseData} from '../private/private-leasing-data-form/private-leasing-data';
import {PrivateUserData} from '../private/private-user-data-form/privateUserData';
import {CorporateUserData} from '../corporate/corporate-user-data-form/corporateUserData';

@Component({
  selector: 'app-submitted-form-search',
  templateUrl: './submitted-form-search.component.html',
  styleUrls: ['./submitted-form-search.component.css']
})
export class SubmittedFormSearchComponent implements OnInit {

  constructor(
    private leaseService: LeaseToUserService,
    ) {}

  public leaseData: LeaseData;
  public userData: PrivateUserData;
  private corporateUserData: CorporateUserData;

  ngOnInit() {
    this.leaseService.toSend.subscribe(leaseData => {
      if (leaseData) {
        this.leaseData = leaseData;
      }
    });
    this.leaseService.toSendUser.subscribe(userData => {
      if (userData) {
        this.userData = userData;
      }
    });
    this.leaseService.toSendCorporate.subscribe(corporateUserData => {
      this.corporateUserData = corporateUserData;
    });
  }

}
