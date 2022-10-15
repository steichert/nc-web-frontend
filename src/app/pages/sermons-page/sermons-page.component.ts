import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Page } from 'src/app/domain/Page';
import { Sermon } from 'src/app/domain/Sermon';
import { imageUrls } from 'src/app/resources/image-url';
import { ApiService } from 'src/app/services/api/api.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { NavbarService } from 'src/app/services/navbar/navbar.service';
import { PostMapper } from 'src/app/utils/post.mapper';


@Component({
    selector: 'app-sermons-page',
    templateUrl: './sermons-page.component.html',
    styleUrls: ['./sermons-page.component.scss']
})
export class SermonsPageComponent implements OnInit {

    pageTitle = 'Sermons | New Creation Family Church';
    defaultThumbnailImageUrl = imageUrls.defaultSermonsThumbnailImageUrl;

    sermonSearchTerm: string;
    sermonSearchType: string;
    availableSearchTypes = ['Title', 'Speaker', 'Series', 'Date'];

    sermonsPage: Page;
    allSermons: Sermon[] = [];
    activeSermon: Sermon;
    currentSermonPage: Sermon[] = [];

    pageSize: number = 5;
    pages: number[] = [];

    constructor(private navbarService: NavbarService,
                private title: Title,
                private router: Router,
                private ncApi: ApiService, 
                private loadingService: LoadingService) { 
        this.title.setTitle(this.pageTitle);
        this.sermonSearchTerm = '';
        this.sermonSearchType = 'Title';
        this.sermonsPage = new Page([], 1, 0);
        this.activeSermon = new Sermon();
    }

    ngOnInit(): void {
        this.navbarService.setCurrentURL(this.router.url);
        this.fetchAllSermonData();
        this.sermonSearchTerm = '';
        this.sermonSearchType = 'Title';
    }

    public fetchAllSermonData() {
        this.loadingService.startLoading();

        let fromDate = new Date();
        fromDate.setMonth(fromDate.getMonth() - 6);
        let fromDateString = fromDate.toISOString().split('T')[0];

        let today = new Date();
        let toDateString = today.toISOString().split('T')[0];

        this.ncApi.getSermonPosts(fromDateString, toDateString).subscribe(
            data => {
                if (data != null) {
                    this.allSermons = PostMapper.mapToSermons(data);
                    this.sermonsPage = new Page(this.allSermons, 1, this.pageSize);
                    this.sermonsPage.archivedItems = this.sermonsPage.allItems;
                    this.sermonsPage.setPage(1);

                    if (this.allSermons.length > 0) {
                        this.activeSermon = this.allSermons[0];
                    }

                } else {
                    console.log("Unable to retrieve latest sermon");
                }

                this.loadingService.stopLoading();
            },
            err => {
                this.loadingService.stopLoading();
                console.log(err.error.text);
            }
        );
    }

    public selectSermon(sermon: Sermon) {
        this.activeSermon = sermon;
    }

    public getSermonsPage() {
        return this.sermonsPage;
    }

    public setSermonsPage(sermonsPage: any) {
        this.sermonsPage = sermonsPage;
    }

    public setSearchType(type: string) {
        this.sermonSearchType = type;
    }

}
