import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { imageUrls } from 'src/app/resources/image-url';

@Component({
    selector: 'app-nc-kids-glowkids-page',
    templateUrl: './nc-kids-glowkids-page.component.html',
    styleUrls: ['./nc-kids-glowkids-page.component.scss']
})
export class NcKidsGlowkidsPageComponent implements OnInit {

    pageTitle = 'Glow Kidz | New Creation Family Church';
    ncGlowKidzLogoImageUrl = imageUrls.ncGlowKidzLogoImageUrl;

    constructor(private title: Title) {
        this.title.setTitle(this.pageTitle);
    }

    ngOnInit(): void {
    }

}
