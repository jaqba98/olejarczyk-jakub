import { applicationConfig, moduleMetadata } from '@storybook/angular';

import { SystemSmartComponent } from '../smart/system-smart/system-smart.component';
import { systemModule } from '@olejarczyk-jakub/system';
import { storeConfig } from '@olejarczyk-jakub/store';

export class StorybookUtils {
  static decorators() {
    return {
      decorators: [
        moduleMetadata({
          imports: [SystemSmartComponent],
        }),
        applicationConfig({
          providers: [...systemModule.providers, ...storeConfig.providers],
        }),
      ],
    };
  }
}
