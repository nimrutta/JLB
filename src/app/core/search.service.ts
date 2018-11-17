import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

import { Trypost }           from '../trypost';
import { Blogpost } from '../blogpost';

import {Subject} from 'rxjs/Subject';

@Injectable()
export class SearchService {
  giphies: Blogpost [];
  searchResults: Blogpost[];
  showSearchResults: boolean;
  constructor(http: Http) { this.http = http;
                            this.giphies = []; 
                            }

  http: Http;
  
  message: string = "now you see this, success"
  
  fetchedPosts: Subject<Blogpost[]> = new Subject<Blogpost[]>();
  fetchedPosts1: Subject<Blogpost[]> = new Subject<Blogpost[]>();
  searchResultsStatus: Subject<boolean> = new Subject<boolean>();
  
  nameChange: Subject<string> = new Subject<string>();

  baseUrl: string = 'http://api.jualishebora.gq/api/v1/search/' //http://api.jualishebora.gq/api/v1/posts
  queryUrl: string = '?search=';

  searchResultsView(status) {
    this.showSearchResults = status;
    this.searchResultsStatus.next(this.showSearchResults);
    console.log(this.showSearchResults);
  }

  callSearch(term){
    
    this.search(term).subscribe(results => {
      this.searchResults = results.data;
      this.fetchedPosts1.next(this.searchResults);
      console.log(term + 'typed');
      console.log(results + 'obtained');
      console.log(this.searchResults);
    })
    
  }
   
  search(terms: Observable<string>) {
          console.log(terms + '1 typed')

    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term) {
           console.log(term + '2 typed')

    return this.http
        .get(this.baseUrl + term)
        .map(res => res.json());
  }

  performSearch(searchTerm: HTMLInputElement): void {   
    var apiLink = 'http://api.jualishebora.gq/api/v1/search'                     // http://api.tuseme.co.tz/api/v1/search/
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