import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { GetAFriend } from './getafriend.model';

declare var require: any;

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'html_to_pdf';

  @ViewChild('notecard')
  notecard!: ElementRef;

  public testNotes: GetAFriend[];

  constructor() {}

  ngOnInit() {
    this.testNotes = [
      new GetAFriend("This is a short note!", 21, "#1234567", false, null),
      new GetAFriend("This is a long note that we're going to use to format the notecard. This is a long note that we're going to use to format the notecard. This is a long note that we're going to use to format the notecard.", 203, "#123456", false, null),
      new GetAFriend("This is an even longer note that we're going to use to format the notecard. This is an even longer note that we're going to use to format the notecard. This is an even longer note that we're going to use to format the notecard. This is an even longer note that we're going to use to format the notecard.", 303, "#234567", false, null),
      new GetAFriend("This is the longest note of all that we're going to use to format the notecard. It will be 500 char.This is the longest note of all that we're going to use to format the notecard. It will be 500 char.This is the longest note of all that we're going to use to format the notecard. It will be 500 char.This is the longest note of all that we're going to use to format the notecard. It will be 500 char.This is the longest note of all that we're going to use to format the notecard. It will be 500 char.", 500, "#123467", false, null)
    ]
  }

  public downloadAsPDF() {
    const pdfTable = this.notecard.nativeElement;
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).download();
  }
}
