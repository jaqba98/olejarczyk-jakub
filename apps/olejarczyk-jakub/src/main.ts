import { bootstrapApplication } from '@angular/platform-browser';

import { MainComponent, mainConfig } from '@olejarczyk-jakub/main';

bootstrapApplication(MainComponent, mainConfig).catch((err) =>
  console.error(err)
);
