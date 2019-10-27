import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore, QuerySnapshot, QueryDocumentSnapshot } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormControl } from '@angular/forms';
import * as firebase from 'firebase';
import * as FilePond from 'filepond';

@Component({
  selector: 'app-termini-controller',
  templateUrl: './termini-controller.component.html',
  styleUrls: ['./termini-controller.component.scss']
})
export class TerminiControllerComponent implements OnInit {

  title   : FormControl = new FormControl('', []);
  date: Date = new Date();
  img;
  description;

  success = false;
  error = false;

  hours : Array<number> = [];
  minutes : Array<string> = ["00", "15", "30", "45"];

  public theHour = 0;
  public theMinute = 0;

  allTermini;

  constructor(private db: AngularFirestore, private storage: AngularFireStorage) { }

  ngOnInit() {
    //  init hours
    for (let i = 0; i < 24; i++) this.hours[i] = i;

    this.getAllTermini();
  }

  getDate(e) {
    this.date = e.value;
    console.log(this.date.toString());
  }

  update() {
    this.date.setHours(this.theHour);
    this.date.setMinutes(this.theMinute);

    console.log(this.date.toString());
  }

  onTitle(e) {
    console.log(e);
  }

  /* DB Zugriffe */
  getAllTermini() {
    let result = [];
    this.db.collection("Termini").get().subscribe( (data : QuerySnapshot<any>) => {
      data.docs.forEach( (doc: QueryDocumentSnapshot<any>) => {
        result.push({id: doc.id, data: doc.data()});
      })
      this.allTermini = result;
      console.log(result);
    })
  }

  addTermin() {
    if (false) {
      return;
    }

    this.db.collection("Termini").add({
      title: this.title.value,
      date: this.date,
      img: this.img,
      description: this.description
    }).then(() => {
      // reset input fields
      this.title.reset();
      this.description = "";
      this.img = "";

      this.terminiPond.removeFiles();

      this.success = true;
      this.error = false;
    })
  }

  deleteTermin(id) {
    this.db.collection("Termini").doc(id).delete().then( () => {
      console.log("delete successful");
      this.getAllTermini();
    })
  }

  /**
   * check if all input fields are filled
   */
  checkInputFields() : boolean {
  
    if (this.title.value.length < 1) return false;

    return true;
  }



  getTitleErrorMessage() {
    return this.title.hasError('required') ? 'You must enter a value' : '';
  }


  @ViewChild('terminiPond', { static: true }) terminiPond: FilePond;

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
    console.log('FilePond has initialised', this.terminiPond);
    this.storage.ref("News/").child("")
  }

  pondHandleAddFile(event: any) {
    console.log('A file was added', event);
  }

}
