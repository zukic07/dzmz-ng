import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
//import { Timestamp } from 'rxjs/internal/operators/timestamp';
import Timestamp = firestore.Timestamp;
import { firestore } from 'firebase';
import { CalendarService } from 'src/app/services/calendar.service';
import { CalendarModalTerminComponent } from './calendar-modal-termin/calendar-modal-termin.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  public fixtures : {date: Date, title: string}[]= [
    {date: new Date(), title: "Halka" },
    {date: new Date(), title: "KurAn" },
    {date: new Date(), title: "fudbal" }
  ]

  calendarLastVisited: Date;

  listView = true;

  date = new Date();
  currentDate = new Date();

  public weekday;
  public day;
  public month;
  public year;

  public currentDay;
  public currentMonth;
  public currentYear;

  public currentMonthName : String;

  public allDays; // array of all days this month

  termine;

  constructor(private router: Router, private db: AngularFirestore, public calSvc: CalendarService, public dialog: MatDialog) { }

  openDialog(item): void {
    const dialogRef = this.dialog.open(CalendarModalTerminComponent, {
      width: '250px',
      data: item
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

  ngOnInit() {
    // update last visited dates
    this.calendarLastVisited = new Date();
    localStorage.setItem("calendarLastVisited", this.calendarLastVisited.toISOString());

    // this.getAllDates();

    // this.fixtures[0].date.setDate(1);
    // this.fixtures[1].date.setDate(4);
    // this.fixtures[2].date.setDate(30);
    
    this.date = new Date();
    this.currentDate = new Date();

    this.weekday = this.date.getDay();
    this.day = this.date.getDate();
    this.month = this.date.getMonth();
    this.year = this.date.getFullYear();

    // this.currentDay = this.date.getDate();
    this.currentMonth = this.date.getMonth();
    this.currentYear = this.date.getFullYear();

    this.getAllDays(this.month);
    this.currentMonthName = this.getMonthName(this.currentMonth);

    console.log(this.weekday); // wochentag
    console.log(this.day); // wochentag
    console.log(this.month); // monat - 1
    console.log(this.year); // jahr
  }

  goBack() {
    this.router.navigate(["/home"]);
  }

  // getAllDates() {
  //   this.db.collection("Termini").valueChanges().subscribe(list => {
  //     this.termine = list.forEach((d : {date: any, title: string}) => {
  //       d.date = new Date(d.date.toDate());
  //     });
  //   })
  // }

/* *************************** */
/*  CREATE CALENDAR FUNCTIONS  */
/* *************************** */


  /**
   * set alls days of a month (param) as global array
   * @param month 
   */
  getAllDays(month: number) {
    let date = new Date(this.currentDate);
    date.setDate(1);
    date.setDate(1 - ( (6 + date.getDay()) % 7));
    let days = Array<{day: number, month: number, year: number}>(); 

    // previous month
    let prevMonth = (month - 1) != -1 ? (month - 1) : 11;
    let prevYear = prevMonth == 11 ? this.currentYear-1: this.currentYear;
    while (date.getMonth() == prevMonth) {
      days.push({day: date.getDate(), month: prevMonth, year: prevYear});
      // next day
      date.setDate(date.getDate()+1);
    }

    // current month
    while (date.getMonth() == month) {
      days.push({day: date.getDate(), month: month, year: this.currentYear});
      // next day
      date.setDate(date.getDate() + 1);
    }

    this.allDays = days;
  }

  /**
   * 
   */
  previousMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.currentMonth = this.currentDate.getMonth();
    this.currentYear = this.currentDate.getFullYear();

    this.getAllDays(this.currentMonth);
    this.currentMonthName = this.getMonthName(this.currentMonth);

    console.log(this.currentMonth);
    console.log(this.currentYear);
  }

  /**
   * 
   */
  nextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() +1);
    this.currentMonth = this.currentDate.getMonth();
    this.currentYear = this.currentDate.getFullYear();

    this.getAllDays(this.currentMonth);
    this.currentMonthName = this.getMonthName(this.currentMonth);

    console.log(this.currentMonth);
    console.log(this.currentYear);
  }

  /**
   * 
   * @param m 
   */
  getMonthName(m: number) {
    switch (m) {
      case 0: return "Januar";
      case 1: return "Februar";
      case 2: return "Mart";
      case 3: return "April";
      case 4: return "Mai";
      case 5: return "Juni";
      case 6: return "Juli";
      case 7: return "Avgust";
      case 8: return "Septembar";
      case 9: return "Oktobar";
      case 10: return "Novembar";
      case 11: return "Decembar";
    }
  }

  getWeekDay(m: number) {
    switch (m) {
      case 0: return "SO";
      case 1: return "MO";
      case 2: return "DI";
      case 3: return "MI";
      case 4: return "DO";
      case 5: return "FR";
      case 6: return "SA";
    }
  }

  listSortTimestamp(a, b) {
    return a.data.date.toDate() < b.data.date.toDate() ? 1 : -1;
  }
}

