import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WazaziRoutingModule } from './wazazi-routing.module';
import { FormsModule } from '@angular/forms'; 
import { CeiboShare } from 'ng2-social-share';
import {NgxPaginationModule} from 'ngx-pagination';

import { SearchService } from '../core/search.service';
import { SubscribersService } from '../core/subscribers.service';
import { MakalatitlesService } from './../core/makalatitles.service';
import { CommentService } from '../core/comment.service';

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
import { MakalaComponent } from './makala/makala.component';
import { KutuhusuComponent } from './kutuhusu/kutuhusu.component';
import { ShuhudaComponent } from './shuhuda/shuhuda.component';
import { TaharifaSubscriptionComponent } from './taharifa-subscription/taharifa-subscription.component';
import { TaharifaKujiungaComponent } from './taharifa-kujiunga/taharifa-kujiunga.component';
import { Makala1Component } from './makala1/makala1.component';
import { BlogSomaZaidi1Component } from './blog-soma-zaidi1/blog-soma-zaidi1.component';
import { BidhaaComponent } from './bidhaa/bidhaa.component';
import { BidhaaCategoryComponent } from './bidhaa-category/bidhaa-category.component';
import { UploadVideoComponent } from './upload-video/upload-video.component';

@NgModule({
  imports: [
    CommonModule,
    WazaziRoutingModule,
    FormsModule,
    NgxPaginationModule,
  ],
 
  declarations: [WazaziComponent, 
                 BlogSectionComponent, 
                 BlogSomaZaidiComponent, 
                 KuhusuJlbComponent, 
                 KujiungaComponent, 
                 MakalaContentsComponent, 
                 MakalaNavigationComponent, 
                 SubscribeComponent, 
                 FooterComponent, 
                 HeaderComponent, 
                 MakalaComponent, 
                 KutuhusuComponent, 
                 ShuhudaComponent, 
                 TaharifaSubscriptionComponent, 
                 TaharifaKujiungaComponent,
                 CeiboShare,
                 Makala1Component,
                 BlogSomaZaidi1Component,
                 CeiboShare,
                 BidhaaComponent,
                 BidhaaCategoryComponent,
                 UploadVideoComponent],
                 
  providers: [ SearchService,
               SubscribersService,
               MakalatitlesService,
               CommentService,
                ]
})
export class WazaziModule { }
