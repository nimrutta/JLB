import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-taharifa-kujiunga',
  templateUrl: './taharifa-kujiunga.component.html',
  styleUrls: ['./taharifa-kujiunga.component.css']
})
export class TaharifaKujiungaComponent implements OnInit {

  constructor() { }
 @Output() closeModal = new EventEmitter();

  onClick(button){
       this.closeModal.emit(button);
  }

  ngOnInit() {
  }

}
