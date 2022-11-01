import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcKidsBabiesPageComponent } from './nc-kids-babies-page.component';

describe('NcKidsBabiesPageComponent', () => {
  let component: NcKidsBabiesPageComponent;
  let fixture: ComponentFixture<NcKidsBabiesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NcKidsBabiesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NcKidsBabiesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
