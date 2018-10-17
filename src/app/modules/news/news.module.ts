import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsViewComponent } from './news-view/news-view.component';
import { RouterModule } from '@angular/router';
import { NewsComponent } from './news.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { NewsListComponent } from './news-list/news-list.component';

let routes = [
  // { path: '', redirectTo: 'news', pathMatch: 'full' },
  { 
    path: '',
    component: NewsComponent, 
    children: [
      {
        path: '',
        component: NewsListComponent
      },
      {
        path: ':index',
        component: NewsViewComponent
      }
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    MatGridListModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    NewsComponent,
    NewsViewComponent,
    NewsListComponent
  ]
})
export class NewsModule { }
