import { Component, OnInit } from '@angular/core';
import { VaktijeService } from '../services/vaktije.service';
import { HttpClient } from '@angular/common/http';
import { FileGeneratorService } from '../services/fileGenerator.service';


@Component({
  selector: 'app-vaktije',
  templateUrl: './vaktije.component.html',
  styleUrls: ['./vaktije.component.scss']
})
export class VaktijeComponent implements OnInit {

  selected : number = 0; 
  path = "";
  blob;

  constructor(public vakSvc: VaktijeService, private http: HttpClient, private fileGenSvc : FileGeneratorService) { }

  ngOnInit() {
    if (this.vakSvc.vaktije == null) {
      // INIT VAKTIJE ARRAY
      this.vakSvc.getAllVaktije();
    }
  }

  onChange(index: number) {
    console.log(index);
    this.vakSvc.getVaktija(index);

  }

}
