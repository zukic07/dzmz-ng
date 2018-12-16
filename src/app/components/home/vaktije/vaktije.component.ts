import { Component, OnInit } from '@angular/core';

// FIRABASE
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
// MODELS
import { Vaktija } from 'src/app/models/vaktija.model';
import { VaktijeService } from 'src/app/services/vaktije.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vaktije',
  templateUrl: './vaktije.component.html',
  styleUrls: ['./vaktije.component.scss']
})
export class VaktijeComponent implements OnInit {

  constructor(public vakSvc: VaktijeService, private router: Router) {
   }

  ngOnInit() {

  }

  onChange(item : Vaktija) {
    this.vakSvc.changePdfUrl(item);
  }

  goBack() {
    this.router.navigate(["/home"]);
  }

}
