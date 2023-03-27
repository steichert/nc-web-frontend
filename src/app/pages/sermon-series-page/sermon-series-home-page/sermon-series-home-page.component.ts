import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Page } from 'src/app/domain/Page';
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
    sermonSeriesPage: Page | null = null;
    sermonSeriesItems: any[] = [];

    currentPageNumber: number = 1;
    paginationNumbers: number[] = [];
    totalPages: number = 0
    PAGE_SIZE: number = 6;

    searchTerm: string = '';

    isLoadingSermonSeries: boolean = false;

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

                this.fetchSermonSeriesData(this.currentPageNumber, '');
            },
            err => {
                this.loadingService.decrementLoading();
                console.log(err.error.text);
            }
        );
    }

    public fetchSermonSeriesData(pageNumber: number, searchTerm: string) {
        this.isLoadingSermonSeries = true;
        this.ncApi.getAllPagedSermonSeriesLite(pageNumber, searchTerm).subscribe(
            (data: any) => {
                console.log(data);
                this.sermonSeriesPage = data;
                this.updatePagination(this.sermonSeriesPage);
                this.currentPageNumber = pageNumber;
                this.loadingService.decrementLoading();
                this.isLoadingSermonSeries = false;
            },
            (err) => {
                this.loadingService.decrementLoading();
                console.log(err.error.text);
                this.isLoadingSermonSeries = false;
            }
        );
    }

    private updatePagination(sermonSeriesPage: Page | null) {
        if (sermonSeriesPage == null || sermonSeriesPage.rows == null) {
            this.paginationNumbers = [1];
            this.totalPages = 0;
        } else {
            this.sermonSeriesItems = sermonSeriesPage.rows;
            this.totalPages = sermonSeriesPage.count != null ? Math.ceil(sermonSeriesPage.count / this.PAGE_SIZE) : 0;
            this.paginationNumbers = [];
            for (let i = 0 ; i < this.totalPages ; i++) {
                this.paginationNumbers.push(i + 1);
            }
        }
    }

    public searchSermonSeries() {
        this.fetchSermonSeriesData(this.currentPageNumber, this.searchTerm);
    }

    public navigateToSeries(seriesSeoUrl: string) {
        this.router.navigateByUrl(`/sermons/series/${seriesSeoUrl}`);
    }

    public navigateToLink(link: string) {
        this.router.navigateByUrl(link);
    }

    public loadPreviousPage() {
        this.fetchSermonSeriesData(this.currentPageNumber - 1, this.searchTerm);
    }

    public loadPage(pageNumber: number) {
        this.fetchSermonSeriesData(pageNumber, this.searchTerm);
    }

    public loadNextPage() {
        this.currentPageNumber++;
        this.fetchSermonSeriesData(this.currentPageNumber + 1, this.searchTerm);
    }
}
