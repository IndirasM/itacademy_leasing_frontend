import {Component, OnInit, ViewChild} from '@angular/core';
import {PrivateUserDataFormComponent} from '../private/private-user-data-form/private-user-data-form.component';
import {LeaseToUserService} from '../services/leasing-to-user.service';
import {PrivateLeasingDataFormComponent} from '../private/private-leasing-data-form/private-leasing-data-form.component';
import {FormPreviewComponent} from '../private/form-preview/form-preview.component';
import {CorporateUserDataFormComponent} from '../corporate/corporate-user-data-form/corporate-user-data-form.component';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Validators} from '@angular/forms';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  @ViewChild('stepper') privateLeasingDataFormComponent: PrivateLeasingDataFormComponent;

  constructor(private leaseService: LeaseToUserService, private fb: FormBuilder) {
  }

  customerType: string;

  ngOnInit() {
    this.leaseService.toSendType.subscribe(customerType => this.customerType = customerType);
  }
}
