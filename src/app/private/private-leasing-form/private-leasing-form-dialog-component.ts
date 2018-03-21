import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
    selector: 'course-dialog',
    templateUrl: './private-leasing-form-dialog.html',
    styleUrls: ['./private-leasing-form.component.css']
})

export class PrivateLeasingFormDialogComponent implements OnInit {

    form: FormGroup;

    description:string;

    constructor(
        public fb: FormBuilder,
        public dialogRef: MatDialogRef<PrivateLeasingFormDialogComponent>,
        @Inject(MAT_DIALOG_DATA) data) {
        this.description = data.description;
    }

    ngOnInit() {
        this.form = this.fb.group({
            description: [this.description, []],
        });
    }
    save() {
        this.dialogRef.close(this.form.value);
    }
    close() {
        this.dialogRef.close();
    }
}