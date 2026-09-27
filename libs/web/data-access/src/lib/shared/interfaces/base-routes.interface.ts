import { Route } from '@angular/router';

interface SeoData {
  title?: string;
  description?: string;
  index?: boolean;
  canonicalPath?: string;
}

interface RouteData extends Record<string, unknown> {
  seo?: SeoData;
}

export interface BaseRoute extends Omit<Route, 'data' | 'children'> {
  data?: RouteData;
  children?: BaseRoutes;
}

export type BaseRoutes = BaseRoute[];
