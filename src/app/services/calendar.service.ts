import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Termin } from '../models/termin.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  Date = Date;

  terminList$: Observable<Array<Termin>>;
  nextTermin;

  clickedDate = null;
  clickedTermine = [];

  calDate = new Date();

  constructor(private db: AngularFirestore, private store: Store<AppState>) { 

  }

  get getNextTermin() : Termin {

    return this.terminList$.s;
  }


}
