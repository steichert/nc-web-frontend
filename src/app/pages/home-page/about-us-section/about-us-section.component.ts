import { Component, OnInit } from '@angular/core';
import { RoutingService } from 'src/app/services/routing/routing.service';

@Component({
  selector: 'app-about-us-section',
  templateUrl: './about-us-section.component.html',
  styleUrls: ['./about-us-section.component.scss']
})
export class AboutUsSectionComponent implements OnInit {

    constructor(private routingService: RoutingService) { }

    ngOnInit(): void {
    }

    public navigateToLink(link: string): void {
        this.routingService.navigateToLink(link);
    }
}
