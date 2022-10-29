import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventCardModule } from './common/event-card/event-card.module';
import { FooterModule } from './common/footer/footer.module';
import { LoadingSpinnerModule } from './common/loading-spinner/loading-spinner.module';
import { NavbarModule } from './common/navbar/navbar.module';
import { SocialMediaIconsModule } from './common/social-media-icons/social-media-icons.module';
import { AboutUsPageModule } from './pages/about-us-page/about-us-page.module';
import { EventsPageModule } from './pages/events-page/events-page.module';
import { HomePageModule } from './pages/home-page/home-page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ContactModalModule } from './common/contact-modal/contact-modal.module';
import { SermonsPageModule } from './pages/sermons-page/sermons-page.module';
import { ConnectPageModule } from './pages/connect-page/connect-page.module';
import { ParagraphContentModule } from './common/paragraph-content/paragraph-content.module';
import { MissionsPageModule } from './pages/missions-page/missions-page.module';
import { VisitorsPageModule } from './pages/visitors-page/visitors-page.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NavbarModule,
        FooterModule,
        LoadingSpinnerModule,
        HomePageModule,
        SocialMediaIconsModule,
        EventCardModule,
        EventsPageModule,
        AboutUsPageModule,
        ContactModalModule,
        SermonsPageModule,
        ConnectPageModule,
        ParagraphContentModule,
        MissionsPageModule,
        VisitorsPageModule,
        BrowserAnimationsModule,
        // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
        ToastrModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
