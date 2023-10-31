import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SermonsPageComponent } from './sermons-page.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/utils/filter.pipe';
import { Meta } from '@angular/platform-browser';

@NgModule({
    declarations: [
        SermonsPageComponent,
        FilterPipe
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [
        Meta
    ],
    exports: [
        SermonsPageComponent
    ]
})
export class SermonsPageModule { }
