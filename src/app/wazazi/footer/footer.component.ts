import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  showmyId = false;
  showmyod = false;
  

  constructor() { }

  ngOnInit() {
  }

  myEvent($event){
    this.showmyId = !this.showmyId;
  }

  myevent($event){
    this.showmyId = !this.showmyId;
    this.showmyod = !this.showmyod;
  }

   myevenT($event){
    this.showmyod = !this.showmyod;
  }

  togglemyId() {
   this.showmyId = !this.showmyId;
  }
}
