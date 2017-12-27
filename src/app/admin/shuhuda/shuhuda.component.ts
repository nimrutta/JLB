import { Component, OnInit } from '@angular/core';
import { Shuhuda } from '../../shuhuda'

@Component({
  selector: 'app-shuhuda',
  templateUrl: './shuhuda.component.html',
  styleUrls: ['./shuhuda.component.css']
})
export class ShuhudaComponent implements OnInit {
  shuhuda = new Shuhuda();
  constructor() { }

  ngOnInit() {
  }

}
