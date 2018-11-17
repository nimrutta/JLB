import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelectDropDownModule } from 'ngx-select-dropdown';
//import {FileUploadModule} from 'primeng/fileupload';

import { AdminRoutingModule } from './admin-routing.module';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

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
import { UploadimageComponent } from './uploadimage/uploadimage.component';

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule } from './shared/navbar/navbar.module'

import { ImageUploadModule } from 'angular2-image-upload';
import { ShuhudaComponent } from './shuhuda/shuhuda.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UploadVideoComponent } from './upload-video/upload-video.component';
import { BidhaaComponent } from './bidhaa/bidhaa.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    SidebarModule,
    FooterModule,
    NavbarModule,
    SelectDropDownModule,
  //  FileUploadModule,
    ImageUploadModule.forRoot(),
  ],

  declarations: [AdminComponent,
                 AndikaMakalaComponent, 
                 BlogComponent, 
                 ClientsComponent, 
                 SubscribersComponent, 
                 FooterComponent, 
                 HeaderComponent, 
                 MakalaComponent, 
                 MakalaEditComponent, 
                 MakalaSubtopicsComponent, 
                 MakalaSubtopicsEditComponent, 
                 SearchsectionComponent, 
                 UploadimageComponent, 
                 ShuhudaComponent,
                 FileSelectDirective, 
                 FileDropDirective, LoginComponent, SignupComponent, UploadVideoComponent, BidhaaComponent],

  providers: [ ],
})
export class AdminModule { }
