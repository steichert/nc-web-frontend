import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/services/routing/routing.service';

@Component({
    selector: 'app-visitors-section',
    templateUrl: './visitors-section.component.html',
    styleUrls: ['./visitors-section.component.scss']
})
export class VisitorsSectionComponent implements OnInit {

    constructor(private routingService: RoutingService) { }

    ngOnInit(): void {
    }

    public navigateToLink(link: string): void {
        this.routingService.navigateToLink(link);
    }
}
