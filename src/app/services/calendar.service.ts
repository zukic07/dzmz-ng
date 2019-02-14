import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Termin } from '../models/termin.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  termine = [];

  clickedDate = null;
  clickedTermine = [];

  calDate = new Date();

  constructor(private db: AngularFirestore) { 

  }


}
