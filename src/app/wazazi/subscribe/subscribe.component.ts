import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Subscribers } from '../../subscribers';
import { SubscribersService } from '../../core/subscribers.service';
    
import { Location, PopStateEvent } from '@angular/common';  
import { Router, NavigationStart, NavigationEnd } from '@angular/router';       

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  isInputdataMissing = false;

  constructor( private subscribersService: SubscribersService,
               private router: Router,
               private location: Location  ) { }
  subscriber = new Subscribers();
  subscribers = [];  //initialises an array
  
  @Output() myevent = new EventEmitter();
  @Output() myEvent = new EventEmitter();
  @Output() closeButtonClicked = new EventEmitter();

  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];
            

  onClick(button){
       this.myEvent.emit(button);
  }

  onClick1(button){
       this.myevent.emit(button);
  }

  exitModal(button){
       this.closeButtonClicked.emit(button);
  }

  add():void {
    
    if (!this.subscriber.phone_number) { return; }
    this.subscribersService.create(this.subscriber) 
    .then(subscriber => {
    this.subscribers.push(subscriber);
                });
            }

  alertUser(state){

       this.isInputdataMissing = true;

  }         

  ngOnInit() { 

   this.location.subscribe((ev:PopStateEvent) => {
          this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe((ev:any) => {
          
            if (ev instanceof NavigationStart) {
                if (ev.url == this.lastPoppedUrl)  {
                  this.yScrollStack.push(window.scrollY);
                  console.log(this.lastPoppedUrl)
                  console.log(window.scrollY)
                }
                    
            } else if (ev instanceof NavigationEnd) {
                if (ev.url == this.lastPoppedUrl) {
                    this.lastPoppedUrl = undefined;
                    var that = this
                    setTimeout(function() {
                      window.scrollTo(0, that.yScrollStack.pop());
                      console.log('scrolled to initial y coordinate');
                      console.log(ev.url);
                    }, 4000);
                    
                } else
                    {window.scrollTo(0, 0);
                     console.log('scrolled to ythis = 0')}
            }
        });
  }
  
}
