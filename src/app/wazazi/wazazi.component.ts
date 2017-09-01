import { Component, 
         OnInit, 
         ViewChild,
         trigger,
         state,
         style,
         transition,
         animate,
         keyframes
         } from '@angular/core';

import { SearchService } from '../core/search.service';

@Component({
  selector: 'app-wazazi',
  templateUrl: './wazazi.component.html',
  styleUrls: ['./wazazi.component.css'],
  animations: [
  trigger('focusPanel', [
    state('inactive', style({
      transform: 'scale(1)',
      backgroundColor: '#eee'
      
    })),
    state('active',   style({
      transform: 'scale(1.5)',
      backgroundColor: '#cfd8dc' 
    })),

    transition('inactive => active', animate('5000ms ease-in')),
    transition('active => inactive', animate('5000ms ease-out'))
  ]),

  trigger('movePanel', [
    transition('void => *', [
      style({transform: 'translateY(-100%)'}),
      animate(100)]),
   
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

  ngOnInit() { }
  
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
   
  toggleId() {
    this.showId = !this.showId;
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
  }
}
