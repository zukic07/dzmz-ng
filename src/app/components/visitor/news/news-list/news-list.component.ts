import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/models/news.model';
import { AngularFirestore, QuerySnapshot, QueryDocumentSnapshot } from '@angular/fire/firestore';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  // length of article preview length 
  prevLen: number = 100;
  newslistDB: any;
  newslist: any;

  constructor(public db: AngularFirestore) {
   }

  ngOnInit() {
    this.newslist = [];
    this.newslistDB = this.db.collection<News>('News').get()
    .subscribe((data : QuerySnapshot<any>) => {
      data.docs.forEach((doc: QueryDocumentSnapshot<any>) => {
        this.newslist.push({id: doc.id, data: doc.data()});
      })
    });
  }

  ngOnDestroy() {
    this.newslistDB.unsubscribe();
  }

}
