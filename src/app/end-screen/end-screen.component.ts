import {Component, OnInit} from '@angular/core';
import {LeaseToUserService} from '../services/leasing-to-user.service';

@Component({
  selector: 'app-end-screen',
  templateUrl: './end-screen.component.html',
  styleUrls: ['./end-screen.component.css','../private/styles.css']
})
export class EndScreenComponent implements OnInit {

  constructor(private leaseService: LeaseToUserService) {
  }

  messageReady: boolean;
  message: string;
  leaseId: string;
  idReady = false;

  ngOnInit() {
    this.leaseService.toSendLeaseId.subscribe(leaseId => {
      if (leaseId) {
        this.idReady = true;
        this.leaseId = leaseId;
      }
    });
  }

  completed() {
    this.leaseService.changeStep(0);
  }
}
