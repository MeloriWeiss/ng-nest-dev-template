import { HomePageComponent } from '../home-page/home-page.component';
import { BaseRoute } from '@sl/web/data-access/shared';

export const homeRoutes: BaseRoute[] = [
  {
    path: '',
    component: HomePageComponent,
    data: {
      seo: {
        title: 'SportLink — платформа для сделок спортсменов и рекламодателей',
        description:
          'SportLink помогает спортсменам и рекламодателям описать рекламные возможности, подобрать партнера, согласовать условия, провести оплату и подтвердить результат.',
        index: true,
        canonicalPath: '/home',
      },
    },
  },
];
