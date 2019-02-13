import { Injectable } from '@angular/core';
import { Vaktija } from '../models/vaktija.model';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class VaktijeService {

  vaktijeList = [];
  current = null;

  constructor(private db: AngularFirestore) {
    this.db.firestore.collection("Vaktije").onSnapshot({includeMetadataChanges: true},(snapshot) => {
      this.vaktijeList = [];
      snapshot.forEach((doc) => {
        if (this.current == null) this.current = {id: doc.id, data: doc.data()}; // init
        this.vaktijeList.push({id: doc.id, data: doc.data()});
      })
    })
  }

}
