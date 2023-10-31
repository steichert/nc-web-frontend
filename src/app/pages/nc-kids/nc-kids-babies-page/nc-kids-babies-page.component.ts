import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { imageUrls } from 'src/app/resources/image-url';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
  selector: 'app-nc-kids-babies-page',
  templateUrl: './nc-kids-babies-page.component.html',
  styleUrls: ['./nc-kids-babies-page.component.scss']
})
export class NcKidsBabiesPageComponent implements OnInit {

    pageTitle = 'NC Babies | New Creation Family Church';
    ncBabiesLogoImageUrl = imageUrls.ncBabiesLogoImageUrl;

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
