import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { Meta, Title } from '@angular/platform-browser';
import { EventService } from 'src/app/services/event/event.service';
import { HARDCODED_EVENTS } from 'src/app/resources/event-constants';

@Component({
    selector: 'app-events-page',
    templateUrl: './events-page.component.html',
    styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit {

    pageTitle = 'Events | New Creation Family Church';
    activeEvents: any[];

    constructor(private ncApi: ApiService,
                private meta: Meta,
                private loadingService: LoadingService,
                private eventService: EventService,
                private title: Title) { 
        this.title.setTitle(this.pageTitle);
        this.meta.addTag({ name: 'title', content: this.pageTitle });
        this.activeEvents = [];
    }

    ngOnInit(): void {
        this.getEvents();
    }

    private getEvents(): void {
        // TEMPORARY WORKAROUND: serve events from a hard-coded list instead of the API.
        for (let i = 0 ; i < HARDCODED_EVENTS.length ; i++) {
            if (HARDCODED_EVENTS[i].state == 'Active') {
                this.activeEvents.push(HARDCODED_EVENTS[i]);
            }
        }
    }

}
