import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {WazaziComponent } from './wazazi.component';
import {BlogSectionComponent} from './blog-section/blog-section.component';
import {BlogSomaZaidiComponent} from './blog-soma-zaidi/blog-soma-zaidi.component';
import {KuhusuJlbComponent} from './kuhusu-jlb/kuhusu-jlb.component';
import {KujiungaComponent} from './kujiunga/kujiunga.component';
import {MakalaContentsComponent} from './makala-contents/makala-contents.component';
import {MakalaNavigationComponent} from './makala-navigation/makala-navigation.component';
import { MakalaComponent } from './makala/makala.component';
import { KutuhusuComponent } from './kutuhusu/kutuhusu.component';
import { ShuhudaComponent } from './shuhuda/shuhuda.component';
import {SubscribeComponent} from './subscribe/subscribe.component'

const routes: Routes = [
  {path:'',component:WazaziComponent,
   children:[
     {path:'', redirectTo:'blog-section', pathMatch:'full'},
     {path:'blog-section', component:BlogSectionComponent},
     {path:'soma-zaidi', component:BlogSomaZaidiComponent},
     {path:'kuhusu-jlb', component:KuhusuJlbComponent},
     {path:'kujiunga', component:KujiungaComponent},
     {path:'makala-content', component:MakalaContentsComponent},
     {path:'makala-navigation', component:MakalaNavigationComponent},
     {path:'makala', component:MakalaComponent},
     {path:'shuhuda', component:ShuhudaComponent},
     {path:'subscribe', component:SubscribeComponent},
   ]}
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class WazaziRoutingModule { }
