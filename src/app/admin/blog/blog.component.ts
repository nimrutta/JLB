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

  constructor(private blogpostService: BlogpostService) { }


  ngOnInit() {
  }

  
  save(): void {
    this.blogpostService.update(this.post)
  }

}
