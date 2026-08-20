import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';

import { VisitorsCardPageComponent } from './visitors-card-page.component';

describe('VisitorsCardPageComponent', () => {
    let component: VisitorsCardPageComponent;
    let fixture: ComponentFixture<VisitorsCardPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule, ToastrModule.forRoot()],
            declarations: [VisitorsCardPageComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(VisitorsCardPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
