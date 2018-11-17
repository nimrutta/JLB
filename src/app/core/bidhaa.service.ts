import { Injectable } from '@angular/core';
import {Headers,RequestOptions, Http, Response} from '@angular/http';

import { Bidhaa } from './../bidhaa';
import { BidhaaCategory } from './../bidhaaCategory';

import {Subject} from 'rxjs/Subject';

@Injectable()
export class BidhaaService {

  constructor(private http: Http) { }
  
  bidhaa: Bidhaa[];
  bidhaaCategory: BidhaaCategory[];

  fetchedBidhaa: Subject<Bidhaa[]> = new Subject<Bidhaa[]>();  

  bidhaaUrl = ''
  bidhaaCategoriesUrl = ''
  bidhaaByIdUrl = ''

  // getBidhaa(id: number): void {                               
  //   const url = `${this.bidhaaUrl}/${id}`;
    
  //   this.http.get(url).subscribe((res: Response) => {
  //       this.bidhaa = res.json().data; 
  //       this.fetchedBidhaa.next(this.bidhaa)       
        
  //   });
  // }


  getBidhaa(id: number): Promise<Bidhaa[]> {
    const url = `${this.bidhaaByIdUrl}/${id}`;
 
    return this.http.get(url)
                    .toPromise()
                    .then(response => response.json().data as Bidhaa[])
                    .catch(this.handleError);
   }
   


  getProducts(): Promise<Bidhaa[]> {
    return this.http.get(this.bidhaaUrl)
                    .toPromise()
                    .then(response => response.json().data as Bidhaa[])
                    .catch(this.handleError);
   } 

   
   getCategories(): Promise<BidhaaCategory[]> {
    return this.http.get(this.bidhaaCategoriesUrl)
                    .toPromise()
                    .then(response => response.json().data as BidhaaCategory[])
                    .catch(this.handleError);
   } 


   
   private handleError (error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
 }

}
