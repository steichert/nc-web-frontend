import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { NavbarService } from 'src/app/services/navbar/navbar.service';
import { PostMapper } from 'src/app/utils/post.mapper';
import { Event } from 'src/app/domain/Event';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
    selector: 'app-events-page',
    templateUrl: './events-page.component.html',
    styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit {

    pageTitle = 'Events | New Creation Family Church';
    events: Event[];

    constructor(private ncApi: ApiService,
                private loadingService: LoadingService,
                private navbarService: NavbarService,
                private title: Title,
                private router: Router) { 
        this.title.setTitle(this.pageTitle);
        this.events = [];
    }

    ngOnInit(): void {
        this.navbarService.setCurrentURL(this.router.url);
        this.getEvents();
    }

    private getEvents(): void {
        this.loadingService.startLoading();

        let today = new Date();
        // let fromDate = today.toISOString().split('T')[0];
        let fromDate = '2022-10-01';
        let toDate = '9999-12-31';

        this.ncApi.getEventPosts(fromDate, toDate).subscribe(
            data => {
                this.events = PostMapper.mapToEvents(data);
                this.loadingService.stopLoading();
            },
            err => {
                this.loadingService.stopLoading();
            }
        );
    }

}
