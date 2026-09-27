import {
  ApplicationConfig,
  provideAppInitializer,
  provideZoneChangeDetection,
} from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
} from '@angular/router';
import { routes } from './app.routes';
import {
  HttpInterceptorFn,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { authInitializer, authInterceptor } from '@sl/web/auth';
import { provideApiConfig } from '../provide-utils/provide-api-config';
import { globalHttpErrorInterceptor } from '@sl/web/shared';
import { SEO_CONFIG, SeoService } from '@sl/web/shared';
import { TitleStrategy } from '@angular/router';
import { environment } from '../environments/environment';

export const appHttpInterceptors: HttpInterceptorFn[] = [
  globalHttpErrorInterceptor,
  authInterceptor,
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withComponentInputBinding(),
      withInMemoryScrolling({
        scrollPositionRestoration: 'disabled',
        anchorScrolling: 'disabled',
      }),
    ),
    provideHttpClient(withInterceptors(appHttpInterceptors)),
    provideAppInitializer(authInitializer),
    provideApiConfig(),
    {
      provide: SEO_CONFIG,
      useValue: {
        siteName: 'Sport Link',
        siteUrl: environment.siteUrl,
        defaultImage: '/assets/imgs/new-logo.png',
        locale: 'ru_RU',
      },
    },
    SeoService,
    { provide: TitleStrategy, useExisting: SeoService },
  ],
};
