import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore, QueryDocumentSnapshot, QuerySnapshot } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';

import * as FilePond from 'filepond';
import * as firebase from 'firebase';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-vaktije-controller',
  templateUrl: './vaktije-controller.component.html',
  styleUrls: ['./vaktije-controller.component.scss']
})
export class VaktijeControllerComponent implements OnInit {

  img     : string;
  title   : FormControl = new FormControl('', []);

  success = false;
  error = false;
  allVaktije: any[];

  constructor(private db: AngularFirestore, private storage: AngularFireStorage) { }

  ngOnInit() {
  }

  @ViewChild('vaktijePond') vaktijePond: FilePond;

  pondOptions = {
    multiple: false,
    labelIdle: 'Drop files here',
    acceptedFileTypes: 'image/jpeg, image/png',
    allowImagePreview: true,
    server: {

      process:(fieldName, file, metadata, load, error, progress, abort) => {
        let filename = "Vaktije/" + new Date().toISOString();
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
    console.log('Vaktije FilePond has initialised', this.vaktijePond);
    this.storage.ref("Vaktije/").child("")
  }

  pondHandleAddFile(event: any) {
    console.log('A file was added', event);
  }

  onClick() {

    if (!this.checkInputFields()) {
      this.error = true;
      return;
    }

    this.db.collection("Vaktije").add({
      // add new artcle to database
      title: this.title.value,
      img: this.img,
      date: new Date()
    }).then(() => {
      // reset input fields
      this.title.reset();
      this.img = "";

      this.vaktijePond.removeFiles();

      this.getAllVaktije();
      this.success = true;
      this.error = false;
    });

  }

  /**
   * check if all input fields are filled
   */
  checkInputFields() : boolean {
  
    if (this.title.value.length < 1) return false;
    if (this.img == null) return false;

    return true;
  }

  getAllVaktije() {
    let result = [];
    this.db.collection("News").get().subscribe( (data : QuerySnapshot<any>) => {
      data.docs.forEach( (doc : QueryDocumentSnapshot<any>) => {
        result.push({id: doc.id, data: doc.data()})
      })
      this.allVaktije = result;
    });
  }

}
