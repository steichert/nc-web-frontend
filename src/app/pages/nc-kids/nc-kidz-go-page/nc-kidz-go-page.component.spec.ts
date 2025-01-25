import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcKidzGoPageComponent } from './nc-kidz-go-page.component';

describe('NcKidzGoPageComponent', () => {
  let component: NcKidzGoPageComponent;
  let fixture: ComponentFixture<NcKidzGoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NcKidzGoPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NcKidzGoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
