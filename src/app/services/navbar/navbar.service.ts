import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NavbarService {

    private previousUrl: string | null;
    private currentURL: string | null;
    public urlChange: Subject<string> = new Subject<string>();

    private clearNavTitles: boolean;
    public clearNavTitlesChange: Subject<boolean> = new Subject<boolean>();

    constructor(private router: Router) {
        this.previousUrl = null;
        this.currentURL = null;
        this.clearNavTitles = false;

        router.events.subscribe((event) => {
            if (event instanceof NavigationEnd) {
                this.setCurrentURL(event.url);
            }
        });
    }

    public getCurrentURL() {
        return this.currentURL;
    }

    public getPreviousURL() {
        return this.previousUrl;
    }

    public setCurrentURL(url: string) {
        this.previousUrl = this.currentURL;
        this.currentURL = url;
        this.urlChange.next(this.currentURL);
    }

    public getClearNatTitles() {
        return this.clearNavTitles;
    }

    public setClearNavTitles(state: boolean) {
        this.clearNavTitles = state;
        this.clearNavTitlesChange.next(this.clearNavTitles);
    }
}
