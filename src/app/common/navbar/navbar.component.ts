import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { NavbarService } from 'src/app/services/navbar/navbar.service';
import { navbarItems } from './navbar.items';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

    // screen.availHeight (device screen, not viewport) is intentional: it gives
    // a stable threshold that doesn't shift if the URL bar collapses on mobile.
    private static readonly SCROLL_THRESHOLD_FRACTION = 1 / 5;
    // Matches the 72rem breakpoint in navbar.component.scss (72 * 16 = 1152).
    private static readonly DESKTOP_BREAKPOINT_PX = 1152;
    private static readonly COLLAPSED_BG = 'hsl(0 0% 13% / 1)';
    private static readonly TRANSPARENT_BG = 'none';
    private static readonly HOME = '/';

    public currentNavbarItems: any[] = navbarItems.homePage.items;
    public currentUrl: string | null = null;

    // View state — bound directly from the template.
    public isCollapsed = false;
    public navbarVisible = false;
    public headerBackground: string = NavbarComponent.TRANSPARENT_BG;

    private scrollFrameQueued = false;

    constructor(private navbarService: NavbarService,
                private loadingService: LoadingService,
                private router: Router) {}

    ngOnInit(): void {
        this.currentUrl = this.navbarService.getCurrentURL();
        this.determineNavbarItems();
        this.applyRouteState(this.currentUrl);

        this.navbarService.urlChange.subscribe((url) => {
            this.loadingService.startLoading();
            this.scrollToTop();
            this.currentUrl = url;
            this.determineNavbarItems();
            this.applyRouteState(url);
        });
    }

    @HostListener('window:scroll')
    onScroll() {
        if (this.currentUrl !== NavbarComponent.HOME) {
            return;
        }
        if (this.scrollFrameQueued) {
            return;
        }
        this.scrollFrameQueued = true;
        requestAnimationFrame(() => {
            this.updateScrollState();
            this.scrollFrameQueued = false;
        });
    }

    /**
     * Re-evaluates collapse state and header background from the current scroll
     * position. Only called on the home page; non-home routes are pinned to the
     * collapsed state by applyRouteState().
     */
    private updateScrollState() {
        if (typeof window === 'undefined') {
            return;
        }

        const threshold = screen.availHeight * NavbarComponent.SCROLL_THRESHOLD_FRACTION;
        const y = window.scrollY;

        this.isCollapsed = y > threshold;

        if (this.isCollapsed) {
            const opacity = Math.min(1, (y / screen.availHeight) - NavbarComponent.SCROLL_THRESHOLD_FRACTION);
            this.headerBackground = `hsl(0 0% 13% / ${opacity})`;
        } else {
            this.headerBackground = NavbarComponent.TRANSPARENT_BG;
        }
    }

    /**
     * Pins the header to the right state for a given route. Home pages start
     * uncollapsed/transparent (the scroll handler takes over from there); every
     * other route renders fully collapsed with a solid dark header.
     */
    private applyRouteState(url: string | null) {
        if (url === NavbarComponent.HOME) {
            this.isCollapsed = false;
            this.headerBackground = NavbarComponent.TRANSPARENT_BG;
            this.updateScrollState();
        } else {
            this.isCollapsed = true;
            this.headerBackground = NavbarComponent.COLLAPSED_BG;
        }
    }

    determineNavbarItems() {
        if (this.currentUrl?.includes('/nc-kidz')) {
            this.currentNavbarItems = navbarItems.ncKids.items;
        } else {
            this.currentNavbarItems = navbarItems.homePage.items;
        }
    }

    toggleNavbar() {
        // At desktop on the home-page top, the toggle is a chevron that
        // smooth-scrolls to the services section. The slide-in drawer doesn't
        // exist at desktop, so we never fall through to the drawer toggle.
        if (this.isDesktopHomeTop()) {
            this.scrollToServices();
            return;
        }

        if (this.navbarVisible) {
            this.closeNavbar();
        } else {
            this.openNavbar();
        }
        this.toggleScrolling();
    }

    private isDesktopHomeTop(): boolean {
        return typeof window !== 'undefined'
            && window.innerWidth > NavbarComponent.DESKTOP_BREAKPOINT_PX
            && this.currentUrl === NavbarComponent.HOME
            && !this.isCollapsed;
    }

    private scrollToServices() {
        const servicesEl = document.getElementById('services');
        if (!servicesEl) {
            return;
        }

        const top = servicesEl.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top, behavior: 'smooth' });
    }

    openNavbar() {
        this.navbarVisible = true;
    }

    closeNavbar() {
        this.navbarVisible = false;
    }

    toggleScrolling() {
        if (typeof document === 'undefined') {
            return;
        }
        const body = document.getElementById('body');
        if (body != null) {
            body.style.overflow = this.navbarVisible ? 'hidden' : 'auto';
        }
    }

    public scrollToTop() {
        if (typeof window !== 'undefined') {
            window.scroll({ top: 0 });
        }
    }

    public navigateToLink(link: string) {
        this.closeNavbar();
        this.toggleScrolling();
        this.router.navigateByUrl(link);
    }
}
