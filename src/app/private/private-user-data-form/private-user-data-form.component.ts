import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'private-user-data-form',
  templateUrl: './private-user-data-form.component.html',
  styleUrls: ['./private-user-data-form.component.css']
})
export class PrivateUserDataFormComponent implements OnInit {

  log(x) {console.log(x);}
  constructor() { }

  ngOnInit() {
  }

}
