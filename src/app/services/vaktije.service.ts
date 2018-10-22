import { Injectable } from '@angular/core';
import { Vaktija } from '../models/vaktija.model';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class VaktijeService {

  selected;
  vaktije : Vaktija[] = [];
  pdfUrl = "";

  constructor(private storage: AngularFireStorage, private db: AngularFirestore) {
    this.db.collection<Vaktija>('Vaktije').valueChanges().subscribe(list => {
      this.vaktije = list;
      if (this.vaktije.length > 0) {
        this.selected = this.vaktije[0].name;
        this.storage.ref(this.vaktije[0].pdf).getDownloadURL().subscribe(url => {
          this.pdfUrl = url;
        });
      }
    });
  }

  changePdfUrl(item) {
    this.storage.ref(item.pdf).getDownloadURL().subscribe(url => this.pdfUrl = url);
  }
}
