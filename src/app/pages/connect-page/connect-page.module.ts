import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectPageComponent } from './connect-page.component';
import { FormsModule } from '@angular/forms';
import { ParagraphContentModule } from 'src/app/common/paragraph-content/paragraph-content.module';

@NgModule({
    declarations: [
        ConnectPageComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ParagraphContentModule
    ],
    exports: [
        ConnectPageComponent
    ]
})
export class ConnectPageModule { }
