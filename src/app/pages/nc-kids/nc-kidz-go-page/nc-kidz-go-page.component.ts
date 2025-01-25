import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { imageUrls } from 'src/app/resources/image-url';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
    selector: 'app-nc-kidz-go-page',
    templateUrl: './nc-kidz-go-page.component.html',
    styleUrls: ['./nc-kidz-go-page.component.scss']
})
export class NcKidzGoPageComponent implements OnInit {

    pageTitle = 'NC Kidz Go | New Creation Family Church';
    ncGoLogoImageUrl = imageUrls.ncGoLogoImageUrl;

    constructor(private title: Title,
                private meta: Meta,
                private loadingService: LoadingService) { 
        this.title.setTitle(this.pageTitle);
        this.meta.addTag({ name: 'title', content: this.pageTitle });
    }

    ngOnInit(): void {
      this.loadingService.stopLoading();
    }

}
