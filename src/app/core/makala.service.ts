import { Injectable } from '@angular/core';
import {Headers,RequestOptions, Http, Response} from '@angular/http';

import { Makala } from './../makala';
import { Food } from './../food';
import { Makalacategory } from './../makalacategory';

import {Subject} from 'rxjs/Subject';

@Injectable()
export class MakalaService {

  food: Food[];
  makala: Makala[];
  makalaCategories: Makalacategory[];
  makalaTitles: string[];
  private makalaUrl = 'http://api.jualishebora.gq/api/v1/topics';
  private makalaCategoriesUrl = 'http://api.jualishebora.gq/api/v1/topicCategories';
  private foodsUrl = 'http://api.jualishebora.gq/api/v1/foods';

  fetchedmakalaTitles: Subject<string[]> = new Subject<string[]>();
  fetchedmakalaCategories: Subject<Makalacategory[]> = new Subject<Makalacategory[]>();
  fetchedfoods: Subject<Food[]> = new Subject<Food[]>();

  constructor(private http: Http) { }

  create(makala:Makala): Promise<Makala> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    return this.http
      .post(this.makalaUrl, makala, options)
      .toPromise()
      .then(res => res.json().data as Makala)
      .catch(this.handleError);
      //JSON.stringify({makala})
    }
    

  getMakalaCategories(): Promise<Makalacategory[]> {
   return this.http.get(this.makalaCategoriesUrl)
                   .toPromise()
                   .then(response => response.json().data as Makalacategory[])
                   .catch(this.handleError);
  }
  
  
  getMakalaCategory (): void {                              
    const url = this.makalaCategoriesUrl;
    
    this.http.get(url).subscribe((res: Response) => {
        this. makalaCategories = res.json().data; 
        this.fetchedmakalaCategories.next(this.makalaCategories);       
    });
  }

  getFood (): void {                              
    const url = this.foodsUrl;
    
    this.http.get(url).subscribe((res: Response) => {
        this.food = res.json().data; 
        this.fetchedfoods.next(this.food);       
    });
  }

    
  private handleError (error: any): Promise<any> {
      console.error('An error occurred', error);
      return Promise.reject(error.message || error);
   }

}
