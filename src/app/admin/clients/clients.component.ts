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
  
  constructor(private clientsService: ClientsService) { }

  getClients(): void {
    this.clientsService.getClients().then(clients => this.clients = clients);
  }




  ngOnInit() {
    this.getClients();
  }

}
