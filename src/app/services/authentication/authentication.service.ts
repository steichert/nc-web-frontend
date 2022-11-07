import { Inject, Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    isLoggedIn: Subject<boolean> = new Subject<boolean>();
    isAdmin: boolean = false;
    userInfo: Subject<any> = new Subject<any>();

    constructor(@Inject(DOCUMENT) public document: Document,
                private authService: AuthService) {
    }

    public checkIsLoggedIn() {
        this.authService.isAuthenticated$.subscribe(
            (v) => {
                this.isLoggedIn.next(v);
                this.getUserInfo();
            },
            (e) => {
                this.isLoggedIn.next(false);
                this.userInfo.next(null);
                console.error(e)
            }
        );
    }

    public getUserInfo() {
        this.authService.getUser().subscribe(
            (user) => {
                this.userInfo.next(user);
            },
            (error) => {
                this.userInfo.next(null);
                console.error(error)
            }
        );
    }

    public login() {
        this.authService.loginWithRedirect();
    }

    public logout() {
        this.authService.logout();
    }
}
