import { Component, OnInit, ViewChild } from '@angular/core';
import { PrivateUserDataFormComponent } from '../private/private-user-data-form/private-user-data-form.component';
import {LeaseToUserService} from '../services/leasing-to-user.service';
import { PrivateLeasingDataFormComponent } from '../private/private-leasing-data-form/private-leasing-data-form.component';
import { FormPreviewComponent } from '../private/form-preview/form-preview.component';
//import { PrivateUserDataFormComponent } from '../private/private-user-data-form/private-user-data-form.component'
@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  @ViewChild("PrivateLeasingDataFormComponent") privateLeasingDataFormComponent:PrivateLeasingDataFormComponent;
  @ViewChild("PrivateUserDataFormComponent") privateUserDataFormComponent:PrivateUserDataFormComponent;
  @ViewChild("FormPreviewComponent") formPreviewComponent:FormPreviewComponent;
  constructor(private leaseService: LeaseToUserService) { }
  customerType: string;
  ngOnInit() {
    this.leaseService.toSendType.subscribe(customerType => this.customerType = customerType);
  }
}
