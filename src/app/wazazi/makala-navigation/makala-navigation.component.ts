import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { MakalatitlesService } from '../../core/makalatitles.service'
import { Makalatitles } from '../../makalatitles';
import { Makalacategory } from '../../makalacategory';
@Component({
  selector: 'app-makala-navigation',
  templateUrl: './makala-navigation.component.html',
  styleUrls: ['./makala-navigation.component.css'],
})
export class MakalaNavigationComponent implements OnInit {

  @Output() articleEvent = new EventEmitter();

  onClick(button){
       this.articleEvent.emit(button);
  }

 makala: Makalatitles[];
 category: Makalacategory;
   _subscription: any;
   subscription: any;
   makalatitle: string;

   constructor(
     private makalatitlesService: MakalatitlesService,
     private router: Router) { 

     this.makala = makalatitlesService.makala;
     this._subscription = this.makalatitlesService.fetchedArticles.subscribe((value) => {
     this.makala = value;
   });
    
     this.makalatitle = makalatitlesService.makalatitle; 
     this.subscription = makalatitlesService.nameChange.subscribe((value) => { 
      this.makalatitle = value;});

     this.category = makalatitlesService.category; 
     this.subscription = makalatitlesService.fetchedCategory.subscribe((value) => { 
      this.category = value;})
 }
   
  getArticle(id: number):void{
    this.makalatitlesService.getArticle(id)
  }

  ngOnInit() {
  }

}
