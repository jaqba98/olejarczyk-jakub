import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { SectionDumbComponent } from './section-dumb.component';
import { ParagraphDumbComponent } from '../paragraph/paragraph-dumb.component';

const meta: Meta<SectionDumbComponent> = {
  title: 'Component/Dumb/Section',
  component: SectionDumbComponent,
  decorators: [
    moduleMetadata({
      imports: [ParagraphDumbComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<SectionDumbComponent>;

export const Default: Story = {
  render: (args) => ({
    props: args,
    template:
      '<section-dumb><paragraph-dumb>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas a mi nec ultricies. Cras eget lorem quis neque gravida interdum ac at orci. Donec sit amet pulvinar ipsum. Etiam in elementum nibh, fermentum lacinia est. Ut sed arcu leo. Morbi hendrerit elit at neque egestas, vitae posuere lectus auctor. Quisque vitae cursus nisl, eu vehicula lorem. Phasellus malesuada, urna sed bibendum pellentesque, ex tortor hendrerit tellus, nec tristique eros velit in dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas a mi nec ultricies. Cras eget lorem quis neque gravida interdum ac at orci. Donec sit amet pulvinar ipsum. Etiam in elementum nibh, fermentum lacinia est. Ut sed arcu leo. Morbi hendrerit elit at neque egestas, vitae posuere lectus auctor. Quisque vitae cursus nisl, eu vehicula lorem. Phasellus malesuada, urna sed bibendum pellentesque, ex tortor hendrerit tellus, nec tristique eros velit in dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas a mi nec ultricies. Cras eget lorem quis neque gravida interdum ac at orci. Donec sit amet pulvinar ipsum. Etiam in elementum nibh, fermentum lacinia est. Ut sed arcu leo. Morbi hendrerit elit at neque egestas, vitae posuere lectus auctor. Quisque vitae cursus nisl, eu vehicula lorem. Phasellus malesuada, urna sed bibendum pellentesque, ex tortor hendrerit tellus, nec tristique eros velit in dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas a mi nec ultricies. Cras eget lorem quis neque gravida interdum ac at orci. Donec sit amet pulvinar ipsum. Etiam in elementum nibh, fermentum lacinia est. Ut sed arcu leo. Morbi hendrerit elit at neque egestas, vitae posuere lectus auctor. Quisque vitae cursus nisl, eu vehicula lorem. Phasellus malesuada, urna sed bibendum pellentesque, ex tortor hendrerit tellus, nec tristique eros velit in dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas a mi nec ultricies. Cras eget lorem quis neque gravida interdum ac at orci. Donec sit amet pulvinar ipsum. Etiam in elementum nibh, fermentum lacinia est. Ut sed arcu leo. Morbi hendrerit elit at neque egestas, vitae posuere lectus auctor. Quisque vitae cursus nisl, eu vehicula lorem. Phasellus malesuada, urna sed bibendum pellentesque, ex tortor hendrerit tellus, nec tristique eros velit in dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas a mi nec ultricies. Cras eget lorem quis neque gravida interdum ac at orci. Donec sit amet pulvinar ipsum. Etiam in elementum nibh, fermentum lacinia est. Ut sed arcu leo. Morbi hendrerit elit at neque egestas, vitae posuere lectus auctor. Quisque vitae cursus nisl, eu vehicula lorem. Phasellus malesuada, urna sed bibendum pellentesque, ex tortor hendrerit tellus, nec tristique eros velit in dolor.</paragraph-dumb></section-dumb>',
  }),
};
