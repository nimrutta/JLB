import { Component, OnInit } from '@angular/core';

import { Makalatitles } from '../../makalatitles';
import { MakalatitlesService } from '../../core/makalatitles.service';

@Component({
  selector: 'app-makala-edit',
  templateUrl: './makala-edit.component.html',
  styleUrls: ['./makala-edit.component.css'],
  providers: [MakalatitlesService]
})
export class MakalaEditComponent implements OnInit {
  
  showInputfield = false;

  makalatitles:Makalatitles[];
  makala = new Makalatitles();
  errorMessage: String;

  constructor(private makalatitlesService: MakalatitlesService) { }

  ngOnInit() {
    this.getMakalatitles();
  }

  getMakalatitles(): void {
    //this.makalatitlesService.getMakalatitles().then(makalatitles => this.makalatitles = makalatitles);
  }

  toggleId(){
    this.showInputfield = !this.showInputfield;
  }

  add():void {
    
    if (!this.makala.title) { return; }
    this.makalatitlesService.create(this.makala) 
    .then(makala => {
    this.makalatitles.push(makala);
                });
  
            }

}
