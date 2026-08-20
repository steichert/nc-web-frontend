import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { EventsSectionComponent } from './events-section.component';

describe('EventsSectionComponent', () => {
    let component: EventsSectionComponent;
    let fixture: ComponentFixture<EventsSectionComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule],
            declarations: [EventsSectionComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(EventsSectionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
