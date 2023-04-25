import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SermonSeriesViewPageComponent } from './sermon-series-view-page.component';

describe('SermonSeriesViewPageComponent', () => {
  let component: SermonSeriesViewPageComponent;
  let fixture: ComponentFixture<SermonSeriesViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SermonSeriesViewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SermonSeriesViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
