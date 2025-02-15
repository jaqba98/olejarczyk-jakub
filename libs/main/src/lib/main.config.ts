import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';

import { routeConfig } from '@olejarczyk-jakub/route';
import { storeConfig } from '@olejarczyk-jakub/store';
import { systemModule } from '@olejarczyk-jakub/system';

export const mainConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    ...systemModule.providers,
    ...routeConfig.providers,
    ...storeConfig.providers,
  ],
};
