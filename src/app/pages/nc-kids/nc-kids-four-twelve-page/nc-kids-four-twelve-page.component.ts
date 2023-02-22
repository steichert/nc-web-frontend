import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { imageUrls } from 'src/app/resources/image-url';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
    selector: 'app-nc-kids-four-twelve-page',
    templateUrl: './nc-kids-four-twelve-page.component.html',
    styleUrls: ['./nc-kids-four-twelve-page.component.scss']
})
export class NcKidsFourTwelvePageComponent implements OnInit {

    pageTitle = '412 | New Creation Family Church';
    ncFourTwelveLogoImageUrl = imageUrls.ncFourTwelveLogoImageUrl;

    constructor(private title: Title,
                private loadingService: LoadingService) {
        this.title.setTitle(this.pageTitle);
    }

    ngOnInit(): void {
        this.loadingService.stopLoading();
    }

}
