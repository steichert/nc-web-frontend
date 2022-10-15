import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SermonsPageComponent } from './pages/sermons-page/sermons-page.component';

const routes: Routes = [
    { path: '', component: HomePageComponent, pathMatch: 'full' },
    { path: 'about', component: AboutUsPageComponent, pathMatch: 'full' },
    { path: 'events', component: EventsPageComponent, pathMatch: 'full' },
    { path: 'sermons', component: SermonsPageComponent, pathMatch: 'full' },
    // This needs to stay at the bottom of the list
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
