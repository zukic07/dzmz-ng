import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent implements OnInit {

  @Input() card;
  visible : boolean;

  prevLen: number = 100;
  newslistDB: any;
  newslist: any;
  spin = true;

  constructor() { 
    this.visible = false;
  }

  ngOnInit() {
  }

  replaceLineBreaks(str: string) {
    if (str == null) return;
    return str.replace(/(?:\r\n|\r|\n)/g, '<br>')
  }

}
