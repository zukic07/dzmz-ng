import { Component, OnInit, AfterViewInit } from '@angular/core';

// FIREBASE
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
// MODELS
import { Vaktija } from 'src/app/models/vaktija.model';
import { VaktijeService } from 'src/app/services/vaktije.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-vaktije',
  templateUrl: './vaktije.component.html',
  styleUrls: ['./vaktije.component.scss']
})
export class VaktijeComponent implements AfterViewInit {
  selected;
  pdfUrl = "";

  constructor(private storage: AngularFireStorage, private db: AngularFirestore, private router: Router, public vaktijeSvc: VaktijeService,
    public dialogRef: MatDialogRef<VaktijeComponent>) {
  }

  ngAfterViewInit() {
    // this.db.collection<Vaktija>('Vaktije').valueChanges().subscribe(list => {
    //   this.vaktije = list;
    //   if (this.vaktije.length > 0) {
    //     this.selected = this.vaktije[0].title;
    //     // this.storage.ref(this.vaktije[0].img).getDownloadURL().subscribe(url => {
    //     //   this.pdfUrl = url;
    //     // });
    //     this.pdfUrl = this.vaktije[0].img;
    //   }
    // });
    if (this.vaktijeSvc.vaktijeList.length > 0) {
      this.pdfUrl = this.vaktijeSvc.vaktijeList[0].data.img;
    }
  }

  changePdfUrl(item) {
    this.storage.ref(item.img).getDownloadURL().subscribe(url => this.pdfUrl = url);
  }

  onChange(item) {
    //this.changePdfUrl(item);
    this.pdfUrl = item.data.img;
    this.vaktijeSvc.current = item;
  }

  goBack() {
    this.router.navigate(["/home"]);
  }

  closeThis() {
    this.dialogRef.close();
  }

}
