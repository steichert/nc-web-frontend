import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
    selector: 'app-sermon-view-page',
    templateUrl: './sermon-view-page.component.html',
    styleUrls: ['./sermon-view-page.component.scss']
})
export class SermonViewPageComponent implements OnInit {
    constructor(private title: Title,
                private meta: Meta,
                private loadingService: LoadingService,
                private route: ActivatedRoute,
                private router: Router,
                private api: ApiService) {
    }

    pageTitle = 'Sermon | New Creation Family Church';

    currentSermon: any;
    currentSermonSeries: any;

    isSermonAudioAvailable: boolean = true;

    ngOnInit(): void {
        this.title.setTitle('Sermon | New Creation Family Church');
        this.meta.addTag({ name: 'title', content: this.pageTitle });
        const routeParams = this.route.snapshot.paramMap;
        const sermonUrl = routeParams.get('sermonUrl');
        this.getSermonData(sermonUrl);
    }

    public getSermonData(sermonSeoUrl: string | null) {
        this.loadingService.incrementLoading();

        if (sermonSeoUrl == null) {
            this.loadingService.decrementLoading();
            this.router.navigateByUrl('/series');
            return;
        }

        this.api.getSermonBySeoUrl(sermonSeoUrl).subscribe(
            (data) => {
                this.currentSermon = data;
                this.isSermonAudioAvailable = true;
                this.pageTitle = `${this.currentSermon.sermonTitle} | New Creation Family Church`
                this.title.setTitle(this.pageTitle);
                this.meta.addTag({ name: 'title', content: this.pageTitle });
                this.getSermonSeriesLite(this.currentSermon.sermonSeriesId);
            }, 
            (err) => {
                this.loadingService.decrementLoading();
                this.router.navigateByUrl('/series');
            }
        )
    }

    private getSermonSeriesLite(sermonSeriesId: number) {
        this.api.getSermonSeriesByIdLite(sermonSeriesId).subscribe(
            (data) => {
                this.currentSermonSeries = data;
                this.loadingService.decrementLoading();
            },
            (err) => {
                console.log(err);
                this.loadingService.decrementLoading();
            }
        )
    }

    /**
     * Fired by the audio element when the browser cannot load or decode the
     * sermon audio (missing file, bad URL, unsupported format). Hides the
     * player rather than leaving a broken one on the page.
     */
    public onSermonAudioError() {
        this.isSermonAudioAvailable = false;
    }

    public navigateToSermonSeries(sermonSeriesSeoUrl: string) {
        this.router.navigateByUrl(`/sermons/series/${sermonSeriesSeoUrl}`);
    }
}
