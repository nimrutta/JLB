import { Component, OnInit } from '@angular/core';

import { CommentService } from '../../core/comment.service'
import { Comment } from '../../comment'
@Component({
  selector: 'app-blog-soma-zaidi',
  templateUrl: './blog-soma-zaidi.component.html',
  styleUrls: ['./blog-soma-zaidi.component.css']
})
export class BlogSomaZaidiComponent implements OnInit {
   
   _subscription: any;

   constructor( private commentService: CommentService ) {
     this.comments = commentService.comment;
     this._subscription = this. commentService.fetchedComments.subscribe((value) => {
     this.comments = value;
   })
   }
   showId = false;
   showmyId = false;

   comment = new Comment()
   comments : Comment[]
   coments : Comment[]

  ngOnInit() {
        this.getComments();
        this.comment.teacher_id = 17;
        this.comment.food_id = 9;
        this.comment.topic_category_id = 9;
  }

  toggleId() {
    this.showId = !this.showId;
  }

  togglemyId() {
    this.showmyId = !this.showmyId;
  }

   add():void {
    
    if (!this.comment.title) { return; }
    this.commentService.create(this.comment) 
   // .then(comment => {
    //this.coments.push(comment);
               // });
  
            }

   getComments() {
     this.commentService.getComment();
   }
}
