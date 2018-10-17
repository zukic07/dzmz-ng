import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VaktijeService } from './vaktije.service';

@Injectable({
  providedIn: 'root'
})
export class FileGeneratorService {

  constructor(private http: HttpClient) {

  }

  /**
   * 
   * @param blob 
   * @param dest [PdfBinary, PDF-Path, isPdfGenerated]
   */
  genPdf(blob : Blob, dest: [Blob, string, boolean], dest2) {
    let reader = new FileReader();

    let result = null;

    // input check
    if (blob) reader.readAsDataURL(blob);
    else dest = null;

    // event: on succes load
    reader.onload = (event) => {
      console.log(event);
      dest[0] = new Blob([reader.result], {type: 'application/pdf'});
      dest[1] = URL.createObjectURL(dest[0]);
      dest[2] = true;
      dest2 = dest[1];
      console.log(dest[1]);
    };

    // return null on error
    reader.onerror = (err) => {
      console.log(err);
      dest = null;
    };
  
  }
}
