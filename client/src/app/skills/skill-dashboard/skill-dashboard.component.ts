import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EditSkillsComponent } from '../edit-skills/edit-skills.component';

@Component({
  selector: 'app-skill-dashboard',
  templateUrl: './skill-dashboard.component.html',
  styleUrls: ['./skill-dashboard.component.css']
})
export class SkillDashboardComponent implements OnInit {
  concepts: any;
  skills: any;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.concepts = [
      {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
    ];
    this.skills = [
      {}, {}, {}, {}, {}
    ]
  }
  edit(): void {
    const dialogRef = this.dialog.open(EditSkillsComponent, {
      // width: '250px',
    });
  }
}