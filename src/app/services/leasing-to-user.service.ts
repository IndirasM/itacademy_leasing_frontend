import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { PrivateLeasingDataFormComponent } from '../private/private-leasing-data-form/private-leasing-data-form.component';
import { LeaseData } from '../private/private-leasing-data-form/private-leasing-data';
import { PrivateUserData } from '../private/private-user-data-form/privateUserData';

@Injectable()
export class LeaseToUserService {

    src: LeaseData;
    userSrc: PrivateUserData;
    public dataSource = new BehaviorSubject<LeaseData>(this.src);
    public userDataSource = new BehaviorSubject<PrivateUserData>(this.userSrc);
    toSend = this.dataSource.asObservable();
    toSendUser = this.userDataSource.asObservable();

    constructor(){

    }

    changeData(leaseData: LeaseData){
        this.dataSource.next(leaseData);
    }

    changeUserData(userData: PrivateUserData){
        this.userDataSource.next(userData);
    }

}