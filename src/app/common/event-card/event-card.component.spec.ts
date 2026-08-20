import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventCardComponent } from './event-card.component';

describe('EventCardComponent', () => {
    let component: EventCardComponent;
    let fixture: ComponentFixture<EventCardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [EventCardComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(EventCardComponent);
        component = fixture.componentInstance;

        component.event = {
            title: 'Test Event',
            description: 'An event used for testing.',
            coverImageUrl: 'https://example.com/cover.jpg',
            contentUrl: 'https://example.com/flyer.pdf',
            callToActionLink: 'https://example.com/register',
            callToActionTitle: 'Register',
            eventDate: '2026-01-01',
            eventTime: '10:00',
            venue: 'Test Venue',
        };

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
