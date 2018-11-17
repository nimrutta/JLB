import { Injectable } from '@angular/core';
import {Headers, Http, RequestOptions} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Clients } from './../clients';
import { Wazazi } from './../wazazi';

@Injectable()
export class ClientsService {
  
  private clientsUrl = 'http://api.jualishebora.gq/api/v1/wazazis'
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


  updateClient(client:Wazazi, id): Promise<Wazazi> {
    const url = `${this.clientsUrl}/${id}`;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
           .put(url, client, options)
           .toPromise()
           .then(res => res.json().data as Wazazi)
           .catch(this.handleError);         
}


  private handleError (error: any): Promise<any> {
     console.error('An error occurred', error);
     return Promise.reject(error.message || error);
  }

   create(mzazi:Wazazi): Promise<Wazazi> {
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  
  return this.http
    .post(this.clientsUrl, mzazi, options)
    .toPromise()
    .then(res => res.json().data as Wazazi)
    .catch(this.handleError);
    //JSON.stringify({makala})
  }
}
