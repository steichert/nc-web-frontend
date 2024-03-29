import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { imageUrls } from 'src/app/resources/image-url';
import { VALUES, STATEMENT_OF_FAITH, FAQS, GOVERNMENTAL_ELDERSHIP, PASTORAL_LEADERSHIP, CHURCH_STAFF } from 'src/app/resources/about-us-screen-constants';
import { LoadingService } from 'src/app/services/loading/loading.service';

@Component({
    selector: 'app-about-us-page',
    templateUrl: './about-us-page.component.html',
    styleUrls: ['./about-us-page.component.scss']
})
export class AboutUsPageComponent implements OnInit {

    pageTitle = 'About Us | New Creation Family Church';

    values = VALUES;
    statementsOfFaith = STATEMENT_OF_FAITH;
    faqs = FAQS;
    governmentalEldership = GOVERNMENTAL_ELDERSHIP;
    pastoralLeadership = PASTORAL_LEADERSHIP;
    churchStaff = CHURCH_STAFF;

    navLogoUrl = imageUrls.smallNavLogoUrl;
    leadershipRonAndAnnImageUrl = imageUrls.leadershipRonAndAnnImageUrl;
    leadershipGrantAndLizImageUrl = imageUrls.leadershipGrantAndLizImageUrl;
    leadershipPaulAndMilaineImageUrl = imageUrls.leadershipPaulAndMilaineImageUrl;

    constructor(private title: Title,
                private meta: Meta,
                private loadingService: LoadingService) { 
        this.title.setTitle(this.pageTitle);
    }

    ngOnInit(): void {
        this.loadingService.stopLoading();
        this.meta.addTag({ name: 'title', content: this.pageTitle });
    }

    public rotateValueChevronArrow(currentValue: any) {
        this.values.forEach(value => {
            if (value != currentValue) {
                value.open = false;
            }
        });

        currentValue.open = !currentValue.open;
    }

    public rotateStatementChevronArrow(currentStatement: any) {
        this.statementsOfFaith.forEach(statement => {
            if (currentStatement != statement) {
                statement.open = false;
            }
        });

        currentStatement.open = !currentStatement.open;
    }

    public rotateFAQChevronArrow(currentFaq: any) {
        this.faqs.forEach(faq => {
            if (currentFaq != faq) {
                faq.open = false;
            }
        });

        currentFaq.open = !currentFaq.open;
    }

}
