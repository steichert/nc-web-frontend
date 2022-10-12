import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { SocialMediaIconsModule } from 'src/app/common/social-media-icons/social-media-icons.module';

@NgModule({
    declarations: [HomePageComponent],
    imports: [CommonModule],
    exports: [HomePageComponent]
})
export class HomePageModule {}
