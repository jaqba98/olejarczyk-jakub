import { applicationConfig, moduleMetadata } from '@storybook/angular';

import { storeConfig } from '@olejarczyk-jakub/store';
import { SystemSmartComponent } from '../smart/system-smart/system-smart.component';

export class StorybookUtils {
  static decorators() {
    return {
      decorators: [
        moduleMetadata({
          imports: [SystemSmartComponent],
        }),
        applicationConfig({ ...storeConfig }),
      ],
    };
  }
}
