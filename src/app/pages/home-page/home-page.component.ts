import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from 'src/app/services/api/api.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { PostMapper } from 'src/app/utils/post.mapper';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
    
    pageTitle = 'Home | New Creation Family Church';
    numberOfLatestEvents = 4;
    events:any = [];

    constructor(private title: Title, 
                private loadingService: LoadingService,
                private ncApi: ApiService) {
        title.setTitle(this.pageTitle);
    }

    ngOnInit(): void {
        this.fetchLatestEvents();
    }

    private fetchLatestEvents(): void {
        let today = new Date();
        let fromDate = today.toISOString().split('T')[0];
        let toDate = '9999-12-31';

        this.loadingService.startLoading();

        this.ncApi.getEventPosts(fromDate, toDate).subscribe(
            data => {
                let mappedEvents = PostMapper.mapToEvents(data);
                
                for (var i = 0 ; i < this.numberOfLatestEvents && i < mappedEvents.length ; i++) {
                    this.events[i] = mappedEvents[i];
                }

                this.loadingService.stopLoading();
            },
            error => {
                this.loadingService.stopLoading();
                console.log(error.error.text);
            }
        );
    }
}
