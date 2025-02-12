import { bootstrapApplication } from '@angular/platform-browser';

import { RootComponent } from '@olejarczyk-jakub/page';
import { appConfig } from './app/app.config';

bootstrapApplication(RootComponent, appConfig).catch((err) =>
  console.error(err)
);
