import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PrivateLeasingFormsService } from '../../services/private-leasing-forms.service';

@Component({
  selector: 'app-private-leasing-form-list',
  templateUrl: './private-leasing-form-list.component.html',
  styleUrls: ['./private-leasing-form-list.component.css']
})
export class PrivateLeasingFormListComponent implements OnInit {

  constructor(private privateLeasingFormsService: PrivateLeasingFormsService) { }

  @Input()
  listPrivateLeasingForm;

  @Output()
  privateLeasingFormDelete = new EventEmitter<Object>();

  ngOnInit() {
  }

  onPrivateLeasingFormDeleted() {
    this.privateLeasingFormDelete.emit();
  }

}
