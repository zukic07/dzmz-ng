import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news.model';
import { AngularFirestore, QuerySnapshot, QueryDocumentSnapshot } from '@angular/fire/firestore';
import { NewsService } from 'src/app/services/news.service';
import { MatDialog } from '@angular/material/dialog';
import { NewsCardComponent } from '../news-card/news-card.component';
import { NewsViewComponent } from '../news-view/news-view.component';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  // length of article preview length 


  constructor(public db: AngularFirestore, public newsSvc: NewsService,
    private dialog: MatDialog) {
   }

  ngOnInit() {

  }

  ngOnDestroy() {
    // this.newslistDB.unsubscribe();
  }

  openNewsCardDialog(card: News) {
    const dialogRef = this.dialog.open(NewsViewComponent, {
      width: "100%",
      height: "100%",
      data: card,
      panelClass: "dialog-max-screen"
    });
  }

}
