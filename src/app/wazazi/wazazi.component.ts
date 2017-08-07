import { Component, OnInit, ViewChild } from '@angular/core';
import { SearchService } from '../core/search.service';


@Component({
  selector: 'app-wazazi',
  templateUrl: './wazazi.component.html',
  styleUrls: ['./wazazi.component.css'],
  providers: [ SearchService ],
})
export class WazaziComponent implements OnInit {

  @ViewChild('child') child ;

  constructor( private searchService: SearchService ) { }

  ngOnInit() { }
  

  performSearch(searchTerm: HTMLInputElement): void { 
      this.searchService.performSearch(searchTerm);
  }
  
}
