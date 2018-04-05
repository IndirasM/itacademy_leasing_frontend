import { Component, OnInit } from '@angular/core';
import { LeaseToUserService } from '../services/leasing-to-user.service';

@Component({
  selector: 'app-end-screen',
  templateUrl: './end-screen.component.html',
  styleUrls: ['./end-screen.component.css']
})
export class EndScreenComponent implements OnInit {

  constructor(private leaseService: LeaseToUserService) { }

  messageReady: boolean;
  message: string;


  ngOnInit() {
    this.leaseService.toSendMessage.subscribe(message => {});

  ngOnInit() {  
  }

  completed(){
    this.leaseService.changeStep(0);
  }
}
