import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Termin } from '../models/termin.model';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  termine = [];

  clickedDate = null;
  clickedTermine = [];

  calDate = new Date();

  constructor(private http: HttpClient) { 
  }

  getAllDates() {
    this.http.get("http://localhost:8080/v1/termini").subscribe( (data: {termini: Array<Termin>}) => {
      console.log(data);
      this.termine = data ? data.termini : [];
    });
  }
}
