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
import { Makalacategory } from '../makalacategory';
import { MakalatitlesService } from '../core/makalatitles.service';
import { Makalatitles } from '../makalatitles';
import { SearchService } from '../core/search.service';
import { PasseventsService } from '../core/passevents.service';

import { Subject } from 'rxjs/Subject';
@Component({
  selector: 'app-wazazi',
  templateUrl: './wazazi.component.html',
  styleUrls: ['./wazazi.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0px)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(1000)
      ]),
      transition('* => void', [
        animate(1000, style({transform: 'translateX(-100%)'}))
      ])
    ])
  ],

  providers: [PasseventsService],
})
export class WazaziComponent implements OnInit {

  @ViewChild('child') child ;

  category: Makalacategory[];
  makala: Makalatitles[];
  subscription: any;
  _subscription: any;
  private lastPoppedUrl: string;
  private yScrollStack: number[] = [];

  searchTerm$ = new Subject<string>();
  
  constructor( private searchService: SearchService, 
               passeventsService: PasseventsService,
               private router: Router,
               private location: Location,
               private makalatitlesService: MakalatitlesService ) {
    passeventsService.navigateout$.subscribe(
      searchInputStatus => { this.showSearchInput = searchInputStatus}
    );
          
    this.searchService.callSearch(this.searchTerm$);

    this.subscription = this.makalatitlesService.fetchedCategories.subscribe((value) => { //ame subscribe kwa observable ya makala
      this.category = value;
    }); 

    this._subscription = this.makalatitlesService.fetchedArticles.subscribe((value) => { //ame subscribe kwa observable ya makala
      this.makala = value;
    //this.setToNull();
    });

   }
  
  showId = false;
  showthisId = false;
  showArticle = false;
  displayRouterOutlet = true;
  state: string = 'inactive';
  comein = false;
  showsearch;
  showSearchInput = true;
  searchboxSS = false;
  showmakalaTitles = false;
  toggle = {};
  currentUrl : string;
  showmyod = false;
  thanksforjoiningprogram = false;

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
        this.currentUrl = this.router.url;
        console.log(this.currentUrl);
       

        if (this.currentUrl === ('/wazazi/blog-section' || '/wazazi/soma-zaidi/')) {
          this.showsearch = true;
          console.log('1. if');
          console.log(this.showsearch);
        }

        else {
          this.showsearch = false;
          console.log('2. else');
          console.log(this.showsearch);
        }

        this.makalatitlesService.getMakalatitles();
  }
  
  isIn = false;   // store state

  myevenT($event){
    this.showmyod = !this.showmyod;
    this.thanksforjoiningprogram = !this.thanksforjoiningprogram;
  }

  closeButtonClicked($event){
    if(this.showmyod) {
       this.showmyod = !this.showmyod;
    }
  }

  closeModal($event){
   
    if(this.thanksforjoiningprogram) {
      this.thanksforjoiningprogram = !this.thanksforjoiningprogram;
    }
    
  }

  togglemyOd() {
    this.showmyod = !this.showmyod;
   }

  //#region 

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

  closeDrawer() {
        this.isIn = false;
  }

  toggleState1() { // click handler
      
      this.isIn = false;
      console.log('isIn changes state here')
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

  showSearchbox() {
      console.log('wen is today ?')
      this.searchboxSS = !this.searchboxSS;
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

  showMakalaTitles(){
    this.showmakalaTitles = !this.showmakalaTitles;
  }

  getMakala(id: number): void { 
    this.makala = null;
    this.makalatitlesService.getMakala(id); 
}
 
  getArticle(id: number):void{
    this.makalatitlesService.getArticle(id)
  }

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

  closeAllAgeCategories() {
    this.toggle = [];
  }


}
