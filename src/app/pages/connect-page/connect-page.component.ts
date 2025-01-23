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
    lifeGroupsBannerImageUrl = 'https://res.cloudinary.com/dbmlnkfvh/image/upload/v1737640035/static/connect/life-groups-banner_vseoci.jpg';

    selectedItem: any;

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

    public triggerItem(item: any) {
        this.selectedItem = item;

        if (this.selectedItem.id == "nc-kidz") {
            this.router.navigate(['/nc-kidz']);
        } else if (this.selectedItem.id == "missions") {
            this.router.navigate(['/missions']);
        } else if (this.selectedItem.id == "oasis") {
            window.location.href = "https://oasishaven.org/";
        } else if (this.selectedItem.id == "tks") {
            window.location.href = "https://thekingsschool.co.za/";
        } else if (this.selectedItem.id == "volunteer-signup") {
            window.location.href = this.volunteerSignUpUrl;
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
}
