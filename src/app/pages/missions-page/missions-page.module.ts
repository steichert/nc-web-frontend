import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionsPageComponent } from './missions-page.component';
import { ParagraphContentModule } from 'src/app/common/paragraph-content/paragraph-content.module';
import { Meta } from '@angular/platform-browser';

@NgModule({
    declarations: [
        MissionsPageComponent
    ],
    imports: [
        CommonModule,
        ParagraphContentModule
    ],
    providers: [
        Meta
    ],
    exports: [
        MissionsPageComponent
    ]
})
export class MissionsPageModule { }
