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
            component: VisitorComponent,
            data: { animation: 'Home' }
        },
        {
            path: 'home/vaktije',
            component: VaktijeComponent,
            data: { animation: 'HomeSub' }
        },
        {
            path: 'home/calendar',
            component: CalendarComponent,
            data: { animation: 'HomeSub' }
        },
        {
            path: 'home/contact',
            component: ContactComponent,
            data: { animation: 'HomeSub' }
        }
    ]},
    // * MODULES (dependent)
    { path: 'cockpit', loadChildren: () => import('./modules/cockpit/cockpit.module').then(m => m.CockpitModule), canActivate: [AuthService] },
    { path: 'login', component: LoginComponent }
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash: true})
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}