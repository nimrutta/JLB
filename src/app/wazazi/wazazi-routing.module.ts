import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {WazaziComponent } from './wazazi.component';
import {BlogSectionComponent} from './blog-section/blog-section.component';
import {BlogSomaZaidiComponent} from './blog-soma-zaidi/blog-soma-zaidi.component';
import {BlogSomaZaidi1Component} from './blog-soma-zaidi1/blog-soma-zaidi1.component';
import {KuhusuJlbComponent} from './kuhusu-jlb/kuhusu-jlb.component';
import {KujiungaComponent} from './kujiunga/kujiunga.component';
import {MakalaContentsComponent} from './makala-contents/makala-contents.component';
import {MakalaNavigationComponent} from './makala-navigation/makala-navigation.component';
import { MakalaComponent } from './makala/makala.component';
import { Makala1Component } from './makala1/makala1.component';
import { KutuhusuComponent } from './kutuhusu/kutuhusu.component';
import { ShuhudaComponent } from './shuhuda/shuhuda.component';
import {SubscribeComponent} from './subscribe/subscribe.component'
import {BidhaaComponent} from './bidhaa/bidhaa.component'
const routes: Routes = [
  {path:'',component:WazaziComponent,
   children:[
     {path:'', redirectTo:'blog-section', pathMatch:'full'},
     {path:'blog-section', component:BlogSectionComponent},
     {path:'soma-zaidi/:id', component:BlogSomaZaidiComponent},
     {path:'soma-zaidi1', component:BlogSomaZaidi1Component},
     {path:'kuhusu-jlb', component:KuhusuJlbComponent},
     {path:'kujiunga', component:KujiungaComponent},
     {path:'makala-content', component:MakalaContentsComponent},
     {path:'makala-navigation', component:MakalaNavigationComponent},
     {path:'makala', component:MakalaComponent},
     {path:'makala1', component:Makala1Component},
     {path:'shuhuda', component:ShuhudaComponent},
     {path:'subscribe', component:SubscribeComponent},
     {path:'bidhaa', component:BidhaaComponent},
   ]}
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class WazaziRoutingModule { }
