import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import { Clients } from '../../clients';
import { ClientsService } from '../../core/clients.service';

@Component({
  selector: 'app-kujiunga',
  templateUrl: './kujiunga.component.html',
  styleUrls: ['./kujiunga.component.css']
})
export class KujiungaComponent implements OnInit {

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
  }

   add():void {
    
    if (!this.client.name) { return; }
    this.clientsService.create(this.client) 
    .then(client => {
    this.clients.push(client);
                });
  
            }

  ngOnInit() {
    this.client.password = 'password';
    this.client.remember_token = 'token';
  }

}
