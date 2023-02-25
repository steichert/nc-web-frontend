import { Component, Input, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event/event.service';
import { Event } from '../../domain/Event';
declare var $ :any;

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

    @Input('event') event: any | null;
    @Input('eventModalId') eventModalId: number | null;

    constructor(private eventService: EventService) { 
        this.eventModalId = null;
    }

    ngOnInit(): void {
        console.log(this.event);
    }

    public triggerContactUsModal() {
        $('#eventModal'+this.eventModalId).modal('hide');
        this.eventService.setShowContactUsModal(true);
    }

}
