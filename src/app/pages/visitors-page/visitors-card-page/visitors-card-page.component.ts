import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Child } from 'src/app/domain/Child';
import { Visitor } from 'src/app/domain/Visitor';
import { imageUrls } from 'src/app/resources/image-url';
import { ApiService } from 'src/app/services/api/api.service';
import { LoadingService } from 'src/app/services/loading/loading.service';
import { NavbarService } from 'src/app/services/navbar/navbar.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-visitors-card-page',
  templateUrl: './visitors-card-page.component.html',
  styleUrls: ['./visitors-card-page.component.scss']
})
export class VisitorsCardPageComponent implements OnInit {

    pageTitle = "Visitors | New Creation Family Church";

    visitorDetails: Visitor;

    areasOfInterest = ["Life Groups", "Kids Ministry", "The King's School", "Membership", "Courses", "Other"];
    isOtherArea: Boolean = false;

    isValidForm: Boolean = true;

    visitorCardBannerImageUrl = imageUrls.visitorCardBannerImageUrl;

    isLoading: Boolean = false;

    constructor(private ncApi: ApiService, 
                private meta: Meta,
                private navbarService: NavbarService, 
                private router: Router,
                private toastr: ToastrService,
                private title: Title,
                private loadingService: LoadingService) {
        this.title.setTitle(this.pageTitle);             
        this.meta.addTag({ name: 'title', content: this.pageTitle });
        this.visitorDetails = new Visitor();
    }

    ngOnInit() {
        this.navbarService.setCurrentURL(this.router.url);
        this.loadingService.stopLoading();
    }

    public triggerSubmitForm() {
        this.isLoading = true;

        if (this.verifyFormDetails()) {
            let context = {
                title: this.visitorDetails.title,
                firstName: this.visitorDetails.firstName,
                surname: this.visitorDetails.surname,
                email: this.visitorDetails.email,
                contactNumber: this.visitorDetails.contactNumber,
                spouseName: this.visitorDetails.spouseName,
                children: this.visitorDetails.children,
                moreInfoAreas: this.visitorDetails.moreInfoAreas,
                otherArea: this.visitorDetails.otherArea
            };

            let requestBody = {
                fromAddress: environment.emailDetails.visitor.fromAddress,
                toAddress: environment.emailDetails.visitor.toAddress,
                replyTo: environment.emailDetails.visitor.replyTo,
                subject: environment.emailDetails.visitor.subject,
                template: environment.emailDetails.visitor.template,
                context: context
            };
            
            this.ncApi.sendEmail(requestBody).subscribe(
                res => {
                    this.isLoading = false;
                    this.toastr.success('Thank you for letting us know a bit about yourself. We will be contacting you shortly.', 'Success');
                },
                err => {
                    this.isLoading = false;
                    this.toastr.error('Failed to send message. Please try again later.', 'Error');
                }
            );
        } else {
            this.scrollToTop();
            this.isLoading = false;
        }
    }

    public verifyFormDetails() {
        this.isValidForm = true;

        if (this.visitorDetails.firstName == null || 
            this.visitorDetails.firstName == '' ||
            this.visitorDetails.surname == null ||
            this.visitorDetails.surname == '' ||
            this.visitorDetails.contactNumber == null ||
            this.visitorDetails.contactNumber == '') {
            this.isValidForm = false;
        }

        return this.isValidForm;
    }

    public addChild() {
        var child = new Child();

        this.visitorDetails.children.push(child);
    }

    public removeChild(index: number) {
        this.visitorDetails.children.splice(index, 1);
    }

    public toggleAreaOfInterest(area: any) {
        if (this.visitorDetails.moreInfoAreas.includes(area)) {
            let index = this.visitorDetails.moreInfoAreas.indexOf(area);
            if (index != -1) {
                this.visitorDetails.moreInfoAreas.splice(index, 1);
            }
        } else {
            this.visitorDetails.moreInfoAreas.push(area);
        }

        if (area == 'Other') {
            this.isOtherArea = !this.isOtherArea;
        }
    }

    public getVisitorBannerImageUrl() {
        return 'url(\'' + this.visitorCardBannerImageUrl + '\')';
    }

    public scrollToTop() {
        window.scroll({
            top: 400,
            behavior: 'smooth'
        });
    }

}
