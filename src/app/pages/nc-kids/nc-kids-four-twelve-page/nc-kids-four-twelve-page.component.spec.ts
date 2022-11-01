import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcKidsFourTwelvePageComponent } from './nc-kids-four-twelve-page.component';

describe('NcKidsFourTwelvePageComponent', () => {
  let component: NcKidsFourTwelvePageComponent;
  let fixture: ComponentFixture<NcKidsFourTwelvePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NcKidsFourTwelvePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NcKidsFourTwelvePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
