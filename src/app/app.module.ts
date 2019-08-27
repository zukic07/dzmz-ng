import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { NewsViewComponent } from './components/news/news-view/news-view.component';
import { VaktijeComponent } from './components/vaktije/vaktije.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { NewsComponent } from './components/news/news.component';
import { NewsListComponent } from './components/news/news-list/news-list.component';
import { HomeMenuComponent } from './components/home-menu/home-menu.component';
import { VisitorComponent } from './components/visitor/visitor.component';
import { LoginComponent } from './components/login/login.component';
import { CalendarComponent } from './components/calendar/calendar.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';


import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ContactComponent } from './components/contact/contact.component';




@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewsListComponent,
    NewsViewComponent,
    HomeMenuComponent,
    VaktijeComponent,
    VisitorComponent,
    LoginComponent,
    CalendarComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PdfViewerModule,
    FormsModule,
    ReactiveFormsModule,
    // ANGULAR MATERIAL
    MatSelectModule,
    MatCardModule,
    MatTabsModule,
    MatGridListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatChipsModule,
    MatInputModule,
    MatListModule,
    MatButtonToggleModule,
    // FIREBASE
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    // ROUTING
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [ AngularFirestore ],
  bootstrap: [AppComponent]
})
export class AppModule { }
