import { Routes } from '@angular/router';
import { SkillDashboardComponent } from './skill-dashboard/skill-dashboard.component';
import { AddSkillsComponent } from './add-skills/add-skills.component';
import { SkillsComponent } from './skills.component';
export const SkillsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SkillsComponent

      },
      {
        path: 'dashboard',
        component: SkillDashboardComponent

      },
      {
        path: 'add-skills',
        component: AddSkillsComponent
      }
    ]
  }
];
