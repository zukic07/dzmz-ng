import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AngularFirestore, QuerySnapshot, QueryDocumentSnapshot } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

import * as firebase from 'firebase';
import * as FilePond from 'filepond';

@Component({
  selector: 'app-dove-controller',
  templateUrl: './dove-controller.component.html',
  styleUrls: ['./dove-controller.component.scss']
})
export class DoveControllerComponent implements OnInit {

  success = false;
  error = false;

  title   : FormControl = new FormControl('', []);
  article : string = "" ;
  img     : string;
  
  allDove;

  constructor(private db: AngularFirestore, private storage: AngularFireStorage) { }

  ngOnInit() {
    this.getAllDove();
  }

  onClick() {

    if (!this.checkInputFields()) {
      this.error = true;
      return;
    }

    this.db.collection("Dove").add({
      // add new artcle to database
      title: this.title.value,
      article: this.article,
      img: this.img,
      date: new Date()
    }).then(() => {
      // reset input fields
      this.title.reset();
      this.article = "";
      this.img = "";

      this.dovePond.removeFiles();

      this.getAllDove();
      this.success = true;
      this.error = false;
    });    

  }

  getTitleErrorMessage() {
    return this.title.hasError('required') ? 'You must enter a value' : '';
  }


  @ViewChild('dovePond') dovePond: FilePond;

  pondOptions = {
    multiple: false,
    labelIdle: 'Drop files here',
    acceptedFileTypes: 'image/jpeg, image/png',
    allowImagePreview: true,
    server: {

      process:(fieldName, file, metadata, load, error, progress, abort) => {
        let filename = "Dove/" + new Date().toISOString();
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
    console.log('FilePond has initialised', this.dovePond);
    this.storage.ref("Dove/").child("")
  }

  pondHandleAddFile(event: any) {
    console.log('A file was added', event);
  }

  /**
   * check if all input fields are filled
   */
  checkInputFields() : boolean {
  
    if (this.title.value.length < 1) return false;
    if (this.article.length < 1) return false;
    if (this.img == null) return false;

    return true;
  }

  getAllDove() {
    let result = [];
    this.db.collection("Dove").get().subscribe( (data : QuerySnapshot<any>) => {
      data.docs.forEach( (doc : QueryDocumentSnapshot<any>) => {
        result.push({id: doc.id, data: doc.data()})
      })
      this.allDove = result;
    });
  }

  deleteDova(id) {
    this.db.collection("Dove").doc(id).delete().then( () => {
      console.log("delete successful");
      this.getAllDove();
    })
  }

}
