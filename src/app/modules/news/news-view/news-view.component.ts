import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.scss']
})
export class NewsViewComponent implements OnInit {

  index : number;

  constructor(private route: ActivatedRoute, private newsSvc: NewsService) {
    this.route.params.subscribe( data => {
      this.index = data.index;
    })
  }

  ngOnInit() {

  }

  



}
