import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SermonSeriesHomePageComponent } from './sermon-series-home-page/sermon-series-home-page.component';
import { SermonSeriesViewPageComponent } from './sermon-series-view-page/sermon-series-view-page.component';
import { SermonViewPageComponent } from './sermon-view-page/sermon-view-page.component';
import { SafePipe } from 'src/app/utils/safe.pipe';

@NgModule({
    declarations: [
        SermonSeriesHomePageComponent,
        SermonSeriesViewPageComponent,
        SermonViewPageComponent,
        SafePipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        SermonSeriesHomePageComponent,
        SermonSeriesViewPageComponent,
        SermonViewPageComponent
    ]
})
export class SermonSeriesPageModule { }
