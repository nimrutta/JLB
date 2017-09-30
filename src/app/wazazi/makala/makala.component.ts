import { Component, OnInit } from '@angular/core';

import { Makalatitles } from '../../makalatitles';
import { MakalatitlesService } from '../../core/makalatitles.service'
@Component({
  selector: 'app-makala',
  templateUrl: './makala.component.html',
  styleUrls: ['./makala.component.css'],
 
})
export class MakalaComponent implements OnInit {

  article: Makalatitles;
  _subscription: any;

  constructor( private makalatitlesService:MakalatitlesService) { 
     this.article = makalatitlesService.article;
     this._subscription = this.makalatitlesService.fetchedArticle.subscribe((value) => {
     this.article = value;
  })
    }

  ngOnInit() {
  }

}
