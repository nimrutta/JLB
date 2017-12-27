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

import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';         

import { MakalaContentsComponent } from './makala-contents/makala-contents.component';
import { SearchService } from '../core/search.service';
import { PasseventsService } from '../core/passevents.service';

import { Subject } from 'rxjs/Subject';
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

  providers: [PasseventsService],
})
export class WazaziComponent implements OnInit {

  @ViewChild('child') child ;

  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  searchTerm$ = new Subject<string>();
  
  constructor( private searchService: SearchService, 
               passeventsService: PasseventsService,
               private router: Router,
               private location: Location ) {
    passeventsService.navigateout$.subscribe(
      searchInputStatus => { this.showSearchInput = searchInputStatus}
    );
          
    this.searchService.callSearch(this.searchTerm$);

   }
  
  showId = false;
  showthisId = false;
  showArticle = false;
  displayRouterOutlet = true;
  state: string = 'inactive';
  comein = false;
  showsearch = true;
  showSearchInput = true;

  ngOnInit() {
        console.log('wazazi component created') 
        this.location.subscribe((ev:PopStateEvent) => {
          this.lastPoppedUrl = ev.url;
          console.log('wazazi component location tracked')
        });
        this.router.events.subscribe((ev:any) => {
            console.log('router event fired')
            if (ev instanceof NavigationStart) {
                if (ev.url == this.lastPoppedUrl)  {
                  this.yScrollStack.push(window.scrollY);
                  console.log(this.lastPoppedUrl)
                  console.log(window.scrollY)
                }
                    
            } else if (ev instanceof NavigationEnd) {
                if (ev.url == this.lastPoppedUrl) {
                    this.lastPoppedUrl = undefined;
                    var that = this
                    setTimeout(function() {
                      window.scrollTo(0, that.yScrollStack.pop());
                      console.log('scrolled to initial y coordinate');
                      console.log(ev.url);
                    }, 4000);
                    
                } else
                    {window.scrollTo(0, 0);
                     console.log('scrolled to ythis = 0')}
            }
        });
  }
  
  isIn = false;   // store state

  keypressed ($event) {
    
    if ($event.target.value.length === 0) {
        console.log('input field is now empty');
        this.searchService.searchResultsView(false);
    } 
  
    else {
        console.log($event.target.value + ' is the pressed key');
        this.searchService.searchResultsView(true);
        this.searchTerm$.next($event.target.value);
    }
  }

  toggleState() { // click handler
        let bool = this.isIn;
        this.isIn = bool === false ? true : false;
        console.log('isIn changes state')
    }

  myEvent($event){
    //this.showArticle = !this.showArticle;
    //this.showthisId = false;
    //this.displayRouterOutlet = !this.displayRouterOutlet;
    this.showSearchInput = false;
    console.log('event fired')
  }

  returnSearchInput(){
    this.showSearchInput = true;
  }

  rudiMwanzo() {
     this.showsearch = true;
     this.showSearchInput = true;
     this.location.back();
  }
  articleEvent() {
    this.showId = !this.showId;
    this.showthisId = !this.showthisId;
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
