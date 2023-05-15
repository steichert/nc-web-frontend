import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { imageUrls } from 'src/app/resources/image-url';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
    selector: 'app-nc-kids-sonkids-page',
    templateUrl: './nc-kids-sonkids-page.component.html',
    styleUrls: ['./nc-kids-sonkids-page.component.scss']
})
export class NcKidsSonkidsPageComponent implements OnInit {

    pageTitle = 'Son Kidz | New Creation Family Church';
    ncSonKidzLogoImageUrl = imageUrls.ncSonKidzLogoImageUrl;

    constructor(private title: Title,
                private meta: Meta,
                private loadingService: LoadingService) {
        this.title.setTitle(this.pageTitle);
        this.meta.addTag({ name: 'title', content: this.pageTitle });
    }

    ngOnInit(): void {
        this.loadingService.stopLoading();
    }

}
