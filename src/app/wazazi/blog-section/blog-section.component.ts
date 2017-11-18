import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


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
import { DatacarrierService } from '../../core/datacarrier.service'

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
   blogpost: Blogpost[];
   giphies: Blogpost[];
   _subscription: any;
   subscription: any;
   message: string;
   postlikes: number;
   liked = false;
   public repoUrl: string;

   constructor(
     private blogpostService: BlogpostService,
     private searchService: SearchService,
     private datacarrierService: DatacarrierService,
     private router: Router) { 
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

     this.repoUrl="http://jualishebora.ga/wazazi/blog-section"   
 }
   
  

   apost: string = this.searchService.message
   display(){
     console.log(this.apost + this.giphies)
   }
   // Push a search term into the observable stream.
   //search(term: string): void {
   //this.searchTerms.next(term);}
   
   addLikes(){
     if (!this.liked){
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
    this.blogpostService.getBlogposts().then(blogpost => this.blogpost = blogpost);
  }

  getPost(id: number): void{
    this.blogpostService.getBlogpost(id);
  }

  passPostId(id: number): void{
    console.log('passing post id');
    this.datacarrierService.setData(id);
  }

   ngOnInit(): void {
    this.postlikes = 45;
    this.display();
    this.getBlogposts();

    var that = this;
        setTimeout(function() {
           console.log('timeout method fired');
           console.log(that.blogpost);
           console.log('timeout method fired a');
  }, 6000);
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
