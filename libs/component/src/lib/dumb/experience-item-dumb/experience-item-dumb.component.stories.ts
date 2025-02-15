import { Meta, StoryObj } from '@storybook/angular';

import { ExperienceItemDumbComponent } from './experience-item-dumb.component';
import { StorybookUtils } from '../../utils/storybook.utils';

const meta: Meta<ExperienceItemDumbComponent> = {
  title: 'Component/Dumb/ExperienceItem',
  component: ExperienceItemDumbComponent,
  ...StorybookUtils.decorators(),
};

export default meta;
type Story = StoryObj<ExperienceItemDumbComponent>;

export const Default: Story = {
  args: {
    year: '2020 - 2025',
    company: 'APR System',
    profession: 'Full Stack Developer',
    tasks: [
      'Creating and styling user interfaces in Angular',
      'Building dynamically generated reusable components in the Storybook environment',
      'Managing application state using NGXS with the Redux DevTools plugin',
      'Creating internal NPM packages to automate work in a monorepo environment, improving collaboration with GIT and integrating automated tests',
      'Implementing client-server communication using REST API',
      'Executing queries to relational databases using SQL',
      'Managing multiple projects in a monorepo environment',
    ],
  },
};
