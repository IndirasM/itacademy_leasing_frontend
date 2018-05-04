import { Component, OnInit } from '@angular/core';
import {LeaseToUserService} from '../services/leasing-to-user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

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
