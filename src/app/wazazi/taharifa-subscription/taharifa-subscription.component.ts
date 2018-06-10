import {Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-taharifa-subscription',
  templateUrl: './taharifa-subscription.component.html',
  styleUrls: ['./taharifa-subscription.component.css']
})
export class TaharifaSubscriptionComponent implements OnInit {

  constructor() { }
  @Output() closeModal = new EventEmitter();

  onClick(button){
       this.closeModal.emit(button);
  }

  ngOnInit() {
  }

}
