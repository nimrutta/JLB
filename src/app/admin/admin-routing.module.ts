import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AdminComponent } from './admin.component';
import {AndikaMakalaComponent} from './andika-makala/andika-makala.component';
import {BlogComponent} from './blog/blog.component';
import {ClientsComponent} from './clients/clients.component';
import {MakalaComponent} from './makala/makala.component';
import {MakalaEditComponent} from './makala-edit/makala-edit.component';
import {MakalaSubtopicsComponent} from './makala-subtopics/makala-subtopics.component';
import {MakalaSubtopicsEditComponent} from './makala-subtopics-edit/makala-subtopics-edit.component';
import {SubscribersComponent} from './subscribers/subscribers.component';
import {ShuhudaComponent} from './shuhuda/shuhuda.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import { BidhaaComponent } from './bidhaa/bidhaa.component';

const routes: Routes = [
  {path:'admin',component:AdminComponent,
  children:[
    {path:'', redirectTo:'andika-blog',pathMatch:'full'},
    {path:'login', component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'andika-makala', component:AndikaMakalaComponent},
    {path:'andika-blog', component:BlogComponent},
    {path:'clients', component:ClientsComponent},
    {path:'makala', component:MakalaComponent},
    {path:'makala-edit', component:MakalaEditComponent},
    {path:'makala-subtopics', component:MakalaSubtopicsComponent},
    {path:'makala-subtopics-edit', component:MakalaSubtopicsEditComponent},
    {path:'subscribers', component:SubscribersComponent},
    {path:'shuhuda', component:ShuhudaComponent},
    {path:'bidhaa', component:BidhaaComponent},
  
  
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AdminRoutingModule { }
