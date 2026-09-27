import { authRoutes } from './routing/auth.routes';
import { baseRoutes } from './routing/base.routes';
import { notFoundRoutes } from './routing/not-found.routes';
import { BaseRoutes } from '@sl/web/data-access/shared';

export const routes: BaseRoutes = [
  ...baseRoutes,
  ...authRoutes,
  ...notFoundRoutes,
];
