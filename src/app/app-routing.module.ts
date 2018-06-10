import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path:'',redirectTo:'admin',pathMatch:'full'},
    {path:'wazazi', loadChildren:'./wazazi/wazazi.module#WazaziModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
