import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SafePipe } from 'src/app/utils/safe.pipe';
import { SermonViewPageComponent } from './sermon-view-page.component';

describe('SermonViewPageComponent', () => {
    let component: SermonViewPageComponent;
    let fixture: ComponentFixture<SermonViewPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule],
            declarations: [SermonViewPageComponent, SafePipe],
        }).compileComponents();

        fixture = TestBed.createComponent(SermonViewPageComponent);
        component = fixture.componentInstance;

        // The template dereferences currentSermon directly, and ngOnInit only
        // populates it from an HTTP response that never arrives under test.
        component.currentSermon = {
            sermonTitle: 'Test Sermon',
            sermonDescription: 'A sermon used for testing.',
            sermonSpeaker: 'Test Speaker',
            sermonDate: '2026-01-01',
            sermonAudioUrl: 'https://example.com/sermon.mp3',
            sermonVideoUrl: 'https://example.com/sermon.mp4',
        };

        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
