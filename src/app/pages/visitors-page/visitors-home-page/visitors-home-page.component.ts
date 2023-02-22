import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { imageUrls } from 'src/app/resources/image-url';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
    selector: 'app-visitors-home-page',
    templateUrl: './visitors-home-page.component.html',
    styleUrls: ['./visitors-home-page.component.scss']
})
export class VisitorsHomePageComponent implements OnInit {

    pageTitle: string = "Visitors | New Creation Family Church";

    bannerImageUrl = imageUrls.visitorHomeBannerImageUrl;

    constructor(private title: Title,
                private router: Router,
                private loadingService: LoadingService) {
        this.title.setTitle(this.pageTitle);
    }

    ngOnInit(): void {
        this.loadingService.stopLoading();
    }

    public navigateToLink(link: string) {
        this.router.navigateByUrl(link);
    }

    public getVisitorBannerImageUrl() {
        return 'url(\'' + this.bannerImageUrl + '\')';
    }

}
