import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { imageUrls } from 'src/app/resources/image-url';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
    selector: 'app-nc-kids-sunday-page',
    templateUrl: './nc-kids-sunday-page.component.html',
    styleUrls: ['./nc-kids-sunday-page.component.scss']
})
export class NcKidsSundayPageComponent implements OnInit {

    pageTitle = 'NC Kidz Sunday | New Creation Family Church';
    ncKidzSundayLogoImageUrl = imageUrls.ncKidzSundayLogoImageUrl;

    constructor(private title: Title,
                private loadingService: LoadingService) {
        this.title.setTitle(this.pageTitle);
    }

    ngOnInit(): void {
        this.loadingService.stopLoading();
    }

}
