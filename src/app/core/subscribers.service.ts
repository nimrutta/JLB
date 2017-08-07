import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Subscribers } from './../subscribers';

@Injectable()
export class SubscribersService {
  
  private subscribersUrl = 'http://api.jualishebora.ga/api/v1/subscribers'
  
  constructor(private http: Http) { }
  
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

}
