import { Component, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { imageUrls } from 'src/app/resources/image-url';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { NavbarService } from 'src/app/services/navbar/navbar.service';

@Component({
    selector: 'app-nc-kids-home-page',
    templateUrl: './nc-kids-home-page.component.html',
    styleUrls: ['./nc-kids-home-page.component.scss']
})
export class NcKidsHomePageComponent implements OnInit {

    constructor(private title: Title,
                private meta: Meta,
                private router: Router,
                private navbarService: NavbarService,
                private loadingService: LoadingService) {
        this.title.setTitle(this.pageTitle);
        this.meta.addTag({ name: 'title', content: this.pageTitle });
    }

    pageTitle = 'NC Kidz | New Creation Family Church';
    registrationFormUrl = "https://newcreationfamilychurch.churchcenter.com/people/forms/841410"

    ncKidsHomeBannerImageUrl = imageUrls.ncKidsHomeBannerImageUrl;
    ncBabiesLogoImageUrl = imageUrls.ncBabiesLogoImageUrl;
    ncGlowKidzLogoImageUrl = imageUrls.ncGlowKidzLogoImageUrl;
    ncFourTwelveLogoImageUrl = imageUrls.ncFourTwelveLogoImageUrl;
    ncJamLogoImageUrl = imageUrls.ncJamLogoImageUrl;
    ncSonKidzLogoImageUrl = imageUrls.ncSonKidzLogoImageUrl;
    ncKidzSundayLogoImageUrl = imageUrls.ncKidzSundayLogoImageUrl;
    ncGoLogoImageUrl = imageUrls.ncGoLogoImageUrl;

    ngOnInit() {
        this.navbarService.setCurrentURL(this.router.url);
        this.scrollToTop();    
        this.loadingService.stopLoading();
    }

    public scrollToTop() {
        window.scrollTo(0,0);
    }

    public navigateToLink(link: string) {
        this.router.navigateByUrl(link);
    }

}