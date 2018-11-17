import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CeiboShare } from 'ng2-social-share';


import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/observable/of';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { Trypost } from '../../trypost';
import { SearchService } from '../../core/search.service';

import { Blogpost } from '../../blogpost';
import { BlogpostService } from '../../core/blogpost.service';
import { DatacarrierService } from '../../core/datacarrier.service';
import { PasseventsService } from '../../core/passevents.service';
import { TwitterParams } from '../../twitterParams';

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.css'],

  providers: [ BlogpostService ],
})


export class BlogSectionComponent implements OnInit {

   showId = false;

   post: any = {   id:1,
                   title:'',
                   body:'', 
                   topic_id:2 }; 

   posts: Observable<Trypost[]>;
   private searchTerms = new Subject<string>();
   
   
   

   // link = 'http://api.tuseme.co.tz/api/v1/search/c?api_key=bc';
   //http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q= 
   noResultsFound = false;
   showSearchResults = false;
   searchResults: Blogpost[];
   blogpost: Blogpost[] ;
   giphies: Blogpost[];
   _subscription: any;
   subscription: any;
   subscription1: any;
   _subscription1: any;
   message: string;
   postlikes: number;
   liked = false;
   searchInputStatus = true;
   name = 'Andela';
   
   public repoUrl = "http://jualishebora.gq/wazazi/blog-section" ;
   

   constructor(
     private blogpostService: BlogpostService,
     private searchService: SearchService,
     private datacarrierService: DatacarrierService,
     private passeventsService: PasseventsService,
     private router: Router) { 
     this.searchResults = [];

     this.showSearchResults = searchService.showSearchResults;
     this.subscription = this.searchService.searchResultsStatus.subscribe((value) => {
     this.showSearchResults = value;
     });
     

     this.searchResults = searchService.searchResults;
     this._subscription1 = this.searchService.fetchedPosts1.subscribe((value) => {
     this.searchResults = value;
     if (this.searchResults.length === 0) {
       this.noResultsFound = true;
     }
     else {
       this.noResultsFound = false;
     }
     console.log(this.searchResults.length);
   });


     this.giphies = searchService.giphies;
     this._subscription = this.searchService.fetchedPosts.subscribe((value) => {
     this.giphies = value;
   });

    
     this.blogpost = blogpostService.blogpost;
     this.subscription = this.blogpostService.fetchedBlogpost.subscribe((value) => {
     this.blogpost = value;
    
   });
     
     this.message = searchService.message; 
     this.subscription = searchService.nameChange.subscribe((value) => { 
     this.message = value;})
 
 }
   
   @Output() myEvent = new EventEmitter();

   apost: string = this.searchService.message

   specifyUrl(id) {
     this.repoUrl = this.repoUrl;
    //  this.repoUrl = `${this.repoUrl}${id}`;
    //  console.log(this.repoUrl);
    //  console.log('url specified ' + id);
   }

   display(){
     console.log(this.apost + this.giphies)
   }
   // Push a search term into the observable stream.
   //search(term: string): void {
   //this.searchTerms.next(term);}
   
   addLikes(){
     if (!this.liked) {
          this.postlikes = this.postlikes + 1;
     }
     else{
          this.postlikes = this.postlikes - 1;
     }
          this.liked = !this.liked;
   }

  ngOnDestroy() {
   //prevent memory leak when component destroyed
    this._subscription.unsubscribe();
  }

  getBlogposts(): void {
    this.blogpostService.getBlogposts().then(blogpost => {this.blogpost = blogpost; blogpost.reverse()});
  }

  onClick(button) { 
       this.myEvent.emit(button);
  }
    
  returnSearchInput() {
        this.passeventsService.exitblogsection(this.searchInputStatus);
  }

  getPost(id: number): void{
    this.blogpostService.getBlogpost(id);
  }

  passPostId(id: number): void{
    console.log('passing post id');
    this.datacarrierService.setData(id);
  }

   ngOnInit(): void {
     console.log(this.name);
    this.postlikes = 45;
    this.display();
    this.getBlogposts();

    var that = this;
        setTimeout(function() {
           console.log('timeout method fired');
           console.log(that.blogpost);
           console.log('timeout method fired a');
  }, 6000);

    this.returnSearchInput();
    /*this.posts = this.searchTerms
      .debounceTime(300)        
      .distinctUntilChanged()   
      .switchMap(term => term   
    
        ? this.searchService.search(term)
        
        : Observable.of<Trypost[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Trypost[]>([]);
      });*/

      // this.getBlogpost(3)


      /*this.searchService.performSearch().subscribe((res: Response) => {
        this.giphies = res.json().data;        
        console.log(this.giphies);
    });*/
  }
     
 

  //  getBlogpost(id): void {
  //   this.blogpostService.getBlogpost(id).then(post => this.post = post);
  // }

  toggleId() {
    this.showId = !this.showId;
  }

  
}
