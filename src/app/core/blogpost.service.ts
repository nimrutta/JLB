import { Injectable } from '@angular/core';
import {Headers,RequestOptions, Http, Response} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Blogpost } from './../blogpost';

@Injectable()
export class BlogpostService {
  
  blogpost: Blogpost[];
  private blogpostUrl = 'http://api.jualishebora.ga/api/v1/posts'
  
  //http://api.jualishebora.ga/api/v1/topics  
  //http://api.tuseme.co.tz/api/v1/reports
  
  constructor(private http: Http) { }

  private headers = new Headers({'Content-Type':'application/json'});
    
  getBlogpost(id: number): Promise<Blogpost> {
      const url = `${this.blogpostUrl}/${id}`;
      return this.http.get(url)
                 .toPromise()
                 .then(response => response.json().data as Blogpost)
                 .catch(this.handleError);
  }

  update(post: Blogpost): Promise<Blogpost> {
      const url = `${this.blogpostUrl}/${post.id}`;
      return this.http
                 .put(url, JSON.stringify(post), {headers: this.headers})
                 .toPromise()
                 .then(() => post)
                 .catch(this.handleError);
             }


   create(blogpost:Blogpost): Promise<Blogpost> {
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  
  return this.http
    .post(this.blogpostUrl, blogpost, options)
    .toPromise()
    .then(res => res.json().data as Blogpost)
    .catch(this.handleError);
    //JSON.stringify({makala})
  } 

  private handleError (error: any): Promise<any> {
     console.error('An error occurred', error);
     return Promise.reject(error.message || error);
  }

}
