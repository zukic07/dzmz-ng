import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { NewsViewComponent } from './components/news/news-view/news-view.component';
import { VaktijeComponent } from './components/home/vaktije/vaktije.component';
import { HomeMenuComponent } from './components/home/home-menu/home-menu.component';
import { VisitorComponent } from './components/visitor/visitor.component';

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
                }
            ]
        },
    ]},
    // * MODULES (dependent)
    { path: 'cockpit', loadChildren: './modules/cockpit/cockpit.module#CockpitModule' },
  ];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}