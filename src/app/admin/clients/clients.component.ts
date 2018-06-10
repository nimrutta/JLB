import { Component, OnInit } from '@angular/core';

import { Clients } from '../../clients';
import { ClientsService } from '../../core/clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],

  providers: [ClientsService]
})


export class ClientsComponent implements OnInit {
                              
  clients:Clients[];
  newclients:Clients[];
  
  constructor(private clientsService: ClientsService) {
    this.clients = [];
    this.newclients = [];
   }

  getClients(): void {
    var that = this;
    this.clientsService.getClients().then(clients => clients.map(x => ((x.id === 1) ||(x.id === 2) ||(x.id === 3) ||(x.id === 4))? that.newclients.push(x) : that.clients.push(x)));
  }

  registerClient(i) {
    var client:Clients = this.newclients[i];
    this.newclients.splice(i, 1);
    console.log(this.clients[0]);
    this.clients.push(client);
  }


  ngOnInit() {
    this.getClients();
  }

}
