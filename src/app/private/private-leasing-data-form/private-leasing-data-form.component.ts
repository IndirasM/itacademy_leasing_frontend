import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig, MatDialog} from '@angular/material';
import { Validators, FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { LeaseToUserService } from '../../services/leasing-to-user.service';
import { LeaseData } from './private-leasing-data';
import { BrandsAndModelsService } from '../../services/BrandsAndModelsService';
import {ErrorStateMatcher} from '@angular/material/core';
import { Validations } from './validations';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-private-leasing-data-form',
  styles: ['input.ng-invalid {border-color: red}'],
  templateUrl: './private-leasing-data-form.component.html',
  styleUrls: ['./private-leasing-data-form.component.css'],
  providers: [],
})

export class PrivateLeasingDataFormComponent implements OnInit {

  public carLeasingForm: FormGroup;
  leaseData: LeaseData;

  assetTypes = [
    {value: 'Vehicle', viewValue: 'Vehicle'}
  ];

  years = [
    '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989',
    '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999',
    '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009',
    '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'
  ];

  brands = [];
  models = [];

  brandsAfterChangeEvent = [];


  constructor(fb: FormBuilder, private leasingData: LeaseToUserService, private carService: BrandsAndModelsService) {
    this.carLeasingForm = fb.group({
      enginePower : new FormControl(null, [Validators.required, Validators.min(50), Validators.max(1500), Validators.maxLength(4)]),
      LeaseData: LeaseData,
      brand: new FormControl([], Validators.required),
      model: new FormControl([], Validators.required),
      assetType: new FormControl([], Validators.required),
      customerType: [[new FormControl('Private', Validators.required)]],
      year: new FormControl([], Validators.required) ,
      assetPrice: new FormControl(null, [Validators.required, Validators.min(5000)]),
      advancePaymentPercentage: new FormControl(10, [Validators.required, Validators.min(10), Validators.max(50)]),
      advancePaymentAmount: new FormControl(null),
      leasePeriod: new FormControl(6, [Validators.required, Validators.min(6), Validators.max(84)]),
      margin: new FormControl(3.2, [Validators.required, Validators.min(3.2), Validators.max(99)]),
      paymentDate: new FormControl(null, Validators.required),
      contractFeePercentage: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(99), Validators.maxLength(2)]),
      contractFee: new FormControl(200, Validators.required)
    });
  }

  send() {
    console.log(this.carLeasingForm);
  }

  reset() {
    this.carLeasingForm.reset();
  }

  get enginePower() {
    return this.carLeasingForm.get('enginePower');
  }

  get year() {
    return this.carLeasingForm.get('year');
  }

  get assetPrice() {
    return this.carLeasingForm.get('assetPrice');
  }

  get advancePaymentAmount() {
    return this.carLeasingForm.get('assetPrice').value * this.carLeasingForm.get('advancePaymentPercentage').value / 100;
  }

  get contractFeePercentage() {
    return this.carLeasingForm.get('contractFeePercentage').value;
  }

  get contractFee() {

    if (this.carLeasingForm.get('assetPrice').value * 0.01 > 200) {
      return this.carLeasingForm.get('contractFeePercentage').value / 100 * this.carLeasingForm.get('assetPrice').value;
    }
    return 200;

  }
  get model() {
    return this.carLeasingForm.get('carModel');
  }

  get leasePeriod() {
    return this.carLeasingForm.get('leasePeriod').value;
  }

  get advancePaymentPercentage() {
    return this.carLeasingForm.get('advancePaymentPercentage').value;
  }

  get margin() {
    return this.carLeasingForm.get('margin').value;
  }

  typeChanged() {
    const brand = this.carLeasingForm.get('brand').value;
    this.brandsAfterChangeEvent = this.models.filter(p => p.type === brand);

    const assetType = this.carLeasingForm.get('assetType').value;
    this.brandsAfterChangeEvent = this.models.filter(p => p.type === assetType);
  }

  submitForm(carLeasingForm: NgForm) {
    console.log('Form Data', this.carLeasingForm.value);
  }

  ngOnInit() {
    this.leasingData.toSend.subscribe(leaseData => this.leaseData = leaseData);
    this.carService.getBrands().then(data => {

      let size = 0, key;
      for (key in data) {
          if (data.hasOwnProperty(key)) {
            size++;
          }
      }

      for (let i = 0; i < size; i++) {
        this.brands.push(data[i].brand);

        this.carService.getModels(data[i].brand).then(models => {

          let size1 = 0, key1;
          for (key1 in models) {
              if (models.hasOwnProperty(key1)) {
                size1++;
              }
          }

          for (let j = 0; j < size1; j++) {
              this.models.push({name: models[j].model, type: data[i].brand});
          }


        });
      }
    });
  }
    pitch(event: any) {
      console.log(event.value);
    }

    onSubmit() {
      // if (this.carLeasingForm.valid) {
        this.leaseData = {
          assetType: this.carLeasingForm.value['assetType'],
          carBrand: this.carLeasingForm.value['brand'],
          carModel: this.carLeasingForm.value['model'],
          years: this.carLeasingForm.value['year'],
          enginePower: this.carLeasingForm.value['enginePower'],
          assetPrice: this.carLeasingForm.value['assetPrice'],
          advancePaymentPercentage: this.carLeasingForm.value['advancePaymentPercentage'],
          advancePaymentAmount: (this.advancePaymentAmount).toString(),
          leasePeriod: this.carLeasingForm.value['leasePeriod'],
          margin: this.carLeasingForm.value['margin'],
          contractFee: (this.contractFee).toString(),
          paymentDate: this.carLeasingForm.value['paymentDate'],
          customerType: 'Private'

        };

        console.log(this.leaseData);
        this.leasingData.changeData(this.leaseData);
     // } else {
        // console.log('invalid sumbit');
        // this.validateAllFormFields(this.carLeasingForm);
    //  }
  }

  validateAllFormFields(carLeasingForm: FormGroup) {

    Object.keys(carLeasingForm.controls).forEach(field => {
      const control = carLeasingForm.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({onlySelf: true});
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
  }
