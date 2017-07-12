import { Component, OnInit } from '@angular/core';

import { Blogpost } from '../../blogpost';
import { BlogpostService } from '../../core/blogpost.service';

@Component({
  selector: 'app-blog-section',
  templateUrl: './blog-section.component.html',
  styleUrls: ['./blog-section.component.css'],

  providers: [ BlogpostService ],
})


export class BlogSectionComponent implements OnInit {

   showId = false;

  post: Blogpost = { id:1,
                     title:'',
                     body:'', 
                     topic_id:2 };

   
   constructor(private blogpostService: BlogpostService) { }
   
   getBlogpost(id): void {
    this.blogpostService.getBlogpost(id).then(post => this.post = post);
  }

  toggleId() {
    this.showId = !this.showId;
  }

  
  ngOnInit() {
   this.getBlogpost(3)
  }
}
