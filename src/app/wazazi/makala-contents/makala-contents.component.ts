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
      state('in', style({transform: 'translateX(-103%)'})),
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
  toggle = {};
  isUnchanged = true;
  display1 = false;
  constructor( private makalatitlesService: MakalatitlesService ) { 
     this.makala = makalatitlesService.makala;

     this._subscription = this.makalatitlesService.fetchedArticles.subscribe((value) => { //ame subscribe kwa observable ya makala
     this.makala = value;
   //this.setToNull();
   });

     
     this.subscription = this.makalatitlesService.fetchedCategories.subscribe((value) => { //ame subscribe kwa observable ya makala
     this.category = value;
   });
     
  }
  

  @Output() myEvent = new EventEmitter();

  // setToNull() { 
  //    var that = this;
  //    setTimeout(function() {
  //      that.makala = [];
  //       console.log(that.makala + 'this code was hit')
  // }, 2000);
  // }

  displayThisItem(i) {  //to close current age category when another one is clicked on 

    for (var a = 0; a < this.category.length; a++) {
         if (i === a) {
          this.toggle[i] = !this.toggle[i];
         }
         else {
          this.toggle[a] = false;
         }   
    }

  }

  closeThisItem(i) {
    this.toggle[i] = false;
  }

  closeAllAgeCategories() {
    this.toggle = [];
  }

  onClick(button){
       
       this.myEvent.emit(button);
  }

  performSearch(text): void { 
  this.makalatitlesService.performSearch(text);
  }
   
  ifdisplay (){
    this.makalatitlesService.getMakalatitles();
    this.display = !this.display;
  }

  endDisplay (){
    this.display = false;
  }

  getMakala(id: number): void { 
      this.makala = null;
      this.makalatitlesService.getMakala(id);   //if data wasnt loaded on component's initialisation
                                                //costs bandwidth however

    //   if (!this.display1) {
    //   this.makalatitlesService.getMakala(id);
    //  }
    // }
    // this.display1 = !this.display1;
  } 
  
  getArticle(id: number):void{
    this.makalatitlesService.getArticle(id)
  }

  ngOnInit() {
    this.makalatitlesService.getMakalatitles();
    
  }

}
