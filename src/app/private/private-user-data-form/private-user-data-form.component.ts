import { Component, OnInit } from '@angular/core';
import { PrivateLeasingFormDialogComponent } from './private-leasing-form-dialog-component';
import {MAT_DIALOG_DATA, MatDialogRef, MatDialogConfig, MatDialog} from "@angular/material";


@Component({
  selector: 'private-user-data-form',
  templateUrl: './private-user-data-form.component.html',
  styleUrls: ['./private-user-data-form.component.css']
})
export class PrivateUserDataFormComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

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
