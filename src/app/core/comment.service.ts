import { Injectable } from '@angular/core';
import {Headers,RequestOptions, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Subject} from 'rxjs/Subject';


import { Comment } from './../comment';


@Injectable()
export class CommentService {
  comment: Comment[];

  private headers = new Headers({'Content-Type': 'application/json'});
  
  private commentsUrl = 'http://api.jualishebora.gq/api/v1/comments'
  private commentcategoriesUrl = 'http://api.jualishebora.gq/api/v1/topicsByCategory'
  private commentCategoryNameUrl = 'http://api.jualishebora.gq/api/v1/topicCategories'

  constructor(private http: Http) { }
  
  nameChange: Subject<string> = new Subject<string>();
  fetchedComments: Subject<Comment[]> = new Subject<Comment[]>();
  
  private handleError (error: any): Promise<any> {
     console.error('An error occurred', error);
     return Promise.reject(error.message || error);
  }

 create(comment:Comment): Promise<Comment> {
  console.log('comment created in service')
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  
  return this.http
    .post(this.commentsUrl, comment, options)
    .toPromise()
    .then(res => res.json().data as Comment)
    .catch(this.handleError);
    //JSON.stringify({comment})
  }

  
   getComment(): void {
   const url = this.commentsUrl;
    
    this.http.get(url).subscribe((res: Response) => {
        this.comment = res.json().data; 
        this.fetchedComments.next(this.comment)       
        console.log(this.comment);
    });
}

}