import { Routes } from '@angular/router';
import {
  ProfilePageLayoutComponent,
  ProfilePageEditComponent,
} from '../feature-profile-page/index';
import { canActivateAuth } from '@sl/web/auth';
import { ComponentType } from '@angular/cdk/portal';

export const profileRoutes: Routes = [
  {
    path: '',
    component: ProfilePageLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'edit',
        pathMatch: 'full',
      },
      {
        path: 'edit',
        component: ProfilePageEditComponent,
      },
      {
        path: 'settings',
        component: {} as ComponentType<any>,
        canActivate: [canActivateAuth],
        data: {
          seo: {
            title: 'Настройки аккаунта',
            description:
              'Контакты, пароль, активные сессии и согласия в Sport Link.',
            index: false,
            canonicalPath: '/settings',
          },
        },
      },
    ],
  },
];
