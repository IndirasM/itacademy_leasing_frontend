import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig, MatDialog} from '@angular/material';
import { Validators, FormGroup, FormBuilder, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { LeaseToUserService } from '../../services/leasing-to-user.service';
import { BrandsAndModelsService } from '../../services/BrandsAndModelsService';
import {ErrorStateMatcher} from '@angular/material/core';
import { LeaseData } from '../../private/private-leasing-data-form/private-leasing-data';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-corporate-leasing-data-form',
  styles: ['input.ng-invalid {border-color: red}'],
  templateUrl: './corporate-leasing-data-form.component.html',
  styleUrls: ['./corporate-leasing-data-form.component.css'],
  providers: [],
})

export class CorporateLeasingDataFormComponent implements OnInit {

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
  show = false;

  brandsAfterChangeEvent = [];


  constructor(fb: FormBuilder, private leasingData: LeaseToUserService, private carService: BrandsAndModelsService) {
    this.carLeasingForm = fb.group({
      enginePower : new FormControl(null, [Validators.required, Validators.min(50), Validators.max(1500), Validators.maxLength(3)]),
      LeaseData: LeaseData,
      brand: new FormControl([], Validators.required),
      model: new FormControl([], Validators.required),
      assetType: new FormControl([], Validators.required),
      leaseType: new FormControl('Corporate', Validators.required),
      year: new FormControl([], [Validators.required, Validators.min(1980)]) ,
      assetPrice: new FormControl(null, [Validators.required, Validators.min(10000)]),
      advancePaymentPercentage: new FormControl(10, [Validators.required, Validators.min(10), Validators.max(99)]),
      advancePaymentAmount: new FormControl(null),
      leasePeriod: new FormControl(6, [Validators.required, Validators.min(6), Validators.max(84)]),
      margin: new FormControl(3.2, [Validators.required, Validators.min(3.2), Validators.max(99)]),
      paymentDate: new FormControl(null, Validators.required),
      contractFeePercentage: new FormControl(1, [Validators.required, Validators.min(1), Validators.max(99)]),
      contractFee: new FormControl(200),
      financingAmount: new FormControl(null),
      totalInterest: new FormControl(null),
      totalMonthlyPayment: new FormControl(null),
      interestRate: new FormControl(null)
    });
  }

  get totalInterest() {
    return this.carLeasingForm.get('assetPrice').value  * (this.carLeasingForm.get('margin').value / 100);
  }

  get totalPayment() {
    return this.totalInterest
    + this.financingAmount
    + this.contractFee
    + (0.7 * this.leasePeriod);
  }

  get totalMonthlyPayment() {
    return this.totalPayment / this.carLeasingForm.get('leasePeriod').value;
  }

  reset() {
    this.carLeasingForm.reset();
  }

  get enginePower() {
    return this.carLeasingForm.get('enginePower') as FormControl;
  }

  get assetPrice() {
    return this.carLeasingForm.get('assetPrice');
  }

  get year() {
    return this.carLeasingForm.get('year') as FormControl;
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
    return Math.round(this.carLeasingForm.get('advancePaymentPercentage').value * 10) / 10;
  }

  get margin() {
    return this.carLeasingForm.get('margin').value;
  }

  get financingAmount() {
    return this.carLeasingForm.get('assetPrice').value - this.advancePaymentAmount;
  }

  typeChanged() {
    const brand = this.carLeasingForm.get('brand').value;
    this.brandsAfterChangeEvent = this.models.filter(p => p.type === brand);

    const assetType = this.carLeasingForm.get('assetType').value;
    this.brandsAfterChangeEvent = this.models.filter(p => p.type === assetType);
  }

  ngOnInit() {
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
    }

    onSubmit() {
       if (this.carLeasingForm.valid) {
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
          leaseType: 'Corporate'

        };
        console.log(this.carLeasingForm.value['leaseType']);
        this.leasingData.changeData(this.leaseData);
      } else {
        console.log('invalid');
        this.validateAllFormFields(this.carLeasingForm);
      }
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
