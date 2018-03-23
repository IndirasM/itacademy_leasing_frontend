import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { MatSlider } from '@angular/material';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { PrivateLeasingFormsService } from '../../../services/private-leasing-forms.service';
@Component({
  selector: 'app-private-leasing-form',
  templateUrl: './private-leasing-form.component.html',
  styleUrls: ['./private-leasing-form.component.css']
})
export class PrivateLeasingFormComponent implements OnInit {
selectedDay = '';

  constructor(private privateLeasingFormsService: PrivateLeasingFormsService) {}

  ngOnInit() {
  }

  @Input() myPrivateLeasingForm;

  disabled = false;

  @Output() privateLeasingFormDelete = new EventEmitter<Object>();
  deletePrivateLeasingForm() {
    this.disabled = true;
    this.privateLeasingFormsService.deletePrivateLeasingForm(this.myPrivateLeasingForm.id)
    .then(data => {
      this.privateLeasingFormDelete.emit();
    });
  }

}
