import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcKidsGlowkidsPageComponent } from './nc-kids-glowkids-page.component';

describe('NcKidsGlowkidsPageComponent', () => {
  let component: NcKidsGlowkidsPageComponent;
  let fixture: ComponentFixture<NcKidsGlowkidsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NcKidsGlowkidsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NcKidsGlowkidsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
