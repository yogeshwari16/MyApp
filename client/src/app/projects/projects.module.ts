import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsRoutes } from './projects.routing';
import { ProjectAddComponent } from './add/add.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProjectsComponent } from './projects.component';
@NgModule({
  declarations: [
    ProjectDetailsComponent,
    ProjectAddComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ProjectsRoutes),
    FlexLayoutModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  entryComponents: [
    ProjectAddComponent
  ]
})
export class ProjectsModule { }
