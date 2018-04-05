import { Component, OnInit } from '@angular/core';
import {LeaseToUserService} from '../services/leasing-to-user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  leaseType: any;

  onPrivate() {
    this.leaseType = 'private';
    this.leaseType.changeUserType(this.leaseType);
  }
  onCorporate() {
    this.leaseType = 'corporate';
    this.leaseType.changeUserType(this.leaseType);
  }

  constructor(private customerTypeService: LeaseToUserService) {

   }

  ngOnInit() {
  }

}
