import { moduleMetadata, StoryFn, StoryContext } from '@storybook/angular';

import { MediaSmartComponent } from '../src/lib/smart/media-smart/media-smart.component';

export const decorators = [
  moduleMetadata({
    imports: [MediaSmartComponent],
  }),
  (story: StoryFn, context: StoryContext) => {
    const storyOutput = story(context.args, context);

    return {
      ...storyOutput,
      template: `<lib-media-smart></lib-media-smart> ${storyOutput.template}`,
    };
  },
];
