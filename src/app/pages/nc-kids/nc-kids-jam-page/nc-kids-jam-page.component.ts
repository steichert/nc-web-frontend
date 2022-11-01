import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { imageUrls } from 'src/app/resources/image-url';

@Component({
    selector: 'app-nc-kids-jam-page',
    templateUrl: './nc-kids-jam-page.component.html',
    styleUrls: ['./nc-kids-jam-page.component.scss']
})
export class NcKidsJamPageComponent implements OnInit {

    pageTitle = 'NC Kidz Jam | New Creation Family Church';
    ncJamLogoImageUrl = imageUrls.ncJamLogoImageUrl;

    constructor(private title: Title) {
        this.title.setTitle(this.pageTitle);
    }

    ngOnInit(): void {
    }

}
