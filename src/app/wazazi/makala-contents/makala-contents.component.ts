import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger,
         state,
         style,
         transition,
         animate,
         keyframes
         } from '@angular/animations';


import { MakalatitlesService } from '../../core/makalatitles.service';
import { Makalatitles } from '../../makalatitles';
import { Makalacategory } from '../../makalacategory'

// import fade in animation
//import { slideInOutAnimation } from './../animation';
@Component({
  selector: 'app-makala-contents',
  templateUrl: './makala-contents.component.html',
  styleUrls: ['./makala-contents.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(100%)'}),
        animate(700)
      ]),
      transition('* => void', [
        animate(700, style({transform: 'translateX(100%)'}))
      ])
    ])
  ],
  // make slide in/out animation available to this component
    //animations: [slideInOutAnimation],
 
    // attach the slide in/out animation to the host (root) element of this component
    //host: { '[@slideInOutAnimation]': '' }
})
export class MakalaContentsComponent implements OnInit {
  makala: Makalatitles[];
  category: Makalacategory[];
  _subscription: any;
  subscription: any;
  display = false;
  display1 = false;
  constructor( private makalatitlesService: MakalatitlesService ) { 
     this.makala = makalatitlesService.makala;

     this._subscription = this.makalatitlesService.fetchedArticles.subscribe((value) => { //ame subscribe kwa observable ya makala
     this.makala = value;
   });
     
     this.subscription = this.makalatitlesService.fetchedCategories.subscribe((value) => { //ame subscribe kwa observable ya makala
     this.category = value;
   });
     
  }
  

  @Output() myEvent = new EventEmitter();

  onClick(button){
       this.myEvent.emit(button);
  }

  performSearch(text): void { 
  this.makalatitlesService.performSearch(text);
  }
   
  ifdisplay (){
    this.display = !this.display;
  }

  getMakala(id: number): void { 
  if (!this.display1) {
  this.makalatitlesService.getMakala(id);
  }
  
  this.display1 = !this.display1;
  } 
  
  getArticle(id: number):void{
    this.makalatitlesService.getArticle(id)
  }

  ngOnInit() {
    this.makalatitlesService.getMakalatitles();
  }

}
