import { Component, 
         OnInit, 
         ViewChild,} from '@angular/core'

import { trigger,
         state,
         style,
         transition,
         animate,
         keyframes
         } from '@angular/animations';

import { MakalaContentsComponent } from './makala-contents/makala-contents.component';
import { SearchService } from '../core/search.service';

@Component({
  selector: 'app-wazazi',
  templateUrl: './wazazi.component.html',
  styleUrls: ['./wazazi.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        style({transform: 'translateX(-400%)'}),
        animate(2000)
      ]),
      transition('* => void', [
        animate(2000, style({transform: 'translateX(300%)'}))
      ])
    ])
  ],

  providers: [ ],
})
export class WazaziComponent implements OnInit {

  @ViewChild('child') child ;

  constructor( private searchService: SearchService ) { }
  showId = false;
  showthisId = false;
  showArticle = false;
  displayRouterOutlet = true;
  state: string = 'inactive';
  comein = false;
  showsearch = true;

  ngOnInit() { }
  
  isIn = false;   // store state

  toggleState() { // click handler
        let bool = this.isIn;
        this.isIn = bool === false ? true : false;
        console.log('isIn changes state')
    }

  myEvent($event){
    this.showId = !this.showId;
    this.showthisId = !this.showthisId;
  }

  articleEvent() {
    this.showArticle = !this.showArticle;
    this.showthisId = false;
    this.displayRouterOutlet = !this.displayRouterOutlet;
  }

  performSearch(searchTerm: HTMLInputElement): void { 
      this.searchService.performSearch(searchTerm);
  }
   
  fcomein() {
    this.comein = !this.comein;
  }

  toggleId() {
    this.showId = !this.showId;
    //this.state = (this.state === 'inactive' ? 'active' : 'inactive');
  }

  omitsearch(){
    this.showsearch = false;
  }

  returnsearch(){
    this.showsearch = true;
  }
}
