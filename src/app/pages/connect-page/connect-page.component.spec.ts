import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule } from 'ngx-toastr';

import { ConnectPageComponent } from './connect-page.component';

describe('ConnectPageComponent', () => {
    let component: ConnectPageComponent;
    let fixture: ComponentFixture<ConnectPageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, RouterTestingModule, ToastrModule.forRoot()],
            declarations: [ConnectPageComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ConnectPageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
