import { Routes } from '@angular/router';
import { canActivateAuth } from '@sl/web/auth';
import { BaseLayoutComponent } from '@sl/web/layout/base';

export const publicRoutes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    data: {
      seo: {
        title: 'Карты и инструменты для настольных ролевых игр',
        description:
          'Создавайте карты для НРИ, публикуйте их и используйте готовые наборы текстур в GameMaster Helper.',
        index: true,
      },
    },
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () =>
          import('@sl/web/home').then((module) => module.HomeRoutes),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('@sl/web/home').then((module) => module.AboutPageComponent),
        data: {
          seo: {
            title: 'О проекте',
            description:
              'История, миссия и команда Sport Link.',
            index: true,
            canonicalPath: '/about',
          },
        },
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('@sl/web/profile').then(
            (module) => module.AccountSettingsComponent,
          ),
        canActivate: [canActivateAuth],
        data: {
          seo: {
            title: 'Настройки аккаунта',
            description:
              'Смена пароля и управление сессиями GameMaster Helper.',
            index: false,
            canonicalPath: '/settings',
          },
        },
      },
      {
        path: 'profile/:id',
        loadChildren: () =>
          import('@sl/web/profile').then((module) => module.profileRoutes),
        canActivate: [canActivateAuth],
        data: {
          seo: {
            title: 'Профиль пользователя',
            description: 'Профиль пользователя GameMaster Helper.',
            index: false,
          },
        },
      },
    ],
  },
];
