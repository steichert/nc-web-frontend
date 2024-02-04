import { Component, HostListener, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { 
    GET_CONNECTED_MINISTRIES, 
    GET_CONNECTED_SERVING,
    AREAS_OF_MINISTRY, 
    AREAS_OF_SERVICE 
} from 'src/app/resources/connect-constants';
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

    pageTitle: string = "Connect | New Creation Family Church";
    isLoading: Boolean = false;

    getConnectedMinistries = GET_CONNECTED_MINISTRIES;
    getConnectedServing = GET_CONNECTED_SERVING;
    allAreasOfService = AREAS_OF_SERVICE;
    allAreasOfMinistry = AREAS_OF_MINISTRY;
    allLifeGroups: any[] = [];

    connectAreaModalImageUrl = 'https://res.cloudinary.com/dbmlnkfvh/image/upload/v1673421283/static/backgrounds/connect-background_wfqcrt.jpg';

    firstConnect = [];
    secondConnect = [];
    selectedConnect: any;
    selectedAreas: any[] = [];
    
    joinTeam = {
        fname: "",
        lname: "",
        number: "",
        email: "",
        areas: [],
    };

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
    
    public submitJoinTeam(): void {
        if (this.isValidJoinTeam()) {
            this.isLoading = true;

            let context = {
                firstName: this.joinTeam.fname,
                surname: this.joinTeam.lname,
                phoneNumber: this.joinTeam.number,
                email: this.joinTeam.email,
                areas: this.convertToStringList(this.joinTeam.areas),
            };

            let requestBody = {
                fromAddress: environment.emailDetails.joinTeam.fromAddress,
                toAddress: environment.emailDetails.joinTeam.toAddress,
                replyTo: environment.emailDetails.joinTeam.replyTo,
                subject: environment.emailDetails.joinTeam.subject,
                template: environment.emailDetails.joinTeam.template,
                context: context
            };
            
            this.ncApi.sendEmail(requestBody).subscribe(
                res => {
                    this.isLoading = false;
                    this.toastr.success('Your message has been sent successfully', 'Success');
                    this.clearJoinTeamContext();
                },
                err => {
                    this.isLoading = false;
                    this.toastr.error('Failed to send message. Please try again later.', 'Error');
                }
            );
        }
    }

    public convertToStringList(areas: any[]) {
        let output = '';

        areas.forEach(area => {
            if (output == '') {
                output += area.name;    
            } else {
                output += ', ' + area.name;
            }
        });

        return output;
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

    private isValidJoinTeam(): boolean {
        if (this.joinTeam.fname != '' && this.joinTeam.lname != '' && this.joinTeam.number != '' && this.joinTeam.email != '') {
            if (this.joinTeam.areas.length != 0) {
                    if (!this.validateEmail(this.joinTeam.email)) {
                        alert("Please enter a valid email address.");
                        return false;
                    } else if (!this.validateNumber(this.joinTeam.number)) {
                        alert("Please enter a valid phone number");
                        return false;
                    } else {
                        return true;
                    }
                } else {
                    alert("Please indicate at least one area of interest.");
                    return false;
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

    public triggerConnectItem(connect: any) {
        this.selectedConnect = connect;

        if (this.selectedConnect.label == "NC KIDZ") {
            this.router.navigate(['/nc-kidz']);
        } else if (this.selectedConnect.label == "MISSIONS") {
            this.router.navigate(['/missions']);
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

    public setSelectedAreas(areas: any[]) {
        this.selectedAreas = areas;
    }

    public getConnectedModalImageUrl() {
        return 'url(\'' + this.connectAreaModalImageUrl + '\')';
    }

    public clearJoinTeamContext() {
        this.joinTeam.fname = "";
        this.joinTeam.lname = "";
        this.joinTeam.number = "";
        this.joinTeam.email = "";
        this.joinTeam.areas = [];
    }

    public clearLifeGroupContext() {
        this.lifegroup.fname = "";
        this.lifegroup.lname = "";
        this.lifegroup.email = "";
        this.lifegroup.message = "";
    }

}
