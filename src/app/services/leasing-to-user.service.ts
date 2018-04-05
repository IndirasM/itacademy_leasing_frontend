import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { PrivateLeasingDataFormComponent } from '../private/private-leasing-data-form/private-leasing-data-form.component';
import { LeaseData } from '../private/private-leasing-data-form/private-leasing-data';
import { PrivateUserData } from '../private/private-user-data-form/privateUserData';
import { CorporateUserData } from '../corporate/corporate-user-data-form/corporateUserData';

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

    constructor() {
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
    changeUserType(leaseType: string) {
        this.homeSource.next(leaseType);
    }
    passFinalMessage(message: string) {
        this.messageSource.next(message);
    }
}
