import { Component, OnInit } from "@angular/core";
import { LeaseToUserService } from "../services/leasing-to-user.service";
import { FormsToBackService } from "../services/forms-to-back.service";
import { LeaseData } from "../private/private-leasing-data-form/private-leasing-data";
import { PrivateUserData } from "../private/private-user-data-form/privateUserData";
import { CorporateUserData } from "../corporate/corporate-user-data-form/corporateUserData";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validator,
  Validators
} from "@angular/forms";
import {
  PrivateCustomer,
  CorporateCustomer
} from "../leasing-officer/leasing-officer.component";

@Component({
  selector: "app-submitted-form-search",
  templateUrl: "./submitted-form-search.component.html",
  styleUrls: ["./submitted-form-search.component.css"]
})
export class SubmittedFormSearchComponent implements OnInit {
  public customerForm: FormGroup;
  public leaseData: LeaseData;
  public userData: PrivateUserData;
  private corporateUserData: CorporateUserData;
  public privateCustomer: PrivateCustomer;
  public corporateCustomer: CorporateCustomer;
  public retrieved = false;

  constructor(
    fb: FormBuilder,
    private leaseService: LeaseToUserService,
    private retrievalService: FormsToBackService
  ) {
    this.customerForm = fb.group({
      leaseId: new FormControl(null, Validators.required)
    });
  }

  ngOnInit() {}

  // get leaseID() {
  //   console.log('hello', this.customerForm.get('leaseId').value);
  //   return this.customerForm.get('leaseId').value;
  // }

  findLease() {
    const user = this.retrievalService
      .retrieveLeaseById(this.customerForm.value("leaseId"))
      .then(user => {
        this.retrieved = true;
        if (user.lease.leaseType === "Private") {
          this.privateCustomer = new PrivateCustomer(user.lease, user.customer);
        } else if (user.lease.leaseType === "Corporate") {
          this.corporateCustomer = new CorporateCustomer(
            user.lease,
            user.customer
          );
        }
      });
  }
}

// onSubmit() {
//   // fb.leaseId: this.customerForm.value['leaseId'];
//   // console.log(5ac677d3050fa700044da116)
//   console.log(this.leaseID);
//   // this.retrievalService.retrieveLeaseById
//   // (this.customerForm.get('leaseId').value).then(data => {
//   //   console.log(data);
//   // }
// }
