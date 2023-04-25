import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SermonViewPageComponent } from './sermon-view-page.component';

describe('SermonViewPageComponent', () => {
  let component: SermonViewPageComponent;
  let fixture: ComponentFixture<SermonViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SermonViewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SermonViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
