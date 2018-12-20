import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase';

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
    this.db.collection("NewsPics").doc("News").get()
    .subscribe( data => {
      console.log(data.data());
    });

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


  @ViewChild('myPond') myPond: any;

  pondOptions = {
    multiple: false,
    labelIdle: 'Drop files here',
    acceptedFileTypes: 'image/jpeg, image/png',
    allowImagePreview: false,
    server: {

      process:(fieldName, file, metadata, load, error, progress, abort) => {
        // this.db.collection("NewsPics").get().subscribe(data => {
        //   console.log(data)
        // });

        this.db.collection("NewsPics").doc("News").set({filename: "News/" + fieldName}).then( data => {


          let upload = this.storage.ref("News/" + fieldName).put(file);

          upload.percentageChanges().subscribe((data) => {
            progress(true, data, 100);
          })

          upload.then((f) => {
            console.log(f);
            load("finished!!");
          });

          // upload.task.on(firebase.storage.TaskState.ERROR, (err) => {
          //   error(err);
          // })

        });
      
      }
    }
  };

  pondFiles = [
    // 'index.html'
  ]

  pondHandleInit() {
    console.log('FilePond has initialised', this.myPond);
    this.storage.ref("News/").child("")
  }

  pondHandleAddFile(event: any) {
    console.log('A file was added', event);
  }


}
