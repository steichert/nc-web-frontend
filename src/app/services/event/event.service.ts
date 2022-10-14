import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
    private showContactUsModal: Boolean;
    public showContactUsModalChange: Subject<Boolean> = new Subject<Boolean>();

    constructor() { 
        this.showContactUsModal = false;
    }

    getShowContactUsModal() {
        return this.showContactUsModal;
    }

    setShowContactUsModal(showModal: Boolean) {
        this.showContactUsModal = showModal;
        this.showContactUsModalChange.next(this.showContactUsModal);
    }
}
