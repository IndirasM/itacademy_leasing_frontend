import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
    selector: 'private-user-form-dialog',
    templateUrl: 'private-leasing-form-dialog.html',
    styleUrls: []
})

export class PrivateLeasingFormDialogComponent implements OnInit {

    form: FormGroup;

    description:string;

    constructor(
        public dialogRef: MatDialogRef<PrivateLeasingFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) data) {
        this.description = data.description;
    }

    ngOnInit() {
    }
    save() {
        this.dialogRef.close(this.form.value);
    }
    close() {
        this.dialogRef.close();
    }
}