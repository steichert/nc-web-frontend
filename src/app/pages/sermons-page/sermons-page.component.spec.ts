import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SermonsPageComponent } from './sermons-page.component';

describe('SermonsPageComponent', () => {
    let component: SermonsPageComponent;
    let fixture: ComponentFixture<SermonsPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule],
            declarations: [SermonsPageComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(SermonsPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
