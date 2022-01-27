import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { saveAs } from "file-saver";

@Injectable({
  providedIn: 'root'
})
export class helloPdfService {

  constructor(private http: HttpClient) {}

  generatePdf(postData: { content: string }) {
    this.http
      .post("https://hellopdf.co/api/pdf/raw?token=" + "5b40c132-396f-4221-af9b-54b7f05b", postData,
      {responseType: 'blob'}
      ).subscribe(
        responseData => {saveAs(responseData, 'cards.pdf')}
        // responseData => {console.log(responseData);}
      );
  }


}
