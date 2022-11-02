import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorsSectionComponent } from './visitors-section.component';

describe('VisitorsSectionComponent', () => {
  let component: VisitorsSectionComponent;
  let fixture: ComponentFixture<VisitorsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorsSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
