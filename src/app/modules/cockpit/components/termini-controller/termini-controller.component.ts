import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore, QuerySnapshot, QueryDocumentSnapshot } from '@angular/fire/firestore';

@Component({
  selector: 'app-termini-controller',
  templateUrl: './termini-controller.component.html',
  styleUrls: ['./termini-controller.component.scss']
})
export class TerminiControllerComponent implements OnInit {

  title: string = "";
  date: Date = new Date();

  hours : Array<number> = [];
  minutes : Array<string> = ["00", "15", "30", "45"];

  public theHour = 0;
  public theMinute = 0;

  allTermini;

  constructor(private db: AngularFirestore) { }

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
      title: this.title,
      date: this.date
    }).then(() => {
      this.title = "";
    })
  }

  deleteTermin(id) {
    this.db.collection("Termini").doc(id).delete().then( () => {
      console.log("delete successful");
      this.getAllTermini();
    })
  }


}
