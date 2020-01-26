import { Component, OnInit } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar.service';
import { Termin } from 'src/app/models/termin.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { MatDialog } from '@angular/material/dialog';
import { CalendarComponent } from '../calendar/calendar.component';

@Component({
  selector: 'app-home-menu',
  templateUrl: './home-menu.component.html',
  styleUrls: ['./home-menu.component.scss']
})
export class HomeMenuComponent implements OnInit {
  
  dzumaDays = [5, 4, 3, 2, 1, 0, 6];
  dzuma;
  nextTermin = null;

  calendarLastVisited : Date;
  terminList$: Observable<Array<Termin>>;
  
  constructor(private calendarSvc: CalendarService, private store: Store<AppState>, public dialog: MatDialog) { 

    
    this.terminList$ = this.store.select("terminList")

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

    this.terminList$.subscribe(list => {
      console.log(list)
      this.nextTermin = list.find((e: Termin) => {
        return e.date - new Date().getTime() > 0;
      });
      console.log(this.nextTermin)
    })

  }

  ngOnInit() {

  }


  openDialog(): void {
    const dialogRef = this.dialog.open(CalendarComponent, {
      width: '100%',
      height: '100%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }



}
