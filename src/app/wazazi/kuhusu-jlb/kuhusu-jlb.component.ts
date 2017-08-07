import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kuhusu-jlb',
  templateUrl: './kuhusu-jlb.component.html',
  styleUrls: ['./kuhusu-jlb.component.css']
})
export class KuhusuJlbComponent implements OnInit {

 showId = false;

  ngOnInit() {

  }

  toggleId() {
    this.showId = !this.showId;
  }
}
