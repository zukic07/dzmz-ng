import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CockpitComponent } from './cockpit.component';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { NewsControllerComponent } from './components/news-controller/news-controller.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatNativeDateModule, MatSelectModule, MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import filepond module
import { FilePondModule, registerPlugin } from 'ngx-filepond';

// import and register filepond file type validation plugin
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import { TerminiControllerComponent } from './components/termini-controller/termini-controller.component';
import { VaktijeControllerComponent } from './components/vaktije-controller/vaktije-controller.component';
import { HutbaControllerComponent } from './components/hutba-controller/hutba-controller.component';

registerPlugin(FilePondPluginFileValidateType);
registerPlugin(FilePondPluginImageExifOrientation);
registerPlugin(FilePondPluginImagePreview);


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
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatNativeDateModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    FilePondModule

  ],
  declarations: [ CockpitComponent, NewsControllerComponent, TerminiControllerComponent, VaktijeControllerComponent, HutbaControllerComponent ],
  bootstrap: [ CockpitComponent ]
})
export class CockpitModule { }
