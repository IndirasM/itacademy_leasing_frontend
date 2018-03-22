import { Component, OnInit } from '@angular/core';
import { PrivateLeasingFormsService } from '../../services/private-leasing-forms.service';

@Component({
  selector: 'app-private-leasing-forms',
  templateUrl: './private-leasing-forms.component.html',
  styleUrls: ['./private-leasing-forms.component.css']
})
export class PrivateLeasingFormsComponent implements OnInit {

  listPrivateLeasingForm;
  constructor(private privateLeasingFormsService: PrivateLeasingFormsService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.privateLeasingFormsService.getAllPrivateLeasingForms()
    .then(data => {
      console.log('subscribe');
      this.listPrivateLeasingForm = data;
    });
  }
}
