import { Component, OnInit } from '@angular/core';
import { PrivateUserDataFormComponent } from '../private/private-user-data-form/private-user-data-form.component';
import {LeaseToUserService} from '../services/leasing-to-user.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  PrivateUserDataForm : PrivateUserDataFormComponent;
  constructor(private leaseService: LeaseToUserService) { }
  customerType: string ="private";
  ngOnInit() {
    this.leaseService.toSendType.subscribe(customerType => this.customerType = customerType);
  }

}
