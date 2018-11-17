import { Injectable } from '@angular/core';
import {Headers,RequestOptions, Http, Response} from '@angular/http';
import { HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';
import {Subject} from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'



import { Makalatitles } from './../makalatitles';
import { Makalacategory } from './../makalacategory';
import { Food } from './../food';

@Injectable()
export class MakalatitlesService {
  makala: Makalatitles[];
  article: Makalatitles[];
  category: Makalacategory[];
  foods: Food[];
  makalatitle: string 
  

  private headers = new Headers({'Content-Type': 'application/json'});
  
  private makalatitlesUrl = 'http://api.jualishebora.gq/api/v1/topics'
  private makalacategoriesUrl = 'http://api.jualishebora.gq/api/v1/topicsByCategory'  //http://api.tuseme.co.tz/api/v1/streets
  private makalaCategoryNameUrl = 'http://api.jualishebora.gq/api/v1/topicCategories'
  private updateUrl   = 'http://api.jualishebora.gq/api/v1/topicCategories'
  private foodsUrl = 'http://api.jualishebora.gq/api/v1/foods'

  constructor(private http: Http) { }
  
  
  
  nameChange: Subject<string> = new Subject<string>();
  fetchedArticles: Subject<Makalatitles[]> = new Subject<Makalatitles[]>(); //observable ya makala inarudishwa hapa,?
  fetchedArticle: Subject<Makalatitles[]> = new Subject<Makalatitles[]>();
  fetchedCategories: Subject<Makalacategory[]> = new Subject<Makalacategory[]>(); //observable ya topic catgories

  getMakalatitles(): void {             //anarudisha array ya categories za makala life cycle ya 
                                                           // makala contents ikianza
      //return this.http.get(this.makalaCategoryNameUrl)
      //           .toPromise()
      //           .then(this.extractData)
      //           .catch(this.handleError);

      this.http.get(this.makalaCategoryNameUrl).subscribe((res: Response) => {
        this.category = res.json().data; 
        this. fetchedCategories.next(this.category)       
    });
  }

  getMakala(id: number): void {                               //huyu anaitwa uki click kundi la umri wa mtoto
   const url = `${this.makalacategoriesUrl}/${id}`;
    
    this.http.get(url).subscribe((res: Response) => {
        this.makala = res.json().data; 
        this.fetchedArticles.next(this.makala)       
        console.log(this.makala);
        
    });
  }

  getArticle(id: number): void {
   const url = `${this.makalatitlesUrl}/${id}`;
    
    this.http.get(url).subscribe((res: Response) => {
        this.article = res.json().data; 
        this.fetchedArticle.next(this.article)  
        console.log(id)     
        console.log(this.article);
    });
  }

  private extractData(res: Response) {
	let body = res.json();
        return body.data || {};
    }
  
  private handleError (error: any): Promise<any> {
     console.error('An error occurred', error);
     return Promise.reject(error.message || error);
  }

 create(makala:Makalatitles): Promise<Makalatitles> {
  let headers = new Headers({ 'Content-Type': 'application/json' });
  let options = new RequestOptions({ headers: headers });
  
  return this.http
    .post(this.makalatitlesUrl, makala, options)
    .toPromise()
    .then(res => res.json().data as Makalatitles)
    .catch(this.handleError);
    //JSON.stringify({makala})
  }

  performSearch(searchTerm: string): void {
    var apiLink = 'http://api.tuseme.co.tz/api/v1/search/' 
    + searchTerm + '?api_key=bc' ;
    
    this.http.request(apiLink).subscribe((res: Response) => {
        this.makala = res.json().data; 
        this.fetchedArticles.next(this.makala)       
        console.log(this.makala);
        this.makalatitle = searchTerm;
        this.nameChange.next(this.makalatitle);
        console.log(this.makalatitle);
    });
  }

  getMakalatitle(id: number): void {
   const url = `${this.makalaCategoryNameUrl}/${id}`;
    
    this.http.get(url).subscribe((res: Response) => {
        this.category = res.json().data; 
        this.fetchedCategories.next(this.category)       
        console.log(this.category);
    });
  }

  updateTopicCategory(category:Makalacategory, id): Promise<Makalacategory> {
        console.log(category.category_name);
        console.log(category.id);
        const url = `${this.updateUrl}/${id}`;
        console.log(url);

        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
       
        return this.http
               .put(url, category, options)
               .toPromise()
               .then(res => res.json().data as Makalacategory)
               .catch(this.handleError);
               
  }


  updateFoods(food:Food, id): Promise<Food> {
    console.log('food updated in service')
    const url = `${this.foodsUrl}/${id}`;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http
           .put(url, food, options)
           .toPromise()
           .then(res => res.json().data as Food)
           .catch(this.handleError);
           
}

  deleteCategory(id) {
       console.log('delete category in service called');
       let headers = new Headers({ 'Content-Type': 'application/json' });
       let options = new RequestOptions({ headers: headers });
       const url = `${this.makalaCategoryNameUrl}/${id}`;
       return this.http.delete(url, options)//.pipe().catch(this.handleError);
  }

  deleteFood(id) {
    console.log('delete food in service called');
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    const url = `${this.foodsUrl}/${id}`;
    return this.http.delete(url, options)
}

  getMakalaCategories(): Promise<Makalacategory[]> {
        return this.http
               .get(this.makalaCategoryNameUrl)
               .toPromise()
               .then(res => res.json().data as Makalacategory[])
               .catch(this.handleError);
  }

  getFoods(): Promise<Food[]> {
    return this.http
           .get(this.foodsUrl)
           .toPromise()
           .then(res => res.json().data as Food[])
           .catch(this.handleError);
}


  createMakalaCategory(category:Makalacategory): Promise<Makalacategory> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    return this.http
      .post(this.makalaCategoryNameUrl, category, options)
      .toPromise()
      .then(res => res.json().data as Makalacategory)
      .catch(this.handleError);
      //JSON.stringify({makala})
    }


 createFood(food:Food): Promise<Food> {
      console.log('food created in service');

      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      
      return this.http
        .post(this.foodsUrl, food, options)
        .toPromise()
        .then(res => res.json().data as Food)
        .catch(this.handleError);
        
      }

  //http://api.jualishebora.gq/api/v1/topicCategories/1

  //gectMakala(id: number): Promise<Makalatitles[]> {
  //const url = `${this.makalacategoriesUrl}/${id}`;
  // return this.http.get(url)
  //.toPromise()
  // .then(response => response.json().data as Makalatitles[]).catch(this.handleError);
  // this.fetchedArticles.next(this.makala)
    
//}

}
