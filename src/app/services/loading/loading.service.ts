import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class LoadingService {
    loadingStatus: Subject<boolean> = new Subject<boolean>();
    loadingCounter: number = 0;

    constructor() {
        this.loadingStatus.next(true);
    }

    private setLoadingStatus(value: boolean) {
        this.loadingStatus.next(value);
    }

    public startLoading() {
        if (this.loadingCounter == 0) {
            this.setLoadingStatus(true);
        }

        this.loadingCounter++;
    }

    public stopLoading() {
        this.loadingCounter--;

        if (this.loadingCounter == 0) {
            this.setLoadingStatus(false);
        }
    }
}
