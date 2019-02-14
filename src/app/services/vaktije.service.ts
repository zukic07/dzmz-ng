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

}
