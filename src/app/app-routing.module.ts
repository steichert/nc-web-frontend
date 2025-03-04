import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsPageComponent } from './pages/about-us-page/about-us-page.component';
import { ConnectPageComponent } from './pages/connect-page/connect-page.component';
import { EventsPageComponent } from './pages/events-page/events-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MissionsPageComponent } from './pages/missions-page/missions-page.component';
import { NcKidsBabiesPageComponent } from './pages/nc-kids/nc-kids-babies-page/nc-kids-babies-page.component';
import { NcKidsFourTwelvePageComponent } from './pages/nc-kids/nc-kids-four-twelve-page/nc-kids-four-twelve-page.component';
import { NcKidsGlowkidsPageComponent } from './pages/nc-kids/nc-kids-glowkids-page/nc-kids-glowkids-page.component';
import { NcKidsHomePageComponent } from './pages/nc-kids/nc-kids-home-page/nc-kids-home-page.component';
import { NcKidsJamPageComponent } from './pages/nc-kids/nc-kids-jam-page/nc-kids-jam-page.component';
import { NcKidsSonkidsPageComponent } from './pages/nc-kids/nc-kids-sonkids-page/nc-kids-sonkids-page.component';
import { NcKidsSundayPageComponent } from './pages/nc-kids/nc-kids-sunday-page/nc-kids-sunday-page.component';
import { NcKidzGoPageComponent } from './pages/nc-kids/nc-kidz-go-page/nc-kidz-go-page.component';
import { SermonSeriesHomePageComponent } from './pages/sermon-series-page/sermon-series-home-page/sermon-series-home-page.component';
import { SermonSeriesViewPageComponent } from './pages/sermon-series-page/sermon-series-view-page/sermon-series-view-page.component';
import { SermonViewPageComponent } from './pages/sermon-series-page/sermon-view-page/sermon-view-page.component';
import { SermonsPageComponent } from './pages/sermons-page/sermons-page.component';
import { VisitorsCardPageComponent } from './pages/visitors-page/visitors-card-page/visitors-card-page.component';
import { VisitorsHomePageComponent } from './pages/visitors-page/visitors-home-page/visitors-home-page.component';

const routes: Routes = [
    { path: '', component: HomePageComponent, pathMatch: 'full' },
    { path: 'about', component: AboutUsPageComponent, pathMatch: 'full' },
    { path: 'events', component: EventsPageComponent, pathMatch: 'full' },
    { path: 'be-involved', component: ConnectPageComponent, pathMatch: 'full' },
    { path: 'missions', component: MissionsPageComponent, pathMatch: 'full' },
    { path: 'services', component: HomePageComponent, data: { page_section: 'services' } },
    { path: 'giving', component: HomePageComponent, data: { page_section: 'giving' } },
    { path: 'contact', component: HomePageComponent, data: { page_section: 'contact' } },
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
            { path: 'babies', component: NcKidsBabiesPageComponent, pathMatch: 'full' },
            { path: 'sonkidz', component: NcKidsSonkidsPageComponent, pathMatch: 'full' },
            { path: 'glowkidz', component: NcKidsGlowkidsPageComponent, pathMatch: 'full' },
            { path: 'sunday', component: NcKidsSundayPageComponent, pathMatch: 'full' },
            { path: 'jam', component: NcKidsJamPageComponent, pathMatch: 'full' },
            { path: 'go', component: NcKidzGoPageComponent, pathMatch: 'full' },
            { path: '**', redirectTo: '/nc-kidz', pathMatch: 'full' }
        ]
    },
    {
        path: 'sermons',
        children: [
            { path: '', component: SermonSeriesHomePageComponent, pathMatch: 'full' },
            { path: 'series/:seriesUrl', component: SermonSeriesViewPageComponent, pathMatch: 'full' },
            { path: 'page/:pageNumber', component: SermonsPageComponent, pathMatch: 'full' },
            { path: '**', redirectTo: '/series', pathMatch: 'full' }
        ]
    },
    {
        path: 'sermon',
        children: [
            { path: ':sermonUrl', component: SermonViewPageComponent, pathMatch: 'full' },
            { path: '**', redirectTo: '/series', pathMatch: 'full' }
        ]
    },
    // This needs to stay at the bottom of the list
    { path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
