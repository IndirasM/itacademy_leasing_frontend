import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig, MatDialog} from '@angular/material';

import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';

import { LeaseToUserService } from '../../services/leasing-to-user.service';
import { LeaseData } from './private-leasing-data';
import { BrandsAndModelsService } from '../../services/BrandsAndModelsService';

@Component({
  selector: 'app-private-leasing-data-form',
  styles: [`.form-field { padding: 10px 0px; }`],
  templateUrl: './private-leasing-data-form.component.html',
  styleUrls: ['./private-leasing-data-form.component.css']
})

export class PrivateLeasingDataFormComponent implements OnInit {
  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;
  leaseData: LeaseData;
  // get tickInterval(): number | 'auto' {
  //   return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  // }
  set tickInterval(v) {
    this._tickInterval = Number(v);
  }
  private _tickInterval = 1;
  dialog: any;
  favoriteSeason: string;

  assetTypes = [
    {value: 'Vehicle', viewValue: 'Vehicle'},

  ];

  years = [
    '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989',
    '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999',
    '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009',
    '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'
  ];

  productTypes = [];

  
  allProducts = [/*
=======
  enginesPower = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  productTypes = ['Alfa Romeo',
   'Audi', 'BMW', 'Ford', 'Honda', 'Jaguar', 'Lamborghini',
    'Lexus', 'Mazda', 'Mercedes-Benz', 'Nissan', 'Peugeot',
    'Subaru', 'Volkswagen'];

  allProducts = [
    {name: '147', type: 'Alfa Romeo'},
    {name: '155', type: 'Alfa Romeo'},
    {name: 'Giulia', type: 'Alfa Romeo'},
    {name: 'A2', type: 'Audi'},
    {name: 'A3', type: 'Audi'},
    {name: 'A4', type: 'Audi'},
    {name: 'R8', type: 'Audi'},
    {name: 'TT', type: 'Audi'},
    {name: '3', type: 'BMW'},
    {name: '5', type: 'BMW'},
    {name: '6', type: 'BMW'},
    {name: 'X3', type: 'BMW'},
    {name: 'X5', type: 'BMW'},
    {name: 'Focus', type: 'Ford'},
    {name: 'Mustang', type: 'Ford'},
    {name: 'S-Type', type: 'Jaguar'},
    {name: 'XFR', type: 'Jaguar'},
    {name: 'XJ13', type: 'Jaguar'},
    {name: 'Countach', type: 'Lamborghini'},
    {name: 'Gallardo', type: 'Lamborghini'},
    {name: 'GS', type: 'Lexus'},
    {name: 'IS', type: 'Lexus'},
    {name: 'RX-7', type: 'Mazda'},
    {name: 'Mazda6', type: 'Mazda'},
    {name: 'MX-5', type: 'Mazda'},
    {name: 'A', type: 'Mercedes-Benz'},
    {name: 'C', type: 'Mercedes-Benz'},
    {name: 'CL', type: 'Mercedes-Benz'},
    {name: 'CLK', type: 'Mercedes-Benz'},
    {name: 'Primera', type: 'Nissan'},
    {name: 'Silvia', type: 'Nissan'},
    {name: 'Skyline', type: 'Nissan'},
    {name: '307', type: 'Peugeot'},
    {name: '908', type: 'Peugeot'},
    {name: 'Impreza', type: 'Subaru'},
    {name: 'Legacy', type: 'Subaru'},
    {name: 'Golf', type: 'Wolkswagen'},
    {name: 'Polo', type: 'Wolkswagen'},
    {name: 'Accord', type: 'Honda'},
    {name: 'Civic', type: 'Honda'},*/
  ];
  productsAfterChangeEvent = [];
  productForm: FormGroup;


  constructor(fb: FormBuilder, private leasingData: LeaseToUserService, private carService: BrandsAndModelsService) {
    this.productForm = fb.group({
      enginePower : new FormControl('', Validators.required),
      LeaseData: LeaseData,
      productType: [],
      product: [],
      assetType: [],
      customerType: new FormControl('Private', Validators.required),
      year: [] ,
      assetPrice: new FormControl(0, Validators.required),
      advancePaymentPercentage: new FormControl(0),
      advancePaymentAmount: new FormControl(0, Validators.required),
      leasePeriod: new FormControl(''),
      margin: new FormControl(3.2, [Validators.required ]),
      paymentDate: new FormControl('15'),
      contractFeePercentage: new FormControl(1),
      contractFee: new FormControl(200),
      carModel: new FormControl('')

    });
  }

  get advancePaymentAmount() {
    return this.productForm.get('assetPrice').value * this.productForm.get('advancePaymentPercentage').value / 100;
  }

  get contractFee() {
    if(this.productForm.get('assetPrice').value * 0.01 > 200){
      return 0.01 * this.productForm.get('assetPrice').value;
    }
    return 200;
  }

  get getModel() {
    return this.productForm.get('carModel');
  }

   // Rebuild the product list every time the product type changes.
  typeChanged() {
    const productType = this.productForm.get('productType').value;
    this.productsAfterChangeEvent = this.allProducts.filter(p => p.type === productType);

    const assetType = this.productForm.get('assetType').value;
    this.productsAfterChangeEvent = this.allProducts.filter(p => p.type === assetType);
  }

  submitForm() {
    console.log('Form Data', this.productForm.value);
  }
  ngOnInit() {
    this.leasingData.toSend.subscribe(leaseData => this.leaseData = leaseData);
    this.carService.getBrands().then(data => {
   
      var size = 0, key;
      for (key in data) {
          if (data.hasOwnProperty(key)){
            size++;
          }
      }
      
      for (let i = 0; i < size; i++){
        this.productTypes.push(data[i].brand);

        this.carService.getModels(data[i].brand).then(models =>{

          var size1 = 0, key1;
          for (key1 in models) {
              if (models.hasOwnProperty(key1)){
                size1++;
              }
          }
        
          for (let j = 0; j < size1; j++){
              //console.log(models[j]);
              this.allProducts.push({name: models[j].model, type: data[i].brand});
          }


        });
      } 
      console.log(this.productTypes);
      console.log(this.allProducts);
   
    });
   

  }



    pitch(event: any) {
      console.log(event.value);
    }

    onSubmit() {

        this.leaseData = {
          assetType: this.productForm.value['assetType'],
          carBrand: this.productForm.value['productType'],
          carModel: this.productForm.value['product'],
          years: this.productForm.value['year'],
          enginePower: this.productForm.value['enginePower'],
          assetPrice: this.productForm.value['assetPrice'],
          advancePaymentPercentage: this.productForm.value['advancePaymentPercentage'],
          advancePaymentAmount: this.productForm.value['advancePaymentAmount'],
          leasePeriod: this.productForm.value['leasePeriod'],
          margin: this.productForm.value['margin'],
          contractFee: this.productForm.value['contractFee'],
          paymentDate: this.productForm.value['paymentDate']
        };

        console.log(this.leaseData);
        this.leasingData.changeData(this.leaseData);
    }

    // let calculateAdvancePaymentAmount = function(advancePaymentPercentage, assetPrice) {

    //   return this.productForm.value['assetType'] * this.productForm.value['advancePaymentPercentage'] / 100;
    // };
  }
