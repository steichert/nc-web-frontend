import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorsHomePageComponent } from './visitors-home-page/visitors-home-page.component';
import { VisitorsCardPageComponent } from './visitors-card-page/visitors-card-page.component';
import { FormsModule } from '@angular/forms';
import { ContactModalModule } from 'src/app/common/contact-modal/contact-modal.module';

@NgModule({
    declarations: [
        VisitorsHomePageComponent,
        VisitorsCardPageComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ContactModalModule
    ],
    exports: [
        VisitorsHomePageComponent,
        VisitorsCardPageComponent
    ]
})
export class VisitorsPageModule { }
