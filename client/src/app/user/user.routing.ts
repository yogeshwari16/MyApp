import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

export const UserRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'profile',
        component: ProfileComponent
      },
    ]
  }
];
