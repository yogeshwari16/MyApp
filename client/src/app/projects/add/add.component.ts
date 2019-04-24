import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class ProjectAddComponent implements OnInit {
  projectTypes: any[];
  projectRoles: any[];
  dropdownList: any[];
  selectedItems = [];
  dropdownSettings: any;
  constructor(public dialog: MatDialog, private router: Router) {

  }

  ngOnInit() {
    this.projectTypes = [
      {
        id: 1,
        name: "Upgrade"
      },
      {
        id: 2,
        name: "Demo"
      }
    ];
    this.projectRoles = [
      {
        key: 1,
        name: "Project Leader"
      },
      {
        key: 2,
        name: "Team Leader"
      },
      ,
      {
        key: 3,
        name: "Manager"
      },
      ,
      {
        key: 4,
        name: "Developer"
      }
    ];
    this.dropdownList = [
      { item_id: 1, item_text: 'Team Center' },
      { item_id: 2, item_text: 'Web Technologies' },
      { item_id: 3, item_text: 'Artificial Intelligence' },
    ];
    this.selectedItems = [
      { item_id: 2, item_text: 'Web Technologies' },
      { item_id: 3, item_text: 'Artificial Intelligence' },
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  save() {
    this.router.navigate(['/projects/project-details']);
  }

}
