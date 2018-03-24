import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PrivateLeasingFormsService {

  constructor(private http: HttpClient) { }

  createPrivateLeasingForm(customerType, assetType) {
    const post = {
      title: 'some title',
      content: assetType,
      author: customerType,
      date: 'some date'
    };

    return this.http
    .post('http://localhost:4200//add', post)
    .toPromise();
  }

  getAllPrivateLeasingForms() {
    return this.http
    .get('http://localhost:4200')
    .toPromise();
  }

  deletePrivateLeasingForm(id) {
    return this.http
    .delete('http://localhost:4200/delete/' + id)
    .toPromise();
  }
}
