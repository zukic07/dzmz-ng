import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';
import { Termin } from 'src/app/models/termin.model';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss']
})
export class HomeMenuComponent implements OnInit {
  
  dzumaDays = [5, 4, 3, 2, 1, 0, 6];
  dzuma;

  calendarLastVisited : Date;
  
  constructor(private calendarSvc: CalendarService) { 
    this.calendarSvc.init();
    // how many days till dzuma
    let date = new Date();
    switch(this.dzumaDays[date.getDay()]) {
      case 0 : this.dzuma = "Danas"; break;
      case 1 : this.dzuma = "Sutra"; break;
      default: this.dzuma = `${this.dzumaDays[date.getDay()]} dana`;
    }

    // get Date for comparison and update view (button badge)
    let clv = localStorage.getItem("calendarLastVisited");
    if (clv != null) {
      this.calendarLastVisited = new Date(clv);
    } else {
      this.calendarLastVisited = new Date();
    }

  }

  ngOnInit() {

  }



}
