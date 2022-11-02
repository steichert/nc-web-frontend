import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectSectionComponent } from './connect-section.component';

describe('ConnectSectionComponent', () => {
  let component: ConnectSectionComponent;
  let fixture: ComponentFixture<ConnectSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
