import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomePageComponent } from './admin-home-page.component';

@NgModule({
    declarations: [
        AdminHomePageComponent
    ],
    imports: [
        CommonModule
    ], 
    exports: [
        AdminHomePageComponent
    ]
})
export class AdminHomePageModule { }
