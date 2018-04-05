import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TagContentType } from '@angular/compiler';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class FormsToBackService {

    formsUrl = "https://car-leasing-service.herokuapp.com";

    constructor(private http: HttpClient){

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