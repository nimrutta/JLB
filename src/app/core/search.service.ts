import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Trypost }           from '../trypost';
import { Blogpost } from '../blogpost';

import {Subject} from 'rxjs/Subject';

@Injectable()
export class SearchService {
  giphies: Blogpost [];
  constructor(http: Http) { this.http = http;
                            this.giphies = [] }

  http: Http;
  
  message: string = "now you see this, success"
  
  fetchedPosts: Subject<Blogpost[]> = new Subject<Blogpost[]>();
  
  nameChange: Subject<string> = new Subject<string>();

  performSearch(searchTerm: HTMLInputElement): void {
    var apiLink = 'http://api.tuseme.co.tz/api/v1/search/' 
    + searchTerm.value + '?api_key=bc' ;
    
    this.http.request(apiLink).subscribe((res: Response) => {
        this.giphies = res.json().data; 
        this.fetchedPosts.next(this.giphies)       
        console.log(this.giphies);
        this.message = 'now this, success'
        this.nameChange.next(this.message);
        console.log(this.message);
    });
    
  }

}