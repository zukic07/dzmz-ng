import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { News } from 'src/app/models/news.model';
import { Location } from '@angular/common';
import { AngularFirestore, DocumentSnapshot, DocumentData, QuerySnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.scss']
})
export class NewsViewComponent implements OnInit {

  card : DocumentData = null;

  constructor(private route: ActivatedRoute, private db: AngularFirestore, private _locale: Location, private newsSvc: NewsService) {
  }

  ngOnInit() {
    this.route.params.subscribe( (data : Params ) => {
      console.log(data);
        this.newsSvc.newslist.forEach(element => {
          if (element.id == data.index) {
            this.card = element.data;
          }
        });
      //this.db.collection("News").doc(data.index).get().subscribe(d => this.card = d.data());
      // this.newsSvc.newslistDB.subscribe((data2 : QuerySnapshot<any>) => {
      //   data2.docs.forEach(element => {
      //     if (element.id == data.index) {
      //       this.card = element.data();
      //     }
      //   });
      //   // error case: not found
      //   if (this.card == null) {
      //     console.log("not found"); // TODO news view error case
      //   } 
      // }); 
    })
  }

  goBack() {
    this._locale.back();
  }

  replaceLineBreaks(str: string) {
    return str.replace(/(?:\r\n|\r|\n)/g, '<br>')
  }

  



}
