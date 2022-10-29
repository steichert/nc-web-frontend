import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorsHomePageComponent } from './visitors-home-page/visitors-home-page.component';
import { VisitorsCardPageComponent } from './visitors-card-page/visitors-card-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        VisitorsHomePageComponent,
        VisitorsCardPageComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        VisitorsHomePageComponent,
        VisitorsCardPageComponent
    ]
})
export class VisitorsPageModule { }
