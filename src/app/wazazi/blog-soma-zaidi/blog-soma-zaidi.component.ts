import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-soma-zaidi',
  templateUrl: './blog-soma-zaidi.component.html',
  styleUrls: ['./blog-soma-zaidi.component.css']
})
export class BlogSomaZaidiComponent implements OnInit {

   showId = false;
   showmyId = false;

  ngOnInit() {

  }

  toggleId() {
    this.showId = !this.showId;
  }

  togglemyId() {
    this.showmyId = !this.showmyId;
  }

}
