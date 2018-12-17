import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { MatTabsModule } from '@angular/material/tabs';
import { HttpClientModule } from '@angular/common/http';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { NewsComponent } from './components/visitor/news/news.component';
import { HomeComponent } from './components/visitor/home/home.component';
import { NewsViewComponent } from './components/visitor/news/news-view/news-view.component';
import { VaktijeComponent } from './components/vaktije/vaktije.component';

import { MatSelectModule } from '@angular/material/select';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { environment } from '../environments/environment';
import { NewsListComponent } from './components/visitor/news/news-list/news-list.component';
import { HomeMenuComponent } from './components/visitor/home/home-menu/home-menu.component';
import { VisitorComponent } from './components/visitor/visitor.component';
import { LoginComponent } from './components/login/login.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { MatButtonModule } from '@angular/material';
import { CalendarComponent } from './components/calendar/calendar.component';


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    NewsListComponent,
    NewsViewComponent,
    HomeComponent,
    HomeMenuComponent,
    VaktijeComponent,
    VisitorComponent,
    LoginComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    PdfViewerModule,
    // ANGULAR MATERIAL
    MatSelectModule,
    MatCardModule,
    MatTabsModule,
    MatGridListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatChipsModule,
    // FIREBASE
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    // ROUTING
    AppRoutingModule
  ],
  providers: [ AngularFirestore ],
  bootstrap: [AppComponent]
})
export class AppModule { }
