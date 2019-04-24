import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SkillDashboardComponent } from './skill-dashboard/skill-dashboard.component';
import { AddSkillsComponent } from './add-skills/add-skills.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsRoutes } from './skills.routing';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SkillsComponent } from './skills.component';
import { EditSkillsComponent } from './edit-skills/edit-skills.component';
@NgModule({
  declarations: [
    SkillDashboardComponent, 
    AddSkillsComponent,     
    SkillsComponent,
    EditSkillsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SkillsRoutes),
    FlexLayoutModule,
    DemoMaterialModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 30,
      outerStrokeWidth: 4,
      innerStrokeWidth: 0,
      animation: true,
      animationDuration: 300,
      backgroundPadding: 2,
      showSubtitle: false
    })    
  ],
  entryComponents:[EditSkillsComponent]
})
export class SkillsModule { }
