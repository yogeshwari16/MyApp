import { Routes } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { AppBlankComponent } from './layouts/blank/blank.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
      },      
      {
        path: 'skills',
        loadChildren: './skills/skills.module#SkillsModule'
      },
      {
        path: 'projects',
        loadChildren: './projects/projects.module#ProjectsModule'
      },
      {
        path: 'profile',
        loadChildren: './profile/profile.module#ProfileModule'
      }
    ]
  },
  // {
  //   path: '',
  //   component: AppBlankComponent,
  //   children: [
  //     {
  //       path: 'authentication',
  //       loadChildren:
  //         './authentication/authentication.module#AuthenticationModule'
  //     }
  //   ]
  // },
  {
    path: '**',
    redirectTo: 'authentication/404'
  }
];
