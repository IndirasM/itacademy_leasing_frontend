import { Component, OnInit } from '@angular/core';
import { PrivateLeasingFormDialogComponent } from './private-leasing-form-dialog-component';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig, MatDialog} from '@angular/material';

import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
// import {ControlGroup} from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';

@Component({
  selector: 'app-private-leasing-data-form',
  styles: [`.form-field { padding: 10px 0px; }`],
  templateUrl: './private-leasing-data-form.component.html',
  styleUrls: ['./private-leasing-data-form.component.css']
})

export class PrivateLeasingDataFormComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;
  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(v) {
    this._tickInterval = Number(v);
  }
  private _tickInterval = 1;
  dialog: any;
  favoriteSeason: string;

  assetTypes = [
    {value: '0', viewValue: 'Vehicle'},

  ];

  years = [
    {value: '1980', viewValue: '1980'}
  ];

  seasons = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn',
  ];
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
    {name: 'Civic', type: 'Honda'},
  ];
  productsAfterChangeEvent = [];
  productForm: FormGroup;


  constructor(fb: FormBuilder) {
    this.productForm = fb.group({
      productType: [],
      product: [],
      assetType: [],
      customerType: new FormControl('Private', Validators.required),
      year: [] ,
      enginePower: new FormControl('', Validators.required),
      assetPrice: new FormControl('', Validators.required),
      advancePaymentPercentage: new FormControl('', Validators.required),
      advancePaymentAmount: new FormControl('', Validators.required),
      leasePeriod: new FormControl('', Validators.required),
      margin: new FormControl('', [Validators.required, Validators.minLength(11), ]),
      contactFee: new FormControl('', Validators.required),
      paymentDate: new FormControl('', Validators.required)

    });
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

  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners'
  };

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(PrivateLeasingFormDialogComponent, dialogConfig);
  }

  penDialog() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;

    dialogConfig.autoFocus = true;

    dialogConfig.data = {
        id: 1,
        title: 'Angular For Beginners'
    };

    this.dialog.open(PrivateLeasingFormDialogComponent, dialogConfig);

    const dialogRef = this.dialog.open(PrivateLeasingFormDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(
        data => console.log('Dialog output:', data)
    );
}

    pitch(event: any) {
      console.log(event.value);
    }


}