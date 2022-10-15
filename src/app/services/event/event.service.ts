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

    public isValid(contactForm: any): boolean {
        if (contactForm.firstName != '' && 
            contactForm.surname != '' && 
            contactForm.email != '' && 
            contactForm.message) {
            if (!this.validateEmail(contactForm.email)) {
                alert('Please enter a valid email address.');
                return false;
            }
            return true;
        }
        else {
            alert('Please complete all sections of the form below.');
            return false;
        }
    }

    public validateEmail(email: string): boolean {
        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regex.test(email)) {
            return true;
        } else {
            return false;
        }
    }
}
