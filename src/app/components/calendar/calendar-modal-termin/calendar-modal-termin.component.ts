import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Termin } from 'src/app/models/termin.model';


@Component({
  selector: 'app-calendar-modal-termin',
  templateUrl: './calendar-modal-termin.component.html',
  styleUrls: ['./calendar-modal-termin.component.scss']
})
export class CalendarModalTerminComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CalendarModalTerminComponent>,
    @Inject(MAT_DIALOG_DATA) public termin: Termin) {}

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  replaceLineBreaks(str: string) {
    return str.replace(/(?:\r\n|\r|\n)/g, '<br>')
  }

}
