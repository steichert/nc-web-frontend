import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { SocialMediaIconsModule } from 'src/app/common/social-media-icons/social-media-icons.module';
import { EventCardModule } from 'src/app/common/event-card/event-card.module';

@NgModule({
    declarations: [HomePageComponent],
    imports: [
        CommonModule,
        EventCardModule
    ],
    exports: [HomePageComponent]
})
export class HomePageModule {}
