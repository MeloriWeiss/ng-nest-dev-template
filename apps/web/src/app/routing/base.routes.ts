import { canActivateAuth } from '@sl/web/auth';
import { BaseLayoutComponent } from '@sl/web/layout/base';
import { BaseRoutes } from '@sl/web/data-access/shared';

export const baseRoutes: BaseRoutes = [
  {
    path: '',
    component: BaseLayoutComponent,
    data: {
      seo: {
        title: 'SportLink — платформа для сделок спортсменов и рекламодателей',
        description:
          'SportLink помогает спортсменам и рекламодателям описать рекламные возможности, подобрать партнера, согласовать условия, провести оплату и подтвердить результат.',
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
          import('@sl/web/home').then((module) => module.homeRoutes),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('@sl/web/home').then((module) => module.AboutPageComponent),
        data: {
          seo: {
            title: 'О платформе',
            description:
              'Как SportLink связывает спортсменов и рекламодателей: управляемые сделки, права, сроки и доказательства исполнения.',
            index: true,
            canonicalPath: '/about',
          },
        },
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('@sl/web/profile').then((module) => module.profileRoutes),
        canActivate: [canActivateAuth],
        data: {
          seo: {
            title: 'Профиль',
            description: 'Публичный профиль участника Sport Link.',
            index: false,
          },
        },
      },
    ],
  },
];
