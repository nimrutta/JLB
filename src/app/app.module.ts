import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {AdminModule } from './admin/admin.module';

//import { ImageUploadModule } from 'angular2-image-upload'

@NgModule({
  declarations: [
    AppComponent,
  ],
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    AdminModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //ImageUploadModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
