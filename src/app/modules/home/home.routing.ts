import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { VaktijeComponent } from './vaktije/vaktije.component';

import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

let routes : Routes = [
    {
        path: '',
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
    }
];

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule,
    MatGridListModule,
    MatIconModule,
    MatToolbarModule,
    MatSelectModule,
    PdfViewerModule,
    RouterModule.forChild(routes)
  ],
  exports: [ RouterModule ],
  declarations: [ 
      HomeComponent,
      HomeMenuComponent,
      VaktijeComponent
  ]
})
export class HomeRoutingModule { }