import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { CoreComponent } from './core.component';

import { ClientsService } from './clients.service';
import { BlogpostService } from './blogpost.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],

  declarations: [CoreComponent],

  providers: [ClientsService,
              BlogpostService]
})
export class CoreModule { }
