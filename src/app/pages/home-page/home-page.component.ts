import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { NavbarService } from 'src/app/services/navbar/navbar.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
    
    pageTitle = 'Home | New Creation Family Church';
    urlData: any;

    constructor(private title: Title,
                private meta: Meta,
                private navbarService: NavbarService,
                private route: ActivatedRoute,
                private loadingService: LoadingService) {
        this.title.setTitle(this.pageTitle);
        this.meta.addTag({ name: 'title', content: this.pageTitle });
    }

    ngOnInit(): void {
        this.navbarService.setCurrentURL("/");

        this.urlData = this.route.data.subscribe(
            (data) => {
                if (data != null && data['page_section'] != null) {
                    setTimeout(() => {
                        this.scrollToPageSection(data['page_section']);
                        this.loadingService.stopLoading();
                    }, 500);
                }
            });
    }

    ngOnDestroy() {
        this.urlData.unsubscribe();
    }

    private scrollToPageSection(section: string) {
        let pageSection = document.getElementById(section);
        if (pageSection != null) {
            var scrollTop = pageSection.offsetTop;       
            window.scroll({
                top: scrollTop,
            });
        }
    }
}
