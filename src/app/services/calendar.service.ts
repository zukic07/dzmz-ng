import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Termin } from '../models/termin.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  terminList = [];

  clickedDate = null;
  clickedTermine = [];

  calDate = new Date();

  constructor(private db: AngularFirestore) { 
    this.db.firestore.collection("Termini").onSnapshot({includeMetadataChanges: true},(snapshot) => {
      this.terminList = [];
      snapshot.forEach((doc) => {
        this.terminList.push({id: doc.id, data: doc.data()});
      });
    });
  }


}
