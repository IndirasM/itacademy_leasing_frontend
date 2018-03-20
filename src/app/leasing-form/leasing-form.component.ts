import { Component, OnInit } from '@angular/core';
import { MatSlider } from '@angular/material';

@Component({
  selector: 'app-leasing-form',
  templateUrl: './leasing-form.component.html',
  styleUrls: ['./leasing-form.component.css']
})
export class LeasingFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pitch(event: any) {
    console.log(event.value);
  }  

}
