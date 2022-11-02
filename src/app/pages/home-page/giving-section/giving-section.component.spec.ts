import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GivingSectionComponent } from './giving-section.component';

describe('GivingSectionComponent', () => {
  let component: GivingSectionComponent;
  let fixture: ComponentFixture<GivingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GivingSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GivingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
