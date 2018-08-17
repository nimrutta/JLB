import { Component, OnInit } from '@angular/core';

import { PasseventsService } from '../../core/passevents.service';
@Component({
  selector: 'app-bidhaa',
  templateUrl: './bidhaa.component.html',
  styleUrls: ['./bidhaa.component.css']
})
export class BidhaaComponent implements OnInit {

  searchInputStatus = false;
  showMoreBidhaa = false;

  constructor(private passeventsService: PasseventsService,) { }

  ngOnInit() {
    this.removeSearchInput()
  }

  showMoreBidhaafn() {
    this.showMoreBidhaa = !this.showMoreBidhaa;
  }

  removeSearchInput() {
    this.passeventsService.exitblogsection(this.searchInputStatus);
  }
}
