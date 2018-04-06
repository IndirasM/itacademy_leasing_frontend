///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, OnInit} from '@angular/core';
import {LeaseToUserService} from '../services/leasing-to-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  customerType: string;

  onPrivate() {
    this.customerType = 'private';
    this.customerTypeService.changeUserType(this.customerType);
  }

  onCorporate() {
    this.customerType = 'corporate';
    this.customerTypeService.changeUserType(this.customerType);
  }

  constructor(private customerTypeService: LeaseToUserService) {

  }


  ngOnInit() {
  }

}
