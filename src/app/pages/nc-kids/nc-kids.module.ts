import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NcKidsHomePageComponent } from './nc-kids-home-page/nc-kids-home-page.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        NcKidsHomePageComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        NcKidsHomePageComponent
    ]
})
export class NcKidsModule { }
