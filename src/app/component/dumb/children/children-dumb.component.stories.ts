import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';

import { ChildrenDumbComponent } from './children-dumb.component';
import { ParagraphDumbComponent } from '../paragraph/paragraph-dumb.component';
import { SectionDumbComponent } from '../section/section-dumb.component';
import { SizeType } from '../../../type/size.type';

const meta: Meta<ChildrenDumbComponent> = {
  title: 'Component/Dumb/Children',
  component: ChildrenDumbComponent,
  decorators: [
    moduleMetadata({
      imports: [ParagraphDumbComponent, SectionDumbComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<ChildrenDumbComponent>;

const buildTemplate = (size: SizeType) =>
  `<section-dumb><children-dumb gap="${size}"><paragraph-dumb>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas a mi nec ultricies. Cras eget lorem quis neque gravida interdum ac at orci. Donec sit amet pulvinar ipsum. Etiam in elementum nibh, fermentum lacinia est. Ut sed arcu leo. Morbi hendrerit elit at neque egestas, vitae posuere lectus auctor. Quisque vitae cursus nisl, eu vehicula lorem. Phasellus malesuada, urna sed bibendum pellentesque, ex tortor hendrerit tellus, nec tristique eros velit in dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas a mi nec ultricies. Cras eget lorem quis neque gravida interdum ac at orci. Donec sit amet pulvinar ipsum. Etiam in elementum nibh, fermentum lacinia est. Ut sed arcu leo. Morbi hendrerit elit at neque egestas, vitae posuere lectus auctor. Quisque vitae cursus nisl, eu vehicula lorem. Phasellus malesuada, urna sed bibendum pellentesque, ex tortor hendrerit tellus, nec tristique eros velit in dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas a mi nec ultricies. Cras eget lorem quis neque gravida interdum ac at orci. Donec sit amet pulvinar ipsum.</paragraph-dumb><paragraph-dumb>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas a mi nec ultricies. Cras eget lorem quis neque gravida interdum ac at orci. Donec sit amet pulvinar ipsum. Etiam in elementum nibh, fermentum lacinia est. Ut sed arcu leo. Morbi hendrerit elit at neque egestas, vitae posuere lectus auctor. Quisque vitae cursus nisl, eu vehicula lorem. Phasellus malesuada, urna sed bibendum pellentesque, ex tortor hendrerit tellus, nec tristique eros velit in dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas a mi nec ultricies. Cras eget lorem quis neque gravida interdum ac at orci. Donec sit amet pulvinar ipsum. Etiam in elementum nibh, fermentum lacinia est. Ut sed arcu leo. Morbi hendrerit elit at neque egestas, vitae posuere lectus auctor. Quisque vitae cursus nisl, eu vehicula lorem. Phasellus malesuada, urna sed bibendum pellentesque, ex tortor hendrerit tellus, nec tristique eros velit in dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas a mi nec ultricies. Cras eget lorem quis neque gravida interdum ac at orci. Donec sit amet pulvinar ipsum.</paragraph-dumb><paragraph-dumb>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas a mi nec ultricies. Cras eget lorem quis neque gravida interdum ac at orci. Donec sit amet pulvinar ipsum. Etiam in elementum nibh, fermentum lacinia est. Ut sed arcu leo. Morbi hendrerit elit at neque egestas, vitae posuere lectus auctor. Quisque vitae cursus nisl, eu vehicula lorem. Phasellus malesuada, urna sed bibendum pellentesque, ex tortor hendrerit tellus, nec tristique eros velit in dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas a mi nec ultricies. Cras eget lorem quis neque gravida interdum ac at orci. Donec sit amet pulvinar ipsum. Etiam in elementum nibh, fermentum lacinia est. Ut sed arcu leo. Morbi hendrerit elit at neque egestas, vitae posuere lectus auctor. Quisque vitae cursus nisl, eu vehicula lorem. Phasellus malesuada, urna sed bibendum pellentesque, ex tortor hendrerit tellus, nec tristique eros velit in dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas a mi nec ultricies. Cras eget lorem quis neque gravida interdum ac at orci. Donec sit amet pulvinar ipsum.</paragraph-dumb><paragraph-dumb>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas a mi nec ultricies. Cras eget lorem quis neque gravida interdum ac at orci. Donec sit amet pulvinar ipsum. Etiam in elementum nibh, fermentum lacinia est. Ut sed arcu leo. Morbi hendrerit elit at neque egestas, vitae posuere lectus auctor. Quisque vitae cursus nisl, eu vehicula lorem. Phasellus malesuada, urna sed bibendum pellentesque, ex tortor hendrerit tellus, nec tristique eros velit in dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas a mi nec ultricies. Cras eget lorem quis neque gravida interdum ac at orci. Donec sit amet pulvinar ipsum. Etiam in elementum nibh, fermentum lacinia est. Ut sed arcu leo. Morbi hendrerit elit at neque egestas, vitae posuere lectus auctor. Quisque vitae cursus nisl, eu vehicula lorem. Phasellus malesuada, urna sed bibendum pellentesque, ex tortor hendrerit tellus, nec tristique eros velit in dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas a mi nec ultricies. Cras eget lorem quis neque gravida interdum ac at orci. Donec sit amet pulvinar ipsum.</paragraph-dumb><paragraph-dumb>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas a mi nec ultricies. Cras eget lorem quis neque gravida interdum ac at orci. Donec sit amet pulvinar ipsum. Etiam in elementum nibh, fermentum lacinia est. Ut sed arcu leo. Morbi hendrerit elit at neque egestas, vitae posuere lectus auctor. Quisque vitae cursus nisl, eu vehicula lorem. Phasellus malesuada, urna sed bibendum pellentesque, ex tortor hendrerit tellus, nec tristique eros velit in dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas a mi nec ultricies. Cras eget lorem quis neque gravida interdum ac at orci. Donec sit amet pulvinar ipsum. Etiam in elementum nibh, fermentum lacinia est. Ut sed arcu leo. Morbi hendrerit elit at neque egestas, vitae posuere lectus auctor. Quisque vitae cursus nisl, eu vehicula lorem. Phasellus malesuada, urna sed bibendum pellentesque, ex tortor hendrerit tellus, nec tristique eros velit in dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas a mi nec ultricies. Cras eget lorem quis neque gravida interdum ac at orci. Donec sit amet pulvinar ipsum.</paragraph-dumb><paragraph-dumb>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas a mi nec ultricies. Cras eget lorem quis neque gravida interdum ac at orci. Donec sit amet pulvinar ipsum. Etiam in elementum nibh, fermentum lacinia est. Ut sed arcu leo. Morbi hendrerit elit at neque egestas, vitae posuere lectus auctor. Quisque vitae cursus nisl, eu vehicula lorem. Phasellus malesuada, urna sed bibendum pellentesque, ex tortor hendrerit tellus, nec tristique eros velit in dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas a mi nec ultricies. Cras eget lorem quis neque gravida interdum ac at orci. Donec sit amet pulvinar ipsum. Etiam in elementum nibh, fermentum lacinia est. Ut sed arcu leo. Morbi hendrerit elit at neque egestas, vitae posuere lectus auctor. Quisque vitae cursus nisl, eu vehicula lorem. Phasellus malesuada, urna sed bibendum pellentesque, ex tortor hendrerit tellus, nec tristique eros velit in dolor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas a mi nec ultricies. Cras eget lorem quis neque gravida interdum ac at orci. Donec sit amet pulvinar ipsum.</paragraph-dumb></children-dumb></section-dumb>`;

export const GapNone: Story = {
  render: (args) => ({
    props: args,
    template: buildTemplate(args.gap),
  }),
  args: {
    gap: 'none',
  },
};

export const GapSmall: Story = {
  render: (args) => ({
    props: args,
    template: buildTemplate(args.gap),
  }),
  args: {
    gap: 'small',
  },
};

export const GapMedium: Story = {
  render: (args) => ({
    props: args,
    template: buildTemplate(args.gap),
  }),
  args: {
    gap: 'medium',
  },
};

export const GapBig: Story = {
  render: (args) => ({
    props: args,
    template: buildTemplate(args.gap),
  }),
  args: {
    gap: 'big',
  },
};
