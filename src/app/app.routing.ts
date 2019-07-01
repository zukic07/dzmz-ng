import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './components/visitor/news/news.component';
import { HomeComponent } from './components/visitor/home/home.component';
import { NewsViewComponent } from './components/visitor/news/news-view/news-view.component';
import { VaktijeComponent } from './components/vaktije/vaktije.component';
import { HomeMenuComponent } from './components/visitor/home/home-menu/home-menu.component';
import { VisitorComponent } from './components/visitor/visitor.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './components/login/login.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    // * VISITOR
    { path: '', component: VisitorComponent, children: [
        // * NEWS
        {
            path: 'news',
            component: NewsComponent,
        },
        {
            path: 'news/:index',
            component: NewsViewComponent
        },
        // * HOME
        {
            path: 'home',
            component: HomeComponent,
            children: [
                {
                    path: '',
                    component: HomeMenuComponent
                },
                {
                    path: 'vaktije',
                    component: VaktijeComponent
                },
                {
                    path: 'calendar',
                    component: CalendarComponent
                },
                {
                    path: 'contact',
                    component: ContactComponent
                }
            ]
        },
    ]},
    // * MODULES (dependent)
    { path: 'cockpit', loadChildren: './modules/cockpit/cockpit.module#CockpitModule', canActivate: [AuthService] },
    { path: 'login', component: LoginComponent }
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: true})
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}