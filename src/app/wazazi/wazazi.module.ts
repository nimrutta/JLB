import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WazaziRoutingModule } from './wazazi-routing.module';
import { WazaziComponent } from './wazazi.component';
import { BlogSectionComponent } from './blog-section/blog-section.component';

@NgModule({
  imports: [
    CommonModule,
    WazaziRoutingModule
  ],
  declarations: [WazaziComponent, BlogSectionComponent]
})
export class WazaziModule { }
