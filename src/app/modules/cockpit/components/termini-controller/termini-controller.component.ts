import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-termini-controller',
  templateUrl: './termini-controller.component.html',
  styleUrls: ['./termini-controller.component.scss']
})
export class TerminiControllerComponent implements OnInit {

  title: string = "";
  date: Date;

  hours : Array<number> = [];
  minutes : Array<string> = ["00", "15", "30", "45"];

  theHour = 0;
  theMinute = 0;

  constructor() { }

  ngOnInit() {
    //  init hours
    for (let i = 0; i < 24; i++) this.hours[i] = i;
  }

  fireEvent(e) {
    this.date = e.value;
    console.log(this.date.toString());
  }

  update() {
    this.date.setHours(this.theHour);
    this.date.setMinutes(this.theMinute);

    console.log(this.date.toString());
  }


}
