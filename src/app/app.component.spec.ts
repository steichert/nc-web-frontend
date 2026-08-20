import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { LoadingService } from './services/loading/loading.service';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [AppComponent],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should reflect the loading service status', fakeAsync(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        const loadingService = TestBed.inject(LoadingService);

        loadingService.startLoading();
        expect(app.isLoading).toBeTrue();

        // stopLoading() defers the status change by 500ms.
        loadingService.stopLoading();
        tick(500);
        expect(app.isLoading).toBeFalse();
    }));
});
