import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './common/footer/footer.module';
import { LoadingSpinnerModule } from './common/loading-spinner/loading-spinner.module';
import { NavbarModule } from './common/navbar/navbar.module';
import { HomePageModule } from './pages/home-page/home-page.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NavbarModule,
        FooterModule,
        LoadingSpinnerModule,
        HomePageModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
