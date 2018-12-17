import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  // length of article preview length 
  prevLen: number = 100;

  constructor(public newsSvc: NewsService) { }

  ngOnInit() {
  }

}
