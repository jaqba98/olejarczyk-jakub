import { Injectable } from '@angular/core';

import { TechnologyRawModel } from '../../../model/raw/technology-raw.model';

@Injectable({ providedIn: 'root' })
export class TechnologyRawBuilder {
  build(): TechnologyRawModel {
    return {
      html: {
        label: 'HTML',
        level: 'beginner',
      },
      css: {
        label: 'CSS',
        level: 'beginner',
      },
      sass: {
        label: 'Sass',
        level: 'beginner',
      },
      javascript: {
        label: 'JavaScript',
        level: 'beginner',
      },
      typescript: {
        label: 'TypeScript',
        level: 'beginner',
      },
      python: {
        label: 'Python',
        level: 'beginner',
      },
      angular: {
        label: 'Angular',
        level: 'beginner',
      },
      rxjs: {
        label: 'RxJS',
        level: 'beginner',
      },
      storybook: {
        label: 'Storybook',
        level: 'beginner',
      },
      primeng: {
        label: 'PrimeNG',
        level: 'beginner',
      },
      numpy: {
        label: 'NumPy',
        level: 'beginner',
      },
      jest: {
        label: 'Jest',
        level: 'beginner',
      },
      eslint: {
        label: 'Eslint',
        level: 'beginner',
      },
      prettier: {
        label: 'Prettier',
        level: 'beginner',
      },
      stylelint: {
        label: 'Stylelint',
        level: 'beginner',
      },
      postgresql: {
        label: 'PostgreSQL',
        level: 'beginner',
      },
      microsoftSqlServer: {
        label: 'Microsoft SQL Server',
        level: 'beginner',
      },
      nginx: {
        label: 'NGINX',
        level: 'beginner',
      },
      nodejs: {
        label: 'Node.js',
        level: 'beginner',
      },
      docker: {
        label: 'Docker',
        level: 'beginner',
      },
      snaplogic: {
        label: 'SnapLogic',
        level: 'beginner',
      },
      n8n: {
        label: 'n8n',
        level: 'beginner',
      },
      postman: {
        label: 'Postman',
        level: 'beginner',
      },
      git: {
        label: 'Git',
        level: 'beginner',
      },
      github: {
        label: 'GitHub',
        level: 'beginner',
      },
      gitlab: {
        label: 'GitLab',
        level: 'beginner',
      },
      npm: {
        label: 'npm',
        level: 'beginner',
      },
      pnpm: {
        label: 'pnpm',
        level: 'beginner',
      },
      nx: {
        label: 'Nx',
        level: 'beginner',
      },
      webstorm: {
        label: 'WebStorm',
        level: 'beginner',
      },
      eclipse: {
        label: 'Eclipse',
        level: 'beginner',
      },
      visualStudioCode: {
        label: 'Visual Studio Code',
        level: 'beginner',
      },
      visualParadigm: {
        label: 'Visual Paradigm',
        level: 'beginner',
      },
      jira: {
        label: 'Jira',
        level: 'beginner',
      },
      windows: {
        label: 'Windows',
        level: 'beginner',
      },
      linux: {
        label: 'Linux',
        level: 'beginner',
      },
    };
  }
}
