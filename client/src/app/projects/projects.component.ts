import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProjectAddComponent } from './add/add.component';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

    constructor(public dialog: MatDialog) { }

    ngOnInit() {
    }

    addProject() {
        this.dialog.open(ProjectAddComponent, {
            // width: '250px',
        });
    }

}
