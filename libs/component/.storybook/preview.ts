import { StoryFn, StoryContext } from '@storybook/angular';

export const decorators = [
  (story: StoryFn, context: StoryContext) => {
    const storyOutput = story(context.args, context);
    return {
      ...storyOutput,
      template: `<lib-media-smart></lib-media-smart> ${storyOutput.template}`,
    };
  },
];
