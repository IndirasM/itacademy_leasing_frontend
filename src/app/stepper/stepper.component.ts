import { Component, OnInit } from '@angular/core';
import { PrivateUserDataFormComponent } from '../private/private-user-data-form/private-user-data-form.component';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
  PrivateUserDataForm : PrivateUserDataFormComponent;
  constructor() { }

  ngOnInit() {
  }

}
