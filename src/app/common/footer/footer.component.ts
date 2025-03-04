import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
    
    baseUrl: string;
    currentYear: string;

    constructor() {
        this.baseUrl = environment.baseUrl;
        this.currentYear = new Date().getFullYear().toString();
    }

    ngOnInit(): void {}
}
