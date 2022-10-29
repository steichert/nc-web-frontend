import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorsHomePageComponent } from './visitors-home-page.component';

describe('VisitorsHomePageComponent', () => {
  let component: VisitorsHomePageComponent;
  let fixture: ComponentFixture<VisitorsHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorsHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorsHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
