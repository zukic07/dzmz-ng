import { Component, OnInit, ViewChild } from '@angular/core';
import { QuerySnapshot, QueryDocumentSnapshot, AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

import * as FilePond from 'filepond';
import * as firebase from 'firebase';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-hutba-controller',
  templateUrl: './hutba-controller.component.html',
  styleUrls: ['./hutba-controller.component.scss']
})
export class HutbaControllerComponent implements OnInit {
  success = false;
  error = false;

  title: FormControl = new FormControl('', []);
  author: any;
  article: any;
  img: any;
  allHutbe: any[];

  constructor(private db: AngularFirestore, private storage: AngularFireStorage) { }

  ngOnInit() {
    this.getAllHutbe();
  }

  @ViewChild('hutbePond') hutbePond: FilePond;

  onClick() {

    if (!this.checkInputFields()) {
      this.error = true;
      return;
    }

    this.db.collection("Hutbe").add({
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

      this.hutbePond.removeFiles();

      this.getAllHutbe();
      this.success = true;
      this.error = false;
    });

    

  }

  getTitleErrorMessage() {
    return this.title.hasError('required') ? 'You must enter a value' : '';
  }


  pondOptions = {
    multiple: false,
    labelIdle: 'Drop files here',
    acceptedFileTypes: 'image/jpeg, image/png',
    allowImagePreview: true,
    server: {

      process:(fieldName, file, metadata, load, error, progress, abort) => {
        let filename = "Hutbe/" + new Date().toISOString();
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
    console.log('FilePond has initialised', this.hutbePond);
    this.storage.ref("Hutbe/").child("")
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

  getAllHutbe() {
    let result = [];
    this.db.collection("Hutbe").get().subscribe( (data : QuerySnapshot<any>) => {
      data.docs.forEach( (doc : QueryDocumentSnapshot<any>) => {
        result.push({id: doc.id, data: doc.data()})
      })
      this.allHutbe = result;
    });
  }

  deleteHutba(id) {
    this.db.collection("Hutbe").doc(id).delete().then( () => {
      console.log("delete successful");
      this.getAllHutbe();
    })
  }
}
