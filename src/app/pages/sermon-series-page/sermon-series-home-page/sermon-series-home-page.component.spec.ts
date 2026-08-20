import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SermonSeriesHomePageComponent } from './sermon-series-home-page.component';

describe('SermonSeriesHomePageComponent', () => {
    let component: SermonSeriesHomePageComponent;
    let fixture: ComponentFixture<SermonSeriesHomePageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule],
            declarations: [SermonSeriesHomePageComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(SermonSeriesHomePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
