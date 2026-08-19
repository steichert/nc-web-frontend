import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ToastrModule } from 'ngx-toastr';

import { ContactModalComponent } from './contact-modal.component';

describe('ContactModalComponent', () => {
    let component: ContactModalComponent;
    let fixture: ComponentFixture<ContactModalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule, ToastrModule.forRoot()],
            declarations: [ContactModalComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ContactModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
