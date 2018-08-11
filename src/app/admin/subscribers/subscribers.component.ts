import { Component, OnInit } from '@angular/core';

import { Subscribers } from '../../subscribers';
import { SubscribersService } from '../../core/subscribers.service';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css'],
  
   providers: [SubscribersService]
})
export class SubscribersComponent implements OnInit {

  subscribers:Subscribers[];
  newsubscribers:Subscribers[];
  showEraser = {};
  registered = {};

  status = {'New': String};
  
  constructor(private subscribersService: SubscribersService) { 
    this.subscribers = [];
    this.newsubscribers = [];
  }

  getSubscribers(): void {
    var that = this;
    this.subscribersService.getSubscribers().then(subscribers => subscribers.map(x => ((x.id === 1) ||(x.id === 2) ||(x.id === 3) ||(x.id === 4))? that.newsubscribers.push(x) : that.subscribers.push(x)));
  }

  registerSubcriber(i) {
    // var subscriber:Subscribers = this.newsubscribers[i];
    // this.newsubscribers.splice(i, 1);
    // console.log(this.subscribers[0]);
    // this.subscribers.push(subscriber);
    this.registered [i] = true;
  }

  ngOnInit() {
    this.getSubscribers();
  }


}
