import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WazaziRoutingModule } from './wazazi-routing.module';
import { WazaziComponent } from './wazazi.component';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { BlogSomaZaidiComponent } from './blog-soma-zaidi/blog-soma-zaidi.component';
import { KuhusuJlbComponent } from './kuhusu-jlb/kuhusu-jlb.component';
import { KujiungaComponent } from './kujiunga/kujiunga.component';
import { MakalaContentsComponent } from './makala-contents/makala-contents.component';
import { MakalaNavigationComponent } from './makala-navigation/makala-navigation.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    CommonModule,
    WazaziRoutingModule
  ],
  declarations: [WazaziComponent, BlogSectionComponent, BlogSomaZaidiComponent, KuhusuJlbComponent, KujiungaComponent, MakalaContentsComponent, MakalaNavigationComponent, SubscribeComponent, FooterComponent, HeaderComponent]
})
export class WazaziModule { }
