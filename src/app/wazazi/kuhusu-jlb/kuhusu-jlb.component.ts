import { Component, OnInit } from '@angular/core';

import { PasseventsService } from '../../core/passevents.service';
@Component({
  selector: 'app-kuhusu-jlb',
  templateUrl: './kuhusu-jlb.component.html',
  styleUrls: ['./kuhusu-jlb.component.css']
})
export class KuhusuJlbComponent implements OnInit {

 showId = false;
 searchInputStatus = false;

 constructor(private passeventsService: PasseventsService,) {}

  ngOnInit() {
    this.removeSearchInput()
  }

  toggleId() {
    this.showId = !this.showId;
  }

  removeSearchInput() {
    this.passeventsService.exitblogsection(this.searchInputStatus);
  }
}
