import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { SocialMediaIconsModule } from 'src/app/common/social-media-icons/social-media-icons.module';
import { EventCardModule } from 'src/app/common/event-card/event-card.module';
import { FormsModule } from '@angular/forms';
import { ContactModalModule } from 'src/app/common/contact-modal/contact-modal.module';
import { BannerSectionComponent } from './banner-section/banner-section.component';
import { ServiceSectionComponent } from './service-section/service-section.component';
import { SermonsSectionComponent } from './sermons-section/sermons-section.component';
import { AboutUsSectionComponent } from './about-us-section/about-us-section.component';
import { VisitorsSectionComponent } from './visitors-section/visitors-section.component';
import { EventsSectionComponent } from './events-section/events-section.component';
import { GivingSectionComponent } from './giving-section/giving-section.component';
import { ConnectSectionComponent } from './connect-section/connect-section.component';
import { ContactUsSectionComponent } from './contact-us-section/contact-us-section.component';

@NgModule({
    declarations: [
        HomePageComponent, 
        BannerSectionComponent, 
        ServiceSectionComponent,
        SermonsSectionComponent,
        AboutUsSectionComponent,
        VisitorsSectionComponent,
        EventsSectionComponent,
        GivingSectionComponent,
        ConnectSectionComponent,
        ContactUsSectionComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        EventCardModule,
        ContactModalModule
    ],
    exports: [
        HomePageComponent,
        BannerSectionComponent,
        ServiceSectionComponent,
        SermonsSectionComponent,
        AboutUsSectionComponent,
        VisitorsSectionComponent,
        EventsSectionComponent,
        GivingSectionComponent,
        ConnectSectionComponent,
        ContactUsSectionComponent
    ]
})
export class HomePageModule {}
