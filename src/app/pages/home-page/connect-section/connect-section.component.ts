import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/services/routing/routing.service';

@Component({
    selector: 'app-connect-section',
    templateUrl: './connect-section.component.html',
    styleUrls: ['./connect-section.component.scss']
})
export class ConnectSectionComponent implements OnInit {

    constructor(private routingService: RoutingService) { }

    ngOnInit(): void {
    }

    public navigateToLink(link: string): void {
        this.routingService.navigateToLink(link);
    }
}
