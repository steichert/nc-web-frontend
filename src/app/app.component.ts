import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from './services/authentication/authentication.service';
import { LoadingService } from './services/loading/loading.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    isLoading: boolean = false;
    isLoadingSubscription: Subscription;

    isAdmin: boolean = false;
    isAdminSubscription: Subscription;

    constructor(private loadingService: LoadingService,
                private authenticationService: AuthenticationService,
                private router: Router) {
        this.isLoadingSubscription = this.loadingService.loadingStatus.subscribe(
            (value) => {
                this.isLoading = value;
            }
        );

        this.isAdminSubscription = this.authenticationService.isLoggedIn.subscribe(
            (value) => {
                if (value && this.authenticationService.isAdmin && this.router.url.includes('/admin')) {
                    this.isAdmin = true;
                } else {
                    this.isAdmin = false;
                }
            }
        );
    }
}
