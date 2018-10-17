import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  // length of article preview length 
  prevLen: number = 100;
  // DUMMY DATA
  cards = [
    {
      title: "Dzuma Namaz",
      author: "Rifat Halilovic",
      img: "assets/img/csm_dzuma-namaz.jpg",
      article: "pocetak 15h",
      date: new Date()
    },
    {
      title: "Halka Kurana",
      author: "Halil ef. Makic",
      img: "assets/img/halka-kurana.jpg",
      article: "Svake subote predavanje u 19:30 č."+
      "Halka zikra svake nedjelje posle Sabah-namaza."+
      "Četvrtkom poslje Akšam-namaza predavanje iz ahlaka.",
      date: new Date()
    }

  ];//Article[];
  
  constructor() { }

  ngOnInit() {
  }

}
