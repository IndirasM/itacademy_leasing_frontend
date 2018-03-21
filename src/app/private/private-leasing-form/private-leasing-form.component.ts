import { Component, OnInit } from '@angular/core';
import { PrivateLeasingFormDialogComponent } from './private-leasing-form-dialog-component';

import {MatDialog, MatDialogConfig} from "@angular/material";

@Component({
  selector: 'app-private-leasing-form',
  templateUrl: './private-leasing-form.component.html',
  styleUrls: ['./private-leasing-form.component.css']
})
export class PrivateLeasingFormComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

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

        data => console.log("Dialog output:", data)

    );    

}

}
