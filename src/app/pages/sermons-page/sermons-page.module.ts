import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SermonsPageComponent } from './sermons-page.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/utils/filter.pipe';

@NgModule({
    declarations: [
        SermonsPageComponent,
        FilterPipe
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        SermonsPageComponent
    ]
})
export class SermonsPageModule { }
