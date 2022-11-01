import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcKidsSonkidsPageComponent } from './nc-kids-sonkids-page.component';

describe('NcKidsSonkidsPageComponent', () => {
  let component: NcKidsSonkidsPageComponent;
  let fixture: ComponentFixture<NcKidsSonkidsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NcKidsSonkidsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NcKidsSonkidsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
