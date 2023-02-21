import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api/api.service';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
    selector: 'app-sermon-view-page',
    templateUrl: './sermon-view-page.component.html',
    styleUrls: ['./sermon-view-page.component.scss']
})
export class SermonViewPageComponent implements OnInit {
    constructor(private title: Title,
                private loadingService: LoadingService,
                private route: ActivatedRoute,
                private router: Router,
                private api: ApiService) {
        this.activeSermon =  {
            sermonTitle: 'How Obedience is Significant to Missions',
            sermonSpeaker: 'Sharon Stephen',
            sermonDate: '2022-02-19',
            sermonAudioUrl: 'https://newcreation.co.za/media/wp-content/uploads/2023/02/Your-Turnaround-Paul-Dennison.mp3',
            sermonYoutubeUrl: 'https://www.youtube.com/embed/k0n5SoEJf_Q',
            sermonSeriesSeoUrl: 'mission-sunday',
            sermonSeriesName: 'Mission Sunday'
        };
    }

    activeSermon: any;

    ngOnInit(): void {
        const routeParams = this.route.snapshot.paramMap;
        const sermonTitle = routeParams.get('sermonTitle');
        this.getSermonData(sermonTitle);
    }

    public getSermonData(sermonTitle: string | null) {
        this.loadingService.startLoading();
        
        if (sermonTitle == null) {
            this.loadingService.stopLoading();
            this.router.navigateByUrl('/series');
            return;
        }

        this.title.setTitle(`${this.activeSermon.sermonTitle} | New Creation Family Church`);

        // TODO: Call the api to fetch the sermon details
    }

    public navigateTotSermonSeries(sermonSeriesSeoUrl: string) {
        this.router.navigateByUrl(`/series/${sermonSeriesSeoUrl}`);
    }
}
