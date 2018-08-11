import { Component, OnInit } from '@angular/core';

import { MakalaService } from './../../core/makala.service';
import { Makala } from './../../makala';
import { Food } from './../../food';
import { Makalacategory } from './../../makalacategory'

@Component({
  selector: 'app-andika-makala',
  templateUrl: './andika-makala.component.html',
  styleUrls: ['./andika-makala.component.css']
})
export class AndikaMakalaComponent implements OnInit {

  makalacategory;
  food;
  makala = new Makala();
  foods : Food[];
  makalaCategories : Makalacategory[];
  makalaTitles : string[];
  subscription: any;

  // config = {
  //   displayKey:"description", //if objects array passed which key to be displayed defaults to description
  //   search:true, //true/false for the search functionlity defaults to false,
  //   height: 'auto', //height of the list so that if there are more no of items it can show a scroll defaults to auto. With auto height scroll will never appear
  //   placeholder:'Select', // text to be displayed when no item is selected defaults to Select,
  //   customComparator: ()=>{}, // a custom function using which user wants to sort the items. default is undefined and Array.sort() will be used in that case,
  //   //limitTo:  this.makalaTitles.length// a number thats limits the no of options displayed in the UI similar to angular's limitTo pipe
  // }

  constructor(private makalaService: MakalaService) { 
    
    var that = this;
    this.makalaTitles = [];
    this.makalaCategories = [];

    this.makalaCategories = makalaService.makalaCategories;
    this.subscription = this.makalaService.fetchedmakalaCategories.subscribe((value) => {
    this.makalaCategories = value;
    this.makalaCategories.unshift({category_name:"", id:null});
    // value.map(x => that.makalaTitles.push(x.category_name));
  });


    this.foods = makalaService.food;  
    this.subscription = this.makalaService.fetchedfoods.subscribe((value) => {
    this.foods = value;
    this.foods.unshift({ id: null,name: "",food_type: "",teacher_id: null });
});

  }

  ngOnInit() {
    this.makala.teacher_id = 2; // to be able to capture id of current user
    this.makalaService.getMakalaCategory();
    this.makalaService.getFood();
  }

  onFoodInput($event) {
    $event.preventDefault();
    this.makala.food_id = $event.target.value;
  }

  onInput($event) {
    $event.preventDefault();
    this.makala.topic_category_id = $event.target.value;
  }

  initializeImageId($event){
    this.makala.image_id = $event.id;
  }

  add():void {

    if (!this. makala.title || !this.makala.image_id) { return; }
    this.makalaService.create(this.makala)
            }

  clear() {
    this.makala.title = '';
    this.makala.body = '';
    this.makala.topic_category_id = null;
    this.makala.food_id = null;
    this.makalacategory = this.makalaCategories[0];
    this.food = this.foods[0];
  }

}
