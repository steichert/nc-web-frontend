import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUsPageComponent } from './about-us-page.component';
import { Meta } from '@angular/platform-browser';

@NgModule({
    declarations: [
        AboutUsPageComponent
    ],
    imports: [
        CommonModule
    ],
    providers: [
        Meta
    ],
    exports: [
        AboutUsPageComponent
    ]
})
export class AboutUsPageModule { }
