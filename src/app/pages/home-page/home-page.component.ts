import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LoadingService } from 'src/app/services/loading/loading.service';

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
                private loadingService: LoadingService) {
        title.setTitle(this.pageTitle);
    }

    ngOnInit(): void {
        this.loadingService.startLoading();
        this.fetchLatestEvents();
    }

    fetchLatestEvents() {
        this.loadingService.stopLoading();
    }
}
