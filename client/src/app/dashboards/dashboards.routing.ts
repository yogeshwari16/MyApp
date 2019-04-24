import { Routes } from '@angular/router';

import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2.component';
import { SkillDashboardComponent } from './skill-dashboard/skill-dashboard.component';
import { AddSkillsComponent } from './add-skills/add-skills.component';
import { ProfileComponent } from './profile/profile.component';

export const DashboardsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard1',
        component: Dashboard1Component
      },
      {
        path: 'dashboard2',
        component: Dashboard2Component
      },{
        path: 'skill-dashboard',
        component: SkillDashboardComponent
      }
      ,{
        path: 'add-skill',
        component: AddSkillsComponent
      },{
        path: 'profile',
        component: ProfileComponent
      }
    ]
  }
];
