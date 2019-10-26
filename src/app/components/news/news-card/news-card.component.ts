import { Component, OnInit, Input } from '@angular/core';

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

}
