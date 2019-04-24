import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile.component';
import { ProfileRoutes } from './projects.routing';
import { VerticalTimelineModule } from 'angular-vertical-timeline';
import { DemoMaterialModule } from '../demo-material-module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
@NgModule({
  declarations: [
    ProfileComponent,
    EditProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ProfileRoutes),
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    VerticalTimelineModule,
    DemoMaterialModule
  ],
  entryComponents: [
    EditProfileComponent
  ]
})
export class ProfileModule { }
