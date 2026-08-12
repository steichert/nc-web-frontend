import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { RoutingService } from 'src/app/services/routing/routing.service';
import { HARDCODED_EVENTS } from 'src/app/resources/event-constants';

@Component({
  selector: 'app-events-section',
  templateUrl: './events-section.component.html',
  styleUrls: ['./events-section.component.scss']
})
export class EventsSectionComponent implements OnInit {

    numberOfLatestEvents = 4;
    events: any = [];

    constructor(private loadingService: LoadingService,
                private routingService: RoutingService,
                private ncApi: ApiService) {
    }

    ngOnInit(): void {
        this.fetchLatestEvents();
    }

    private fetchLatestEvents(): void {
        // TEMPORARY WORKAROUND: serve events from a hard-coded list instead of the API.
        for (var i = 0 ; i < this.numberOfLatestEvents && i < HARDCODED_EVENTS.length ; i++) {
            if (HARDCODED_EVENTS[i].state == 'Active')
                this.events.push(HARDCODED_EVENTS[i]);
        }

        // The navbar raises the loading spinner on every URL change and this was the
        // only thing on the home page that lowered it, so clear it explicitly.
        this.loadingService.stopLoading();
    }

    public navigateToLink(link: string): void {
        this.routingService.navigateToLink(link);
    }

}
