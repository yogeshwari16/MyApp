import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DemoMaterialModule } from '../demo-material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardsRoutes } from './dashboards.routing';
import { ChartistModule } from 'ng-chartist';
import { ChartsModule } from 'ng2-charts';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { SkillDashboardComponent } from './skill-dashboard/skill-dashboard.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { AddSkillsComponent } from './add-skills/add-skills.component';
import { ProfileComponent } from './profile/profile.component';
@NgModule({
  imports: [
    CommonModule,
    DemoMaterialModule,
    FlexLayoutModule,
    ChartistModule,
    ChartsModule,
    RouterModule.forChild(DashboardsRoutes),
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
  declarations: [Dashboard1Component, Dashboard2Component, SkillDashboardComponent, ProjectDetailsComponent, AddSkillsComponent, ProfileComponent]
})
export class DashboardsModule { }
