import { Injectable } from '@angular/core';

import { TechnologyRawModel } from '../../../model/raw/technology-raw.model';
import { SvgConst } from '../../../const/svg.const';

@Injectable({ providedIn: 'root' })
export class TechnologyRawBuilder {
  build(): TechnologyRawModel {
    return {
      html: {
        label: 'HTML',
        level: 'beginner',
        svg: SvgConst.html,
      },
      css: {
        label: 'CSS',
        level: 'beginner',
        svg: SvgConst.css,
      },
      sass: {
        label: 'Sass',
        level: 'beginner',
        svg: SvgConst.sass,
      },
      javascript: {
        label: 'JavaScript',
        level: 'beginner',
        svg: SvgConst.javascript,
      },
      typescript: {
        label: 'TypeScript',
        level: 'beginner',
        svg: SvgConst.typescript,
      },
      python: {
        label: 'Python',
        level: 'beginner',
        svg: SvgConst.python,
      },
      angular: {
        label: 'Angular',
        level: 'beginner',
        svg: SvgConst.angular,
      },
      rxjs: {
        label: 'RxJS',
        level: 'beginner',
        svg: SvgConst.rxjs,
      },
      storybook: {
        label: 'Storybook',
        level: 'beginner',
        svg: SvgConst.storybook,
      },
      primeng: {
        label: 'PrimeNG',
        level: 'beginner',
        svg: SvgConst.primeng,
      },
      numpy: {
        label: 'NumPy',
        level: 'beginner',
        svg: SvgConst.numpy,
      },
      jest: {
        label: 'Jest',
        level: 'beginner',
        svg: SvgConst.jest,
      },
      eslint: {
        label: 'Eslint',
        level: 'beginner',
        svg: SvgConst.eslint,
      },
      prettier: {
        label: 'Prettier',
        level: 'beginner',
        svg: SvgConst.prettier,
      },
      stylelint: {
        label: 'Stylelint',
        level: 'beginner',
        svg: SvgConst.stylelint,
      },
      postgresql: {
        label: 'PostgreSQL',
        level: 'beginner',
        svg: SvgConst.postgresql,
      },
      microsoftSqlServer: {
        label: 'Microsoft SQL Server',
        level: 'beginner',
        svg: SvgConst.microsoftSqlServer,
      },
      nginx: {
        label: 'NGINX',
        level: 'beginner',
        svg: SvgConst.nginx,
      },
      nodejs: {
        label: 'Node.js',
        level: 'beginner',
        svg: SvgConst.nodejs,
      },
      docker: {
        label: 'Docker',
        level: 'beginner',
        svg: SvgConst.docker,
      },
      snaplogic: {
        label: 'SnapLogic',
        level: 'beginner',
        svg: SvgConst.snaplogic,
      },
      n8n: {
        label: 'n8n',
        level: 'beginner',
        svg: SvgConst.n8n,
      },
      postman: {
        label: 'Postman',
        level: 'beginner',
        svg: SvgConst.postman,
      },
      git: {
        label: 'Git',
        level: 'beginner',
        svg: SvgConst.git,
      },
      github: {
        label: 'GitHub',
        level: 'beginner',
        svg: SvgConst.github,
      },
      gitlab: {
        label: 'GitLab',
        level: 'beginner',
        svg: SvgConst.gitlab,
      },
      npm: {
        label: 'npm',
        level: 'beginner',
        svg: SvgConst.npm,
      },
      pnpm: {
        label: 'pnpm',
        level: 'beginner',
        svg: SvgConst.pnpm,
      },
      nx: {
        label: 'Nx',
        level: 'beginner',
        svg: SvgConst.nx,
      },
      webstorm: {
        label: 'WebStorm',
        level: 'beginner',
        svg: SvgConst.webstorm,
      },
      eclipse: {
        label: 'Eclipse',
        level: 'beginner',
        svg: SvgConst.eclipse,
      },
      visualStudioCode: {
        label: 'Visual Studio Code',
        level: 'beginner',
        svg: SvgConst.visualStudioCode,
      },
      visualParadigm: {
        label: 'Visual Paradigm',
        level: 'beginner',
        svg: SvgConst.visualParadigm,
      },
      jira: {
        label: 'Jira',
        level: 'beginner',
        svg: SvgConst.jira,
      },
      windows: {
        label: 'Windows',
        level: 'beginner',
        svg: SvgConst.windows,
      },
      linux: {
        label: 'Linux',
        level: 'beginner',
        svg: SvgConst.linux,
      },
    };
  }
}
