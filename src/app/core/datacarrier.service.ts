import { Injectable } from '@angular/core';

@Injectable()
export class DatacarrierService {

  constructor() { console.log('datacarrier is created') }

  private data: any;

  setData(data:any){
        this.data = data;
        console.log('1. service data after set ' + this.data)
    }
  
  getData():any{
        console.log('2. service data before get ' + this.data)
        return this.data;
    }

}
