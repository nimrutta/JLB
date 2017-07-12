import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Clients } from './../clients';

@Injectable()
export class ClientsService {
  
  private clientsUrl = 'http://api.jualishebora.ga/api/v1/users'
  //http://api.tuseme.co.tz/api/v1/users
  constructor(private http: Http) { }
  
  getClients(): Promise<Clients[]> {
      return this.http.get(this.clientsUrl)
                 .toPromise()
                 .then(response => response.json().data as Clients[])
                 .catch(this.handleError);
  }

  private handleError (error: any): Promise<any> {
     console.error('An error occurred', error);
     return Promise.reject(error.message || error);
  }

}
