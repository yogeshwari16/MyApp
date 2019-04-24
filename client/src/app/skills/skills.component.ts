import { Component, OnInit } from '@angular/core';
import { AddSkillsComponent } from './add-skills/add-skills.component';
import { MatDialog } from '@angular/material';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

    constructor(private dialog: MatDialog) { }

    ngOnInit() {
    }

    addSkill() {
        this.dialog.open(AddSkillsComponent, {
            // width: '250px',
        });
    }

}
