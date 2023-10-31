import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsPageComponent } from './events-page.component';
import { EventCardModule } from 'src/app/common/event-card/event-card.module';
import { ContactModalModule } from 'src/app/common/contact-modal/contact-modal.module';
import { Meta } from '@angular/platform-browser';



@NgModule({
    declarations: [
        EventsPageComponent
    ],
    imports: [
        CommonModule,
        EventCardModule,
        ContactModalModule
    ],
    providers: [
        Meta
    ],
    exports: [
        EventsPageComponent
    ]
})
export class EventsPageModule { }
