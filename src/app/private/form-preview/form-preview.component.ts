import {Component, OnInit} from '@angular/core';
import {privateUserData} from '../private-user-data-form/privateUserData';

@Component({
  selector: 'app-form-preview',
  templateUrl: './form-preview.component.html',
  styleUrls: ['./form-preview.component.css']
})
export class FormPreviewComponent implements OnInit {

  doShit() {
    console.log('shit');
  }

  constructor() {
  }

  ngOnInit() {
  }

}
