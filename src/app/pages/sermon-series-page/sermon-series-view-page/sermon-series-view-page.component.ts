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
        this.sermonSeries = {
            seriesTitle: 'Family Conference',
            seriesDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            seriesImageUrl: 'https://res.cloudinary.com/dbmlnkfvh/raw/upload/v1673279838/sermons/series_images/ncfc-series.jpg',
            sermons: [
                {
                    sermonTitle: 'Day 1: Screens',
                    sermonSpeaker: 'Dr John Smith',
                    sermonDate: '2022-01-01',
                    sermonAudioUrl: 'https://newcreation.co.za/media/wp-content/uploads/2023/02/Your-Turnaround-Paul-Dennison.mp3',
                    sermonSeoUrl: 'day-1-screens'
                },
                {
                    sermonTitle: 'Day 2: Marriage',
                    sermonSpeaker: 'Joe and Jane Smith',
                    sermonDate: '2022-01-02',
                    sermonAudioUrl: 'https://newcreation.co.za/media/wp-content/uploads/2023/02/Your-Turnaround-Paul-Dennison.mp3',
                    sermonSeoUrl: 'day-2-marriage'
                },
                {
                    sermonTitle: 'Day 3: Family',
                    sermonSpeaker: 'Paul Dennison',
                    sermonDate: '2022-01-03',
                    sermonAudioUrl: 'https://newcreation.co.za/media/wp-content/uploads/2023/02/Your-Turnaround-Paul-Dennison.mp3',
                    sermonSeoUrl: 'day-3-family'
                },
            ]
        };
    }

    sermonSeries: any;

    defaultThumbnailImageUrl = imageUrls.defaultSermonsThumbnailImageUrl;

    ngOnInit(): void {
        const routeParams = this.route.snapshot.paramMap;
        const seriesName = routeParams.get('seriesName');
        this.getSermonSeriesData(seriesName);
    }

    public getSermonSeriesData(seriesName: string | null) {
        this.loadingService.startLoading();
        
        if (seriesName == null) {
            this.loadingService.stopLoading();
            this.router.navigateByUrl('/series');
            return;
        }

        this.title.setTitle(`${this.sermonSeries.seriesTitle} | New Creation Family Church`);

        // this.api.getSermonSeriesByName(seriesName).subscribe(
        //     data => {
        //         this.sermonSeries = data;
        //     },
        //     error => {
        //         this.loadingService.stopLoading();
        //         this.router.navigateByUrl('/series');
        //     }
        // );
    }

    public navigateToSermon(sermonSeoUrl: string) {
        this.router.navigateByUrl(`/sermon/${sermonSeoUrl}`);
    }

    public showSermonSeriesBannerImageUrl() {
        return this.sermonSeries.seriesImageUrl;
    }
}
