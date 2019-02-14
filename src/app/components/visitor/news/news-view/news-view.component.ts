import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { News } from 'src/app/models/news.model';
import { Location } from '@angular/common';
import { AngularFirestore, DocumentSnapshot, DocumentData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.scss']
})
export class NewsViewComponent implements OnInit {

  card : DocumentData;

  constructor(private route: ActivatedRoute, private db: AngularFirestore, private _locale: Location) {
  }

  ngOnInit() {
    this.route.params.subscribe( (data : Params ) => {
      console.log(data);
      this.db.collection("News").doc(data.index).get().subscribe(d => this.card = d.data());
    })
  }

  goBack() {
    this._locale.back();
  }

  



}
