import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoadingService } from './services/loading/loading.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    isLoading: boolean = false;
    isLoadingSubscription: Subscription;

    constructor(private loadingService: LoadingService) {
        this.isLoadingSubscription = this.loadingService.loadingStatus.subscribe(
            (value) => {
                this.isLoading = value;
            }
        );
    }
}
