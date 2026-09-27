import {
  canActivateNonAuth,
  LoginPageComponent,
  RegisterPageComponent,
} from '@sl/web/auth';
import { AuthLayoutComponent } from '@sl/web/layout/auth';
import { BaseRoutes } from '@sl/web/data-access/shared';

export const authRoutes: BaseRoutes = [
  {
    path: '',
    component: AuthLayoutComponent,
    canActivate: [canActivateNonAuth],
    children: [
      {
        path: 'login',
        component: LoginPageComponent,
        data: {
          seo: {
            title: 'Вход',
            description: 'Вход в аккаунт Sport Link.',
            index: false,
          },
        },
      },
      {
        path: 'register',
        component: RegisterPageComponent,
        data: {
          seo: {
            title: 'Регистрация',
            description: 'Создание аккаунта Sport Link.',
            index: false,
          },
        },
      },
    ],
  },
];
