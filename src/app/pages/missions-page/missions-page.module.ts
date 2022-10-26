import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionsPageComponent } from './missions-page.component';
import { ParagraphContentModule } from 'src/app/common/paragraph-content/paragraph-content.module';

@NgModule({
    declarations: [
        MissionsPageComponent
    ],
    imports: [
        CommonModule,
        ParagraphContentModule
    ],
    exports: [
        MissionsPageComponent
    ]
})
export class MissionsPageModule { }
