import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsPageComponent } from './events-page.component';
import { EventCardModule } from 'src/app/common/event-card/event-card.module';



@NgModule({
    declarations: [
        EventsPageComponent
    ],
    imports: [
        CommonModule,
        EventCardModule
    ],
    exports: [
        EventsPageComponent
    ]
})
export class EventsPageModule { }
