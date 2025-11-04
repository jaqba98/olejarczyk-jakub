import type { Meta, StoryObj } from '@storybook/angular';

import { SvgImageComponent } from './svg-image.component';
import { SvgConst } from '../../../const/svg.const';

const meta: Meta<SvgImageComponent> = {
  title: 'component/image/svg',
  component: SvgImageComponent,
};

export default meta;
type Story = StoryObj<SvgImageComponent>;

export const html: Story = {
  args: {
    model: SvgConst.html,
    color: [],
    styles: {
      fill: 'red',
    },
  },
};

export const css: Story = {
  args: {
    ...html.args,
    model: SvgConst.css,
  },
};

export const sass: Story = {
  args: {
    ...html.args,
    model: SvgConst.sass,
  },
};

export const javascript: Story = {
  args: {
    ...html.args,
    model: SvgConst.javascript,
  },
};

export const typescript: Story = {
  args: {
    ...html.args,
    model: SvgConst.typescript,
  },
};

export const python: Story = {
  args: {
    ...html.args,
    model: SvgConst.python,
  },
};

export const angular: Story = {
  args: {
    ...html.args,
    model: SvgConst.angular,
  },
};

export const rxjs: Story = {
  args: {
    ...html.args,
    model: SvgConst.rxjs,
  },
};

export const storybook: Story = {
  args: {
    ...html.args,
    model: SvgConst.storybook,
  },
};

export const primeng: Story = {
  args: {
    ...html.args,
    model: SvgConst.primeng,
  },
};

export const numpy: Story = {
  args: {
    ...html.args,
    model: SvgConst.numpy,
  },
};

export const jest: Story = {
  args: {
    ...html.args,
    model: SvgConst.jest,
  },
};

export const postgresql: Story = {
  args: {
    ...html.args,
    model: SvgConst.postgresql,
  },
};

export const microsoftSqlServer: Story = {
  args: {
    ...html.args,
    model: SvgConst.microsoftSqlServer,
  },
};

export const nginx: Story = {
  args: {
    ...html.args,
    model: SvgConst.nginx,
  },
};

export const nodejs: Story = {
  args: {
    ...html.args,
    model: SvgConst.nodejs,
  },
};

export const docker: Story = {
  args: {
    ...html.args,
    model: SvgConst.docker,
  },
};

export const snaplogic: Story = {
  args: {
    ...html.args,
    model: SvgConst.snaplogic,
  },
};

export const n8n: Story = {
  args: {
    ...html.args,
    model: SvgConst.n8n,
  },
};

export const git: Story = {
  args: {
    ...html.args,
    model: SvgConst.git,
  },
};

export const github: Story = {
  args: {
    ...html.args,
    model: SvgConst.github,
  },
};

export const gitlab: Story = {
  args: {
    ...html.args,
    model: SvgConst.gitlab,
  },
};

export const npm: Story = {
  args: {
    ...html.args,
    model: SvgConst.npm,
  },
};

export const pnpm: Story = {
  args: {
    ...html.args,
    model: SvgConst.pnpm,
  },
};

export const eslint: Story = {
  args: {
    ...html.args,
    model: SvgConst.eslint,
  },
};

export const prettier: Story = {
  args: {
    ...html.args,
    model: SvgConst.prettier,
  },
};

export const stylelint: Story = {
  args: {
    ...html.args,
    model: SvgConst.stylelint,
  },
};

export const postman: Story = {
  args: {
    ...html.args,
    model: SvgConst.postman,
  },
};

export const nx: Story = {
  args: {
    ...html.args,
    model: SvgConst.nx,
  },
};

export const visualParadigm: Story = {
  args: {
    ...html.args,
    model: SvgConst.visualParadigm,
  },
};

export const webstorm: Story = {
  args: {
    ...html.args,
    model: SvgConst.webstorm,
  },
};

export const visualStudioCode: Story = {
  args: {
    ...html.args,
    model: SvgConst.visualStudioCode,
  },
};

export const eclipse: Story = {
  args: {
    ...html.args,
    model: SvgConst.eclipse,
  },
};

export const jira: Story = {
  args: {
    ...html.args,
    model: SvgConst.jira,
  },
};

export const window: Story = {
  args: {
    ...html.args,
    model: SvgConst.windows,
  },
};

export const linux: Story = {
  args: {
    ...html.args,
    model: SvgConst.linux,
  },
};
