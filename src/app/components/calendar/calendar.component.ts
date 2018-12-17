import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
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

  constructor(private router: Router) { }

  ngOnInit() {
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

  /**
   * set alls days of a month (param) as global array
   * @param month 
   */
  getAllDays(month: number) {
    let date = new Date(this.currentDate);
    date.setDate(1);
    date.setDate(1 - ( (6 + date.getDay()) % 7));
    let days = Array<number>();

    while (date.getMonth() == (month - 1) || (date.getMonth() - 12) == -1) {
      days.push(date.getDate());
      // next day
      date.setDate(date.getDate()+1);
    }

    while (date.getMonth() == month) {
      days.push(date.getDate());
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
}
