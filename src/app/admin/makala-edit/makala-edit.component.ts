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
  
  constructor(private makalatitlesService: MakalatitlesService) { }

  ngOnInit() {
    this.getMakalatitles();
  }

  getMakalatitles(): void {
    this.makalatitlesService.getMakalatitles().then(makalatitles => this.makalatitles = makalatitles);
  }


  toggleId(){
    this.showInputfield = !this.showInputfield;
  }

  add(id: number, title: string, body: string, teacher_id: any, food_id: any):void {
     let makala = {
            
             id: id,
             title: title,
             body: body,
             teacher_id: teacher_id,
             food_id: food_id
             }

    
    if (!makala.title) { return; }
    this.makalatitlesService.create(makala) 
    .then(makala => {
    this.makalatitles.push(makala);
                });
  
            }

}
