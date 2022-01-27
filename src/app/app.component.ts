import { AfterViewInit, Component } from '@angular/core';
import { GetAFriend } from './getafriend.model';
import { helloPdfService } from './hellopdf.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'html_to_pdf';

  html;

  public testNotes: GetAFriend[];

  constructor(private helloPdfService: helloPdfService) {
    this.testNotes = [
      new GetAFriend("This is a short note!", 21, "#1234567", false, null),
      new GetAFriend("This is a long note that we're going to use to format the notecard. This is a long note that we're going to use to format the notecard. This is a long note that we're going to use to format the notecard.", 203, "#123456", false, null),
      new GetAFriend("This is an even longer note that we're going to use to format the notecard. This is an even longer note that we're going to use to format the notecard. This is an even longer note that we're going to use to format the notecard. This is an even longer note that we're going to use to format the notecard.", 303, "#234567", false, null),
      new GetAFriend("This is the longest note of all that we're going to use to format the notecard. It will be 500 char.This is the longest note of all that we're going to use to format the notecard. It will be 500 char.This is the longest note of all that we're going to use to format the notecard. It will be 500 char.This is the longest note of all that we're going to use to format the notecard. It will be 500 char.This is the longest note of all that we're going to use to format the notecard. It will be 500 char.", 500, "#123467", false, null)
    ]
  }

  ngAfterViewInit(): void {
      this.html = document.querySelector("html");
      console.log(this.html);
  }



  onGeneratePdf() {
    this.helloPdfService.generatePdf(this.html);
  }
}
