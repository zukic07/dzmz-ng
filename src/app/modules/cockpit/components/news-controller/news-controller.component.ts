import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore, QuerySnapshot, QueryDocumentSnapshot } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import * as firebase from 'firebase';
import * as FilePond from 'filepond';
import { isArray } from 'util';
import { FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-news-controller',
  templateUrl: './news-controller.component.html',
  styleUrls: ['./news-controller.component.scss']
})
export class NewsControllerComponent implements OnInit {

  title   : FormControl = new FormControl('', []);
  article : string = "" ;
  author  : string = "" ;
  img     : string;
  date    : Date;

  // -------
  path : string = "" ;

  success: boolean = false;
  error: boolean = false;

  allNews;


  constructor(private db: AngularFirestore, private storage: AngularFireStorage) { }

  ngOnInit() {
    this.success = false;
    this.error = false;

    this.getAllNews();
  }

  // onFileChange(event) {
  //   let freader = new FileReader();

  //   const [some] = event.target.files;
  //   freader.readAsDataURL(some);

  //   freader.onload = () => {
  //     this.img = freader.result;
  //   };


  // }

  onTitle(event) {
    console.log(event);
  }

  onClick() {

    if (!this.checkInputFields()) {
      this.error = true;
      return;
    }

    this.db.collection("News").add({
      // add new artcle to database
      title: this.title.value,
      article: this.article,
      author: this.author,
      img: this.img,
      date: new Date()
    }).then(() => {
      // reset input fields
      this.title.reset();
      this.article = "";
      this.author = "";
      this.img = "";

      this.myPond.removeFiles();

      this.getAllNews();
      this.success = true;
      this.error = false;
    });

    

  }

  getTitleErrorMessage() {
    return this.title.hasError('required') ? 'You must enter a value' : '';
  }


  @ViewChild('myPond') myPond: FilePond;

  pondOptions = {
    multiple: false,
    labelIdle: 'Drop files here',
    acceptedFileTypes: 'image/jpeg, image/png',
    allowImagePreview: true,
    server: {

      process:(fieldName, file, metadata, load, error, progress, abort) => {
        let filename = "News/" + new Date().toISOString();
        let upload = this.storage.ref(filename).put(file);

        upload.percentageChanges().subscribe((data) => {
          progress(true, data, 100);
        })

        upload.then((f) => {
          console.log(f);
          load("finished!!");
          this.storage.ref(filename).getDownloadURL().subscribe( d => {
            this.img = d;
            console.log(d);
          });
        });

        upload.task.on(firebase.storage.TaskState.ERROR, (err) => {
          error(err);
        })
      
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


  /**
   * check if all input fields are filled
   */
  checkInputFields() : boolean {
  
    if (this.title.value.length < 1) return false;
    if (this.author.length < 1) return false;
    if (this.article.length < 1) return false;
    if (this.img == null) return false;

    return true;
  }

  getAllNews() {
    let result = [];
    this.db.collection("News").get().subscribe( (data : QuerySnapshot<any>) => {
      data.docs.forEach( (doc : QueryDocumentSnapshot<any>) => {
        result.push({id: doc.id, data: doc.data()})
      })
      this.allNews = result;
    });
  }

  deleteNews(id) {
    this.db.collection("News").doc(id).delete().then( () => {
      console.log("delete successful");
      this.getAllNews();
    })
  }


}
