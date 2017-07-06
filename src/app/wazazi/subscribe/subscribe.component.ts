import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  showmyId = false;

  constructor() { }

  ngOnInit() {
  }

  togglemyId() {
   this.showmyId = !this.showmyId;
  }
  
}
