import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { MakalatitlesService } from '../../core/makalatitles.service';
import { Makalatitles } from '../../makalatitles';

// import fade in animation
//import { slideInOutAnimation } from './../animation';
@Component({
  selector: 'app-makala-contents',
  templateUrl: './makala-contents.component.html',
  styleUrls: ['./makala-contents.component.css'],
  
  // make slide in/out animation available to this component
    //animations: [slideInOutAnimation],
 
    // attach the slide in/out animation to the host (root) element of this component
    //host: { '[@slideInOutAnimation]': '' }
})
export class MakalaContentsComponent implements OnInit {

  constructor( private makalatitlesService: MakalatitlesService ) { }
  makala = new Makalatitles();

  @Output() myEvent = new EventEmitter();

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
