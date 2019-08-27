import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './components/news/news.component';
import { NewsViewComponent } from './components/news/news-view/news-view.component';
import { VaktijeComponent } from './components/vaktije/vaktije.component';
import { HomeMenuComponent } from './components/home-menu/home-menu.component';
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
            data: { animation: 'News' }
        },
        {
            path: 'news/:index',
            component: NewsViewComponent
        },
        // * HOME
        {
            path: 'home',
            component: HomeMenuComponent,
            data: { animation: 'Home' }
        },
        {
            path: 'home/vaktije',
            component: VaktijeComponent
        },
        {
            path: 'home/calendar',
            component: CalendarComponent
        },
        {
            path: 'home/contact',
            component: ContactComponent
        }
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