import { Component, OnInit, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Child } from 'src/app/domain/Child';
import { imageUrls } from 'src/app/resources/image-url';
import { ApiService } from 'src/app/services/api/api.service';
import { NavbarService } from 'src/app/services/navbar/navbar.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-nc-kids-home-page',
    templateUrl: './nc-kids-home-page.component.html',
    styleUrls: ['./nc-kids-home-page.component.scss']
})
export class NcKidsHomePageComponent implements OnInit {

    constructor(private ncApi: ApiService, 
                private title: Title,
                private router: Router,
                private navbarService: NavbarService,
                private toastr: ToastrService) {
        this.title.setTitle(this.pageTitle);
    }

    pageTitle = 'NC Kidz | New Creation Family Church';

    ncKidsHomeBannerImageUrl = imageUrls.ncKidsHomeBannerImageUrl;
    ncBabiesLogoImageUrl = imageUrls.ncBabiesLogoImageUrl;
    ncGlowKidzLogoImageUrl = imageUrls.ncGlowKidzLogoImageUrl;
    ncFourTwelveLogoImageUrl = imageUrls.ncFourTwelveLogoImageUrl;
    ncJamLogoImageUrl = imageUrls.ncJamLogoImageUrl;
    ncSonKidzLogoImageUrl = imageUrls.ncSonKidzLogoImageUrl;
    ncKidzSundayLogoImageUrl = imageUrls.ncKidzSundayLogoImageUrl;

    @ViewChild('dobday') dobday: any;
    @ViewChild('dobmonth') dobmonth: any;
    @ViewChild('dobyear') dobyear: any; 
    @ViewChild('ministry1') ministry1: any;
    @ViewChild('ministry2') ministry2: any;
    @ViewChild('ministry3') ministry3: any;
    @ViewChild('ministry4') ministry4: any;
    @ViewChild('ministry5') ministry5: any;

    child: Child = new Child();
    email: string = "";
    ministries: string[] = [];
    babiesMinistry: string = "";
    sonkidzMinistry: string = "";
    glowkidzMinistry: string = "";
    sundayMinistry: string = "";
    fridayMinistry: string = "";
    whatsApp: number = 0;

    // date of birth object
    childDOB = {
        day: "",
        month: "",
        year: ""
    };

    // date of birth picker arrays
    maxYear: number = -1;
    minYear: number = -1;
    days: string[] = [];
    months: string[] = [];
    years: string[] = [];
    monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    errors: string[] = [];

    isLoading: Boolean = false;

    ngOnInit() {
        this.navbarService.setCurrentURL(this.router.url);
        this.getYearRanges();
        this.scrollToTop();    
        this.populateDatepicker();
    }

    getYearRanges(): void {
        let currentYear = (new Date()).getFullYear();
        this.maxYear = currentYear;
        this.minYear=  currentYear - 20;
        }

    public submitForm(): void {
        if (this.validateForm()) {
            this.isLoading = true;

            this.ministries = [];
            if (this.babiesMinistry != "") this.ministries.push(this.ministry1.nativeElement.value);
            if (this.sonkidzMinistry != "") this.ministries.push(this.ministry2.nativeElement.value);
            if (this.glowkidzMinistry != "") this.ministries.push(this.ministry3.nativeElement.value);
            if (this.sundayMinistry != "") this.ministries.push(this.ministry4.nativeElement.value); 
            if (this.fridayMinistry != "") this.ministries.push(this.ministry5.nativeElement.value);      

            this.child.dateOfBirth = this.childDOB.day+"-"+this.childDOB.month+"-"+this.childDOB.year;
            this.whatsApp = +this.whatsApp;

            let registrationObject = {
                childFirstName: this.child.firstName,
                childSurname: this.child.surname,
                motherFirstName: this.child.motherFirstName,
                fatherFirstName: this.child.fatherFirstName,
                dateOfBirth: this.child.dateOfBirth,
                email: this.email,
                motherContactNumber: this.child.motherContactNumber,
                fatherContactNumber: this.child.fatherContactNumber,
                ministries: this.ministries,
                whatsApp: this.whatsApp == 1 ? "Yes" : "No"
            }

            let requestBody = {
                fromAddress: environment.emailDetails.ncKidzRegistration.fromAddress,
                toAddress: environment.emailDetails.ncKidzRegistration.toAddress,
                replyTo: environment.emailDetails.ncKidzRegistration.replyTo,
                subject: environment.emailDetails.ncKidzRegistration.subject,
                template: environment.emailDetails.ncKidzRegistration.template,
                context: registrationObject
            };

            this.ncApi.sendEmail(requestBody).subscribe(
                (res) => {
                    this.isLoading = false;
                    this.toastr.success("Thank you for registering with us.", "Success");
                    
                    let closeModalButton = document.getElementById("close-modal-btn");
                    if (closeModalButton != null) {
                        closeModalButton.click();
                    }
                },
                (err) => {
                    this.isLoading = false;
                    this.toastr.error('Something went wrong! Please try again later.', 'Error');
                } 
            );
        }
    }

    public scrollToTop() {
        window.scrollTo(0,0);
    }

    // populate the date picker for date of birth
    private populateDatepicker() {
        var index = 0;
        for (var i = 1 ; i <= 31 ; i++) {
            if (i < 10) this.days[index++] = '0'+i;
            else this.days[index++] = i+'';
        }

        for (var i = 0 ; i < 12 ; i++) {
            this.months[i] = this.monthNames[i];
        }

        index = 0;
        for (var i = this.minYear ; i <= this.maxYear ; i++) {
            this.years[index++] = i+'';
        }
    }

    // verify the date of birth by changing lists dynamically
    public verifyDOB() {
        let index = 0;
        if (+this.childDOB.day == 29) {
            if (this.childDOB.month == '02') {
                this.years = [];
                for (let i = this.minYear ; i <= this.maxYear ; i++) {
                    if ((i % 400 == 0) || ((i % 4 == 0) && (i % 100 != 0))) {
                        this.years[index++] = i+'';
                    }
                }
                if (!((+this.childDOB.year % 400 == 0) || ((+this.childDOB.year % 4 == 0) && (+this.childDOB.year % 100 != 0))))
                    this.childDOB.year = '';
            }
            else {
                this.years = [];
                for (let i = this.minYear ; i <= this.maxYear ; i++) {
                this.years[index++] = i+'';
                }
            }
        }
        else {
            this.years = [];
            index = 0;
            for (var i = this.minYear ; i <= this.maxYear ; i++) {
                this.years[index++] = i+'';
            }
        }

        index = 0;
        if (this.childDOB.month == '04' || this.childDOB.month == '06' || this.childDOB.month == '09' || this.childDOB.month == '11') {
            this.days = [];
            for (let i = 1 ; i <= 30 ; i++) {
                if (i < 10) this.days[index++] = '0'+i;
                else this.days[index++] = i+'';
            }
        }
        else if (this.childDOB.month == '02') {
            this.days = [];
            for (let i = 1 ; i <= 29 ; i++) {
                if (i < 10) this.days[index++] = '0'+i;
                else this.days[index++] = i+'';
            }
        }
        else {
            this.days = [];
            for (let i = 1 ; i <= 31 ; i++) {
                if (i < 10) this.days[index++] = '0'+i;
                else this.days[index++] = i+'';
            }
        }
    }

    // return index value of month
    public getMonthValue(i: number) {
        if (i < 10) return '0'+(i+1);
        else return (i+1);
    }

    private validateForm(): boolean {
        let valid = true;
        this.errors = [];

        if (this.child.firstName == "") {
            valid = false;
            this.errors.push("Please enter the child's name");
        } 

        if (this.child.surname == "") {
            valid = false;
            this.errors.push("Please enter the child's surname")
        } 

        if (this.child.motherFirstName == "") {
            valid = false;
            this.errors.push("Please enter the mother's name");
        } 

        if (this.dobday.nativeElement.value == "" || this.dobmonth.nativeElement.value == "" || this.dobyear.nativeElement.value == "") {
            valid = false;
            this.errors.push("Please enter a valid date of birth");
        }

        if (this.child.motherContactNumber == "") {
            valid = false;
            this.errors.push("Please enter the mother's contact");
        } 

        if (this.babiesMinistry == "" && this.sonkidzMinistry == "" && this.glowkidzMinistry == "" && this.sundayMinistry == "" && this.fridayMinistry == "") {
            valid = false;
            this.errors.push("Please select the type of ministry");
        } 

        if (this.whatsApp == null) {
            valid = false;
            this.errors.push("Please select if you would like to be added to the WhatsApp group");
        } 

        return valid;
    }

    public getNcHomeBannerImageUrl() {
        return 'url(\'' + this.ncKidsHomeBannerImageUrl + '\')';
    }

    public navigateToLink(link: string) {
        this.router.navigateByUrl(link);
    }

}