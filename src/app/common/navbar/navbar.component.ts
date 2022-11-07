import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { NavbarService } from 'src/app/services/navbar/navbar.service';
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
        if (this.currentUrl != null && this.currentUrl === this.HOME) {
            this.triggerNavbarTransform();
        }
    }

    public currentNavbarItems: any[];
    public navbarVisible: boolean;
    public navbarToggleSplit: number = 5; 
    public currentUrl: string | null;

    // Routes
    private HOME: string = "/";

    constructor(private navbarService: NavbarService,
                private loadingService: LoadingService,
                private router: Router,
                private authenticationService: AuthenticationService) {
        this.navbarVisible = false;
        this.currentUrl = null;
        this.currentNavbarItems = navbarItems.homePage.items;
    }

    ngOnInit(): void {
        this.initializeUrlChangeListener();
        this.determineNavbarItems();

        if (this.currentUrl != null && this.currentUrl !== this.HOME) {
            this.setNonHomeNavbarClasses();
        }
    }

    public isLoggedInAdminUser() {
        return this.authenticationService.isLoggedIn && this.authenticationService
    }

    private initializeUrlChangeListener() {
        this.currentUrl = this.navbarService.getCurrentURL();

        this.navbarService.urlChange.subscribe(
            (url) => {
                this.loadingService.startLoading();
                this.scrollToTop();
                this.currentUrl = url;
                this.determineNavbarItems();
                if (this.currentUrl != null && this.currentUrl === this.HOME) {
                    this.triggerNavbarTransform();
                } else {
                    this.setNonHomeNavbarClasses();
                }
                this.loadingService.stopLoading();
            }
        );
    }

    determineNavbarItems() {
        if (this.currentUrl?.includes("/nc-kidz")) {
            this.currentNavbarItems = navbarItems.ncKids.items;
        } else {
            this.currentNavbarItems = navbarItems.homePage.items;
        }
    }

    toggleNavbar() {
        let isNavbarVisible = this.primaryNavigation.nativeElement.getAttribute('data-visible');

        if (isNavbarVisible == "true") {
            this.closeNavbar()
        } else if (isNavbarVisible == "false") {
            this.openNavbar();
        }

        this.toggleScrolling();
    }

    openNavbar() {
        this.primaryNavigation.nativeElement.setAttribute('data-visible', true);
        this.navbarButton.nativeElement.setAttribute('aria-expanded', true);
        this.navbarButton.nativeElement.classList.add('is-active');
        this.navbarVisible = true;
    }

    closeNavbar() {
        this.primaryNavigation.nativeElement.setAttribute('data-visible', false);
        this.navbarButton.nativeElement.setAttribute('aria-expanded', false);
        this.navbarButton.nativeElement.classList.remove('is-active');
        this.navbarVisible = false;
    }

    toggleScrolling() {
        if (typeof document == 'undefined') {
            return;
        }

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

        if (typeof scrollY == 'undefined') {
            return;
        }

        if (scrollY > screen.availHeight / this.navbarToggleSplit) {
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
        if (typeof document == 'undefined') {
            return;
        }

        let primaryHeader = document.getElementById('primaryHeader');
        if (primaryHeader != null) {
            let screenHeight = screen.availHeight;
            if (scrollY > screenHeight / this.navbarToggleSplit) {
                let opacity = (scrollY  / screenHeight) - (1 / this.navbarToggleSplit);
                if (opacity > 1) {
                    opacity = 1;
                }
                primaryHeader.style.background = 'hsl(0 0% 13% / ' + opacity + ')';
            } else {
                primaryHeader.style.background = 'none';
            }
        }
    }

    setNonHomeNavbarClasses() {
        if (typeof document == 'undefined') {
            return;
        }

        let primaryHeader = document.getElementById('primaryHeader');
        if (primaryHeader != null) {
            primaryHeader.style.background = 'hsl(0 0% 13% / 1)';
        }
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
    }

    public scrollToTop() {
        if (typeof window !== 'undefined') {
            window.scroll({
                top: 0
            });
        }
    }

    public navigateToLink(link: string) {
        this.closeNavbar();
        this.toggleScrolling();
        this.router.navigateByUrl(link);
    }
}
