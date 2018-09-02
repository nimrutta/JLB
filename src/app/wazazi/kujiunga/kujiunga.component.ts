import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { Clients } from '../../clients';
import { ClientsService } from '../../core/clients.service';

@Component({
  selector: 'app-kujiunga',
  templateUrl: './kujiunga.component.html',
  styleUrls: ['./kujiunga.component.css']
})
export class KujiungaComponent implements OnInit {
  isInputdataMissing = false;

  constructor( private clientsService: ClientsService ) { }
 client = new Clients();
 clients = [];


  @Output() myevenT = new EventEmitter();
  @Output() closeButtonClicked = new EventEmitter();

   onClick(button){
       this.myevenT.emit(button);
  }

  exitModal(button){
       this.closeButtonClicked.emit(button);
       debugger;
  }

   add():void {
    
    if (!this.client.name) { return; }
    this.clientsService.create(this.client) 
    .then(client => {
    this.clients.push(client);
                });
  
            }

  alertUser(state){

       this.isInputdataMissing = true;

  }   

  ngOnInit() {
    this.client.password = 'password';
    this.client.remember_token = 'token';
  }

}
