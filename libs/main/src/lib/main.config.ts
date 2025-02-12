import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

import { routeConfig } from '@olejarczyk-jakub/route';
import { storeConfig } from '@olejarczyk-jakub/store';

export const mainConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    ...routeConfig.providers,
    ...storeConfig.providers,
  ],
};
