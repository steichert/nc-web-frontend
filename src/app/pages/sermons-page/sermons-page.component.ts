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

    pageTitle = 'Sermons | New Creation Family Church';
    defaultThumbnailImageUrl = imageUrls.defaultSermonsThumbnailImageUrl;

    sermonSearchTerm: string | null = '';
    sermonSearchType: string | null = 'sermonTitle';
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
                    this.currentPageNumber = params['pageNumber'];
                }

                let queryParamMap = this.route.snapshot.queryParamMap;

                if (queryParamMap.get('searchType') != null) {
                    this.sermonSearchType = queryParamMap.get('searchType');
                    this.sermonSearchTypeText = this.determineSearchTypeText(this.sermonSearchType);
                }

                if (queryParamMap.get('searchTerm') != null) {
                    this.sermonSearchTerm = queryParamMap.get('searchTerm');
                }

                this.fetchSermons();
            }
        );

        this.route.queryParamMap.subscribe(
            (queryParamMap) => {
                if (this.route.snapshot.params['pageNumber'] != null) {
                    this.currentPageNumber = this.route.snapshot.params['pageNumber'];
                }

                if (queryParamMap.get('searchType') != null) {
                    this.sermonSearchType = queryParamMap.get('searchType');
                    this.sermonSearchTypeText = this.determineSearchTypeText(this.sermonSearchType);
                }

                if (queryParamMap.get('searchTerm') != null) {
                    this.sermonSearchTerm = queryParamMap.get('searchTerm');
                }

                this.fetchSermons();
            }
        );
    }

    public fetchAllSermonSeriesLite() {
        this.loadingService.incrementLoading();

        this.ncApi.getAllSermonSeriesLite().subscribe(
            (data: any) => {
                this.allSermonSeriesLite = data;
                this.loadingService.decrementLoading();
            },
            (err) => {
                this.loadingService.decrementLoading();
                console.log(err.error.text);
            }
        )
    }

    public fetchSermons() {
        this.loadingService.incrementLoading();

        this.ncApi.searchSermons(this.currentPageNumber, this.sermonSearchType, this.sermonSearchTerm, 'sermonDate', 'desc').subscribe(
            (data: any) => {
                if (data != null) {
                    this.sermonsPage = data;
                    this.updatePagination(this.sermonsPage);
                }

                this.loadingService.decrementLoading();
            },
            err => {
                this.loadingService.decrementLoading();
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
        if (this.sermonSearchTerm != null && this.sermonSearchTerm != '') {
            this.router.navigateByUrl(`/sermons/page/${pageNumber}?searchType=${this.sermonSearchType}&searchTerm=${this.sermonSearchTerm}`);
        } else {
            this.router.navigateByUrl(`/sermons/page/${pageNumber}`);
        }
    }

    public loadPreviousPage() {
        let pageNumber = this.paginationNumbers[0] - 1;
        if (this.sermonSearchTerm != null && this.sermonSearchTerm != '') {
            this.router.navigateByUrl(`/sermons/page/${pageNumber}?searchType=${this.sermonSearchType}&searchTerm=${this.sermonSearchTerm}`);
        } else {
            this.router.navigateByUrl(`/sermons/page/${pageNumber}`);
        }
        
    }

    public loadPage(pageNumber: number) {
        if (this.sermonSearchTerm != null && this.sermonSearchTerm != '') {
            this.router.navigateByUrl(`/sermons/page/${pageNumber}?searchType=${this.sermonSearchType}&searchTerm=${this.sermonSearchTerm}`);
        } else {
            this.router.navigateByUrl(`/sermons/page/${pageNumber}`);
        }
    }

    public loadNextPage() {
        let pageNumber = this.paginationNumbers[this.paginationNumbers.length - 1] + 1;
        if (this.sermonSearchTerm != null && this.sermonSearchTerm != '') {
            this.router.navigateByUrl(`/sermons/page/${pageNumber}?searchType=${this.sermonSearchType}&searchTerm=${this.sermonSearchTerm}`);
        } else {
            this.router.navigateByUrl(`/sermons/page/${pageNumber}`);
        }
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

    private determineSearchTypeText(searchType: string | null) {
        switch (searchType) {
            case 'sermonTitle':
                return 'Title';
            case 'sermonSeriesTitle':
                return 'Series';
            case 'sermonSpeaker':
                return 'Speaker';
            case 'sermonDate':
                return 'Sermon Date';
            default:
                return 'Title';
        }
    }
}
