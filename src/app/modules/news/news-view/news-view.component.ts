import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.scss']
})
export class NewsViewComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe( data => {
      console.log(data);
    })
  }

  ngOnInit() {

  }

  



}
