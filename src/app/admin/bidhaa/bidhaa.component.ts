import { Component, OnInit } from '@angular/core';
import { Bidhaa } from '../../bidhaa';

@Component({
  selector: 'app-bidhaa',
  templateUrl: './bidhaa.component.html',
  styleUrls: ['./bidhaa.component.css']
})
export class BidhaaComponent implements OnInit {

  bidhaa = new Bidhaa();
  
  constructor() { }

  ngOnInit() {
  }

}
