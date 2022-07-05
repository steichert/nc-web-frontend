import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { navbarItems } from './navbar.items';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

    @ViewChild('navbarButton')
    navbarButton!: ElementRef;

    @ViewChild('primaryNavigation')
    primaryNavigation!: ElementRef;

    public currentNavbarItems: any[];
    public navbarVisible: boolean = false;

    constructor() {
        this.currentNavbarItems = navbarItems.homePage.items;
    }

    ngOnInit(): void {
    }

    toggleNavbar() {
        let isNavbarVisible = this.primaryNavigation.nativeElement.getAttribute('data-visible');

        if (isNavbarVisible == "true") {
            this.primaryNavigation.nativeElement.setAttribute('data-visible', false);
            this.navbarButton.nativeElement.setAttribute('aria-expanded', false);
            this.navbarButton.nativeElement.classList.remove('is-active');
            this.navbarVisible = false;
        } else if (isNavbarVisible == "false") {
            this.primaryNavigation.nativeElement.setAttribute('data-visible', true);
            this.navbarButton.nativeElement.setAttribute('aria-expanded', true);
            this.navbarButton.nativeElement.classList.add('is-active');
            this.navbarVisible = true;
        }
    }

    toggleNavbarDropdown() {
        
    }
}
