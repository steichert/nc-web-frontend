import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcKidsHomePageComponent } from './nc-kids-home-page.component';

describe('NcKidzHomePageComponent', () => {
  let component: NcKidsHomePageComponent;
  let fixture: ComponentFixture<NcKidsHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NcKidsHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NcKidsHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
