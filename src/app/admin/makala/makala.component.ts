import { Component, OnInit } from '@angular/core';

import { Makalatitles } from '../../makalatitles';
import { Makalacategory } from '../../makalacategory';
import { MakalatitlesService } from '../../core/makalatitles.service';

@Component({
  selector: 'app-makala',
  templateUrl: './makala.component.html',
  styleUrls: ['./makala.component.css'],
  providers: [MakalatitlesService]
})
export class MakalaComponent implements OnInit {
  
  showInputfield = false;
  toRename = false;
  renameData = [];
  dsply = {};
  differentItemClicked = false;
 
  makalatitles:Makalatitles[];
  makalacategories = [] ;
  makala = new Makalatitles();
  category = new Makalacategory();
  errorMessage: String;

  constructor(private makalatitlesService: MakalatitlesService) { 
    
  }

  ngOnInit() {
    
    this.getTopicCategories();
    this.getMakalatitles();
    this.category.id = 1;
    this.defineRenameOrCancel();
  }

  getTopicCategories(): void {
    console.log('this code is hit 1');
    
    this.makalatitlesService.getMakalaCategories().then(makalacategories => this.makalacategories = makalacategories); 
  }
  
  getMakalatitles(): void {
    var that = this;
    setTimeout(function() {
     console.log('this code is hit 2');
    console.log('this code is hit 4');
    console.log(that.makalacategories[1]);
    console.log('this code is hit 3');  

    }, 500);
   
   //this.makalatitlesService.getMakalatitles().then(makalatitles => this.makalatitles = makalatitles);
  }

  toggleId(){
    this.showInputfield = !this.showInputfield;
  }

  // callToRename() {
  //   this.toRename = !this.toRename;
   // (this.renameData === 'Rename') ? (this.renameData = 'Cancel'): (this.renameData = 'Rename');
   
  //}
  defineRenameOrCancel() {
    var that = this;
    setTimeout(function() {
      console.log(that.makalacategories.length);
      for (var i = 0; i < that.makalacategories.length; i++) {
     // var element = this.renameData[i];
         that.renameData[i] = 'Rename';
    }

    }, 500);
    
  }

  displayThisItem(i) {
    
      //  for (var a = 0; a < this.makalacategories.length; a++) {    // checks whether item
      //    if (this.dsply[a] === true) {                             // an item other than the 
      //      console.log(this.differentItemClicked + 'now')          // active one is clicked
      //       if (a != i) {
      //         this.differentItemClicked = true;
      //         console.log(this.differentItemClicked + 'now')
      //       }
      //       else {
      //         this.differentItemClicked = false;
      //       }
      //    }
      //  }

       for (var a = 0; a < this.makalacategories.length; a++) {
         if (i === a) {
          this.dsply[i] = !this.dsply[i];
          (this.renameData[i] === 'Rename') ? (this.renameData[i] = 'Cancel'): (this.renameData[i] = 'Rename');
          console.log(this.dsply[i] , i);
         }

         else {
          this.dsply[a] = false;
           this.renameData[a] = 'Rename';
          console.log(this.dsply[a] , a);
         }   
    }
  }

  
}
