import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { News } from 'src/app/models/news.model';
import { Timestamp } from 'rxjs';

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.scss']
})
export class NewsViewComponent implements OnInit {

  card : News;

  constructor(private route: ActivatedRoute, private newsSvc: NewsService) {
  }

  ngOnInit() {
    this.route.params.subscribe( data => {
      this.card = this.newsSvc.getNews(data.index);
    })
  }

  



}
