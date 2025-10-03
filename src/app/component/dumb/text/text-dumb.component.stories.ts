import type { Meta, StoryObj } from '@storybook/angular';

import { TextDumbComponent } from './text-dumb.component';

const meta: Meta<TextDumbComponent> = {
  title: 'Component/Dumb/Text',
  component: TextDumbComponent,
};

export default meta;
type Story = StoryObj<TextDumbComponent>;

export const P: Story = {
  args: {
    type: 'p',
    value: 'p works',
  },
};

export const H1: Story = {
  args: {
    type: 'h1',
    value: 'h1 works',
  },
};

export const H2: Story = {
  args: {
    type: 'h2',
    value: 'h2 works',
  },
};

export const H3: Story = {
  args: {
    type: 'h3',
    value: 'h3 works',
  },
};

export const H4: Story = {
  args: {
    type: 'h4',
    value: 'h4 works',
  },
};

export const H5: Story = {
  args: {
    type: 'h5',
    value: 'h5 works',
  },
};

export const H6: Story = {
  args: {
    type: 'h6',
    value: 'h6 works',
  },
};

export const Small: Story = {
  args: {
    type: 'small',
    value: 'small works',
  },
};

export const LongText: Story = {
  args: {
    type: 'p',
    value:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo eget odio non aliquet. Integer sit amet nunc leo. Proin odio tortor, cursus id ultricies eget, sagittis non nunc. Suspendisse auctor, lorem in efficitur consequat, elit risus facilisis ex, vitae pellentesque eros risus id erat. In vulputate orci odio. Nam nec fermentum mi, in commodo est. Morbi quis venenatis tortor. Curabitur sed turpis ante.  Pellentesque eget mauris a est ullamcorper lobortis. Donec eget purus eu tellus egestas facilisis sit amet sit amet nisi. Nulla facilisi. Nunc nunc ex, ornare commodo dignissim sit amet, varius vel sem. Ut metus nisl, iaculis nec tincidunt ut, tempus nec tortor. Sed posuere mi orci, id mattis ligula luctus eget. Maecenas blandit sit amet tortor vitae congue. Proin rutrum condimentum turpis vel fringilla. Pellentesque ac ex in justo posuere facilisis. Donec interdum nisl ante, ac varius felis fermentum non. Praesent ullamcorper est odio, sit amet euismod ex laoreet eget. Aenean orci tortor, pulvinar vel volutpat ac, posuere ac dui. Pellentesque at est hendrerit sapien dignissim venenatis. Phasellus ullamcorper leo est, euismod commodo purus dapibus a.  Aliquam bibendum nulla nibh, scelerisque faucibus felis maximus sed. Maecenas sem felis, facilisis sit amet mi in, cursus tristique lorem. Curabitur luctus erat ut mi cursus, quis finibus justo sodales. Cras lobortis cursus augue, vitae egestas neque venenatis ac. Nam a est congue, tincidunt nisi et, tempor nisl. Phasellus tempor vehicula rutrum. In placerat nibh eget nibh molestie, sit amet tristique augue varius. Curabitur vehicula orci iaculis leo cursus, at pellentesque nisi pellentesque. Nam id accumsan dui. Aenean justo justo, eleifend non odio nec, tincidunt vehicula felis. Duis a metus sed nibh aliquet tristique.  Etiam ante diam, ullamcorper eu scelerisque a, viverra vel quam. Donec vulputate tempor pharetra. Praesent elementum, odio vel tincidunt tempus, ipsum nunc maximus tellus, vitae facilisis odio felis id nunc. Praesent sed est nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sagittis tellus suscipit tortor luctus lobortis. Suspendisse consequat tortor mauris, sit amet sollicitudin diam consequat eu. Donec malesuada lacus eget magna tempor viverra. Nullam id gravida metus.',
  },
};
