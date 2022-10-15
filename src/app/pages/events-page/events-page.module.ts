import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsPageComponent } from './events-page.component';
import { EventCardModule } from 'src/app/common/event-card/event-card.module';
import { ContactModalModule } from 'src/app/common/contact-modal/contact-modal.module';



@NgModule({
    declarations: [
        EventsPageComponent
    ],
    imports: [
        CommonModule,
        EventCardModule,
        ContactModalModule
    ],
    exports: [
        EventsPageComponent
    ]
})
export class EventsPageModule { }
