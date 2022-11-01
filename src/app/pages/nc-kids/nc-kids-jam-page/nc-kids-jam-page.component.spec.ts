import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NcKidsJamPageComponent } from './nc-kids-jam-page.component';

describe('NcKidsJamPageComponent', () => {
  let component: NcKidsJamPageComponent;
  let fixture: ComponentFixture<NcKidsJamPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NcKidsJamPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NcKidsJamPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
