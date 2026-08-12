import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { FEATURE_FLAGS } from 'src/app/resources/feature-flags';

@Component({
    selector: 'app-sermon-series-view-page',
    templateUrl: './sermon-series-view-page.component.html',
    styleUrls: ['./sermon-series-view-page.component.scss']
})
export class SermonSeriesViewPageComponent implements OnInit {
    constructor(private loadingService: LoadingService,
                private meta: Meta,
                private route: ActivatedRoute,
                private router: Router,
                private api: ApiService,
                private title: Title) {
    }

    sermonSeries: any;

    ngOnInit(): void {
        this.title.setTitle('Sermon Series | New Creation Family Church');
        this.meta.addTag({ name: 'title', content: 'Sermon Series | New Creation Family Church' });

        const routeParams = this.route.snapshot.paramMap;
        const seriesUrl = routeParams.get('seriesUrl');
        this.getSermonSeriesData(seriesUrl);
    }

    public getSermonSeriesData(seriesSeoUrl: string | null) {
        if (!FEATURE_FLAGS.fetchSermons) {
            // Nothing to render without the series data, so fall back to the series list.
            this.router.navigateByUrl('/series');
            return;
        }

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
                this.meta.addTag({ name: 'title', content: `${this.sermonSeries.seriesTitle} | New Creation Family Church` });
                this.loadingService.stopLoading();
            },
            error => {
                this.loadingService.stopLoading();
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
