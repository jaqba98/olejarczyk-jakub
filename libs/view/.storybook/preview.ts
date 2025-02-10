import { StoryFn, StoryContext } from '@storybook/angular';

export const decorators = [
  (story: StoryFn, context: StoryContext) => {
    const storyOutput = story(context.args, context);
    return {
      ...storyOutput,
      template: `<lib-system-smart></lib-system-smart> ${storyOutput.template}`,
    };
  },
];
