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
    currentStep: number = 0;
    public homeSource = new BehaviorSubject<string>(this.homeSrc);
    public dataSource = new BehaviorSubject<LeaseData>(this.src);
    public userDataSource = new BehaviorSubject<PrivateUserData>(this.userSrc);
    public corporateDataSource = new BehaviorSubject<CorporateUserData>(this.corporateSrc);
    public successSource = new BehaviorSubject<number>(this.currentStep);
    toSend = this.dataSource.asObservable();
    toSendUser = this.userDataSource.asObservable();
    toSendCorporate = this.corporateDataSource.asObservable();
    toSendType = this.homeSource.asObservable();
    toSendSuccess = this.successSource.asObservable();

    constructor() {
    }

    setCurrentStep(index: number) {
        this.currentStep = index;
    }

    getCurrentStep() {
        return this.currentStep;
    }

    changeData(leaseData: LeaseData) {
        this.dataSource.next(leaseData);
    }

    changeUserData(userData: PrivateUserData) {
        this.userDataSource.next(userData);
    }

    changeCorporateData(corporateUserData: CorporateUserData){
        this.corporateDataSource.next(corporateUserData);
    }
    changeUserType(customerType:string){
        this.homeSource.next(customerType);
    }
    changeStep(index: number){
        this.setCurrentStep(index);
        this.successSource.next(index);
    }
}
