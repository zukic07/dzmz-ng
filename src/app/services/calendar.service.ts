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

  getHours(date: number) {
    if (date != null) {
      return new Date(date).getHours()
    } else {
      return ""
    }
  }

  getMinutes(date: number) {
    if (date != null) {
      return new Date(date).getMinutes()
    } else {
      return ""
    }
  }

  getDate(date: number) {
    if (date != null) {
      return new Date(date).getDate()
    } else {
      return ""
    }
  }

  getMonth(date: number) {
    if (date != null) {
      return new Date(date).getMonth()
    } else {
      return ""
    }
  }

  getYear(date: number) {
    if (date != null) {
      return new Date(date).getFullYear()
    } else {
      return ""
    }
  }

  createDate(date: number) {
    return new Date(date);
  }


}
