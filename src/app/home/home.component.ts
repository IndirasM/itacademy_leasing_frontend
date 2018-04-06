import { Component, OnInit } from '@angular/core';
import {LeaseToUserService} from '../services/leasing-to-user.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  customerType: string;

  onPrivate() {
    this.customerType = 'Private';
    this.customerTypeService.changeUserType(this.customerType);
  }
  onCorporate() {
    this.customerType = 'Corporate';
    this.customerTypeService.changeUserType(this.customerType);
  }

  constructor(private customerTypeService: LeaseToUserService) {

   }

  ngOnInit() {
  }

}
