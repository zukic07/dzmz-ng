import { Component, OnInit } from '@angular/core';

// FIRABASE
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
// MODELS
import { Vaktija } from 'src/app/models/vaktija.model';
import { VaktijeService } from 'src/app/services/vaktije.service';

@Component({
  selector: 'app-vaktije',
  templateUrl: './vaktije.component.html',
  styleUrls: ['./vaktije.component.scss']
})
export class VaktijeComponent implements OnInit {

  constructor(public vakSvc: VaktijeService) {
   }

  ngOnInit() {

  }

  onChange(item : Vaktija) {
    this.vakSvc.changePdfUrl(item);
  }

}
