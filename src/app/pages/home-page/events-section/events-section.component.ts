import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { RoutingService } from 'src/app/services/routing/routing.service';

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
        let today = new Date();
        let fromDate = today.toISOString().split('T')[0];
        let toDate = '9999-12-31';

        this.loadingService.incrementLoading();

        this.ncApi.getEventsByDateRange(fromDate, toDate).subscribe(
            data => {
                for (var i = 0 ; i < this.numberOfLatestEvents && i < data.length ; i++) {
                    if (data[i].state == 'Active')
                    this.events.push(data[i]);
                }

                this.loadingService.decrementLoading();
            },
            error => {
                this.loadingService.decrementLoading();
                console.log(error.error.text);
            }
        );
    }

    public navigateToLink(link: string): void {
        this.routingService.navigateToLink(link);
    }

}
