import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-calendar-modal-termin',
  templateUrl: './calendar-modal-termin.component.html',
  styleUrls: ['./calendar-modal-termin.component.scss']
})
export class CalendarModalTerminComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CalendarModalTerminComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
