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

  blogpost:any = {topic_id: 4}


  constructor(private blogpostService: BlogpostService) { }

  /*
  * receives data via event emmiter from upload image component and initializes image_id property
  * */
  initializeImageId($event){
    this.blogpost.image_id = $event.id;
  }


  ngOnInit() {
  }


  save(): void {
    this.blogpostService.update(this.post)
  }

  add():void {
    console.log(this.blogpost.title)
    if (!this.blogpost.title) { return; }
    this.blogpostService.create(this.blogpost)
            }

}
