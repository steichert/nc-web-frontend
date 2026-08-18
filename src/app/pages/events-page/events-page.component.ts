import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { Meta, Title } from '@angular/platform-browser';
import { EventService } from 'src/app/services/event/event.service';

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
        this.loadingService.incrementLoading();

        let today = new Date();
        let fromDate = today.toISOString().split('T')[0];
        let toDate = '9999-12-31';

        this.ncApi.getEventsByDateRange(fromDate, toDate).subscribe(
            data => {
                for (let i = 0 ; i < data.length ; i++) {
                    if (data[i].state == 'Active') {
                        this.activeEvents.push(data[i]);
                    }
                }

                this.loadingService.decrementLoading();
            },
            err => {
                this.loadingService.decrementLoading();
            }
        );
    }

}
