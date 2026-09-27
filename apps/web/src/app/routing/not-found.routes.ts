import { ErrorComponent } from '@sl/web/common-ui';
import { BaseRoutes } from '@sl/web/data-access/shared';

export const notFoundRoutes: BaseRoutes = [
  {
    path: '**',
    component: ErrorComponent,
    data: {
      seo: {
        title: 'Страница не найдена',
        description: 'Запрошенная страница не найдена.',
        index: false,
      },
    },
  },
];
