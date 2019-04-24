import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dashboard-model',
  template: `<h1 mat-dialog-title>Primary Skills</h1>
<div mat-dialog-content>
<mat-form-field class="search">
<mat-icon class="edit" (click)="onClick()">search</mat-icon>
<input matInput type="text">
</mat-form-field>
<div class="skills-data">
  <h4>Teamcenter implementation</h4>
  <span>8 Sub Skills</span>
  <span>12 Sub-Sub Skills</span>
</div>
<div class="skills-data">
  <h4>Teamcenter implementation</h4>
  <span>8 Sub Skills</span>
  <span>12 Sub-Sub Skills</span>
</div>
<div class="skills-data">
  <h4>Teamcenter implementation</h4>
  <span>8 Sub Skills</span>
  <span>12 Sub-Sub Skills</span>
</div>
</div>
<div mat-dialog-actions class="text-right">
  <button mat-button class="btn-blue" [mat-dialog-close]="data.animal" tabindex="2">Add Skill</button>
</div>`
})
export class ModalComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
