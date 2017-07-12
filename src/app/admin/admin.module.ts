import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { AndikaMakalaComponent } from './andika-makala/andika-makala.component';
import { BlogComponent } from './blog/blog.component';
import { ClientsComponent } from './clients/clients.component';
import { SubscribersComponent } from './subscribers/subscribers.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MakalaComponent } from './makala/makala.component';
import { MakalaEditComponent } from './makala-edit/makala-edit.component';
import { MakalaSubtopicsComponent } from './makala-subtopics/makala-subtopics.component';
import { MakalaSubtopicsEditComponent } from './makala-subtopics-edit/makala-subtopics-edit.component';
import { SearchsectionComponent } from './searchsection/searchsection.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [AdminComponent, AndikaMakalaComponent, BlogComponent, ClientsComponent, SubscribersComponent, FooterComponent, HeaderComponent, MakalaComponent, MakalaEditComponent, MakalaSubtopicsComponent, MakalaSubtopicsEditComponent, SearchsectionComponent]
})
export class AdminModule { }
