import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { imageUrls } from 'src/app/resources/image-url';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
    selector: 'app-nc-kids-glowkids-page',
    templateUrl: './nc-kids-glowkids-page.component.html',
    styleUrls: ['./nc-kids-glowkids-page.component.scss']
})
export class NcKidsGlowkidsPageComponent implements OnInit {

    pageTitle = 'Glow Kidz | New Creation Family Church';
    ncGlowKidzLogoImageUrl = imageUrls.ncGlowKidzLogoImageUrl;

    constructor(private title: Title,
                private loadingService: LoadingService) {
        this.title.setTitle(this.pageTitle);
    }

    ngOnInit(): void {
        this.loadingService.stopLoading();
    }

}
