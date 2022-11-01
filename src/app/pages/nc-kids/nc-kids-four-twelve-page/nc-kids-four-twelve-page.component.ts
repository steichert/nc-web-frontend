import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { imageUrls } from 'src/app/resources/image-url';

@Component({
    selector: 'app-nc-kids-four-twelve-page',
    templateUrl: './nc-kids-four-twelve-page.component.html',
    styleUrls: ['./nc-kids-four-twelve-page.component.scss']
})
export class NcKidsFourTwelvePageComponent implements OnInit {

    pageTitle = '412 | New Creation Family Church';
    ncFourTwelveLogoImageUrl = imageUrls.ncFourTwelveLogoImageUrl;

    constructor(private title: Title) {
        this.title.setTitle(this.pageTitle);
    }

    ngOnInit(): void {
    }

}
