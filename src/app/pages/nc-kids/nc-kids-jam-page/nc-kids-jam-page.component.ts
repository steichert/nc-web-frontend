import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { imageUrls } from 'src/app/resources/image-url';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
    selector: 'app-nc-kids-jam-page',
    templateUrl: './nc-kids-jam-page.component.html',
    styleUrls: ['./nc-kids-jam-page.component.scss']
})
export class NcKidsJamPageComponent implements OnInit {

    pageTitle = 'NC Kidz Jam | New Creation Family Church';
    ncJamLogoImageUrl = imageUrls.ncJamLogoImageUrl;

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
