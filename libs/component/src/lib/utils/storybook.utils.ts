import { applicationConfig, moduleMetadata } from '@storybook/angular';

import { storeConfig } from '@olejarczyk-jakub/store';
import { MediaSmartComponent } from '../smart/media-smart/media-smart.component';

export class StorybookUtils {
  static decorators() {
    return {
      decorators: [
        moduleMetadata({
          imports: [MediaSmartComponent],
        }),
        applicationConfig({ ...storeConfig }),
      ],
    };
  }
}
