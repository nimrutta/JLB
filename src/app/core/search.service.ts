import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Trypost }           from '../trypost';
import { Blogpost } from '../blogpost';

@Injectable()
export class SearchService {

  constructor(http: Http) { this.http = http; }

  http: Http;
  
  message: string = "now you see this, success"

  performSearch(searchTerm: HTMLInputElement): void {
    var apiLink = 'http://api.tuseme.co.tz/api/v1/search/' 
    + searchTerm.value + '?api_key=bc' ;
    
    this.http.request(apiLink).subscribe((res: Response) => {
        this.giphies = res.json().data;        
        console.log(this.giphies);
    });
    
  }

  giphies: Blogpost
  /*search(term: string): Observable<Trypost[]> {
    return this.http
               .get(`api.tuseme.co.tz/api/v1/search/?name=${term}`)
               .map(response => 
                response.json().data as Trypost[]);
  }*/
}