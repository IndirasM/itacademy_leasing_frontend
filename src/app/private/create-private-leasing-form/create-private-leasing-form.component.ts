import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PrivateLeasingFormsService } from '../../services/private-leasing-forms.service';

@Component({
  selector: 'app-create-private-leasing-form',
  templateUrl: './create-private-leasing-form.component.html',
  styleUrls: ['./create-private-leasing-form.component.css']
})
export class CreatePrivateLeasingFormComponent implements OnInit {

  customerType;
  assetType;
  // brand;
  // model;
  // year;
  // enginePower;
  // assetPrice;
  // advancePaymentPercentage;
  // advancePaymentAmount;
  // leasePeriod;
  // margin;
  // contractFee;
  // paymentDate;
  constructor(private privateLeasingFormsService: PrivateLeasingFormsService) { }

  @Output()
  newPrivateLeasingForm = new EventEmitter<Object>();

  ngOnInit() {
  }

  createPrivateLeasingForm() {
    console.log(this.customerType + ' ' + this.assetType);

    this.privateLeasingFormsService
      .createPrivateLeasingForm(this.customerType, this.assetType)
      .then(data => {
        console.log('createPrivateLeasingForm callback');
        this.newPrivateLeasingForm.emit(data);
        this.customerType = '';
        this.assetType = '';
      });
  }

}
