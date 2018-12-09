import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CockpitComponent } from './cockpit.component';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { NewsControllerComponent } from './components/news-controller/news-controller.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';


let routes = [
  { path: '', component: CockpitComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
  ],
  declarations: [ CockpitComponent, NewsControllerComponent ],
  bootstrap: [ CockpitComponent ]
})
export class CockpitModule { }
