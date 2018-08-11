import { Component, OnInit } from '@angular/core';

import { Makalatitles } from '../../makalatitles';
import { MakalatitlesService } from '../../core/makalatitles.service';

import { Blogpost } from '../../blogpost';
import { BlogpostService } from '../../core/blogpost.service';
import { PasseventsService } from '../../core/passevents.service';

@Component({
  selector: 'app-makala',
  templateUrl: './makala.component.html',
  styleUrls: ['./makala.component.css'],
 
})
export class MakalaComponent implements OnInit {

  article: Makalatitles[];
  _subscription: any;

   blogpost: Blogpost[];
   subscription: any;
   searchInputStatus = false;

  constructor( private blogpostService: BlogpostService,
               private makalatitlesService:MakalatitlesService,
               private passeventsService: PasseventsService,) { 
     this.blogpost = blogpostService.blogpost;
     this.subscription = this.blogpostService.fetchedBlogpost.subscribe((value) => {
     this.blogpost = value;
   });

     this.article = makalatitlesService.article;
     this._subscription = this.makalatitlesService.fetchedArticle.subscribe((value) => {
     this.article = value;
  })
    }

  ngOnInit() {
    var that = this;
    setTimeout(function() {
           console.log('timeout method fired');
           console.log(that.article);
           console.log(that.blogpost)
           console.log('timeout method fired a');
  }, 3000);

  this.removeSearchInput()
  }

  removeSearchInput() {
    this.passeventsService.exitblogsection(this.searchInputStatus);
}

}
