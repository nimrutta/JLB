import { Component, OnInit } from '@angular/core';

import { BidhaaService } from '../../core/bidhaa.service';
import { PasseventsService } from '../../core/passevents.service';
import { DatacarrierService } from '../../core/datacarrier.service';
import { Bidhaa } from '../../bidhaa';
import { BidhaaCategory } from '../../bidhaaCategory';
@Component({
  selector: 'app-bidhaa',
  templateUrl: './bidhaa.component.html',
  styleUrls: ['./bidhaa.component.css']
})
export class BidhaaComponent implements OnInit {

  searchInputStatus = false;
  showMoreBidhaa = false;

  constructor(private passeventsService: PasseventsService,
              private datacarrierService: DatacarrierService,
              private bidhaaService: BidhaaService) { }


  bidhaacategories : BidhaaCategory[];

  ngOnInit() {
    this.removeSearchInput()
  }

  showMoreBidhaafn() {
    this.showMoreBidhaa = !this.showMoreBidhaa;
  }

  removeSearchInput() {
    this.passeventsService.exitblogsection(this.searchInputStatus);
  }

  passPostId(id: number): void{
    this.datacarrierService.setData(id);
  }

  getBidhaaCategories() {
    this.bidhaaService.getCategories().then(category => this.bidhaacategories = category);
  }
}
