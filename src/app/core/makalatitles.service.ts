import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Makalatitles } from './../makalatitles';

@Injectable()
export class MakalatitlesService {

  private headers = new Headers({'Content-Type': 'application/json'});
  
  private makalatitlesUrl = 'http://api.jualishebora.ga/api/v1/topics'
  
  constructor(private http: Http) { }
  
  getMakalatitles(): Promise<Makalatitles[]> {
      return this.http.get(this.makalatitlesUrl)
                 .toPromise()
                 .then(response => response.json().data as Makalatitles[])
                 .catch(this.handleError);
  }

  private handleError (error: any): Promise<any> {
     console.error('An error occurred', error);
     return Promise.reject(error.message || error);
  }

 create(makala): Promise<Makalatitles> {
  return this.http
    .post(this.makalatitlesUrl, JSON.stringify({makala: makala}), {headers: this.headers})
    .toPromise()
    .then(res => res.json().data as Makalatitles)
    .catch(this.handleError);
}

}
