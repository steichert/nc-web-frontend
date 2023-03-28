import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Page } from 'src/app/domain/Page';
import { Sermon } from 'src/app/domain/Sermon';
import { imageUrls } from 'src/app/resources/image-url';
import { ApiService } from 'src/app/services/api/api.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { NavbarService } from 'src/app/services/navbar/navbar.service';

@Component({
    selector: 'app-sermons-page',
    templateUrl: './sermons-page.component.html',
    styleUrls: ['./sermons-page.component.scss']
})
export class SermonsPageComponent implements OnInit {

    isLoading: Boolean = false;

    pageTitle = 'Sermons | New Creation Family Church';
    defaultThumbnailImageUrl = imageUrls.defaultSermonsThumbnailImageUrl;

    sermonSearchTerm: string = '';
    sermonSearchType: string = 'sermonTitle';
    sermonSearchTypeText: string = 'Title';

    sermonsPage: Page | null = null;
    currentSermonFromPage: Sermon[] = [];
    PAGINATION_NUMBER_CUTOFF: number = 5;

    allSermonSeriesLite: any[] = [];

    pageSize: number = 10;
    totalPages: number = 0;
    currentPageNumber: number = 1;
    paginationNumbers: number[] = [1];

    isLoadingSermons: boolean = false;

    constructor(private navbarService: NavbarService,
                private title: Title,
                private router: Router,
                private route: ActivatedRoute,
                private ncApi: ApiService, 
                private loadingService: LoadingService) { 
        this.title.setTitle(this.pageTitle);
    }

    ngOnInit(): void {
        this.navbarService.setCurrentURL(this.router.url);
        this.fetchAllSermonSeriesLite();

        this.route.params.subscribe(
            (params) => {
                if (params['pageNumber'] != null) {
                    this.fetchSermonsByPageNumber(params['pageNumber']);
                } else {
                    this.router.navigateByUrl('/sermons/page/1');
                }
            }
        );
    }

    public fetchAllSermonSeriesLite() {
        this.isLoading = true;
        this.loadingService.incrementLoading();

        this.ncApi.getAllSermonSeriesLite().subscribe(
            (data: any) => {
                this.allSermonSeriesLite = data;
                this.loadingService.decrementLoading();
                this.isLoading = false;
            },
            (err) => {
                this.loadingService.decrementLoading();
                this.isLoading = false;
                console.log(err.error.text);
            }
        )
    }

    public fetchSermonsByPageNumber(pageNumber: number) {
        this.isLoading = true;
        this.loadingService.incrementLoading();

        this.ncApi.searchSermons(pageNumber, this.sermonSearchType, this.sermonSearchTerm, 'sermonDate', 'desc').subscribe(
            (data: any) => {
                if (data != null) {
                    this.sermonsPage = data;
                    this.currentPageNumber = pageNumber;
                    this.updatePagination(this.sermonsPage);
                }

                this.loadingService.decrementLoading();
                this.isLoading = false;
            },
            err => {
                this.loadingService.decrementLoading();
                this.isLoading = false;
                console.log(err.error.text);
            }
        );
    }

    private updatePagination(sermonPage: Page | null) {
        if (sermonPage == null || sermonPage.rows == null) {
            this.paginationNumbers = [1];
            this.totalPages = 0;
        } else {
            this.currentSermonFromPage = sermonPage.rows;
            this.totalPages = sermonPage.count != null ? Math.ceil(sermonPage.count / this.pageSize) : 0;
            var startNumber = (this.PAGINATION_NUMBER_CUTOFF * Math.floor((this.currentPageNumber - 1) / this.PAGINATION_NUMBER_CUTOFF)) + 1;
            this.paginationNumbers = [];
            for (let i = 0 ; i < this.PAGINATION_NUMBER_CUTOFF && i + startNumber <= this.totalPages ; i++) {
                this.paginationNumbers.push(i + startNumber);
            }
        }
    }

    public searchSermons(pageNumber: number) {
        this.isLoadingSermons = true;
        this.ncApi.searchSermons(pageNumber, this.sermonSearchType, this.sermonSearchTerm, 'sermonDate', 'desc').subscribe(
            (data: any) => {
                this.sermonsPage = data;
                this.currentPageNumber = pageNumber;
                this.updatePagination(this.sermonsPage);
                this.isLoadingSermons = false;
            },
            (err) => {
                this.isLoadingSermons = false;
                console.log(err);
            }
        );
    }

    public loadPreviousPage() {
        let pageNumber = this.paginationNumbers[0] - 1;
        this.searchSermons(pageNumber);
    }

    public loadPage(pageNumber: number) {
        this.searchSermons(pageNumber);
    }

    public loadNextPage() {
        let pageNumber = this.paginationNumbers[this.paginationNumbers.length - 1] + 1;
        this.searchSermons(pageNumber);
    }

    public loadSermon(sermon: Sermon) {
        this.router.navigateByUrl(`/sermon/${sermon.sermonSeoUrl}`);
    }

    public setSearchType(searchType: string, searchTypeText: string) {
        this.sermonSearchTerm = '';
        this.sermonSearchTypeText = searchTypeText;
        this.sermonSearchType = searchType;
    }

    public resetSearch() {
        this.sermonSearchTerm = '';
        this.sermonSearchTypeText = 'Title';
        this.sermonSearchType = 'sermonTitle';
        this.searchSermons(1);
    }

    public getCoverImageBySermonSeriesId(id: any) {
        for (let i = 0 ; i< this.allSermonSeriesLite.length ; i++) {
            if (this.allSermonSeriesLite[i].id == id) {
                return this.allSermonSeriesLite[i].seriesCoverImageUrl;
            }
        }

        return this.defaultThumbnailImageUrl;
    }

    public getSeriesTitleBySermonSeriesId(id: any) {
        for (let i = 0 ; i< this.allSermonSeriesLite.length ; i++) {
            if (this.allSermonSeriesLite[i].id == id) {
                return this.allSermonSeriesLite[i].seriesTitle;
            }
        }

        return null;
    }

    public scrollToTop() {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        });
    }

    public disablePreviousPageButton() { 
        return this.currentPageNumber <= this.PAGINATION_NUMBER_CUTOFF;
    }

    public disableNextPageButton() {
        return this.paginationNumbers[this.paginationNumbers.length - 1] == this.totalPages;
    }
}
