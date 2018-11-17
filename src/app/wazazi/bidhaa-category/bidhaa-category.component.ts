import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { BidhaaService } from '../../core/bidhaa.service';
import { Bidhaa } from '../../bidhaa';

@Component({
  selector: 'app-bidhaa-category',
  templateUrl: './bidhaa-category.component.html',
  styleUrls: ['./bidhaa-category.component.css']
})
export class BidhaaCategoryComponent implements OnInit {


  bidhaa: Bidhaa[];

  subscription: any;
  bidhaacategory_Id: number

  constructor( private bidhaaService: BidhaaService,
               private route: ActivatedRoute,) {
    this.bidhaa = bidhaaService.bidhaa;
     this.subscription = this.bidhaaService.fetchedBidhaa.subscribe((value) => {
     this.bidhaa = value;})
   }

 

  ngOnInit() {
  }


  getBidhaaviaRouter() {
    this.bidhaacategory_Id = +this.route.snapshot.paramMap.get('id');
    const id = +this.route.snapshot.paramMap.get('id');
    this.bidhaaService.getBidhaa(id).then(bidhaa => this.bidhaa = bidhaa);
  }


}
