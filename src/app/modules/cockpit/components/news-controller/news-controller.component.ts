import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-news-controller',
  templateUrl: './news-controller.component.html',
  styleUrls: ['./news-controller.component.scss']
})
export class NewsControllerComponent implements OnInit {

  title   : string = "ueberschrift" ;
  article : string = "story" ;
  author  : string = "Rifat" ;
  img     : string | ArrayBuffer ;
  date    : Date;

  // -------
  path : string = "" ;
  file;


  constructor(private db: AngularFirestore, private storage: AngularFireStorage) { }

  ngOnInit() {
  }

  onFileChange(event) {
    let freader = new FileReader();

    const [some] = event.target.files;
    freader.readAsDataURL(some);

    freader.onload = () => {
      this.img = freader.result;
    };


  }

  onTitle(event) {
    console.log(event);
  }

  onClick() {
    console.log(this.title);
    console.log(this.article);
    console.log(this.author);
    console.log(this.img);

    this.db.collection("News").add({
      title: this.title,
      article: this.article,
      author: this.author,
      img: this.img
    });
    

  }

}
