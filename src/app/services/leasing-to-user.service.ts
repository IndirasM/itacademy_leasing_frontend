import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {PrivateLeasingDataFormComponent} from '../private/private-leasing-data-form/private-leasing-data-form.component';
import {LeaseData} from '../private/private-leasing-data-form/private-leasing-data';
import {PrivateUserData} from '../private/private-user-data-form/privateUserData';
import {CorporateUserData} from '../corporate/corporate-user-data-form/corporateUserData';

@Injectable()
export class LeaseToUserService {
  homeSrc: string;
  corporateSrc: CorporateUserData;
  src: LeaseData;
  userSrc: PrivateUserData;
  messageSrc: string;
  public homeSource = new BehaviorSubject<string>(this.homeSrc);
  public dataSource = new BehaviorSubject<LeaseData>(this.src);
  public userDataSource = new BehaviorSubject<PrivateUserData>(this.userSrc);
  public corporateDataSource = new BehaviorSubject<CorporateUserData>(this.corporateSrc);
  public messageSource = new BehaviorSubject<string>(this.messageSrc);
  toSend = this.dataSource.asObservable();
  toSendUser = this.userDataSource.asObservable();
  toSendCorporate = this.corporateDataSource.asObservable();
  toSendType = this.homeSource.asObservable();
  toSendMessage = this.messageSource.asObservable();



  public isValidSource = new BehaviorSubject<boolean>(false);
  currentValid = this.isValidSource.asObservable();

  public isValidSource2 = new BehaviorSubject<boolean>(false);
  currentValid2 = this.isValidSource2.asObservable();


  constructor() {
  }

  changeIsValidForm(isValidForm: boolean) {
    this.isValidSource.next(isValidForm);
  }
  changeIsValidForm2(isValidForm: boolean) {
    this.isValidSource2.next(isValidForm);
  }
  changeData(leaseData: LeaseData) {
    this.dataSource.next(leaseData);
  }

  changeUserData(userData: PrivateUserData) {
    this.userDataSource.next(userData);
  }

  changeCorporateData(corporateUserData: CorporateUserData) {
    this.corporateDataSource.next(corporateUserData);
  }

  changeUserType(customerType: string) {
    this.homeSource.next(customerType);
  }

  passFinalMessage(message: string) {
    this.messageSource.next(message);
  }
}
