import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Page } from 'src/app/domain/Page';
import { Sermon } from 'src/app/domain/Sermon';
import { imageUrls } from 'src/app/resources/image-url';
import { ApiService } from 'src/app/services/api/api.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { PostMapper } from 'src/app/utils/post.mapper';

@Component({
    selector: 'app-sermon-series-home-page',
    templateUrl: './sermon-series-home-page.component.html',
    styleUrls: ['./sermon-series-home-page.component.scss']
})
export class SermonSeriesHomePageComponent implements OnInit {

    isLoading: Boolean = false;

    pageTitle = 'Sermons | New Creation Family Church';
    defaultThumbnailImageUrl = imageUrls.defaultSermonsThumbnailImageUrl;

    sermonsPage: Page;
    activeSermon: Sermon;
    currentSermonPage: Sermon[] = [];

    pageSize: number = 5;
    pages: number[] = [];

    sermonSeries: any[] = [];

    constructor(private title: Title,
                private router: Router,
                private ncApi: ApiService, 
                private loadingService: LoadingService) {
        this.title.setTitle(this.pageTitle);
        this.sermonsPage = new Page([], 1, 0);
        this.activeSermon = new Sermon();
        this.sermonSeries.push({ seriesTitle: 'As For Me And My House', seriesSeoUrl: 'as-for-me' });
        this.sermonSeries.push({ seriesTitle: 'Family Conference', seriesSeoUrl: 'family-conference' });
        this.sermonSeries.push({ seriesTitle: 'Something', seriesSeoUrl: 'something' });
        this.sermonSeries.push({ seriesTitle: 'Practicing The Way', seriesSeoUrl: 'practicing-the-way' });
    }

    ngOnInit(): void {
        this.fetchRecentSermonData();
        this.fetchSermonSeriesData();
    }

    public fetchRecentSermonData() {
        this.isLoading = true;
        this.loadingService.startLoading();

        let fromDate = new Date();
        fromDate.setDate(fromDate.getMonth() - 1);
        let fromDateString = fromDate.toISOString().split('T')[0];

        let today = new Date();
        let toDateString = today.toISOString().split('T')[0];

        this.ncApi.getSermonPosts(fromDateString, toDateString).subscribe(
            data => {
                if (data != null) {
                    let sermonsData = PostMapper.mapToSermons(data);

                    if (sermonsData.length > 0) {
                        this.activeSermon = sermonsData[0];
                    }
                }

                this.loadingService.stopLoading();
                this.isLoading = false;
            },
            err => {
                this.loadingService.stopLoading();
                this.isLoading = false;
                console.log(err.error.text);
            }
        );
    }

    public fetchSermonSeriesData() {

    }

    public navigateToSeries(seriesSeoUrl: string) {
        this.router.navigateByUrl(`/series/${seriesSeoUrl}`);
    }
}
