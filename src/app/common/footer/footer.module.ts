import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { SocialMediaIconsModule } from '../social-media-icons/social-media-icons.module';

@NgModule({
    declarations: [FooterComponent],
    imports: [CommonModule, SocialMediaIconsModule],
    exports: [FooterComponent]
})
export class FooterModule {}
