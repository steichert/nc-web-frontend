import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Sermon } from 'src/app/domain/Sermon';
import { ApiService } from 'src/app/services/api/api.service';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
    selector: 'app-sermon-series-home-page',
    templateUrl: './sermon-series-home-page.component.html',
    styleUrls: ['./sermon-series-home-page.component.scss']
})
export class SermonSeriesHomePageComponent implements OnInit {
    constructor(private title: Title,
                private router: Router,
                private ncApi: ApiService, 
                private loadingService: LoadingService) {
        this.title.setTitle(this.pageTitle);
        this.latestSermon = new Sermon();
    }

    pageTitle = 'Sermons | New Creation Family Church';

    latestSermon: any;
    allSermonSeries: any[] = [];

    ngOnInit(): void {
        this.loadingService.incrementLoading();
        this.fetchLatestSermonData();
    }

    public fetchLatestSermonData() {
        this.ncApi.getLatestSermon().subscribe(
            data => {
                if (data != null) {
                    this.latestSermon = data;
                }
                this.fetchSermonSeriesData()
            },
            err => {
                this.loadingService.decrementLoading();
                console.log(err.error.text);
            }
        );
    }

    public fetchSermonSeriesData() {
        this.ncApi.getAllSermonSeriesLite().subscribe(
            (data: any) => {
                this.allSermonSeries = data;
                this.loadingService.decrementLoading();
            },
            (err) => {
                this.loadingService.decrementLoading();
                console.log(err.error.text);
            }
        );
    }

    public navigateToSeries(seriesSeoUrl: string) {
        this.router.navigateByUrl(`/sermons/series/${seriesSeoUrl}`);
    }

    public navigateToLink(link: string) {
        this.router.navigateByUrl(link);
    }
}
