import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SermonsSectionComponent } from './sermons-section.component';

describe('SermonsSectionComponent', () => {
  let component: SermonsSectionComponent;
  let fixture: ComponentFixture<SermonsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SermonsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SermonsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
