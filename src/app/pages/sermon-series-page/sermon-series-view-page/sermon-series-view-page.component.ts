import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { imageUrls } from 'src/app/resources/image-url';
import { ApiService } from 'src/app/services/api/api.service';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
    selector: 'app-sermon-series-view-page',
    templateUrl: './sermon-series-view-page.component.html',
    styleUrls: ['./sermon-series-view-page.component.scss']
})
export class SermonSeriesViewPageComponent implements OnInit {
    constructor(private loadingService: LoadingService,
                private route: ActivatedRoute,
                private router: Router,
                private api: ApiService,
                private title: Title) {
    }

    sermonSeries: any;

    ngOnInit(): void {
        this.title.setTitle('Sermon Series | New Creation Family Church');
        const routeParams = this.route.snapshot.paramMap;
        const seriesUrl = routeParams.get('seriesUrl');
        this.getSermonSeriesData(seriesUrl);
    }

    public getSermonSeriesData(seriesSeoUrl: string | null) {
        this.loadingService.incrementLoading();
        
        if (seriesSeoUrl == null) {
            this.loadingService.decrementLoading();
            this.router.navigateByUrl('/series');
            return;
        }

        this.api.getSermonSeriesBySeoUrl(seriesSeoUrl).subscribe(
            data => {
                this.sermonSeries = data;
                this.title.setTitle(`${this.sermonSeries.seriesTitle} | New Creation Family Church`);
                this.loadingService.decrementLoading();
            },
            error => {
                this.loadingService.decrementLoading();
                this.router.navigateByUrl('/series');
            }
        );
    }

    public navigateToSermon(sermonSeoUrl: string) {
        this.router.navigateByUrl(`/sermon/${sermonSeoUrl}`);
    }

    public showSermonSeriesBannerImageUrl() {
        return this.sermonSeries.seriesCoverImageUrl;
    }
}
