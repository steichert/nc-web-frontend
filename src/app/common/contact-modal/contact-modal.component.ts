import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event/event.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { ApiService } from 'src/app/services/api/api.service';
declare var $ :any;

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss']
})
export class ContactModalComponent implements OnInit {

    contactForm = {
        firstName: '',
        surname: '',
        email: '',
        message: '',
    }

    isLoading: Boolean = false;

    constructor(private ncApi: ApiService,
                private toastr: ToastrService,
                private eventService: EventService) { }

    ngOnInit(): void {
        this.listenContactUsModalChange();
    }

    public sendEmailMessage(): void {
        if (this.eventService.isValid(this.contactForm)) {
            this.isLoading = true;

            let context = {
                firstName: this.contactForm.firstName,
                surname: this.contactForm.surname,
                email: this.contactForm.email,
                message: this.contactForm.message,
            };

            let requestBody = {
                fromAddress: environment.emailDetails.contactUs.fromAddress,
                toAddress: environment.emailDetails.contactUs.toAddress,
                replyTo: environment.emailDetails.contactUs.replyTo,
                subject: environment.emailDetails.contactUs.subject,
                template: environment.emailDetails.contactUs.template,
                context: context
            };
            
            this.ncApi.sendEmail(requestBody).subscribe(
                res => {
                    this.isLoading = false;
                    this.toastr.success('Your message has been sent successfully', 'Success');
                },
                err => {
                    this.isLoading = false;
                    this.toastr.error('Failed to send message. Please try again later.', 'Error');
                }
            );
        }
    }

    public listenContactUsModalChange() {
        this.eventService.showContactUsModalChange.subscribe(
            (showModal) => {
                this.toggleContactUsModal(showModal);
            }
        );
    }

    public toggleContactUsModal(showModal: Boolean) {
        setTimeout(() => {
            if (showModal) {
                $('#getInTouchModal').modal('show');
            }
        }, 350);
    }

}
