import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dzmz-ng';

  constructor(private store: Store<AppState>, private db: AngularFirestore) {
    let terminList$ = store.select("terminList");
    this.db.firestore.collection("Termini").onSnapshot({includeMetadataChanges: true},(snapshot) => {
      // this.terminList = [];
      snapshot.docChanges().forEach((doc) => {
        // this.terminList.push({id: doc.doc.id, data: doc.doc.data()});
        this.store.dispatch({
          type: 'ADD_TERMIN',
          payload: { date: doc.doc.data().date, 
            description: doc.doc.data().description,
            title: doc.doc.data().title,
            img: doc.doc.data().img
          }
        });
      });
    });
  }
}
