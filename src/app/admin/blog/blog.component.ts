import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';

import { Blogpost } from '../../blogpost';
import { BlogpostService } from '../../core/blogpost.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {
  
 
  post: any = { } 

  blogpost = new Blogpost();
  blogposts : Blogpost[];

  constructor(private blogpostService: BlogpostService) { }


  ngOnInit() {
    this.blogpost.title = 'title';
    this.blogpost.topic_id = 4;
  }

  
  save(): void {
    this.blogpostService.update(this.post)
  }

  add():void {
    
    if (!this.blogpost.title) { return; }
    this.blogpostService.create(this.blogpost) 
    //.then(blogpost => {
    //this.blogposts.push(blogpost);
              //  });
  
            }

}
