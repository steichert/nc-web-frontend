import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorsCardPageComponent } from './visitors-card-page.component';

describe('VisitorsCardPageComponent', () => {
  let component: VisitorsCardPageComponent;
  let fixture: ComponentFixture<VisitorsCardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorsCardPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorsCardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
