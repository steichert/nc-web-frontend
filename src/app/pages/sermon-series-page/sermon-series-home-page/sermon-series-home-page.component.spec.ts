import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SermonSeriesHomePageComponent } from './sermon-series-home-page.component';

describe('SermonSeriesHomePageComponent', () => {
  let component: SermonSeriesHomePageComponent;
  let fixture: ComponentFixture<SermonSeriesHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SermonSeriesHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SermonSeriesHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
