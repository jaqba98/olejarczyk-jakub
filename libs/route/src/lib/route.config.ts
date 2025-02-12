import { ApplicationConfig } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './routes';

export const routeConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withHashLocation())],
};
