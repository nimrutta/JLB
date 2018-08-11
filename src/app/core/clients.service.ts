import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Clients } from './../clients';
import { Wazazi } from './../wazazi';

@Injectable()
export class ClientsService {
  
  private clientsUrl = 'http://api.jualishebora.ga/api/v1/wazazis'
  //http://api.tuseme.co.tz/api/v1/users
  constructor(private http: Http) { }
  
  getClients(): Promise<Wazazi[]> {
   return this.http.get(this.clientsUrl)
                   .toPromise()
                   .then(response => response.json().data as Wazazi[])
                   .catch(this.handleError);
  }

//getClients(): void {
    //this.clientsService.getClients().then(clients => this.clients = clients);
  //}


  private handleError (error: any): Promise<any> {
     console.error('An error occurred', error);
     return Promise.reject(error.message || error);
  }

   create(client:Clients): Promise<Clients> {
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  
  return this.http
    .post(this.clientsUrl, client, options)
    .toPromise()
    .then(res => res.json().data as Clients)
    .catch(this.handleError);
    //JSON.stringify({makala})
  }
}
