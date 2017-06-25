import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WazaziComponent } from './wazazi.component';
import {BlogSectionComponent} from './blog-section/blog-section.component'

const routes: Routes = [
  {path:'',component:WazaziComponent,
   children:[
     {path:'', redirectTo:'blog-section', pathMatch:'full'},
     {path:'blog-section', component:BlogSectionComponent}
   ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class WazaziRoutingModule { }
