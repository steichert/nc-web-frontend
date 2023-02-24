import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { PostMapper } from 'src/app/utils/post.mapper';
import { Event } from 'src/app/domain/Event';
import { Title } from '@angular/platform-browser';
import { EventService } from 'src/app/services/event/event.service';

@Component({
    selector: 'app-events-page',
    templateUrl: './events-page.component.html',
    styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit {

    pageTitle = 'Events | New Creation Family Church';
    events: any[];

    constructor(private ncApi: ApiService,
                private loadingService: LoadingService,
                private eventService: EventService,
                private title: Title) { 
        this.title.setTitle(this.pageTitle);
        this.events = [];
    }

    ngOnInit(): void {
        this.getEvents();
    }

    private getEvents(): void {
        this.loadingService.incrementLoading();

        let today = new Date();
        let fromDate = today.toISOString().split('T')[0];
        let toDate = '9999-12-31';

        this.ncApi.getEventsByDateRange(fromDate, toDate).subscribe(
            data => {
                this.events = data;
                this.loadingService.decrementLoading();
            },
            err => {
                this.loadingService.decrementLoading();
            }
        );
    }

}
