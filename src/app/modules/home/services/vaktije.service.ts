import { Injectable, OnChanges, SimpleChanges, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vaktija } from '../models/vaktija.model';
import { tap } from 'rxjs/operators';

import * as _ from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class VaktijeService  {

  constructor(private http: HttpClient) { }

  vaktije = null;
  // array of: [blob, path, isPdfLoaded]
  vaktijePdf = new Array<[Blob, string, boolean]>();
  @Input()
  curVaktija : string = null;

  /**
   * 
   * @param path return path of pdf file
   */
  getAllVaktije() {
    this.http.get("http://192.168.1.107:8080/v1/vaktije").subscribe( (data : Array<Vaktija>) => {
      this.vaktije = data ? data : [];
      console.log(this.vaktije);
      for (let i = 0; i < data.length; i++) {
        this.vaktijePdf[i] = [null, null, false];
      }

      this.getVaktija(0);

    });
  }

  /**
   * if file not loaded, request it and wait until it arrives
   * 
   * changes: curVaktija
   * 
   * @param index 
   */
  getVaktija(index) {
    if (!this.vaktijePdf[index][2]) {
      this.http.get(`http://192.168.1.107:8080/v1/pdf/${this.vaktije[index].pdf}`, {responseType: 'blob'})
      .pipe(
        tap((res : Blob) => {
          let blob = new Blob([res], { type: 'application/pdf' });
          this.vaktijePdf[index][0] = blob;
          this.vaktijePdf[index][1] = URL.createObjectURL(blob);
          this.vaktijePdf[index][2] = true;
          this.curVaktija = this.vaktijePdf[index][1];
        })
      )
      .subscribe();

    } else {
      this.curVaktija = this.vaktijePdf[index][1];
      console.log(this.curVaktija);
    }
  }

  

}
