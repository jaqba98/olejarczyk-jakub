import type { Meta, StoryObj } from '@storybook/angular';

import { ExperienceViewComponent } from './experience-view.component';

const meta: Meta<ExperienceViewComponent> = {
  title: 'Component/View/Experience',
  component: ExperienceViewComponent,
};

export default meta;
type Story = StoryObj<ExperienceViewComponent>;

export const Primary: Story = {};

// const meta: Meta<ExperienceViewComponent> = {
//   component: ExperienceViewComponent,
//   parameters: {
//     layout: 'fullscreen',
//   },
//   decorators: [
//     applicationConfig({
//       providers: [
//         provideStore(
//           [
//             CompanyState,
//             ExperienceState,
//             TechnologyState,
//             TechnologyGroupState,
//             TechnologyCategoryState,
//           ],
//           withNgxsReduxDevtoolsPlugin(),
//         ),
//       ],
//     }),
//   ],
// };

// export default meta;
// type Story = StoryObj<ExperienceViewComponent>;

// export const Primary: Story = {};
