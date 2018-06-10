import { Component, OnInit } from '@angular/core';

import { PasseventsService } from '../../core/passevents.service';
@Component({
  selector: 'app-shuhuda',
  templateUrl: './shuhuda.component.html',
  styleUrls: ['./shuhuda.component.css']
})
export class ShuhudaComponent implements OnInit {

  searchInputStatus = false;

  constructor(private passeventsService: PasseventsService,) { }

  ngOnInit() {
    this.removeSearchInput() 
  }


  removeSearchInput() {
    this.passeventsService.exitblogsection(this.searchInputStatus);
  }
}
