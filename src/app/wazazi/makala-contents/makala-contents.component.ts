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
        style({transform: 'translateX(200%)'}),
        animate(2000)
      ]),
      transition('* => void', [
        animate(2000, style({transform: 'translateX(200%)'}))
      ])
    ])
  ],
  
  // make slide in/out animation available to this component
    //animations: [slideInOutAnimation],
 
    // attach the slide in/out animation to the host (root) element of this component
    //host: { '[@slideInOutAnimation]': '' }
})
export class MakalaContentsComponent implements OnInit {

  constructor( private makalatitlesService: MakalatitlesService ) { }
  makala = new Makalatitles();
  display = false;

  @Output() myEvent = new EventEmitter();
  
  ifdisplay(){
    this.display = !this.display;
  }

  onClick(button){
       this.myEvent.emit(button);
  }

  performSearch(text): void { 
  this.makalatitlesService.performSearch(text);
  }
    
  getMakala(id: number): void { 
  this.makalatitlesService.getMakala(id);
  this.makalatitlesService.getMakalatitle(id);
  } 
  
  ngOnInit() {
    
  }

}
