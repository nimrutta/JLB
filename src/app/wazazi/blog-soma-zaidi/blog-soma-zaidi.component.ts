import { Component, OnInit } from '@angular/core';
//import {HmrState} from  '@angularclass/hmr'; //'angular2-hmr'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BlogpostService } from '../../core/blogpost.service';
import { Blogpost } from '../../blogpost';
import { CommentService } from '../../core/comment.service';
import { Comment } from '../../comment';
import { DatacarrierService } from '../../core/datacarrier.service';
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
   

   constructor(private blogpostService: BlogpostService,
               private commentService: CommentService,
               public datacarrierService: DatacarrierService,
               private route: ActivatedRoute,
               private location: Location
                  ) {
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

   
   comment = new Comment()
   comments : Comment[]
   coments : Comment[]


  
  ngOnInit() {
        this.getComments();
        this.comment.teacher_id = 17;
        this.comment.food_id = 9;
        this.comment.topic_category_id = 9;

        this.getaPostviaRouter();

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
    
    if (!this.comment.title) { return; }
    this.commentService.create(this.comment) 
   // .then(comment => {
    //this.coments.push(comment);
               // });
  
            }

  getaPostviaRouter() {
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
}
