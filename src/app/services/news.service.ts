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

  newslist = [];

  
  constructor(private db: AngularFirestore) {
    this.db.firestore.collection("News").onSnapshot({includeMetadataChanges: true},(snapshot) => {
      this.newslist = [];
      snapshot.forEach((doc) => {
        this.newslist.push({id: doc.id, data: doc.data()})
      })
    })
  }

}
