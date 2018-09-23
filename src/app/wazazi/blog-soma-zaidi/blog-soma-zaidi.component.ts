import { Component, OnInit } from '@angular/core';
//import {HmrState} from  '@angularclass/hmr'; //'angular2-hmr'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BlogpostService } from '../../core/blogpost.service';
import { Blogpost } from '../../blogpost';
import { CommentService } from '../../core/comment.service';
import { Comment } from '../../comment';
import { DatacarrierService } from '../../core/datacarrier.service';
import { PasseventsService } from '../../core/passevents.service';

@Component({
  selector: 'app-blog-soma-zaidi',
  templateUrl: './blog-soma-zaidi.component.html',
  styleUrls: ['./blog-soma-zaidi.component.css']
})
export class BlogSomaZaidiComponent implements OnInit {
   
   Post: Blogpost[];
   blogpost: Blogpost[];
   subscription: any;
   _subscription: any;
   blogId: number;
   post_id: number;
   

   constructor(private blogpostService: BlogpostService,
               private commentService: CommentService,
               public datacarrierService: DatacarrierService,
               private passeventsService: PasseventsService,
               private route: ActivatedRoute,
               private location: Location
                  ) {

     this.comments = [];

     this.blogpost = blogpostService.blogpost;
     this.subscription = this.blogpostService.fetchedBlogpost.subscribe((value) => {
     this.blogpost = value;
   });
    
    
     this.comments = commentService.comment;
     this._subscription = this. commentService.fetchedComments.subscribe((value) => {
     this.comments = value;
   })

   }

  //   article: Makalatitles[];
  // _subscription: any;

  // constructor( private makalatitlesService:MakalatitlesService) { 
  //    this.article = makalatitlesService.article;
  //    this._subscription = this.makalatitlesService.fetchedArticle.subscribe((value) => {
  //    this.article = value;
  // })
  //   }


   showId = false;
   showmyId = false;
   thanksforjoiningprogram = false;
   searchInputStatus = false;
   showThankyoumessage = false;

   
   comment = new Comment()
   comments : Comment[]
   coments : Comment[]

   videourl= "Promote a Page- A Facebook Pages Tutorial - Facebook for Business.mp4"
  
  ngOnInit() {
        
        this.getaPostviaRouter();
        this.getComments();
        this.sortComments();
        this.comment.post_id = this.post_id;
        this.comment.id = 1;
        this.comment.parent_id = 1;
        this.removeSearchInput();
        console.log(this.Post)

        // this.blogId = this.datacarrierService.getData();
        // console.log(this.blogId);

        //this.getaPost(this.blogId);
        
  //       var that = this;
  //       setTimeout(function() {
  //          console.log('timeout method fired');
  //          console.log(that.blogpost);
  //          console.log('timeout method fired a');
  // }, 3000);
  }

  removeSearchInput() {
        this.passeventsService.exitblogsection(this.searchInputStatus);
  }

  toggleId() {
    this.showId = !this.showId;
  }

  togglemyId() {
    this.showmyId = !this.showmyId;
  }

  myevenT($event){
    this.showmyId = !this.showmyId;
    this.thanksforjoiningprogram = !this.thanksforjoiningprogram;
  }

  closeButtonClicked($event){
       this.showmyId = !this.showmyId;
    }

   closeModal($event){
    this.thanksforjoiningprogram = !this.thanksforjoiningprogram;
    }

   add():void {
    console.log('comment posted1');
    if (!this.comment.body) { return; }
    this.commentService.create(this.comment) 
   .then(comment => {
    this.coments.push(comment);
    console.log('comment posted')
               });
    this.showThankyoumessage = !this.showThankyoumessage;
            }

   clearCommentData() {
   // this.comment.title = null;
    this.comment.phone_number = null;
    this.comment.body = null;
    console.log('comment cleared')
  }
    
   removeThankyoumessage() {
    var that = this
    setTimeout(function() {
    that.showThankyoumessage = !that.showThankyoumessage; 
    },2000);
   }
  getaPostviaRouter() {
    this.post_id = +this.route.snapshot.paramMap.get('id');
    const id = +this.route.snapshot.paramMap.get('id');
    this.blogpostService.getaPost(id).then(aPost => this.Post = aPost);
    console.log(id);
  }

  //  getaPost(id: number): void {
  //   this.blogpostService.getaPost(id).then(aPost => this.Post = aPost);
  // }

  goBack() {
    this.location.back();
  }

   getComments() {
     this.commentService.getComment();
   }

   sortComments() {
     var that = this;
     setTimeout(function() {
       that.coments = [];
       for (var i = 0; i < that.comments.length; i++) {
       var CMT = that.comments[i];
       if (CMT.post_id === that.post_id) {
           that.coments.push(CMT);
           console.log(CMT.post_id);
           console.log(that.post_id);
       }
       
     }
     }, 1500);
     
   }
}
