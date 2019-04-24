import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProjectAddComponent } from '../add/add.component';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  editProject() {
    this.dialog.open(ProjectAddComponent, {
      // width: '650px',
    });
  }

}
