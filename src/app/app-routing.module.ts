import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { ConnectPageComponent } from './pages/connect-page/connect-page.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MissionsPageComponent } from './pages/missions-page/missions-page.component';
import { NcKidsHomePageComponent } from './pages/nc-kids/nc-kids-home-page/nc-kids-home-page.component';
import { SermonsPageComponent } from './pages/sermons-page/sermons-page.component';
import { VisitorsCardPageComponent } from './pages/visitors-page/visitors-card-page/visitors-card-page.component';
import { VisitorsHomePageComponent } from './pages/visitors-page/visitors-home-page/visitors-home-page.component';

const routes: Routes = [
    { path: '', component: HomePageComponent, pathMatch: 'full' },
    { path: 'about', component: AboutUsPageComponent, pathMatch: 'full' },
    { path: 'events', component: EventsPageComponent, pathMatch: 'full' },
    { path: 'sermons', component: SermonsPageComponent, pathMatch: 'full' },
    { path: 'connect', component: ConnectPageComponent, pathMatch: 'full' },
    { path: 'missions', component: MissionsPageComponent, pathMatch: 'full' },
    { 
        path: 'visitors', 
        children: [
            { path: '', component: VisitorsHomePageComponent, pathMatch: 'full' },
            { path: 'card', component: VisitorsCardPageComponent, pathMatch: 'full' },
            { path: '**', redirectTo: '/visitors', pathMatch: 'full' }
        ] 
    },
    {
        path: 'nc-kidz',
        children: [
            { path: '', component: NcKidsHomePageComponent, pathMatch: 'full' },
            { path: '**', redirectTo: '/nc-kidz', pathMatch: 'full' }
        ]
    },
    // This needs to stay at the bottom of the list
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
