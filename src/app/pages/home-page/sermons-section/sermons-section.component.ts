import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/services/routing/routing.service';

@Component({
    selector: 'app-sermons-section',
    templateUrl: './sermons-section.component.html',
    styleUrls: ['./sermons-section.component.scss']
})
export class SermonsSectionComponent implements OnInit {

    constructor(private routingService: RoutingService) { }

    ngOnInit(): void {
    }

    public navigateToLink(link: string): void {
        this.routingService.navigateToLink(link);
    }
}
