import { bootstrapApplication } from '@angular/platform-browser';

import { appConfig } from './app/app.config';
import { GeneratorComponent } from './app/generator/generator.component';

bootstrapApplication(GeneratorComponent, appConfig).catch((err) => console.error(err));
