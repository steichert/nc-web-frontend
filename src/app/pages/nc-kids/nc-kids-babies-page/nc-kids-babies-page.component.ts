import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { imageUrls } from 'src/app/resources/image-url';

@Component({
  selector: 'app-nc-kids-babies-page',
  templateUrl: './nc-kids-babies-page.component.html',
  styleUrls: ['./nc-kids-babies-page.component.scss']
})
export class NcKidsBabiesPageComponent implements OnInit {

    pageTitle = 'NC Babies | New Creation Family Church';
    ncBabiesLogoImageUrl = imageUrls.ncBabiesLogoImageUrl;

    constructor(private title: Title) {
        this.title.setTitle(this.pageTitle);
    }

    ngOnInit(): void {
    }

}
