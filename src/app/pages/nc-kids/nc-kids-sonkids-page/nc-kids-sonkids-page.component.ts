import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { imageUrls } from 'src/app/resources/image-url';

@Component({
    selector: 'app-nc-kids-sonkids-page',
    templateUrl: './nc-kids-sonkids-page.component.html',
    styleUrls: ['./nc-kids-sonkids-page.component.scss']
})
export class NcKidsSonkidsPageComponent implements OnInit {

    pageTitle = 'Son Kidz | New Creation Family Church';
    ncSonKidzLogoImageUrl = imageUrls.ncSonKidzLogoImageUrl;

    constructor(private title: Title) {
        this.title.setTitle(this.pageTitle);
    }

    ngOnInit(): void {
    }

}
