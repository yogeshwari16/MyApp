import { Component, OnInit } from '@angular/core';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  edit() {
    this.dialog.open(EditProfileComponent, {
      // width: '250px',
    });
  }

}
