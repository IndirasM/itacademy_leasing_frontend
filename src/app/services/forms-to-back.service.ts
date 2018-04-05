import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TagContentType } from '@angular/compiler';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class FormsToBackService {

    formsUrl = 'https://car-leasing-service.herokuapp.com';

    constructor(private http: HttpClient) {

    }

  
    sendPrivateUserForm(userData) {
        return this.http.post(this.formsUrl + '/private-customer/add', userData).toPromise();
    }

    sendCorporateUserForm(corporateUserData) {
        return this.http.post(this.formsUrl + '/corporate-customer/add', corporateUserData).toPromise();
    }

    sendPartialLeaseForm(leaseData): any {
        const formattedForm = leaseData;



        return this.http.post(this.formsUrl + '/schedule-of-contributions/post', formattedForm).toPromise();
    }

}

    sendLeasingForm(leaseData){
        return this.http.post(this.formsUrl + '/complete-lease/add', leaseData, this.httpOptions).toPromise();
    }

    httpOptions = {
    headers: new HttpHeaders({
        'Content-Type':  'application/json'
    })
};
}

