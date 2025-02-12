import { ApplicationConfig } from '@angular/core';

export const mainConfig: ApplicationConfig = {
  providers: [],
};

// import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// import { provideRouter, withHashLocation } from '@angular/router';
// import { provideHttpClient } from '@angular/common/http';
// import { storeConfig } from '@olejarczyk-jakub/store';
// import { mainRoutes } from './main.routes';
// export const mainConfig: ApplicationConfig = {
//   providers: [
//     provideZoneChangeDetection({ eventCoalescing: true }),
//     provideRouter(mainRoutes, withHashLocation()),
//     provideHttpClient(),
//     ...storeConfig.providers,
//   ],
// };
