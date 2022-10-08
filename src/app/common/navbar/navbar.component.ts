import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { navbarItems } from './navbar.items';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

    @ViewChild('navbarHeader')
    navbarHeader!: ElementRef;

    @ViewChild('navbarButton')
    navbarButton!: ElementRef;

    @ViewChild('navbarLogo')
    navbarLogo!: ElementRef;

    @ViewChild('primaryNavigation')
    primaryNavigation!: ElementRef;

    @HostListener('window:scroll', ['$event'])
    onScroll() {
        this.triggerNavbarTransform();
    }

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

        this.toggleScrolling();
    }

    toggleScrolling() {
        let body = document.getElementById('body');
        if (body != null) {
            if (this.navbarVisible) {
                body.style.overflow = 'hidden';
            } else {
                body.style.overflow = 'auto';
            }
        }
    }

    triggerNavbarTransform() {
        this.triggerNavbarBackgroundTransparency();

        if (scrollY > screen.availHeight / 4) {
            if (!this.navbarHeader.nativeElement.classList.contains('collapsed-navbar-header')) {
                this.navbarHeader.nativeElement.classList.add('collapsed-navbar-header');
            }
            if (!this.navbarLogo.nativeElement.classList.contains('shrink-navbar-logo')) {
                this.navbarLogo.nativeElement.classList.add('shrink-navbar-logo');
            }
            if (!this.primaryNavigation.nativeElement.classList.contains('collapsed-primary-navigation')) {
                this.primaryNavigation.nativeElement.classList.add('collapsed-primary-navigation');
            }
            if (!this.navbarButton.nativeElement.classList.contains('shrink-navbar-button')) {
                this.navbarButton.nativeElement.classList.add('shrink-navbar-button');
            }
        } else {
            this.navbarHeader.nativeElement.classList.remove('collapsed-navbar-header');
            this.navbarLogo.nativeElement.classList.remove('shrink-navbar-logo');
            this.navbarButton.nativeElement.classList.remove('shrink-navbar-button');
            this.primaryNavigation.nativeElement.classList.remove('collapsed-primary-navigation');
        }
    }

    triggerNavbarBackgroundTransparency() {
        let primaryHeader = document.getElementById('primaryHeader');
        if (primaryHeader != null) {
            let screenHeight = screen.availHeight;
            if (scrollY > screenHeight / 4) {
                let opacity = (scrollY  / screenHeight) - 0.25;
                if (opacity > 1) {
                    opacity = 1;
                }
                primaryHeader.style.background = 'hsl(0 0% 0% / ' + opacity + ')';
            } else {
                primaryHeader.style.background = 'none';
            }
        }
    }
}
