import { Component, AfterViewInit, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ModalComponent } from './modal/modal.component';

declare var require: any;

const data: any = require('./data.json');


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  entryComponents: [ModalComponent]
})
export class HomeComponent implements AfterViewInit, OnInit {
  // Barchart
  primarySkills: any;
  secondarySkills: any;

  constructor(public dialog: MatDialog) { }

  ngAfterViewInit() {

  }

  ngOnInit() {
    this.primarySkills = [{
      name: "Teamcenter Implementation",
      percentage: "80"
    }, {
      name: "Web Technologies",
      percentage: "40"
    }, {
      name: "Artificial Intelligence",
      percentage: "70"
    }, {
      name: "Machine Learning",
      percentage: "50"
    }]
  }

  onClick() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '800px',
      data: { name: "", animal: "" }
    });
  }

  redirectToProjects() {

  }
}
