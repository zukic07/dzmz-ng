import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
/** MODELS */
import { News } from '../models/news.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  newslistDB : Observable<News[]>;
  newslist : News[] = [];

  curCard : News;
  
  constructor(private db: AngularFirestore) {
    this.newslistDB = this.db.collection<News>('News').valueChanges();
    this.newslistDB.subscribe(list => {
      this.newslist = list;
      console.log(list);
    });
  }

  getNews(index: number) {
    if (this.newslist.length >= index)
      return this.newslist[index];
    return null;
  }

}
