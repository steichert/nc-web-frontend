import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NcKidsHomePageComponent } from './nc-kids-home-page/nc-kids-home-page.component';
import { FormsModule } from '@angular/forms';
import { NcKidsBabiesPageComponent } from './nc-kids-babies-page/nc-kids-babies-page.component';
import { NcKidsSonkidsPageComponent } from './nc-kids-sonkids-page/nc-kids-sonkids-page.component';
import { NcKidsGlowkidsPageComponent } from './nc-kids-glowkids-page/nc-kids-glowkids-page.component';
import { NcKidsFourTwelvePageComponent } from './nc-kids-four-twelve-page/nc-kids-four-twelve-page.component';
import { NcKidsJamPageComponent } from './nc-kids-jam-page/nc-kids-jam-page.component';
import { NcKidsSundayPageComponent } from './nc-kids-sunday-page/nc-kids-sunday-page.component';
import { ContactModalModule } from 'src/app/common/contact-modal/contact-modal.module';
import { Meta } from '@angular/platform-browser';

@NgModule({
    declarations: [
        NcKidsHomePageComponent,
        NcKidsBabiesPageComponent,
        NcKidsSonkidsPageComponent,
        NcKidsGlowkidsPageComponent,
        NcKidsFourTwelvePageComponent,
        NcKidsJamPageComponent,
        NcKidsSundayPageComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ContactModalModule
    ],
    providers: [
        Meta
    ],
    exports: [
        NcKidsHomePageComponent
    ]
})
export class NcKidsModule { }
