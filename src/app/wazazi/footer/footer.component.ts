import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  showmyId = false;
  showmyod = false;
  thanksforsubscribing = false;
  thanksforjoiningprogram = false;

  

  constructor() { }

  ngOnInit() {
  }

  closeModal($event){
    if (this.thanksforsubscribing) {
      this.thanksforsubscribing = !this.thanksforsubscribing;
    }

    if(this.thanksforjoiningprogram) {
      this.thanksforjoiningprogram = !this.thanksforjoiningprogram;
    }
    
  }

  myEvent($event){
    this.showmyId = !this.showmyId;
    this.thanksforsubscribing = !this.thanksforsubscribing;
  }

  myevent($event){
    this.showmyId = !this.showmyId;
    this.showmyod = !this.showmyod;
  }

   myevenT($event){
    this.showmyod = !this.showmyod;
    this.thanksforjoiningprogram = !this.thanksforjoiningprogram;
  }

  closeButtonClicked($event){
    if(this.showmyId) {
       this.showmyId = !this.showmyId;
    }

    if(this.showmyod) {
       this.showmyod = !this.showmyod;
    }
  }
  togglemyId() {
   this.showmyId = !this.showmyId;
  }
}
