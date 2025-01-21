import { Component, HostListener, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { VOLUNTEER_AREAS } from 'src/app/resources/connect-constants';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { ToastrService } from 'ngx-toastr';
import { LoadingService } from 'src/app/services/loading/loading.service';
declare var $ :any;

@Component({
  selector: 'app-connect-page',
  templateUrl: './connect-page.component.html',
  styleUrls: ['./connect-page.component.scss']
})
export class ConnectPageComponent implements OnInit {

    pageTitle: string = "Be Involved | New Creation Family Church";
    isLoading: Boolean = false;

    volunteerAreas = VOLUNTEER_AREAS;
    allLifeGroups: any[] = [];

    connectAreaModalImageUrl = 'https://res.cloudinary.com/dbmlnkfvh/image/upload/v1673421283/static/backgrounds/connect-background_wfqcrt.jpg';
    volunteerSignUpUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSd40pBr8mqUPQ8qIKoY5swy79yrFZOhuXkaaRlQzNb-q2I3iw/viewform';

    selectedItem: any;

    lifegroup = {
        fname: "",
        lname: "",
        message: "",
        email: ""
    };

    currentConnectImageHover: number = 0;

    constructor(private title: Title,
                private meta: Meta,
                private router: Router,
                private ncApi: ApiService,
                private toastr: ToastrService,
                private loadingService: LoadingService) {
        title.setTitle(this.pageTitle);
        this.meta.addTag({ name: 'title', content: this.pageTitle });
    }

    ngOnInit(): void {
        this.fetchLifeGroups();
    }

    public fetchLifeGroups() {
        this.loadingService.incrementLoading();

        this.ncApi.getAllLifeGroups().subscribe(
            (data: any) => {
                this.allLifeGroups = data;
                this.loadingService.decrementLoading();
            },
            (err) => {
                this.loadingService.decrementLoading();
                console.log(err.error.text);
            }
        )
    }

    public submitLifeGroup(): void {
        if (this.isValidLifeGroup()) {
            this.isLoading = true;

            let context = {
                firstName: this.lifegroup.fname,
                surname: this.lifegroup.lname,
                email: this.lifegroup.email,
                message: this.lifegroup.message
            };

            let requestBody = {
                fromAddress: environment.emailDetails.lifeGroup.fromAddress,
                toAddress: environment.emailDetails.lifeGroup.toAddress,
                replyTo: environment.emailDetails.lifeGroup.replyTo,
                subject: environment.emailDetails.lifeGroup.subject,
                template: environment.emailDetails.lifeGroup.template,
                context: context
            };

            this.ncApi.sendEmail(requestBody).subscribe(
                res => {
                    this.isLoading = false;
                    this.toastr.success('Thank you for letting us know a bit about yourself. We will be contacting you shortly.', 'Success');
                    this.clearLifeGroupContext();
                },
                err => {
                    this.isLoading = false;
                    this.toastr.error('Failed to send message. Please try again later.', 'Error');
                }
            );
        }
    }

    public toggleRole(area: any, role: any): void {
        let index = area.indexOf(role);
        if (index === -1) {
            area.push(role);
        } else {
            area.splice(index, 1);
        }
    }

    private isValidLifeGroup(): boolean {
        if (this.lifegroup.fname != '' && this.lifegroup.lname != '' && this.lifegroup.email != '' && this.lifegroup.message != '') {
            if (!this.validateEmail(this.lifegroup.email)) {
                alert("Please enter a valid email address.");
                return false;
            } else {
                return true;
            }
        } else {
            alert("Please complete the personal information section.");
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

    validateNumber(number: string): boolean {
        var regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if (regex.test(number)) {
            return true;
        } else {
            return false;
        }
    }

    public triggerItem(item: any) {
        this.selectedItem = item;

        if (this.selectedItem.label == "NC KIDZ") {
            this.router.navigate(['/nc-kidz']);
        } else if (this.selectedItem.label == "MISSIONS") {
            this.router.navigate(['/missions']);
        } else if (this.selectedItem.label == "OASIS") {
            window.location.href = "https://oasishaven.org/";
        } else if (this.selectedItem.label == "THE KINGS SCHOOL") {
            window.location.href = "https://thekingsschool.co.za/";
        } else {
            this.openConnectModal();
        }
    }

    public routeToNcKidz() {    
        this.router.navigate(['/nc-kidz']);
    }

    public toggleJoinTeamModal() {
        setTimeout(() => {
            $('#joinTeamModal').modal('show');
        }, 350);
    }

    public openConnectModal() {
        setTimeout(() => {
            $('#connectModal').modal('show');
        }, 100);
    }

    public getConnectedModalImageUrl() {
        return 'url(\'' + this.connectAreaModalImageUrl + '\')';
    }

    public clearLifeGroupContext() {
        this.lifegroup.fname = "";
        this.lifegroup.lname = "";
        this.lifegroup.email = "";
        this.lifegroup.message = "";
    }

}
