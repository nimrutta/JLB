import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { Wazazi } from '../../wazazi';
import { ClientsService } from '../../core/clients.service';

@Component({
  selector: 'app-kujiunga',
  templateUrl: './kujiunga.component.html',
  styleUrls: ['./kujiunga.component.css']
})
export class KujiungaComponent implements OnInit {
  isInputdataMissing = false;

  constructor( private clientsService: ClientsService ) { }
 wazazi = new Wazazi();
 wazazis = [];


  @Output() myevenT = new EventEmitter();
  @Output() closeButtonClicked = new EventEmitter();

   onClick(button){
       this.myevenT.emit(button);
  }

  exitModal(button){
       this.closeButtonClicked.emit(button);
       console.log('exit modal clicked');
  }

   add():void {
    
    if (!this.wazazi.first_name) { return; }
    this.clientsService.create(this.wazazi) 
    .then(mzazi => {
    this.wazazis.push(mzazi);
                });
  
            }

  alertUser(state){

       this.isInputdataMissing = true;

  }   

  ngOnInit() {
    // this.client.password = 'password';
    // this.client.remember_token = 'token';
  }

}
