import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class FormsToBackService {

    formsUrl = 'https://car-leasing-service.herokuapp.com';

    constructor(private http: HttpClient) {

    }

    sendLeasingForm(leaseData) {
        return this.http.post(this.formsUrl + '/leasing/add', leaseData).toPromise();
    }

    sendPrivateUserForm(userData) {
        return this.http.post(this.formsUrl + '/private_customer/add', userData).toPromise();
    }

    sendCorporateUserForm(corporateUserData) {
        return this.http.post(this.formsUrl + '/corporate_customer/add', corporateUserData).toPromise();
    }

    sendPartialLeaseForm(leaseData): any {
        const formattedForm = leaseData;



        return this.http.post(this.formsUrl + '/schedule-of-contributions/post', formattedForm).toPromise();
    }

}
