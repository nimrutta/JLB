import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-wazazi',
  templateUrl: './wazazi.component.html',
  styleUrls: ['./wazazi.component.css']
})
export class WazaziComponent implements OnInit {

  @ViewChild('child') child ;

  constructor() { }

  ngOnInit() {
  }

}
