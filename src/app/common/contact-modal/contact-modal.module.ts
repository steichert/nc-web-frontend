import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactModalComponent } from './contact-modal.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ContactModalComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        ContactModalComponent
    ]
})
export class ContactModalModule { }
