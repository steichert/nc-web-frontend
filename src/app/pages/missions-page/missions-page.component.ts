import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { imageUrls } from 'src/app/resources/image-url';
import { INTERNATIONAL_PROJECTS, LOCAL_PROJECTS, TRAINING_PROGRAMS } from 'src/app/resources/missions-screen-constants';
import { LoadingService } from 'src/app/services/loading/loading.service';
declare var $ :any;

@Component({
    selector: 'app-missions-page',
    templateUrl: './missions-page.component.html',
    styleUrls: ['./missions-page.component.scss']
})
export class MissionsPageComponent implements OnInit {

    pageTitle = 'Missions | New Creation Family Church';

    public localProjects: any[] = LOCAL_PROJECTS;
    public internationalProjects: any[] = INTERNATIONAL_PROJECTS;
    public trainingPrograms: any[] = TRAINING_PROGRAMS;

    public selectedMissionsArea: any;

    public missionsBannerImageUrl = imageUrls.missionsBannerImageUrl;
    public synergyInMissionsUrl = imageUrls.synergyInMissionsUrl;

    constructor(private title: Title,
                private meta: Meta,
                private router: Router,
                private loadingService: LoadingService) {
        this.title.setTitle(this.pageTitle);
        this.meta.addTag({ name: 'title', content: this.pageTitle });
    }

    ngOnInit(): void {
        this.loadingService.stopLoading();
    }

    selectMissionsArea(project: any) {
        this.selectedMissionsArea = project;

        setTimeout(() => {
            $('#missionsModal').modal('show');
        }, 100);
    }

    isLastProjectItem(projects: any, index: number) {
        return this.isOddNumberOfProjects(projects) && index == projects.length -1;
    }

    isOddNumberOfProjects(projects: any) {
        return projects.length % 2 == 0;
    }

    public getMissionsBannerImageUrl() {
        return 'url(\'' + this.missionsBannerImageUrl + '\')';
    }

    public hasTrainingEvents() {
        return this.trainingPrograms.length > 0;
    }
}
