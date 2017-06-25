import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminComponent } from './admin.component';
import {AndikaMakalaComponent} from './andika-makala/andika-makala.component';

const routes: Routes = [
  {path:'admin',component:AdminComponent,
  children:[
    {path:'', redirectTo:'andika-makala',pathMatch:'full'},
    {path:'andika-makala', component:AndikaMakalaComponent}

  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AdminRoutingModule { }
