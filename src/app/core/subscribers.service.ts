import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Subscribers } from './../subscribers';

@Injectable()
export class SubscribersService {
  
  private subscribersUrl = 'http://api.jualishebora.ga/api/v1/subscribers'
  
  constructor(private http: Http) { }
  
  Subscriber 

  getSubscribers(): Promise<Subscribers[]> {
      return this.http.get(this.subscribersUrl)
                 .toPromise()
                 .then(response => response.json().data as Subscribers[])
                 .catch(this.handleError);
  }

  private handleError (error: any): Promise<any> {
     console.error('An error occurred', error);
     return Promise.reject(error.message || error);
  }

  create(subscriber:Subscribers): Promise<Subscribers> {
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  
  return this.http
    .post(this.subscribersUrl, subscriber, options)
    .toPromise()
    .then(res => res.json().data as Subscribers)
    .catch(this.handleError);
    //JSON.stringify({makala})
  }

}
