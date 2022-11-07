import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-admin-home-page',
  templateUrl: './admin-home-page.component.html',
  styleUrls: ['./admin-home-page.component.scss']
})
export class AdminHomePageComponent implements OnInit {

    isLoggedIn: boolean = false;
    isLoggedIngSubscription: Subscription = new Subscription();

    userInfo: any = null;
    userInfoSubscription: Subscription = new Subscription();

    constructor(private authenticationService: AuthenticationService) {
    }

    ngOnInit(): void {
        this.initializeLoggedInListener();
        this.initializeUserInfoListener();
        this.authenticationService.checkIsLoggedIn();
    }

    initializeLoggedInListener() {
        this.isLoggedIngSubscription = this.authenticationService.isLoggedIn.subscribe(
            (value) => {
                this.isLoggedIn = value;
                if (!this.isLoggedIn) {
                    this.login();
                }
            }
        );
    }

    initializeUserInfoListener() {
        this.userInfoSubscription = this.authenticationService.userInfo.subscribe(
            (user) => {
                this.userInfo = user;
            }
        );
    }

    login(): void {
        this.authenticationService.login();
    }

    logout(): void {
        this.authenticationService.logout();
    }

}
