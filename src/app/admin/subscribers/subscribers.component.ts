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
  
  constructor(private subscribersService: SubscribersService) { }

  getSubscribers(): void {
    this.subscribersService.getSubscribers().then(subscribers => this.subscribers = subscribers);
  }




  ngOnInit() {
    this.getSubscribers();
  }


}
