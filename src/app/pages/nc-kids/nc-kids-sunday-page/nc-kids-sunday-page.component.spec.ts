import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcKidsSundayPageComponent } from './nc-kids-sunday-page.component';

describe('NcKidsSundayPageComponent', () => {
  let component: NcKidsSundayPageComponent;
  let fixture: ComponentFixture<NcKidsSundayPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NcKidsSundayPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NcKidsSundayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
