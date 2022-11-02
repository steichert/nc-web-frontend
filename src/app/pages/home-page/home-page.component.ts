import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
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
                private navbarService: NavbarService,
                private route: ActivatedRoute) {
        this.title.setTitle(this.pageTitle);
    }

    ngOnInit(): void {
        this.navbarService.setCurrentURL("/");

        this.urlData = this.route.data.subscribe(
            (data) => {
                if (data != null && data['page_section'] != null) {
                    setTimeout(() => {
                        this.scrollToPageSection(data['page_section']);
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
