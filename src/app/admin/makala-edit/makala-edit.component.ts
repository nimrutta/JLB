import { Component, OnInit } from '@angular/core';

import { Makalatitles } from '../../makalatitles';
import { Makalacategory } from '../../makalacategory';
import { Food } from '../../food';
import { MakalatitlesService } from '../../core/makalatitles.service';

@Component({
  selector: 'app-makala-edit',
  templateUrl: './makala-edit.component.html',
  styleUrls: ['./makala-edit.component.css'],
  providers: [MakalatitlesService]
})
export class MakalaEditComponent implements OnInit {
  
  showInputfield = false;
  toRename = false;
  renameData = [];
  dsply = {};
  differentItemClicked = false;
  showEraser = {};
  showFoodEraser = {};
 
  makalatitles:Makalatitles[];
  makalacategories = [] ;
  makalaCategoryCounter: number;
  makala = new Makalatitles();
  category = new Makalacategory();
  newCategory = new Makalacategory();
  errorMessage: String;

  foods:Food[];
  foodsCounter: number;
  food = new Food();
  newFood = new Food()

  constructor(private makalatitlesService: MakalatitlesService) { 
   this.foods = [];
  }

  ngOnInit() {
    
    this.getTopicCategories();
    this.getFoods();

   // this.getMakalatitles();
    this.category.id = 1;
    this.defineRenameOrCancel();

    this.newFood.food_type = 'x'; 
    this.newFood.teacher_id = 1; //to capture id of current user

    this.food.food_type = 'x'; 
    this.food.teacher_id = 1; //to capture id of current user
  }

  counItems() {
    this.makalaCategoryCounter = this.makalacategories.length;
    this.foodsCounter = this.foods.length;
  }

  alterEditMode(i) {
    this.showEraser[i] = !this.showEraser[i];
    this.category.category_name = "";
  }

  alterFoodEditMode(i) {
    this.showFoodEraser[i] = !this.showFoodEraser[i];
    this.food.name = "";
  }



  getTopicCategories(): void {
    console.log('this code is hit 1');
    
    this.makalatitlesService.getMakalaCategories().then(makalacategories => this.makalacategories = makalacategories); 
    this.counItems();
  }

  getFoods(): void {
    this.makalatitlesService.getFoods().then(food => this.foods = food);
    this.counItems();
  }


  
  // getMakalatitles(): void {
  //   var that = this;
  //   setTimeout(function() {
  //    console.log('this code is hit 2');
  //   console.log('this code is hit 4');
  //   console.log(that.makalacategories[1]);
  //   console.log('this code is hit 3');  

  //   }, 500);
   
  //  //this.makalatitlesService.getMakalatitles().then(makalatitles => this.makalatitles = makalatitles);
  // }

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

  deleteMakalaCategory(id, i) {
    this.makalacategories.splice(i, 1);
    this.makalatitlesService.deleteCategory(id).subscribe(); 
  }

  deleteFood(id, i) {
    this.foods.splice(i, 1);
    this.makalatitlesService.deleteFood(id).subscribe(); 
  }
  
  createMakalaCategory():void {
    
    if (!this. newCategory.category_name) { return; }
    this.makalatitlesService.createMakalaCategory(this.newCategory)
    .then(category => {
    this.makalacategories.push(category);
                });

    this.newCategory.category_name = "";
        
            }

  createFood():void {  
         
    if (!this.newFood.name) { return; }
    this.makalatitlesService.createFood(this.newFood)
    .then(food => {
    this.foods.push(food);
                });
    this.newFood.name = "";  
            }


  sendUpdate(id, i):void {
    //   var a = id - 1;
    //   console.log('sendupdate is called');
    //  (this.renameData[i] === 'Rename') ? (this.renameData[i] = 'Cancel'): (this.renameData[i] = 'Rename');
    //  this.toRename = !this.toRename;
    //  this.dsply[i] = !this.dsply[i];

     
      this.showEraser[i] = !this.showEraser[i];
      if (!this.category.category_name) { return; }
      this.makalatitlesService.updateTopicCategory(this.category, id);
      this.makalacategories[i].category_name = this.category.category_name
      this.category.category_name = "";
  }


  sendFoodUpdate(id, i):void {
   
     
     this.showFoodEraser[i] = !this.showFoodEraser[i];
     console.log('food update tc 1 hit');
     console.log(this.food.name);
     if (!this.food.name) { return; }
     console.log('food update tc hit');
      this.makalatitlesService.updateFoods(this.food, id);
      this.foods[i].name = this.food.name;
      this.food.name = "";
  }

  // displayThisItem(i) {
    
  //     //  for (var a = 0; a < this.makalacategories.length; a++) {    // checks whether item
  //     //    if (this.dsply[a] === true) {                             // an item other than the 
  //     //      console.log(this.differentItemClicked + 'now')          // active one is clicked
  //     //       if (a != i) {
  //     //         this.differentItemClicked = true;
  //     //         console.log(this.differentItemClicked + 'now')
  //     //       }
  //     //       else {
  //     //         this.differentItemClicked = false;
  //     //       }
  //     //    }
  //     //  }

  //      for (var a = 0; a < this.makalacategories.length; a++) {
  //        if (i === a) {
  //         this.dsply[i] = !this.dsply[i];
  //         (this.renameData[i] === 'Rename') ? (this.renameData[i] = 'Cancel'): (this.renameData[i] = 'Rename');
  //         console.log(this.dsply[i] , i);
  //        }

  //        else {
  //         this.dsply[a] = false;
  //          this.renameData[a] = 'Rename';
  //         console.log(this.dsply[a] , a);
  //        }   
  //   }
  // }

  // deleteCategory(id) {
  //       this.makalatitlesService.deleteCategory(id).subscribe();;
  // }

}
