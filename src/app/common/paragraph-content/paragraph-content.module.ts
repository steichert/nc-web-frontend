import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParagraphContentComponent } from './paragraph-content.component';

@NgModule({
    declarations: [
        ParagraphContentComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ParagraphContentComponent
    ]
})
export class ParagraphContentModule { }
